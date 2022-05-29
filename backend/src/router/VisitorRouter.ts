import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { VisitorController } from "@/controller/VisitorController";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";
import { readArticlesQuerySchema } from "@/model/visitorModels";
import { Router } from "express";

export class VisitorRouter implements SiteRouter {
  readonly path: string = "/";
  readonly router: Router;

  constructor(
    controller: VisitorController,
    commonMiddleware: CommonMiddleware,
  ) {
    this.router = Router();

    Route.get("/articles")
      .use(commonMiddleware.validateQuery(readArticlesQuerySchema))
      .handle(controller.readArticles)
      .apply(this.router);

    Route.get("/articles/:id")
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readSingleArticle)
      .apply(this.router);

    Route.get("/archive").handle(controller.readArchive).apply(this.router);

    Route.get("/categories").handle(controller.readCategories);
    Route.get("/categories/:id")
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readCategory)
      .apply(this.router);
  }
}
