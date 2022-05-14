import { type Pinia, createPinia as createPiniaInternal } from "pinia";
import type { Router } from "vue-router";
import "pinia";
import { markRaw } from "vue";

declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
  }
}

export const createPinia = (router: Router): Pinia => {
  const pinia = createPiniaInternal();

  // Taken from:
  // https://pinia.vuejs.org/core-concepts/plugins.html#adding-new-external-properties
  pinia.use(({ store }) => {
    store.router = markRaw(router);
  });

  return pinia;
};
