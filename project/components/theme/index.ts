// Colors
export interface Colors {
  /** Standard blue */
  blue: "#0AF";

  /** Dark blue */
  blueDeep: "#05F";

  /** Light blue */
  blueBaby: "#AEF";

  /** Warnings */
  red: "#F44";
}

export const Color: Colors = {
  blue: "#0AF",
  blueDeep: "#05F",
  blueBaby: "#AEF",
  red: "#F44"
};

export interface Size {
  /** 14px */
  xxs: React.CSSLength;
  /** 18px */
  xs: React.CSSLength;
  /** 28px */
  s: React.CSSLength;
  /** 32px */
  m: React.CSSLength;
  /** 48px */
  l: React.CSSLength;
  /** 72px */
  xl: React.CSSLength;
}

export const fontSize: Size = {
  xxs: "14px",
  xs: "18px",
  s: "28px",
  m: "32px",
  l: "48px",
  xl: "72px"
};

export interface Scale {
  /** 5px */
  xxs: React.CSSLength;
  /** 10px */
  xs: React.CSSLength;
  /** 20px */
  s: React.CSSLength;
  /** 40px */
  m: React.CSSLength;
  /** 80px */
  l: React.CSSLength;
  /** 120px */
  xl: React.CSSLength;
}

export const Scale: Scale = {
  xxs: "14px",
  xs: "18px",
  s: "20px",
  m: "40px",
  l: "80px",
  xl: "120px"
};

export const Size = (amount: React.CSSLength) => ({
  width: amount,
  height: amount
});
