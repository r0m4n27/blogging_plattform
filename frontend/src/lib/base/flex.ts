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
