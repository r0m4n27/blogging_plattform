import { categoryErrorMessages } from "@/common/errorMessages";
import { handlePrismaNotFound } from "@/common/prisma";
import { CategoriesIdsModel } from "@/model/authorArticleModels";
import { CategoryModel } from "@/model/authorCategoryModels";
import { Category } from "@prisma/client";
import { DatabaseService } from "./database";

export class CategoryService {
  constructor(private readonly database: DatabaseService) {}

  readAll = async () => await this.database.category.findMany();

  readByCategoryIds = async (model?: CategoriesIdsModel) => {
    if (model === undefined) return [];

    return await this.database.category.findMany({
      where: {
        id: {
          in: model.map((category) => category.id),
        },
      },
      orderBy: { name: "asc" },
    });
  };

  readAllWithArticleCount = async () =>
    await this.database.category.findMany({
      include: {
        _count: {
          select: { articles: true },
        },
      },
      orderBy: { name: "asc" },
    });

  readSingleWithArticleCount = async (id: string) =>
    await this.database.category.findUnique({
      include: {
        _count: {
          select: { articles: true },
        },
      },
      where: { id },
    });

  create = async (model: CategoryModel) =>
    await this.database.category.create({ data: model });

  deleteById = async (id: string): Promise<Category> => {
    return handlePrismaNotFound(
      categoryErrorMessages.categoryNotFound,
      async () => {
        return await this.database.category.delete({ where: { id } });
      },
    );
  };

  updateById = async (
    id: string,
    model: Partial<CategoryModel>,
  ): Promise<Category> => {
    return handlePrismaNotFound(
      categoryErrorMessages.categoryNotFound,
      async () => {
        return await this.database.category.update({
          where: { id },
          data: model,
        });
      },
    );
  };
}
