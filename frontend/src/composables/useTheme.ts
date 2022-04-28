import { defineStore } from "pinia";
import type { Ref } from "vue";
import { localStorageKeys } from "../config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";
import { useLocalStorage } from "./useLocalStorage";

export interface Theme {
  useDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export const useTheme = defineStore<string, Theme>(
  piniaKeysConfig.theme,
  () => {
    const useDarkMode = useLocalStorage(localStorageKeys.darkMode, false);

    const toggleDarkMode = () => {
      useDarkMode.value = !useDarkMode.value;
    };

    return {
      useDarkMode,
      toggleDarkMode,
    };
  }
);
