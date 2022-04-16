export type ColorWithPalette = "gray" | "blue" | "whiteAlpha";
export type ColorPaletteValues =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

// Taken from: https://chakra-ui.com/docs/styled-system/theming/theme
const colorsWithPalette = {
  gray: {
    "50": "#F7FAFC",
    "100": "#EDF2F7",
    "200": "#E2E8F0",
    "300": "#CBD5E0",
    "400": "#A0AEC0",
    "500": "#718096",
    "600": "#4A5568",
    "700": "#2D3748",
    "800": "#1A202C",
    "900": "#171923",
  },
  blue: {
    "50": "#EBF8FF",
    "100": "#BEE3F8",
    "200": "#90CDF4",
    "300": "#63B3ED",
    "400": "#4299E1",
    "500": "#3182CE",
    "600": "#2B6CB0",
    "700": "#2C5282",
    "800": "#2A4365",
    "900": "#1A365D",
  },
  whiteAlpha: {
    "50": "rgba(255, 255, 255, 0.04)",
    "100": "rgba(255, 255, 255, 0.06)",
    "200": "rgba(255, 255, 255, 0.08)",
    "300": "rgba(255, 255, 255, 0.16)",
    "400": "rgba(255, 255, 255, 0.24)",
    "500": "rgba(255, 255, 255, 0.36)",
    "600": "rgba(255, 255, 255, 0.48)",
    "700": "rgba(255, 255, 255, 0.64)",
    "800": "rgba(255, 255, 255, 0.80)",
    "900": "rgba(255, 255, 255, 0.92)",
  },
};

const white = "#FFFFFF";
const black = "#000000";

export function getColor(color: "white" | "black"): string;
export function getColor(
  color: ColorWithPalette,
  value: ColorPaletteValues
): string;

export function getColor(
  color: "white" | "black" | ColorWithPalette,
  value?: ColorPaletteValues
): string {
  switch (color) {
    case "white":
      return white;
    case "black":
      return black;
    default:
      // SAFETY: See function overload
      return colorsWithPalette[color][value as ColorPaletteValues];
  }
}
