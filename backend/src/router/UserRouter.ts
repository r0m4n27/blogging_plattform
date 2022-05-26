import { SiteRouter } from "@/common/siteRouter";
import { UserController } from "@/controller/UserController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
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

    this.router.get(
      "/",
      authMiddleware.userGuard("ADMIN"),
      userController.readAllExceptAdmin,
    );

    this.router.delete(
      "/:id",
      authMiddleware.userGuard("ADMIN"),
      userController.deleteUser,
    );

    this.router.patch(
      "/me",
      authMiddleware.userGuard(),
      commonMiddleware.validateBody(updateUserSchema),
      userController.updateCurrentUser,
    );
  }
}
