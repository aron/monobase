import * as React from "react";
import { Dynamic } from "monobase";
import { Size, Scale, fontSize } from "components/theme";
import Box, { boxStyle } from "./Box";

class Colors extends React.Component<{}, { color: string }> {
  state = { color: "" };

  updateInput = event => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <Box
        strip
        style={{
          overflow: "hidden"
        }}
      >
        <div
          style={{
            ...Size(300),
            transition: "background-color .2s",
            background: this.state.color ? this.state.color : "#EEE"
          }}
        />
        <input
          type="text"
          value={this.state.color}
          placeholder="e.g. orange"
          onChange={this.updateInput}
          style={{
            width: "100%",
            padding: `${Scale.s} 0`,
            fontSize: fontSize.s,
            textAlign: "center",
            background: "none",
            border: "none",
            outline: 0
          }}
        />
      </Box>
    );
  }
}

export default Dynamic(Colors);
