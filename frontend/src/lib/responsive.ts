export type Responsive<T> = T | ResponsiveObject<T>;

export interface ResponsiveObject<T> {
  sm: T;
  md: T;
}

export const mapResponsiveFromConfig = <T extends string | number | symbol, R>(
  prop: Responsive<T>,
  config: Record<T, R>
): Responsive<R> => {
  if ((prop as ResponsiveObject<T>).sm !== undefined) {
    const responsiveObject = prop as ResponsiveObject<T>;
    return {
      sm: config[responsiveObject.sm],
      md: config[responsiveObject.md],
    };
  } else {
    return config[prop as T];
  }
};
