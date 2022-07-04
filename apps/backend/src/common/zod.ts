import { z } from "zod";

// Taken from the zod documentation
export const checkInt = (val: string, ctx: z.RefinementCtx): number => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Not a number",
    });
  }
  return parsed;
};
