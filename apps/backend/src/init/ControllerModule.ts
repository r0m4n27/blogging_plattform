import { AuthController } from "@blog/backend/controller/AuthController";
import { AuthorArticleController } from "@blog/backend/controller/AuthorArticleController";
import { AuthorCategoryController } from "@blog/backend/controller/AuthorCategoryController";
import { RegisterCodeController } from "@blog/backend/controller/RegisterCodeController";
import { SiteConfigController } from "@blog/backend/controller/SiteConfigController";
import { UserController } from "@blog/backend/controller/UserController";
import { VisitorController } from "@blog/backend/controller/VisitorController";
import type { ServiceModule } from "./ServiceModule";

export class ControllerModule {
  readonly authController: AuthController;
  readonly registerCodeController: RegisterCodeController;
  readonly siteConfigController: SiteConfigController;
  readonly userController: UserController;
  readonly authorCategoryController: AuthorCategoryController;
  readonly authorArticleController: AuthorArticleController;
  readonly visitorController: VisitorController;

  constructor(services: ServiceModule) {
    this.authController = new AuthController(services.authService);

    this.registerCodeController = new RegisterCodeController(
      services.databaseService,
    );

    this.siteConfigController = new SiteConfigController(
      services.databaseService,
    );
    this.userController = new UserController(services.databaseService);
    this.authorCategoryController = new AuthorCategoryController(
      services.categoryService,
    );
    this.authorArticleController = new AuthorArticleController(
      services.articleService,
    );

    this.visitorController = new VisitorController(
      services.articleService,
      services.categoryService,
    );
  }
}
