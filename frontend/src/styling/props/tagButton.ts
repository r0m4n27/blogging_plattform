import {
  tagButtonTextConfig,
  tagButtonVButtonConfig,
} from "@/config/components/tagButton";
import { contentColorConfig } from "@/config/content/color";
import type { ElementType } from "@/lib/elementType";
import { mapResponsiveFromConfig, type Responsive } from "@/lib/responsive";
import type { Color } from "../color";
import type { SystemProps } from "./systemProps";
import type { TextProps } from "./textProps";

export type TagButtonSize = "sm" | "md";

export const createTagButtonVButtonProps = (
  size: Responsive<TagButtonSize>,
  color?: Responsive<Color>
): SystemProps => {
  const height = mapResponsiveFromConfig(size, tagButtonVButtonConfig.height);

  const padding = mapResponsiveFromConfig(size, tagButtonVButtonConfig.padding);

  return {
    height,
    padding,
    color,
  };
};

export const createTagButtonVBoxProps = (
  size: Responsive<TagButtonSize>,
  is: ElementType,
  color?: Responsive<Color>
): SystemProps => {
  const height = mapResponsiveFromConfig(size, tagButtonVButtonConfig.height);

  const padding = mapResponsiveFromConfig(size, tagButtonVButtonConfig.padding);

  return {
    height,
    padding,
    color: color ?? contentColorConfig.buttonFg,
    is,
    showBorder: true,
    backgroundColor: contentColorConfig.bgWithHover,
    borderRadius: "md",
    borderColor: contentColorConfig.buttonBorder,
  };
};

export const createTagButtonTextProps = (
  size: Responsive<TagButtonSize>
): TextProps => {
  const textSize = mapResponsiveFromConfig(size, tagButtonTextConfig.size);
  const lineHeight = mapResponsiveFromConfig(
    size,
    tagButtonTextConfig.lineHeight
  );

  return {
    size: textSize,
    lineHeight,
  };
};
