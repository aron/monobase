import * as React from "react";
import { Dynamic } from "monobase";
import { Color, Scale } from "components/theme";
import { boxStyle } from "./Box";

const style: React.CSSProperties = {
  border: "none",
  background: Color.blue,
  color: "#fff"
};

class Button extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  onClick = () =>
    this.setState(({ count }) => ({
      count: count + 1
    }));

  render() {
    return (
      <button style={{ ...boxStyle, ...style }}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default Dynamic(Button);
