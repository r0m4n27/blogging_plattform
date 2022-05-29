import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { AuthorCategoryController } from "@/controller/AuthorCategoryController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { categorySchema } from "@/model/authorCategoryModels";
import { idParamsSchema } from "@/model/commonModels";
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

    Route.get("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .handle(controller.readAll)
      .apply(this.router);

    Route.post("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateBody(categorySchema))
      .handle(controller.createCategory)
      .apply(this.router);

    Route.patch("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .use(commonMiddleware.validateBody(categorySchema.partial()))
      .handle(controller.updateCategory)
      .apply(this.router);

    Route.delete("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.deleteCategory)
      .apply(this.router);
  }
}
