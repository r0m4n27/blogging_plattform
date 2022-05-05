import { piniaKeysConfig } from "@/config/pinia";
import { defineStore } from "pinia";

// HACK : This dummy store is used for accessing the router in other stores
// If the stores are defined with an function we can't access state that is injected into pinia
export const useEmptyStore = defineStore(piniaKeysConfig.empty, {
  state: () => ({}),
});
