import { inject, type InjectionKey } from "vue";

export const injectGlobal = <T>(key: InjectionKey<T>): T => {
  return inject(key) as T;
};
