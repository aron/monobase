import * as React from "react";
import { Dynamic } from "monobase";
import Box from "./Box";

declare var document;

class Mouse extends React.Component {
  point = { x: 0, y: 0 };

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = event => {
    this.point = { x: event.clientX, y: event.clientY };
    this.forceUpdate();
  };

  render() {
    return (
      <Box style={{ fontFamily: "monospace" }}>
        {this.point.x}, {this.point.y}
      </Box>
    );
  }
}

export default Dynamic(Mouse);
