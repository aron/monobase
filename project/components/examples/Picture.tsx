import * as React from "react";

interface Picture {
  src: string;
  alt?: string;
  extensions?: string[];
  hasRetina?: boolean;
  width?: number;
  height?: number;
}

export default ({
  src,
  width,
  height,
  alt,
  extensions,
  hasRetina = false
}: Picture) => {
  const name = src.split(".")[0];
  const base = `/static/images/`;
  const path = `${base}${name}`;
  const defaultExtension = src.split(".").pop();
  const attributes = { width, height, src, alt };

  const getSrcSet = (extension: string = defaultExtension) => {
    return hasRetina
      ? `${path}.${extension}, ${path}@2x.${extension} 2x`
      : `${path}.${extension}`;
  };

  return (
    <picture>
      {extensions
        ? extensions.map(extension => {
            const srcSet = getSrcSet(extension);
            return <source key={extension} srcSet={srcSet} />;
          })
        : null}
      <source srcSet={getSrcSet()} />
      <img {...attributes} />
    </picture>
  );
};
