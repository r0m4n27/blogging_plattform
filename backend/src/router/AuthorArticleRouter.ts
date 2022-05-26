import { SiteRouter } from "@/common/siteRouter";
import { AuthorArticleController } from "@/controller/AuthorArticleController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { articleSchema } from "@/model/authorArticleModels";
import { Router } from "express";

export class AuthorArticleRouter implements SiteRouter {
  readonly path: string = "/author/articles";
  readonly router: Router;

  constructor(
    controller: AuthorArticleController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();

    this.router.get(
      "/",
      authMiddleware.userGuard("AUTHOR"),
      controller.readAll,
    );
    this.router.get(
      "/:id",
      authMiddleware.userGuard("AUTHOR"),
      controller.readSingle,
    );

    this.router.post(
      "/",
      authMiddleware.userGuard("AUTHOR"),
      commonMiddleware.validateBody(articleSchema),
      controller.create,
    );
    this.router.patch(
      "/:id",
      authMiddleware.userGuard("AUTHOR"),
      commonMiddleware.validateBody(articleSchema.partial()),
      controller.update,
    );

    this.router.delete(
      "/:id",
      authMiddleware.userGuard("AUTHOR"),
      controller.delete,
    );
  }
}
