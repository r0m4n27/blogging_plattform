import { SiteRouter } from "@/common/siteRouter";
import { AuthRouter } from "@/router/AuthRouter";
import { RegisterCodeRouter } from "@/router/RegisterCodeRouter";
import { SiteConfigRouter } from "@/router/SiteConfigRouter";
import { UserRouter } from "@/router/UserRouter";
import { ControllerModule } from "./ControllerModule";
import { MiddlewareModule } from "./MiddlewareModule";

export class RouterModule {
  private readonly authRouter: AuthRouter;
  private readonly registerCodeRouter: RegisterCodeRouter;
  private readonly siteConfigRouter: SiteConfigRouter;
  private readonly userRouter: UserRouter;

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

    this.userRouter = new UserRouter(
      controllers.userController,
      middleware.authMiddleware,
      middleware.commonMiddleware,
    );
  }

  get routers(): SiteRouter[] {
    return [
      this.authRouter,
      this.registerCodeRouter,
      this.siteConfigRouter,
      this.userRouter,
    ];
  }
}
