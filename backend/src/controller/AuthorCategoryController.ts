import { RequestWithBody, ResponseWithError } from "@/common/express";
import { CategoryModel } from "@/model/authorCategoryModels";
import { CategoryService } from "@/service/CategoryService";
import { Category } from "@prisma/client";
import { Request } from "express";

export class AuthorCategoryController {
  constructor(private readonly categories: CategoryService) {}

  // Every Author has the same categories
  readAll = async (_: Request, res: ResponseWithError<Category[]>) =>
    res.json(await this.categories.readAll());

  createCategory = async (
    req: RequestWithBody<CategoryModel>,
    res: ResponseWithError<Category>,
  ) => res.json(await this.categories.create(req.body));

  deleteCategory = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    await this.categories.deleteById(req.params["id"]);

    res.json({});
  };

  updateCategory = async (
    req: RequestWithBody<Partial<CategoryModel>>,
    res: ResponseWithError<Category>,
  ) => {
    const updatedCategory = await this.categories.updateById(
      req.params["id"],
      req.body,
    );

    res.json(updatedCategory);
  };
}
