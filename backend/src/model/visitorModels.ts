import { Article, Category } from "@prisma/client";

export type ArticleWithCategories = Article & { categories: Category[] };

export type VisitorArticleResponse = Omit<
  ArticleWithCategories,
  "authorId" | "published"
>;

export const visitorArticleFromDb = (
  article: ArticleWithCategories,
): VisitorArticleResponse => ({
  id: article.id,

  title: article.title,
  summary: article.summary,
  content: article.content,

  year: article.year,

  categories: article.categories,
});

export interface VisitorArchiveResponse {
  year: number;
  articleCount: number;
}

export type CategoryWithCount = Category & {
  _count: {
    articles: number;
  };
};

export interface VisitorCategoryResponse extends Category {
  articleCount: number;
}

export const visitorCategoryFromDb = (
  category: CategoryWithCount,
): VisitorCategoryResponse => ({
  id: category.id,
  name: category.name,
  articleCount: category._count.articles,
});
