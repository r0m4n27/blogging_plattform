import { ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { AuthorArticleController } from "@blog/backend/controller/AuthorArticleController";
import type { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { articleSchema } from "@blog/backend/model/authorArticleModels";
import { idParamsSchema } from "@blog/backend/model/commonModels";

export class AuthorArticleRouter implements SiteRouter {
  readonly path: string = "/author/articles";

  private readonly readAllRoute: ConfiguredRoute;
  private readonly readSingleRoute: ConfiguredRoute;
  private readonly createRoute: ConfiguredRoute;
  private readonly updateRoute: ConfiguredRoute;
  private readonly deleteRoute: ConfiguredRoute;

  constructor(
    controller: AuthorArticleController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.readAllRoute = Route.get("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .handle(controller.readAll);

    this.readSingleRoute = Route.get("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readSingle);

    this.createRoute = Route.post("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateBody(articleSchema))
      .handle(controller.create);

    this.deleteRoute = Route.delete("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.delete);

    this.updateRoute = Route.patch("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .use(commonMiddleware.validateBody(articleSchema.partial()))
      .handle(controller.update);
  }

  get routes() {
    return [
      this.readAllRoute,
      this.readSingleRoute,
      this.createRoute,
      this.updateRoute,
      this.deleteRoute,
    ];
  }
}
