import { borderConfig } from "@/config/theme/border";
import { css, type CSSObject } from "@emotion/css";
import { addColorToStyle, type Color } from "./color";
import {
  addResponsivePropToStyle,
  type ResponsiveProp,
} from "./responsiveProp";
import { spacingMapper, type Spacing } from "./spacing";

export type BorderRadius = keyof typeof borderConfig;

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

  color?: Color;
  backgroundColor?: Color;

  borderRadius?: BorderRadius;
  borderColor?: Color;
}

/**
 * Create a stylesheet for the `SystemProps` using the emotion package
 *
 * @param props Props to convert into css
 * @returns Class name of the generated styles
 */
export const createSystemPropsCss = (props: SystemProps): string => {
  const style: CSSObject = {};

  addResponsivePropToStyle(style, "padding", spacingMapper, props.padding);
  addResponsivePropToStyle(style, "margin", spacingMapper, props.margin);

  addColorToStyle(style, "color", props.color);
  addColorToStyle(style, "backgroundColor", props.backgroundColor);

  if (props.borderColor) {
    style["borderWidth"] = "1px";
  }
  addColorToStyle(style, "border-color", props.borderColor);

  if (props.borderRadius !== undefined) {
    style["borderRadius"] = borderConfig[props.borderRadius];
  }

  return css(style);
};
