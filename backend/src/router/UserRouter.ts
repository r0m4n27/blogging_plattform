import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { UserController } from "@/controller/UserController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";
import { updateUserSchema } from "@/model/userModels";
import { Router } from "express";

export class UserRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/users";

  constructor(
    userController: UserController,
    authMiddleware: AuthMiddleware,
    commonMiddleware: CommonMiddleware,
  ) {
    this.router = Router();

    Route.get("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(userController.readAllExceptAdmin)
      .apply(this.router);

    Route.delete("/:id")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(userController.deleteUser)
      .apply(this.router);

    Route.patch("/me")
      .use(authMiddleware.userGuard())
      .use(commonMiddleware.validateBody(updateUserSchema.partial()))
      .handle(userController.updateCurrentUser)
      .apply(this.router);
  }
}
