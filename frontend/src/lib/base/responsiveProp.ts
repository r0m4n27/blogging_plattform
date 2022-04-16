import { breakpointsConfig } from "@/config/theme/breakpoints";
import type { CSSObject } from "@emotion/css";

export type Responsive<T> = T | ResponsiveObject<T>;

export interface ResponsiveObject<T> {
  sm: T;
  md: T;
}

const smBreakpointQuery = `@media screen and (min-width: ${breakpointsConfig.sm})`;

// Writes the content of the `ResponsiveProp<T>` into the stylesheet
//
// If the item is a `ResponsiveObject<T>` that the sm item will
// we written normaly into the stylesheet and the md value is written
// into the `CSSObject` that was created with the `smBreakpointQuery` key
//
// To actually write the generic value in to the stylesheet
// the `writer` is used it gets all of the necessary informations
// and can modify the stylesheed however it likes
export const writeResponsivePropToStyle = <T>(
  style: CSSObject,
  propertyName: keyof CSSObject,
  writer: (style: CSSObject, propertyName: keyof CSSObject, value: T) => void,
  prop?: Responsive<T>
) => {
  if (prop === undefined) return;

  if ((prop as ResponsiveObject<T>).sm !== undefined) {
    const responsiveObject = prop as ResponsiveObject<T>;
    writer(style, propertyName, responsiveObject.sm);

    style[smBreakpointQuery] ??= {};
    // SAFETY: Since we build up the CSSObject
    // we can make sure this key contains only a CSSObject
    writer(
      style[smBreakpointQuery] as CSSObject,
      propertyName,
      responsiveObject.md
    );
  } else {
    writer(style, propertyName, prop as T);
  }
};
