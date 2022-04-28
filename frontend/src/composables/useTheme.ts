import { defineStore } from "pinia";
import { ref, watch, type Ref } from "vue";
import { themeConfig } from "../config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";

export interface Theme {
  useDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export const useTheme = defineStore<string, Theme>(
  piniaKeysConfig.theme,
  () => {
    const themeString =
      localStorage.getItem(themeConfig.key) ?? themeConfig.lightValue;

    // NOTE: Everything that is not the light mode value
    // will be interpreted as the dark-mode value
    const useDarkMode = ref(themeString !== themeConfig.lightValue);

    watch(useDarkMode, (newValue) => {
      localStorage.setItem(
        themeConfig.key,
        newValue ? themeConfig.darkValue : themeConfig.lightValue
      );
    });

    return {
      useDarkMode,
      toggleDarkMode: () => {
        useDarkMode.value = !useDarkMode.value;
      },
    };
  }
);
