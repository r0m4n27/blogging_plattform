import { ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { VisitorController } from "@blog/backend/controller/VisitorController";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { idParamsSchema } from "@blog/backend/model/commonModels";
import { readArticlesQuerySchema } from "@blog/backend/model/visitorModels";

// All routes that can be accessed by the visitor
//
// Since they contain different endpoints
// many routers could be created but they would be pretty empty.
// So every visitor route is bundled here
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
