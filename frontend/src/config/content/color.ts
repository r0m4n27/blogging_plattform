import type { Color } from "@/styling/color";
import { getColor } from "../theme/colors";

// Foregrounds
const defaultFg: Color = {
  light: getColor("gray", 800),
  dark: getColor("whiteAlpha", 900),
};
const hoveredFg: Color = {
  light: getColor("gray", 600),
  dark: getColor("whiteAlpha", 700),
};
const mutedFg: Color = {
  light: getColor("gray", 700),
  dark: getColor("gray", 300),
};
const hoveredMutedFg: Color = {
  light: getColor("gray", 600),
  dark: getColor("gray", 400),
};

// Backgrounds

const defaultBg: Color = {
  light: getColor("white"),
  dark: getColor("gray", 800),
};
const hoveredBg: Color = {
  light: getColor("gray", 100),
  dark: getColor("gray", 700),
};
const highlightedBg: Color = {
  light: getColor("gray", 50),
  dark: getColor("gray", 800),
};

// Border

const defaultBorder: Color = {
  light: getColor("gray", 200),
  dark: getColor("whiteAlpha", 300),
};
//
// Button
//

const buttonFg: Color = {
  light: getColor("gray", 700),
  dark: getColor("blue", 300),
};
const buttonBorder: Color = {
  light: getColor("gray", 200),
  dark: getColor("blue", 300),
};

export const contentColorConfig = {
  fg: defaultFg,
  fgWithHover: {
    default: defaultFg,
    hover: hoveredFg,
  },
  mutedFg,
  mutedFgWithHover: {
    default: mutedFg,
    hover: hoveredMutedFg,
  },

  bg: defaultBg,
  bgWithHover: {
    default: defaultBg,
    hover: hoveredBg,
  },
  highlightedBg,

  border: defaultBorder,

  buttonFg,
  buttonBorder,
} as const;
