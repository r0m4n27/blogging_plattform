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
import type { PropType } from "vue";
import type { TypeFromProps } from "@/lib/typeFromProps";

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

export const textProps = {
  family: {
    type: [Object, String] as PropType<Responsive<FontFamily>>,
  },
  size: {
    type: [Object, String] as PropType<Responsive<FontSize>>,
  },
  weight: {
    type: [Object, String] as PropType<Responsive<FontWeight>>,
  },
  lineHeight: {
    type: [Object, String] as PropType<Responsive<LineHeight>>,
  },
  letterSpacing: {
    type: [Object, String] as PropType<Responsive<LetterSpacing>>,
  },

  alignment: {
    type: [Object, String] as PropType<Responsive<Alignment>>,
  },
  wordWrap: {
    type: [Object, String] as PropType<Responsive<WordWrap>>,
  },
} as const;

export type TextProps = TypeFromProps<typeof textProps>;

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
