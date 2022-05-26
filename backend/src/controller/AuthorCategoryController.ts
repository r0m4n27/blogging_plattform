import { RequestWithBody, ResponseWithError } from "@/common/express";
import { CategoryModel } from "@/model/authorCategoryModels";
import { DatabaseService } from "@/service/database";
import { Category } from "@prisma/client";
import { Request } from "express";

export class AuthorCategoryController {
  constructor(private readonly databaseService: DatabaseService) {}

  // Every Author has the same categories
  readAll = async (_: Request, res: ResponseWithError<Category[]>) => {
    const categories = await this.databaseService.category.findMany();

    res.json(categories);
  };

  createCategory = async (
    req: RequestWithBody<CategoryModel>,
    res: ResponseWithError<Category>,
  ) => {
    const category = await this.databaseService.category.create({
      data: req.body,
    });

    res.json(category);
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
    res: ResponseWithError<Category>,
  ) => {
    const id = req.params["id"];

    const updatedCategory = await this.databaseService.category.update({
      data: req.body,
      where: {
        id,
      },
    });

    res.json(updatedCategory);
  };
}
