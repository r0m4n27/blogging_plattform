import { provide, ref, watch, type InjectionKey, type Ref } from "vue";

const localStorageKey = "themePreference";

export enum Theme {
  Dark,
  Light,
}

export const provideThemeKey: InjectionKey<Ref<Theme>> = Symbol();

// Provide the current theme and set it to the local storage
// also update the html tag class according to the theme
export function provideTheme() {
  const themeString = localStorage.getItem(localStorageKey) ?? "Light";

  const theme = ref(Theme[themeString as keyof typeof Theme]);

  // Despite calling value on 'theme' this isn't reactive
  // and we must use a watcher
  updateTheme(theme.value);

  watch(theme, (newTheme) => {
    updateTheme(newTheme);
  });

  provide(provideThemeKey, theme);
}

function updateTheme(theme: Theme) {
  localStorage.setItem(localStorageKey, Theme[theme]);

  if (theme === Theme.Dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
