import { breakpointsConfig } from "@/config/theme/breakpoints";
import type { CSSInterpolation, CSSObject } from "@emotion/css";

export type ResponsiveProp<T> = T | ResponsiveObject<T>;

export interface ResponsiveObject<T> {
  sm: T;
  md: T;
}

const smBreakpointQuery = `@media screen and (min-width: ${breakpointsConfig.sm})`;

/**
 * Add a ResponsiveObject into a style. If it is just a `T` map it and add it
 * to the stylesheet. If it is a `ResposiveObject<T>` than add the `sm` value
 * to the stylesheet and add the `md` value with a media query to the stylesheet.
 *
 * @param style Style where the responsive property will be inserted into
 * @param propertyName Name if the inserted property
 * @param mapper Maps `T` into a valid css value
 * @param prop Responive property to add into the style
 * @returns Nothing
 */
export const addResponsivePropToStyle = <T>(
  style: CSSObject,
  propertyName: keyof CSSObject,
  mapper: (value: T) => CSSInterpolation,
  prop?: ResponsiveProp<T>
) => {
  if (prop === undefined) return;

  if ((prop as ResponsiveObject<T>).sm !== undefined) {
    const responsiveObject = prop as ResponsiveObject<T>;

    style[propertyName] = mapper(responsiveObject.sm);

    const mappedMd = mapper(responsiveObject.md);
    if (typeof style[smBreakpointQuery] === "object") {
      // @ts-expect-error: Since we check in the if clause
      // that the 'style[breakpointQueries.sm]' value is an object
      // it is save to add anther key to it
      style[smBreakpointQuery][propertyName] = mappedMd;
    } else {
      style[smBreakpointQuery] = {
        [propertyName]: mappedMd,
      };
    }
  } else {
    const mapped = mapper(prop as T);

    style[propertyName] = mapped;
  }
};
