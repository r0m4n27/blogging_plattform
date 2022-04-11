import { provide, ref, type InjectionKey, type Ref } from "vue";

const localStorageKey = "themePreference";

export enum Theme {
  Dark,
  Light,
}

export interface ProvideThemeProps {
  theme: Ref<Theme>;
  toggleTheme: () => void;
}

export const provideThemeKey: InjectionKey<ProvideThemeProps> = Symbol();

// Provide the current theme and set it to the local storage
// also update the html tag class according to the theme
export function provideTheme() {
  const themeString = localStorage.getItem(localStorageKey) ?? "Light";

  const theme = ref(Theme[themeString as keyof typeof Theme]);

  // Despite calling value on 'theme' this isn't reactive
  // and we must use a watcher
  updateTheme(theme.value);

  provide(provideThemeKey, {
    theme: theme,
    toggleTheme: () => {
      const newTheme = theme.value === Theme.Light ? Theme.Dark : Theme.Light;

      updateTheme(newTheme);
      theme.value = newTheme;
    },
  });
}

function updateTheme(theme: Theme) {
  localStorage.setItem(localStorageKey, Theme[theme]);

  if (theme === Theme.Dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
