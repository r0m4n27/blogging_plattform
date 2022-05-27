import { ArticleModel } from "@/model/authorArticleModels";
import { Article, User } from "@prisma/client";
import { CategoryService } from "./CategoryService";
import { DatabaseService } from "./database";

export class ArticleService {
  constructor(
    private readonly database: DatabaseService,
    private readonly categories: CategoryService,
  ) {}

  readAllByUser = async (author: User) =>
    await this.database.article.findMany({ where: { author } });

  readAllAsVisitor = async () =>
    await this.database.article.findMany({
      where: { draft: false },
      include: { categories: true },
    });

  readAllByCategoryAsVisitor = async (categoryId: string) =>
    await this.database.article.findMany({
      where: { draft: false, categories: { some: { id: categoryId } } },
      include: { categories: true },
    });

  readAllByYearAsVisitor = async (year: number) =>
    await this.database.article.findMany({
      where: { draft: false, year },
      include: { categories: true },
    });

  readCountedByYearAsVisitor = async () =>
    await this.database.article.groupBy({
      by: ["year"],
      _count: true,
      where: { draft: false },
    });

  readSingle = async (id: string) =>
    await this.database.article.findUnique({ where: { id } });

  readSingleAsVisitor = async (id: string) =>
    await this.database.article.findFirst({
      where: { id, draft: false },
      include: { categories: true },
    });

  create = async (model: ArticleModel, author: User): Promise<Article> => {
    const { categories: categoriesIds, ...restModel } = model;

    const categories = await this.categories.readByCategoryIds(categoriesIds);

    return await this.database.article.create({
      data: {
        ...restModel,
        author: {
          connect: author,
        },
        categories: {
          connect: categories,
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

    return await this.database.article.update({
      data: {
        ...restModel,
        categories: {
          connect: categories,
        },
      },
      where: {
        id,
      },
    });
  };

  delete = async (id: string) =>
    await this.database.article.delete({ where: { id } });
}
