import type { Responsive } from "@/styling/responsive";
import type { Spacing } from "@/styling/spacing";

export const contentSpacingConfig = {
  xs: 2,
  sm: 4,
  md: 6,
} as const;

export const defaultContentSpacing: Responsive<Spacing> = {
  sm: contentSpacingConfig.sm,
  md: contentSpacingConfig.md,
};
