import type { CSSInterpolation, CSSObject } from "@emotion/css";

// Creates a writer that looks up the css value from a recrod
export const createRecordWriter = <K extends string | number | symbol>(
  record: Readonly<Record<K, CSSInterpolation>>
): ((style: CSSObject, propertyName: keyof CSSObject, prop: K) => void) => {
  return (style: CSSObject, propertyName: keyof CSSObject, prop: K) => {
    style[propertyName] = record[prop];
  };
};

// Creates a that just writes the already interpolated value into the style
export const createValueWriter = <T extends CSSInterpolation>(): ((
  style: CSSObject,
  propertyName: keyof CSSObject,
  prop: T
) => void) => {
  return (style: CSSObject, propertyName: keyof CSSObject, prop: T) => {
    style[propertyName] = prop;
  };
};
