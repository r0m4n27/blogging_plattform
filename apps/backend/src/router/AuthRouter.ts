import { ConfiguredRoute, Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { AuthController } from "@/controller/AuthController";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { loginPayloadSchema, registerPayloadSchema } from "@/model/authModels";

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
