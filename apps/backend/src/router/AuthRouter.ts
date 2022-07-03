import { type ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { AuthController } from "@blog/backend/controller/AuthController";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import {
  loginPayloadSchema,
  registerPayloadSchema,
} from "@blog/backend/model/authModels";

export class AuthRouter implements SiteRouter {
  readonly path: string = "/auth";

  private readonly loginRoute: ConfiguredRoute;
  private readonly registerRoute: ConfiguredRoute;

  constructor(controller: AuthController, commonMiddleware: CommonMiddleware) {
    this.loginRoute = Route.post("/login")
      .use(commonMiddleware.validateBody(loginPayloadSchema))
      .handle(controller.login);

    this.registerRoute = Route.post("/register")
      .use(commonMiddleware.validateBody(registerPayloadSchema))
      .handle(controller.register);
  }

  get routes() {
    return [this.loginRoute, this.registerRoute];
  }
}
