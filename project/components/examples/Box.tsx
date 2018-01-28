import * as React from "react";
import { Scale, fontSize } from "components/theme";

export const boxStyle = {
  padding: `${Scale.s} ${Scale.m}`,
  fontSize: fontSize.s,
  lineHeight: 1,
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
  borderRadius: 8,
  userSelect: "none",
  display: "inline-block"
};

const Box: React.StatelessComponent<{
  style?: React.CSSProperties;
  strip?: boolean;
}> = ({ children, style, strip }): JSX.Element => (
  <span
    style={{ ...boxStyle, padding: strip ? 0 : boxStyle.padding, ...style }}
  >
    {children}
  </span>
);

export default Box;
