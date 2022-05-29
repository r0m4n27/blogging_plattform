import { ConfiguredRoute, Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { VisitorController } from "@/controller/VisitorController";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";
import { readArticlesQuerySchema } from "@/model/visitorModels";

export class VisitorRouter implements SiteRouter {
  readonly path: string = "/";

  private readonly readArticlesRoute: ConfiguredRoute;
  private readonly readSingleArticleRoute: ConfiguredRoute;
  private readonly readArchiveRoute: ConfiguredRoute;
  private readonly readCategoriesRoute: ConfiguredRoute;
  private readonly readSingleCategoryRoute: ConfiguredRoute;

  constructor(
    controller: VisitorController,
    commonMiddleware: CommonMiddleware,
  ) {
    this.readArticlesRoute = Route.get("/articles")
      .use(commonMiddleware.validateQuery(readArticlesQuerySchema))
      .handle(controller.readArticles);

    this.readSingleArticleRoute = Route.get("/articles/:id")
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readSingleArticle);

    this.readArchiveRoute = Route.get("/archive").handle(
      controller.readArchive,
    );

    this.readCategoriesRoute = Route.get("/categories").handle(
      controller.readCategories,
    );
    this.readSingleCategoryRoute = Route.get("/categories/:id")
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readCategory);
  }

  get routes() {
    return [
      this.readArticlesRoute,
      this.readArchiveRoute,
      this.readCategoriesRoute,
      this.readSingleArticleRoute,
      this.readSingleCategoryRoute,
    ];
  }
}
