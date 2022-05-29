import { ConfiguredRoute, Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { UserController } from "@/controller/UserController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";
import { updateUserSchema } from "@/model/userModels";

export class UserRouter implements SiteRouter {
  readonly path: string = "/users";

  private readonly readAllRoute: ConfiguredRoute;
  private readonly deleteRoute: ConfiguredRoute;
  private readonly updateRoute: ConfiguredRoute;

  constructor(
    userController: UserController,
    authMiddleware: AuthMiddleware,
    commonMiddleware: CommonMiddleware,
  ) {
    this.readAllRoute = Route.get("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(userController.readAllExceptAdmin);

    this.deleteRoute = Route.delete("/:id")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(userController.deleteUser);

    this.updateRoute = Route.patch("/me")
      .use(authMiddleware.userGuard())
      .use(commonMiddleware.validateBody(updateUserSchema.partial()))
      .handle(userController.updateCurrentUser);
  }

  get routes() {
    return [this.readAllRoute, this.deleteRoute, this.updateRoute];
  }
}
