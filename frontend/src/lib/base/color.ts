import { injectTheme } from "@/composables/provideTheme";
import type { CSSObject } from "@emotion/css";

export type Color = LightAndDarkColor | ColorWithState;

interface LightAndDarkColor {
  light: string;
  dark: string;
}

interface ColorWithState {
  default: LightAndDarkColor;
  hover: LightAndDarkColor;
}

/**
 * Add a color to the style based on the current theme of the page.
 * This will also take care of special effects like a hover;
 *
 * @param style Style where the color is inserted
 * @param propertyName Name of the inserted property
 * @param prop Color to insert
 * @returns Nothing
 */
export const addColorToStyle = (
  style: CSSObject,
  propertyName: keyof CSSObject,
  prop?: Color
) => {
  if (prop === undefined) return;

  const { useDarkMode } = injectTheme();

  if ((prop as ColorWithState).default !== undefined) {
    const colorWithState = prop as ColorWithState;

    addLightAndDarkColorToStyle(
      useDarkMode.value,
      style,
      propertyName,
      colorWithState.default
    );

    style["&:hover"] ??= {};
    addLightAndDarkColorToStyle(
      useDarkMode.value,
      // SAFETY: Since we build up the CSSObject
      // we can make sure that the hover key
      // contains an object
      style["&:hover"] as CSSObject,
      propertyName,
      colorWithState.hover
    );
  } else {
    addLightAndDarkColorToStyle(
      useDarkMode.value,
      style,
      propertyName,
      prop as LightAndDarkColor
    );
  }
};

const addLightAndDarkColorToStyle = (
  useDarkMode: boolean,
  style: CSSObject,
  propertyName: keyof CSSObject,
  prop: LightAndDarkColor
) => {
  const color = useDarkMode ? prop.dark : prop.light;

  style[propertyName] = color;
};
