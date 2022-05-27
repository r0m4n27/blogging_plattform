import { AuthController } from "@/controller/AuthController";
import { AuthorArticleController } from "@/controller/AuthorArticleController";
import { AuthorCategoryController } from "@/controller/AuthorCategoryController";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { SiteConfigController } from "@/controller/SiteConfigController";
import { UserController } from "@/controller/UserController";
import { VisitorController } from "@/controller/VisitorController";
import { ServiceModule } from "./ServiceModule";

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
