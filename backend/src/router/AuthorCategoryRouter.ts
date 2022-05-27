import { SiteRouter } from "@/common/siteRouter";
import { AuthorCategoryController } from "@/controller/AuthorCategoryController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { categorySchema } from "@/model/authorCategoryModels";
import { Router } from "express";

export class AuthorCategoryRouter implements SiteRouter {
  readonly path: string = "/author/categories";
  readonly router: Router;

  constructor(
    controller: AuthorCategoryController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();

    this.router.get(
      "/",
      authMiddleware.userGuard("AUTHOR"),
      controller.readAll,
    );
    this.router.post(
      "/",
      authMiddleware.userGuard("AUTHOR"),
      commonMiddleware.validateBody(categorySchema),
      controller.createCategory,
    );

    this.router.patch(
      "/:id",
      authMiddleware.userGuard("AUTHOR"),
      commonMiddleware.validateBody(categorySchema.partial()),
      controller.updateCategory,
    );

    this.router.delete(
      "/:id",
      authMiddleware.userGuard("AUTHOR"),
      controller.deleteCategory,
    );
  }
}
