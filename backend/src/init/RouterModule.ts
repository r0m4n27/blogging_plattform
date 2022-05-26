import { SiteRouter } from "@/common/siteRouter";
import { AuthRouter } from "@/router/AuthRouter";
import { RegisterCodeRouter } from "@/router/RegisterCodeRouter";
import { SiteConfigRouter } from "@/router/SiteConfigRouter";
import { ControllerModule } from "./ControllerModule";
import { MiddlewareModule } from "./MiddlewareModule";

export class RouterModule {
  private readonly authRouter: AuthRouter;
  private readonly registerCodeRouter: RegisterCodeRouter;
  private readonly siteConfigRouter: SiteConfigRouter;

  constructor(controllers: ControllerModule, middleware: MiddlewareModule) {
    this.authRouter = new AuthRouter(
      controllers.authController,
      middleware.commonMiddleware,
    );

    this.registerCodeRouter = new RegisterCodeRouter(
      controllers.registerCodeController,
      middleware.authMiddleware,
    );

    this.siteConfigRouter = new SiteConfigRouter(
      controllers.siteConfigController,
      middleware.commonMiddleware,
      middleware.authMiddleware,
    );
  }

  get routers(): SiteRouter[] {
    return [this.authRouter, this.registerCodeRouter, this.siteConfigRouter];
  }
}
