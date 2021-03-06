import { css, type CSSObject } from "@emotion/css";
import { colorWriter, type Color } from "../color";
import { writeResponsivePropToStyle } from "../responsive";
import { spacingWriter, type Spacing } from "../spacing";
import type { PropType } from "vue";
import type { TypeFromProps } from "@blog/frontend/lib/typeFromProps";
import {
  type BorderRadius,
  type Shadow,
  type Size,
  type Display,
  sizeWriter,
  shadowWriter,
  borderRadiusWriter,
  displayWriter,
  hiddenWriter,
} from "../system";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { ElementType } from "@blog/frontend/lib/elementType";

// NOTE: You can't use an imported interface for defineProps
// https://github.com/vuejs/core/issues/4294
//
// Instead we create an object that holds the configuration.
// With this soultion you don't have to duplicate every inteface
// defintion and you can achieve simple 'inteface extends'
// by spreading the props

// General properties that could be used by every component
export const systemProps = {
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
  },
  margin: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
  },
  backgroundColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
  },

  showBorder: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  borderRadius: {
    type: [Object, String] as PropType<Responsive<BorderRadius>>,
  },
  borderColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
  },
  shadow: {
    type: [Object, String] as PropType<Responsive<Shadow>>,
  },

  height: {
    type: [Object, String, Number] as PropType<Responsive<Size>>,
  },
  width: {
    type: [Object, String, Number] as PropType<Responsive<Size>>,
  },

  display: {
    type: [String, Object] as PropType<Responsive<Display>>,
  },

  // Since vue inserts a default false, when a boolean value
  // is specified as a prop, we need a third value to not
  // overwrite for example the flex behaviour
  hidden: {
    type: [Boolean, String, Object] as PropType<Responsive<boolean>>,
    default: "none",
  },

  is: {
    type: String as PropType<ElementType>,
    default: "div",
  },
} as const;

export type SystemProps = TypeFromProps<typeof systemProps>;

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
    props.backgroundColor,
  );

  if (props.showBorder !== undefined && props.showBorder) {
    style["borderWidth"] = "1px";
    style["borderStyle"] = "solid";
  }
  writeResponsivePropToStyle(style, "borderColor", colorWriter, props.borderColor);
  writeResponsivePropToStyle(style, "boxShadow", shadowWriter, props.shadow);

  writeResponsivePropToStyle(
    style,
    "borderRadius",
    borderRadiusWriter,
    props.borderRadius,
  );

  writeResponsivePropToStyle(style, "display", displayWriter, props.display);

  writeResponsivePropToStyle(style, "display", hiddenWriter, props.hidden);

  return css(style);
};
