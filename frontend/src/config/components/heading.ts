import type { TextProps } from "@/styling/props/textProps";

export type HeadingSize =
  | "xs"
  | "sm"
  | "md"
  | "xl"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

// Values taken from: https://github.com/chakra-ui/chakra-ui/blob/next/packages/theme/src/components/heading.ts
export const headingConfig: Record<HeadingSize, TextProps> = {
  "4xl": {
    size: { sm: "6xl", md: "7xl" },
  },
  "3xl": {
    size: { sm: "5xl", md: "6xl" },
  },
  "2xl": {
    size: { sm: "4xl", md: "5xl" },
    lineHeight: { sm: "shorter", md: "none" },
  },
  xl: {
    size: { sm: "3xl", md: "4xl" },
    lineHeight: { sm: "short", md: "shorter" },
  },
  lg: {
    size: { sm: "2xl", md: "3xl" },
    lineHeight: { sm: "short", md: "shorter" },
  },
  md: { size: "xl", lineHeight: "shorter" },
  sm: { size: "md", lineHeight: "shorter" },
  xs: { size: "sm", lineHeight: "shorter" },
};
