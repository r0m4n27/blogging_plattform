import type { ExtractPropTypes, ExtractDefaultPropTypes } from "vue";

// Taken from: https://github.com/vuejs/core/issues/4294#issuecomment-1087799020
//
// Convert the vue props into a type

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K> = Omit<T, K> & Partial<T>;
type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type TypeFromProps<T> = Writeable<
  PartialBy<ExtractPropTypes<T>, keyof ExtractDefaultPropTypes<T>>
>;
