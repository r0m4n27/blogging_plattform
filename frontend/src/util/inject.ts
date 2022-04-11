import { inject, type InjectionKey } from "vue";

// Inject with a key that should be gobally available
// this is an escape hatch when we know more than the compiler
// and should be used with care
export function injectGlobal<T>(key: InjectionKey<T>): T {
  return inject(key) as T;
}
