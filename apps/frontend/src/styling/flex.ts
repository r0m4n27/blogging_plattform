import { createMapperWriter } from "./writer";

export type FlexAlignment = "start" | "end" | "center" | "baseline" | "strech";
export const flexAlignmentWriter = createMapperWriter((value: FlexAlignment) => {
  if (value === "start" || value === "end") {
    return `flex-${value}`;
  } else {
    return value;
  }
});

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
  (value: number) => `repeat(${value}, minmax(0, 1fr))`,
);
