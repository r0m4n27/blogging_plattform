import { SiteRouter } from "@/common/siteRouter";
import { AuthRouter } from "@/router/AuthRouter";
import { ControllerModule } from "./ControllerModule";

export class RouterModule {
  private readonly authRouter: AuthRouter;

  constructor(controllers: ControllerModule) {
    this.authRouter = new AuthRouter(controllers.authController);
  }

  get routers(): SiteRouter[] {
    return [this.authRouter];
  }
}
