import { SiteRouter } from "@/common/siteRouter";
import { AuthorArticleRouter } from "@/router/AuthorArticleRouter";
import { AuthorCategoryRouter } from "@/router/AuthorCategoryRouter";
import { AuthRouter } from "@/router/AuthRouter";
import { RegisterCodeRouter } from "@/router/RegisterCodeRouter";
import { SiteConfigRouter } from "@/router/SiteConfigRouter";
import { UserRouter } from "@/router/UserRouter";
import { VisitorRouter } from "@/router/VisitorRouter";
import { ControllerModule } from "./ControllerModule";
import { MiddlewareModule } from "./MiddlewareModule";

export class RouterModule {
  private readonly authRouter: AuthRouter;
  private readonly registerCodeRouter: RegisterCodeRouter;
  private readonly siteConfigRouter: SiteConfigRouter;
  private readonly userRouter: UserRouter;
  private readonly authorCategoryRouter: AuthorCategoryRouter;
  private readonly authorArticleRouter: AuthorArticleRouter;
  private readonly visitorRouter: VisitorRouter;

  constructor(controllers: ControllerModule, middleware: MiddlewareModule) {
    this.authRouter = new AuthRouter(
      controllers.authController,
      middleware.commonMiddleware,
    );

    this.registerCodeRouter = new RegisterCodeRouter(
      controllers.registerCodeController,
      middleware.authMiddleware,
      middleware.commonMiddleware,
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
    this.authorCategoryRouter = new AuthorCategoryRouter(
      controllers.authorCategoryController,
      middleware.commonMiddleware,
      middleware.authMiddleware,
    );

    this.authorArticleRouter = new AuthorArticleRouter(
      controllers.authorArticleController,
      middleware.commonMiddleware,
      middleware.authMiddleware,
    );

    this.visitorRouter = new VisitorRouter(
      controllers.visitorController,
      middleware.commonMiddleware,
    );
  }

  get routers(): SiteRouter[] {
    return [
      this.authRouter,
      this.registerCodeRouter,
      this.siteConfigRouter,
      this.userRouter,
      this.authorCategoryRouter,
      this.authorArticleRouter,
      this.visitorRouter,
    ];
  }
}
