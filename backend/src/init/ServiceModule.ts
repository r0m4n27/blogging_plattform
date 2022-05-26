import { PrismaClient } from "@prisma/client";
import { DatabaseService } from "@/service/database";
import { AuthService } from "@/service/AuthService";
import { EnvironmentModule } from "./EnvironmentModule";

export class ServiceModule {
  readonly databaseService: DatabaseService;
  readonly authService: AuthService;

  constructor(client: PrismaClient, environment: EnvironmentModule) {
    this.databaseService = new DatabaseService(client);

    this.authService = new AuthService(
      this.databaseService,
      environment.jwtSecret,
      environment.adminRegisterCode,
    );
  }
}
