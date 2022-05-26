import { AuthController } from "@/controller/AuthController";
import { EnvironmentModule } from "./EnvironmentModule";
import { ServiceModule } from "./ServiceModule";

export class ControllerModule {
  readonly authController: AuthController;

  constructor(services: ServiceModule, environment: EnvironmentModule) {
    this.authController = new AuthController(
      services.databaseService,
      environment.jwtSecret,
      environment.adminRegisterCode,
    );
  }
}
