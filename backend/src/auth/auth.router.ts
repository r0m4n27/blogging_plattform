import { validateBody } from "@/common/express/middleware";
import { SiteRouter } from "@/common/siteRouter";
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { loginPayloadSchema } from "./auth.types";

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
  }
}
