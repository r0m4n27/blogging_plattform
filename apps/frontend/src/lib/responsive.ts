// The responsive value can represent a value
// at a mobile and desktop screen size
//
// It is used for the component props
export type Responsive<T> = T | ResponsiveObject<T>;

export interface ResponsiveObject<T> {
  sm: T;
  md: T;
}

// Map a responsive value from another from a config
//
// Values inside Responsive exists as keys in the record
// They are looked up and the values associated from the keys
// are returned as another responsive
export const mapResponsiveFromConfig = <T extends string | number | symbol, R>(
  prop: Responsive<T>,
  config: Record<T, R>,
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
