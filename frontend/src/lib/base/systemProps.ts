import { borderConfig } from "@/config/theme/border";
import { sizeConfig } from "@/config/theme/size";
import { css, type CSSObject } from "@emotion/css";
import { colorWriter, type Color } from "./color";
import {
  writeResponsivePropToStyle,
  type ResponsiveProp,
} from "./responsiveProp";
import { createRecordWriter } from "./writer";
import { spacingWriter, type Spacing } from "./spacing";

export type BorderRadius = keyof typeof borderConfig;
const borderRadiusWriter = createRecordWriter(borderConfig);

export type Size = keyof typeof sizeConfig;
const sizeWriter = createRecordWriter(sizeConfig);

// NOTE: This interface can't be directly used for either
// defineProps<SytemProps>() or for extending an interface
// and than using it in defineProps()
// https://github.com/vuejs/core/issues/4294
//
// You have to redefine the keys in the actual props
// otherwise defineProps() will not compile
export interface SystemProps {
  padding?: ResponsiveProp<Spacing>;
  margin?: ResponsiveProp<Spacing>;

  color?: ResponsiveProp<Color>;
  backgroundColor?: ResponsiveProp<Color>;

  showBorder?: boolean;
  borderRadius?: ResponsiveProp<BorderRadius>;
  borderColor?: ResponsiveProp<Color>;

  height?: ResponsiveProp<Size>;
  width?: ResponsiveProp<Size>;
}

/**
 * Create a stylesheet for the `SystemProps` using the emotion package
 *
 * @param props Props to convert into css
 * @returns Class name of the generated styles
 */
export const createSystemPropsCss = (props: SystemProps): string => {
  const style: CSSObject = {};

  writeResponsivePropToStyle(style, "padding", spacingWriter, props.padding);
  writeResponsivePropToStyle(style, "margin", spacingWriter, props.margin);

  writeResponsivePropToStyle(style, "width", sizeWriter, props.width);
  writeResponsivePropToStyle(style, "height", sizeWriter, props.height);

  writeResponsivePropToStyle(style, "color", colorWriter, props.color);
  writeResponsivePropToStyle(
    style,
    "backgroundColor",
    colorWriter,
    props.backgroundColor
  );

  if (props.showBorder !== undefined && props.showBorder) {
    style["borderWidth"] = "1px";
    style["borderStyle"] = "solid";
  }
  writeResponsivePropToStyle(
    style,
    "borderColor",
    colorWriter,
    props.borderColor
  );

  writeResponsivePropToStyle(
    style,
    "borderRadius",
    borderRadiusWriter,
    props.borderRadius
  );

  return css(style);
};
