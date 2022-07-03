export const promise = <T>(value: T): Promise<T> =>
  new Promise((resolve) => resolve(value));
