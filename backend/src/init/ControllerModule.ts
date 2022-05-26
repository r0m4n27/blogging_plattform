import { AuthController } from "@/controller/AuthController";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { SiteConfigController } from "@/controller/SiteConfigController";
import { ServiceModule } from "./ServiceModule";

export class ControllerModule {
  readonly authController: AuthController;
  readonly registerCodeController: RegisterCodeController;
  readonly siteConfigController: SiteConfigController;

  constructor(services: ServiceModule) {
    this.authController = new AuthController(services.authService);

    this.registerCodeController = new RegisterCodeController(
      services.databaseService,
    );

    this.siteConfigController = new SiteConfigController(
      services.databaseService,
    );
  }
}
