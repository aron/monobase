#!/usr/bin/env node

require("ts-node/register");

const tsConfig = require("../tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

import * as path from "path";
import * as os from "os";
import * as _ from "lodash";
import * as minimist from "minimist";
import * as openport from "first-open-port";
import * as address from "my-local-ip";
import * as reachable from "is-reachable";
import chalk from "chalk";
import * as browser from "./browser";
import * as commands from "./commands";
import * as config from "./config";
import * as cert from "./cert";

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
});

const exit = () => {
  process.exit();
};

const usage = () => {
  console.log(`Usage: serve [port] | build [path]`);
  exit();
};

const main = async () => {
  const argv = minimist(process.argv.slice(2));
  const command = _.first(argv._) || "serve";

  let build: "debug" | "production" =
    command === "build" ? "production" : "debug";
  if (argv.build === "production" || argv.build === "debug") {
    build = argv.build;
  }

  const project = config.project(
    path.resolve(argv.project || process.cwd()),
    build
  );

  commands.check(project);

  tsConfigPaths.register({
    baseUrl: project.path,
    paths: {}
  });

  if (command === "serve") {
    const p = argv.port || argv.p || 1234;
    const port = await openport(p, p + 100);
    const hosts = [
      os.hostname().toLowerCase(),
      address(),
      "localhost",
      "0.0.0.0",
      "127.0.0.1"
    ];

    // See if we can use a generated certificate
    let ssl = await cert.mkcert(hosts);

    if (ssl) {
      console.log(chalk.gray("Using mkcert signed certificate"));
    } else {
      ssl = cert.fallback();
      console.log(
        chalk.gray("For valid ssl: `brew install mkcert; mkcert -install`")
      );
    }

    const open = argv.browser || true;
    await commands.serve(project, ssl, port);

    const prettyHost = async (hosts: string[], port: number) => {
      for (let host of hosts) {
        if (!host) continue;
        const result = await reachable(`${host}:${port}`, { timeout: 200 });
        if (result) {
          return Promise.resolve(host);
        }
      }
    };

    const local = await prettyHost(hosts, port);

    const url = `https://${local}:${port}`;

    if (open) browser.open(url);

    console.log(chalk.bgWhite.black(" MONOBASE "), chalk.green(url));
  } else if (command === "build") {
    const buildPath = argv.path || argv.p || path.join(project.path, "build");
    commands.build(project, buildPath);
  } else {
    usage();
  }
};

main();
