import type { Theme } from "@/composables/provideTheme";
import type { InjectionKey } from "vue";

export const provideThemeKey: InjectionKey<Theme> = Symbol();
