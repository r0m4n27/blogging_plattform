import { spacingConfig } from "@/config/theme/spacing";
import type { CSSObject } from "@emotion/css";

export type SpacingConfigKey = keyof typeof spacingConfig;

interface SpacingObject {
  x: SpacingConfigKey;
  y: SpacingConfigKey;
}

export type Spacing = SpacingConfigKey | SpacingObject;

// Write a `Spacing` as a proper css value into the stylesheet
export const spacingWriter = (
  style: CSSObject,
  propertyName: keyof CSSObject,
  spacing: Spacing
) => {
  if ((spacing as SpacingObject).x !== undefined) {
    const spacingObject = spacing as SpacingObject;

    style[propertyName] = `${spacingConfig[spacingObject.y]} ${
      spacingConfig[spacingObject.x]
    }`;
  } else {
    style[propertyName] = spacingConfig[spacing as SpacingConfigKey];
  }
};
