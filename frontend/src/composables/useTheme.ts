import { ref, watch, type Ref } from "vue";
import { themeConfig } from "../config/localStorage";

export interface Theme {
  useDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export const useTheme = (): Theme => {
  const useDarkMode = ref(loadUseDarkMode());

  // To change the html when useTheme is called
  // we must call writeDarkModeToHtml one time manually
  writeDarkModeToHtml(useDarkMode.value);

  watch(useDarkMode, (newValue) => {
    saveUseDarkMode(newValue);
    writeDarkModeToHtml(newValue);
  });

  return {
    useDarkMode,
    toggleDarkMode: () => {
      useDarkMode.value = !useDarkMode.value;
    },
  };
};

const loadUseDarkMode = (): boolean => {
  const themeString =
    localStorage.getItem(themeConfig.key) ?? themeConfig.lightValue;

  // NOTE: Everything that is not the light mode value
  // will be interpreted as the darkmode value
  return themeString !== themeConfig.lightValue;
};

const saveUseDarkMode = (useDarkMode: boolean) => {
  localStorage.setItem(
    themeConfig.key,
    useDarkMode ? themeConfig.darkValue : themeConfig.lightValue
  );
};

const writeDarkModeToHtml = (useDarkMode: boolean) => {
  if (useDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
