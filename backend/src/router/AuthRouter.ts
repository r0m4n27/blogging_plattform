import { validateBody } from "@/common/express/middleware";
import { SiteRouter } from "@/common/siteRouter";
import { AuthController } from "@/controller/AuthController";
import { loginPayloadSchema, registerPayloadSchema } from "@/model/authModels";
import { Router } from "express";

export class AuthRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth";

  constructor(controller: AuthController) {
    this.router = Router();

    this.router.post(
      "/login",
      validateBody(loginPayloadSchema),
      controller.login,
    );
    this.router.post(
      "/register",
      validateBody(registerPayloadSchema),
      controller.register,
    );
  }
}
