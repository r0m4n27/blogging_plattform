import {
  fontWeights,
  letterSpacings,
  lineHeights,
  fonts,
  fontSizes,
} from "@/config/theme/text";
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
