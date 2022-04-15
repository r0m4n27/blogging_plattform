import { css, type CSSObject } from "@emotion/css";
import {
  addResponsivePropToStyle,
  type ResponsiveProp,
} from "./responsiveProp";
import { spacingMapper, type Spacing } from "./spacing";

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

  return css(style);
};
