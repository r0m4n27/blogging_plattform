import { provideThemeKey } from "@/config/inject";
import { injectGlobal } from "@/lib/inject";
import { provide, ref, watch, type Ref } from "vue";
import { themeConfig } from "../config/localStorage";

export interface Theme {
  useDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export const injectTheme = (): Theme => {
  return injectGlobal(provideThemeKey);
};

export const provideTheme = () => {
  const themeString =
    localStorage.getItem(themeConfig.key) ?? themeConfig.lightValue;

  // NOTE: Everything that is not the light mode value
  // will be interpreted as the darkmode value
  const useDarkMode = ref(themeString !== themeConfig.lightValue);

  watch(useDarkMode, (newValue) => {
    localStorage.setItem(
      themeConfig.key,
      newValue ? themeConfig.darkValue : themeConfig.lightValue
    );
  });

  provide(provideThemeKey, {
    useDarkMode,
    toggleDarkMode: () => {
      useDarkMode.value = !useDarkMode.value;
    },
  });
};
