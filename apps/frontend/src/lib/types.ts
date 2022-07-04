import type { Ref } from "vue";

export type Option<T> = T | undefined;

export type MaybeRef<T> = T | Ref<T>;
