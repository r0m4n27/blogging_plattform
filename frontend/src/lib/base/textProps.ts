import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "@/config/theme/text";
import { css, type CSSObject } from "@emotion/css";
import {
  addResponsivePropToStyle,
  type ResponsiveProp,
} from "./responsiveProp";

type FontFamily = keyof typeof fonts;
type FontSize = keyof typeof fontSizes;
type FontWeight = keyof typeof fontWeights;
type LineHeight = keyof typeof lineHeights;
type LetterSpacing = keyof typeof letterSpacings;
type Alignment = "left" | "right" | "center" | "justify";

export interface TextProps {
  family?: ResponsiveProp<FontFamily>;
  size?: ResponsiveProp<FontSize>;
  weight?: ResponsiveProp<FontWeight>;
  lineHeight?: ResponsiveProp<LineHeight>;
  letterSpacing?: ResponsiveProp<LetterSpacing>;
  alignment?: ResponsiveProp<Alignment>;
}

export const createTextPropsCss = (props: TextProps): string => {
  const style: CSSObject = {};
  addResponsivePropToStyle(
    style,
    "fontFamily",
    (value) => fonts[value],
    props.family
  );
  addResponsivePropToStyle(
    style,
    "fontSize",
    (value) => fontSizes[value],
    props.size
  );
  addResponsivePropToStyle(
    style,
    "fontWeight",
    (value) => fontWeights[value],
    props.weight
  );
  addResponsivePropToStyle(
    style,
    "lineHeight",
    (value) => lineHeights[value],
    props.lineHeight
  );
  addResponsivePropToStyle(
    style,
    "letterSpacing",
    (value) => letterSpacings[value],
    props.letterSpacing
  );

  addResponsivePropToStyle(
    style,
    "textAlign",
    (value) => value,
    props.alignment
  );

  return css(style);
};
