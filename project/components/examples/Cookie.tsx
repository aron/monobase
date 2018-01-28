import * as React from "react";
import * as cookies from "js-cookie";
import { Dynamic } from "monobase";
import { boxStyle } from "./Box";

const CookieKey = "CookieComponentValue";

class Cookie extends React.Component<{}, { value: string }> {
  state = { value: "" };

  componentDidMount() {
    this.setState({ value: cookies.get(CookieKey) || "" });
  }

  onChange = event => {
    this.setState({ value: event.target.value });
    cookies.set(CookieKey, event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        placeholder="Type something…"
        onChange={this.onChange}
        style={{
          ...boxStyle,
          width: 300,
          textAlign: "center",
          outline: 0,
          border: "none"
        }}
      />
    );
  }
}

export default Dynamic(Cookie);
