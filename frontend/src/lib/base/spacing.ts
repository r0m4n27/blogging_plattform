import { spacingConfig } from "@/config/theme/spacing";
import type { CSSInterpolation } from "@emotion/css";

export type SpacingConfigKey = keyof typeof spacingConfig;

interface SpacingObject {
  x: SpacingConfigKey;
  y: SpacingConfigKey;
}

export type Spacing = SpacingConfigKey | SpacingObject;

/**
 * Mapper that converts a `Spacing` to a proper css value
 *
 * @param spacing Spacing to map
 * @returns Css value for the spacing
 */
export const spacingMapper = (spacing: Spacing): CSSInterpolation => {
  if ((spacing as SpacingObject).x !== undefined) {
    const spacingObject = spacing as SpacingObject;
    return `${spacingConfig[spacingObject.y]} ${
      spacingConfig[spacingObject.x]
    }`;
  } else {
    return spacingConfig[spacing as SpacingConfigKey];
  }
};
