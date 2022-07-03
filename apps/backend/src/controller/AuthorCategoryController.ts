import { Req } from "@/common/router/types";
import { CategoryModel } from "@/model/authorCategoryModels";
import { IdParamsModel } from "@/model/commonModels";
import { CategoryService } from "@/service/CategoryService";
import { Category } from "@prisma/client";

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
