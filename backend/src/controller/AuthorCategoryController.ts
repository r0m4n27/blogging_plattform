import { RequestWithBody, ResponseWithError } from "@/common/express";
import {
  AuthorCategoryResponse,
  CategoryModel,
} from "@/model/authorCategoriesModels";
import { DatabaseService } from "@/service/database";
import { Request } from "express";

export class AuthorCategoryController {
  constructor(private readonly databaseService: DatabaseService) {}

  // Every Author has the same categories
  readAll = async (
    _: Request,
    res: ResponseWithError<AuthorCategoryResponse[]>,
  ) => {
    const categories = await this.databaseService.category.findMany();

    res.json(
      categories.map((category) => ({
        id: category.id,
        name: category.name,
      })),
    );
  };

  createCategory = async (
    req: RequestWithBody<CategoryModel>,
    res: ResponseWithError<AuthorCategoryResponse>,
  ) => {
    const category = await this.databaseService.category.create({
      data: req.body,
    });

    res.json({
      id: category.id,
      name: category.name,
    });
  };

  deleteCategory = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    const id = req.params["id"];

    await this.databaseService.category.delete({ where: { id } });

    res.json({});
  };

  updateCategory = async (
    req: RequestWithBody<Partial<CategoryModel>>,
    res: ResponseWithError<AuthorCategoryResponse>,
  ) => {
    const id = req.params["id"];

    const updatedCategory = await this.databaseService.category.update({
      data: req.body,
      where: {
        id,
      },
    });

    res.json({
      id: updatedCategory.id,
      name: updatedCategory.name,
    });
  };
}
