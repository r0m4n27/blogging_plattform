import type { TypeFromProps } from "@/lib/typeFromProps";
import { type CSSObject, css } from "@emotion/css";
import type { PropType } from "vue";
import { colorWriter, type Color } from "../color";
import { writeResponsivePropToStyle } from "../responsive";
import type { Responsive } from "@/lib/responsive";

export const fillIconProps = {
  fill: { type: [Object, String] as PropType<Responsive<Color>> },
} as const;

export type FillIconProps = TypeFromProps<typeof fillIconProps>;

export const createFillIconPropsCss = (props: FillIconProps): string => {
  const iconStyle: CSSObject = {};

  writeResponsivePropToStyle(iconStyle, "fill", colorWriter, props.fill);

  return css(iconStyle);
};
