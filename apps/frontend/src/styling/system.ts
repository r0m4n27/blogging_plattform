import { borderConfig } from "@/config/theme/border";
import { shadowConfig } from "@/config/theme/shadow";
import { sizeConfig } from "@/config/theme/size";
import type { CSSObject } from "@emotion/css";
import { createRecordWriter, createValueWriter } from "./writer";

export type BorderRadius = keyof typeof borderConfig;
export const borderRadiusWriter = createRecordWriter(borderConfig);

export type Size = keyof typeof sizeConfig;
export const sizeWriter = createRecordWriter(sizeConfig);

export type Display = "block" | "inline" | "inline-block" | "inherit";
export const displayWriter = createValueWriter<Display>();

export type Shadow = keyof typeof shadowConfig;
export const shadowWriter = createRecordWriter(shadowConfig);

export type Hidden = boolean | "none";
export const hiddenWriter = (
  style: CSSObject,
  propertyName: keyof CSSObject,
  value: Hidden
) => {
  if (value !== "none") {
    if (value) {
      style[propertyName] = "none";
    } else {
      style[propertyName] = "block";
    }
  }
};
