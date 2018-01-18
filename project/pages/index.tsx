import * as React from "react";

import Template from "components/Template";

import Timer from "components/examples/Timer";
import Mouse from "components/examples/Mouse";
import Button from "components/examples/Button";
import Styled from "components/examples/Styled";
import Colors from "components/examples/Colors";
import Cookie from "components/examples/Cookie";
import Unsplash from "components/examples/Unsplash";

function Example(props) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: 100
      }}
    >
      <h3
        style={{
          fontSize: 30,
          fontWeight: 700,
          margin: 0,
          paddingBottom: 40,
          lineHeight: 1
        }}
      >
        {props.title}
      </h3>
      <div style={{ textAlign: "center" }}>{props.children}</div>
    </section>
  );
}

function render(project) {
  return (
    <Template project={project}>
      <span style={{ textAlign: "center" }}>
        <section style={{ padding: "60px" }}>
          <h1>Welcome to Monobase</h1>
          <p>A simple React based static site generator</p>
        </section>
        <Example title="Button">
          <Button />
        </Example>
        <Example title="Mouse Location">
          <Mouse />
        </Example>
        <Example title="Time">
          <Timer />
        </Example>
        <Example title="Enter a color name">
          <Colors />
        </Example>
        <Example title="Persistent Cookie">
          <Cookie />
        </Example>
        <Example title="CSS Styled">
          <Styled />
        </Example>
        <Example title="Random Image">
          <Unsplash width={400} height={300} />
        </Example>
      </span>
    </Template>
  );
}

export default render;
