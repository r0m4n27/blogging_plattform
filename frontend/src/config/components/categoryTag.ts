export type CategoryTagSize = "sm" | "md";

export const categoryTagButtonConfig = {
  height: { sm: 6, md: 8 },
  padding: { sm: { x: 2, y: 0 }, md: { x: 2, y: 0 } },
} as const;

export const categoryTagTextConfig = {
  size: { sm: "sm", md: "md" },
  lineHeight: { sm: "5", md: "6" },
} as const;
