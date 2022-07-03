import { contentColorConfig } from "@blog/frontend/config/content/color";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { TypeFromProps } from "@blog/frontend/lib/typeFromProps";
import { css, cx } from "@emotion/css";
import type { CSSObject } from "@emotion/serialize";
import type { PropType } from "vue";
import { colorWriter, type Color } from "../color";
import { writeResponsivePropToStyle } from "../responsive";
import { createTextPropsCss, textProps } from "./textProps";

export type InputType = "" | "password";

export const textInputProps = {
  inputValue: {
    type: String as PropType<string>,
    required: true,
  },
  inputType: {
    type: String as PropType<InputType>,
    default: "",
  },
  textColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.mutedFg,
  },
  ...textProps,
} as const;

export type TextInputProps = TypeFromProps<typeof textInputProps>;

export const createTextInputCss = (props: TextInputProps) => {
  const textCss = createTextPropsCss(props);

  const style: CSSObject = {};

  writeResponsivePropToStyle(style, "color", colorWriter, props.textColor);

  return cx(css(style), textCss);
};
