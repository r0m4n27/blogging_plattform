import { useTheme } from "@blog/frontend/composables/store/theme";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import {
  fontWeights,
  letterSpacings,
  lineHeights,
  fonts,
  fontSizes,
} from "@blog/frontend/config/theme/text";
import type { CSSObject } from "@emotion/css";
import { createRecordWriter, createValueWriter } from "./writer";

export type FontFamily = keyof typeof fonts;
export const fontFamilyWriter = createRecordWriter(fonts);

export type FontSize = keyof typeof fontSizes;
export const fontSizeWriter = createRecordWriter(fontSizes);

export type FontWeight = keyof typeof fontWeights;
export const fontWeightWriter = createRecordWriter(fontWeights);

export type LineHeight = keyof typeof lineHeights;
export const lineHeightWriter = createRecordWriter(lineHeights);

export type LetterSpacing = keyof typeof letterSpacings;
export const letterSpacingWriter = createRecordWriter(letterSpacings);

export type Alignment = "left" | "right" | "center" | "justify";
export const alignmentWriter = createValueWriter<Alignment>();

export type WordWrap = "normal" | "break-word";
export const wordWrapWriter = createValueWriter<WordWrap>();

export const maxLinesWriter = createValueWriter<number>();

// NOTE: This is a bit of a hack
// But the global css sets the decoration to node
// so an !important has to be added
export const underlineWriter = (
  style: CSSObject,
  _: keyof CSSObject,
  value: boolean,
) => {
  if (value) {
    const theme = useTheme();
    const responsiveColor = contentColorConfig.fg;
    const color = theme.darkMode ? responsiveColor.dark : responsiveColor.light;

    style["textDecoration"] = "underline !important";
    style["textDecorationColor"] = color;
  }
};
