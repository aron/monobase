import * as React from "react";
import { Dynamic } from "monobase";
import Box from "./Box";

class Timer extends React.Component<{}, { time: number }> {
  state = { time: 0 };

  componentDidMount() {
    setInterval(this.update, 200);
  }

  update = () => {
    this.setState({ time: Date.now() });
  };

  render() {
    return <Box style={{ fontFamily: "monospace" }}>{this.state.time}</Box>;
  }
}

export default Dynamic(Timer);
