import { ConfiguredRoute, Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";

export class RegisterCodeRouter implements SiteRouter {
  readonly path: string = "/auth/registerCodes";

  private readonly readAllRoute: ConfiguredRoute;
  private readonly createRoute: ConfiguredRoute;
  private readonly deleteRoute: ConfiguredRoute;

  constructor(
    controller: RegisterCodeController,
    authMiddleware: AuthMiddleware,
    commonMiddleware: CommonMiddleware,
  ) {
    this.readAllRoute = Route.get("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.listAll);

    this.createRoute = Route.post("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.create);

    this.deleteRoute = Route.delete("/:id")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.delete);
  }

  get routes() {
    return [this.readAllRoute, this.deleteRoute, this.createRoute];
  }
}
