import type { Req } from "@blog/backend/common/router/types";
import type { CategoryModel } from "@blog/backend/model/authorCategoryModels";
import type { IdParamsModel } from "@blog/backend/model/commonModels";
import type { CategoryService } from "@blog/backend/service/CategoryService";
import type { Category } from "@prisma/client";

export class AuthorCategoryController {
  constructor(private readonly categories: CategoryService) {}

  // Every Author has the same categories
  readAll = async (): Promise<Category[]> => await this.categories.readAll();

  createCategory = async (req: Req<CategoryModel>): Promise<Category> =>
    await this.categories.create(req.body);

  deleteCategory = async (req: Req<unknown, IdParamsModel>) => {
    await this.categories.deleteById(req.params.id);

    return {};
  };

  updateCategory = async (
    req: Req<Partial<CategoryModel>, IdParamsModel>,
  ): Promise<Category> => {
    const updatedCategory = await this.categories.updateById(
      req.params.id,
      req.body,
    );

    return updatedCategory;
  };
}
