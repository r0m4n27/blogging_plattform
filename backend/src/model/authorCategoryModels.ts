import { z } from "zod";

export const categorySchema = z.object({
  name: z.string(),
});

export type CategoryModel = z.infer<typeof categorySchema>;
