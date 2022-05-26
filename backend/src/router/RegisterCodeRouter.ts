import { SiteRouter } from "@/common/siteRouter";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { Router } from "express";

export class RegisterCodeRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth/registerCodes";

  constructor(
    controller: RegisterCodeController,
    authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();

    this.router.get("/", authMiddleware.userGuard("ADMIN"), controller.listAll);

    this.router.post("/", authMiddleware.userGuard("ADMIN"), controller.create);

    this.router.delete(
      "/:id",
      authMiddleware.userGuard("ADMIN"),
      controller.delete,
    );
  }
}
