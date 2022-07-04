import { type ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { UserController } from "@blog/backend/controller/UserController";
import type { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { idParamsSchema } from "@blog/backend/model/commonModels";
import { updateUserSchema } from "@blog/backend/model/userModels";

// The admin can read all users and delete the
//
// There is also route for changing the settings
// for the current logged in user
// Which can be used by the admin and authors
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
