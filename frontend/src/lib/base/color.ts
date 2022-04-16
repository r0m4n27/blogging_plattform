import { injectTheme } from "@/composables/provideTheme";
import type { CSSObject } from "@emotion/css";
import type { Ref } from "vue";

export type Color = LightAndDarkColor | ColorWithState;

interface LightAndDarkColor {
  light: string;
  dark: string;
}

interface ColorWithState {
  default: LightAndDarkColor;
  hover: LightAndDarkColor;
}

// Writer for inserting a color into the style
//
// If the Color is a `ColorWithState` it will add
// an "&:hover" entry into the style if it didn't exist
export const colorWriter = (
  style: CSSObject,
  propertyName: keyof CSSObject,
  color: Color
) => {
  const { useDarkMode } = injectTheme();

  if ((color as ColorWithState).default !== undefined) {
    const colorWithState = color as ColorWithState;

    addColorToStyle(useDarkMode, style, propertyName, colorWithState.default);

    style["&:hover"] ??= {};
    addColorToStyle(
      useDarkMode,
      // SAFETY: Since we build up the CSSObject
      // we can make sure that the hover key
      // contains an object
      style["&:hover"] as CSSObject,
      propertyName,
      colorWithState.hover
    );
  } else {
    addColorToStyle(
      useDarkMode,
      style,
      propertyName,
      color as LightAndDarkColor
    );
  }
};

const addColorToStyle = (
  useDarkMode: Ref<boolean>,
  style: CSSObject,
  propertyName: keyof CSSObject,
  prop: LightAndDarkColor
) => (style[propertyName] = useDarkMode.value ? prop.dark : prop.light);
