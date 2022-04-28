import { defineStore } from "pinia";
import type { Ref } from "vue";
import { localStorageKeys } from "../config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";
import { useLocalStorage } from "./useLocalStorage";

export interface Theme {
  darkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export const useTheme = defineStore<string, Theme>(
  piniaKeysConfig.theme,
  () => {
    const darkMode = useLocalStorage(localStorageKeys.darkMode, false);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    return {
      darkMode,
      toggleDarkMode,
    };
  }
);
