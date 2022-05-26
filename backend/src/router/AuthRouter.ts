import { SiteRouter } from "@/common/siteRouter";
import { AuthController } from "@/controller/AuthController";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { loginPayloadSchema, registerPayloadSchema } from "@/model/authModels";
import { Router } from "express";

export class AuthRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth";

  constructor(controller: AuthController, commonMiddleware: CommonMiddleware) {
    this.router = Router();

    this.router.post(
      "/login",
      commonMiddleware.validateBody(loginPayloadSchema),
      controller.login,
    );
    this.router.post(
      "/register",
      commonMiddleware.validateBody(registerPayloadSchema),
      controller.register,
    );
  }
}
