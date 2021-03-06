import type { Article } from "@prisma/client";
import { z } from "zod";

export type ArticleResponse = Omit<Article, "authorId" | "updatedAt">;

export const articleResponseFromDb = (article: Article): ArticleResponse => ({
  id: article.id,

  title: article.title,
  summary: article.summary,
  content: article.content,

  year: article.year,
  published: article.published,
});

const categoriesIdsSchema = z.array(z.object({ id: z.string() }));

export const articleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  content: z.string(),

  published: z.boolean(),

  categories: categoriesIdsSchema,
});

export type ArticleModel = z.infer<typeof articleSchema>;
export type CategoriesIdsModel = z.infer<typeof categoriesIdsSchema>;
