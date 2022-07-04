import { containerConfig } from "@blog/frontend/config/theme/container";
import type { TypeFromProps } from "@blog/frontend/lib/typeFromProps";
import { css, type CSSObject } from "@emotion/css";
import type { PropType } from "vue";
import { writeResponsivePropToStyle } from "../responsive";
import type { Responsive } from "@blog/frontend/lib/responsive";
import { createRecordWriter } from "../writer";

export type ContainerSize = keyof typeof containerConfig;
const containerConfigWriter = createRecordWriter(containerConfig);

export const containerProps = {
  size: {
    type: [String, Object] as PropType<Responsive<ContainerSize>>,
    required: true,
  },
} as const;

export type ContainerProps = TypeFromProps<typeof containerProps>;

export const createContainerPropsCss = (props: ContainerProps): string => {
  const style: CSSObject = {};
  writeResponsivePropToStyle(style, "maxWidth", containerConfigWriter, props.size);

  style["margin"] = "0 auto";

  return css(style);
};
