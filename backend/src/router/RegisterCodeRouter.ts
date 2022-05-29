import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { idParamsSchema } from "@/model/commonModels";
import { Router } from "express";

export class RegisterCodeRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth/registerCodes";

  constructor(
    controller: RegisterCodeController,
    authMiddleware: AuthMiddleware,
    commonMiddleware: CommonMiddleware,
  ) {
    this.router = Router();

    Route.get("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.listAll)
      .apply(this.router);

    Route.post("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.create)
      .apply(this.router);

    Route.delete("/:id")
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.delete)
      .apply(this.router);
  }
}
