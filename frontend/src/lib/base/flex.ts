import { css, type CSSObject } from "@emotion/css";
import type { ExtractPropTypes, PropType } from "vue";
import { writeResponsivePropToStyle, type Responsive } from "./responsiveProp";
import { spacingWriter, type Spacing } from "./spacing";
import { createMapperWriter } from "./writer";

export type FlexAlignment = "start" | "end" | "center" | "baseline" | "strech";
export const flexAlignmentWriter = createMapperWriter(
  (value: FlexAlignment) => {
    if (value === "start" || value === "end") {
      return `flex-${value}`;
    } else {
      return value;
    }
  }
);

export type FlexJustify =
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export const flexJustifyWriter = createMapperWriter((value: FlexJustify) => {
  if (value === "start" || value === "end") {
    return `flex-${value}`;
  } else {
    return value;
  }
});

export const gridColumnsWriter = createMapperWriter(
  (value: number) => `repeat(${value}, minmax(0, 1fr))`
);

export const flexProps = {
  gap: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
  },
  align: {
    type: [Object, String] as PropType<Responsive<FlexAlignment>>,
    default: () => "center",
  },
  justify: {
    type: [Object, String] as PropType<Responsive<FlexJustify>>,
  },
} as const;

type FlexProps = ExtractPropTypes<typeof flexProps>;

export const createFlexCss = (
  props: FlexProps,
  flexDirection: "row" | "column"
): string => {
  const style = createGeneralFlexStyle(props);

  style["display"] = "flex";
  style["flexDirection"] = flexDirection;

  return css(style);
};

export const createGridCss = (
  props: FlexProps,
  columns: Responsive<number>
): string => {
  const style = createGeneralFlexStyle(props);

  style["display"] = "grid";

  writeResponsivePropToStyle(
    style,
    "gridTemplateColumns",
    gridColumnsWriter,
    columns
  );

  return css(style);
};

const createGeneralFlexStyle = (props: FlexProps): CSSObject => {
  const style: CSSObject = {};

  writeResponsivePropToStyle(style, "gap", spacingWriter, props.gap);

  writeResponsivePropToStyle(
    style,
    "alignItems",
    flexAlignmentWriter,
    props.align
  );

  writeResponsivePropToStyle(
    style,
    "justifyContent",
    flexJustifyWriter,
    props.justify
  );

  return style;
};
