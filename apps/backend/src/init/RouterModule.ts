import type { SiteRouter } from "@blog/backend/common/siteRouter";
import { AuthorArticleRouter } from "@blog/backend/router/AuthorArticleRouter";
import { AuthorCategoryRouter } from "@blog/backend/router/AuthorCategoryRouter";
import { AuthRouter } from "@blog/backend/router/AuthRouter";
import { ImageRouter } from "@blog/backend/router/ImageRouter";
import { RegisterCodeRouter } from "@blog/backend/router/RegisterCodeRouter";
import { SiteConfigRouter } from "@blog/backend/router/SiteConfigRouter";
import { UserRouter } from "@blog/backend/router/UserRouter";
import { VisitorRouter } from "@blog/backend/router/VisitorRouter";
import type { ControllerModule } from "./ControllerModule";
import type { MiddlewareModule } from "./MiddlewareModule";

export class RouterModule {
  private readonly authRouter: AuthRouter;
  private readonly registerCodeRouter: RegisterCodeRouter;
  private readonly siteConfigRouter: SiteConfigRouter;
  private readonly userRouter: UserRouter;
  private readonly authorCategoryRouter: AuthorCategoryRouter;
  private readonly authorArticleRouter: AuthorArticleRouter;
  private readonly visitorRouter: VisitorRouter;

  private readonly imageRouter: ImageRouter;

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

    this.imageRouter = new ImageRouter();
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
      this.imageRouter,
    ];
  }
}
