import { type ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { AuthorCategoryController } from "@blog/backend/controller/AuthorCategoryController";
import type { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { categorySchema } from "@blog/backend/model/authorCategoryModels";
import { idParamsSchema } from "@blog/backend/model/commonModels";

export class AuthorCategoryRouter implements SiteRouter {
  readonly path: string = "/author/categories";

  private readonly readAllRoute: ConfiguredRoute;
  private readonly createRoute: ConfiguredRoute;
  private readonly updateRoute: ConfiguredRoute;
  private readonly deleteRoute: ConfiguredRoute;

  constructor(
    controller: AuthorCategoryController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.readAllRoute = Route.get("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .handle(controller.readAll);

    this.createRoute = Route.post("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateBody(categorySchema))
      .handle(controller.createCategory);

    this.updateRoute = Route.patch("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .use(commonMiddleware.validateBody(categorySchema.partial()))
      .handle(controller.updateCategory);

    this.deleteRoute = Route.delete("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.deleteCategory);
  }

  get routes() {
    return [this.readAllRoute, this.createRoute, this.updateRoute, this.deleteRoute];
  }
}
