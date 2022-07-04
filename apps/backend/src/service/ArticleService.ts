import { articleErrorMessages } from "@blog/backend/common/errorMessages";
import { handlePrismaNotFound } from "@blog/backend/common/prisma";
import type { ArticleModel } from "@blog/backend/model/authorArticleModels";
import type { Article, User } from "@prisma/client";
import type { CategoryService } from "./CategoryService";
import type { DatabaseService } from "./database";

// The articles that are returned for the user
// also contain the the categories
export class ArticleService {
  constructor(
    private readonly database: DatabaseService,
    private readonly categories: CategoryService,
  ) {}

  readAllByUser = async (author: User) =>
    await this.database.article.findMany({
      where: { author },
      orderBy: { updatedAt: "desc" },
    });

  readAllAsVisitor = async () =>
    await this.database.article.findMany({
      where: { published: true },
      include: { categories: true },
      orderBy: { updatedAt: "desc" },
    });

  readAllByCategoryAsVisitor = async (categoryId: string) =>
    await this.database.article.findMany({
      where: { published: true, categories: { some: { id: categoryId } } },
      include: { categories: true },
      orderBy: { updatedAt: "desc" },
    });

  readAllByYearAsVisitor = async (year: number) =>
    await this.database.article.findMany({
      where: { published: true, year },
      include: { categories: true },
      orderBy: { updatedAt: "desc" },
    });

  readCountedByYearAsVisitor = async () =>
    await this.database.article.groupBy({
      by: ["year"],
      _count: true,
      where: { published: true },
      orderBy: { year: "desc" },
    });

  readSingle = async (id: string) =>
    await this.database.article.findUnique({ where: { id } });

  readSingleAsVisitor = async (id: string) =>
    await this.database.article.findFirst({
      where: { id, published: true },
      include: { categories: true },
    });

  // The ArticleModel contains the ids of the categories
  // Before they are connected to the article they are read by the
  // CategoriesService. It returns only the valid ids
  //
  // Also the year is automatically inserted and can't be manually changed
  create = async (model: ArticleModel, author: User): Promise<Article> => {
    const { categories: categoriesIds, ...restModel } = model;

    const categories = await this.categories.readByCategoryIds(categoriesIds);
    const year = new Date().getFullYear();

    return await this.database.article.create({
      data: {
        ...restModel,
        year,
        author: {
          connect: { id: author.id },
        },
        categories: {
          connect: categories.map((c) => ({
            id: c.id,
          })),
        },
      },
    });
  };

  update = async (
    id: string,
    model: Partial<ArticleModel>,
  ): Promise<Article> => {
    const { categories: categoriesIds, ...restModel } = model;

    const categories = await this.categories.readByCategoryIds(categoriesIds);

    const updatedAt = new Date();
    const year = updatedAt.getFullYear();

    return await handlePrismaNotFound(
      articleErrorMessages.articleNotFound,
      async () => {
        return await this.database.article.update({
          data: {
            ...restModel,
            updatedAt,
            year,
            categories: {
              connect: categories.map((c) => ({
                id: c.id,
              })),
            },
          },
          where: {
            id,
          },
        });
      },
    );
  };

  delete = async (id: string) =>
    handlePrismaNotFound(articleErrorMessages.articleNotFound, async () => {
      return await this.database.article.delete({ where: { id } });
    });
}
