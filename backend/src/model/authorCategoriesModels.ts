import { z } from "zod";

export interface AuthorCategoryResponse {
  id: string;
  name: string;
}

export const categorySchema = z.object({
  name: z.string(),
});

export type CategoryModel = z.infer<typeof categorySchema>;
