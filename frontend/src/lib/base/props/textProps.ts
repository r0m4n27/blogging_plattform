import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "@/config/theme/text";
import { css, type CSSObject } from "@emotion/css";
import { createRecordWriter, createValueWriter } from "../writer";
import { writeResponsivePropToStyle, type Responsive } from "../responsiveProp";

type FontFamily = keyof typeof fonts;
const fontFamilyWriter = createRecordWriter(fonts);

type FontSize = keyof typeof fontSizes;
const fontSizeWriter = createRecordWriter(fontSizes);

type FontWeight = keyof typeof fontWeights;
const fontWeightWriter = createRecordWriter(fontWeights);

type LineHeight = keyof typeof lineHeights;
const lineHeightWriter = createRecordWriter(lineHeights);

type LetterSpacing = keyof typeof letterSpacings;
const letterSpacingWriter = createRecordWriter(letterSpacings);

type Alignment = "left" | "right" | "center" | "justify";
const aligmentWriter = createValueWriter<Alignment>();

type WordWrap = "normal" | "break-word";
const wordWrapWriter = createValueWriter<WordWrap>();

export interface TextProps {
  family?: Responsive<FontFamily>;
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
  lineHeight?: Responsive<LineHeight>;
  letterSpacing?: Responsive<LetterSpacing>;
  alignment?: Responsive<Alignment>;
  wordWrap?: Responsive<WordWrap>;
}

export const createTextPropsCss = (props: TextProps): string => {
  const style: CSSObject = {};
  writeResponsivePropToStyle(
    style,
    "fontFamily",
    fontFamilyWriter,
    props.family
  );
  writeResponsivePropToStyle(style, "fontSize", fontSizeWriter, props.size);
  writeResponsivePropToStyle(
    style,
    "fontWeight",
    fontWeightWriter,
    props.weight
  );
  writeResponsivePropToStyle(
    style,
    "lineHeight",
    lineHeightWriter,
    props.lineHeight
  );
  writeResponsivePropToStyle(
    style,
    "letterSpacing",
    letterSpacingWriter,
    props.letterSpacing
  );

  writeResponsivePropToStyle(
    style,
    "textAlign",
    aligmentWriter,
    props.alignment
  );

  writeResponsivePropToStyle(style, "wordWrap", wordWrapWriter, props.wordWrap);

  return css(style);
};
