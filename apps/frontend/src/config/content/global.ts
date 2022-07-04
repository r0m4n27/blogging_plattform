import type { SystemProps } from "@blog/frontend/styling/props/systemProps";
import type { TextProps } from "@blog/frontend/styling/props/textProps";
import { contentColorConfig } from "./color";

// Config vor the global styling values
//
// Default values taken from: https://github.com/chakra-ui/chakra-ui/blob/next/packages/theme/src/styles.ts
export const globalContentConfig: SystemProps & TextProps = {
  family: "body",
  lineHeight: "base",
  wordWrap: "break-word",

  color: contentColorConfig.fg,
  backgroundColor: contentColorConfig.bg,
  borderColor: contentColorConfig.border,
};
