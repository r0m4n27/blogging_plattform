import type { SystemProps } from "@/lib/base/props/systemProps";
import type { TextProps } from "@/lib/base/props/textProps";
import { getColor } from "./colors";

// Default values taken from: https://github.com/chakra-ui/chakra-ui/blob/next/packages/theme/src/styles.ts
export const globalThemeConfig: SystemProps & TextProps = {
  family: "body",
  lineHeight: "base",
  wordWrap: "break-word",

  color: { light: getColor("gray", 800), dark: getColor("whiteAlpha", 900) },
  backgroundColor: { light: getColor("white"), dark: getColor("gray", 800) },
  borderColor: {
    light: getColor("gray", 200),
    dark: getColor("whiteAlpha", 300),
  },
};
