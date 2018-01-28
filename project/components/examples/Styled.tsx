import * as React from "react";
import Box from "./Box";
import { Scale } from "components/theme";

// Declare an interface so autocomplete etc works
interface CSSCollection {
  [key: string]: React.CSSProperties;
}

const backgrounds: CSSCollection = {
  yellow: { backgroundColor: "papayawhip" },
  blue: { backgroundColor: "blue" }
};

// You can merge styles nicely with the spread operater
const Styled = props => (
  <Box
    style={{
      ...backgrounds.yellow,
      border: "none",
      padding: Scale.xl,
      color: "hotpink",
      fontWeight: 500
    }}
  >
    Hello
  </Box>
);

export default Styled;
