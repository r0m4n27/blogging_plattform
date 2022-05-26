import { PrismaClient } from "@prisma/client";
import { DatabaseService } from "@/service/database";

export class ServiceModule {
  readonly databaseService: DatabaseService;

  constructor(client: PrismaClient) {
    this.databaseService = new DatabaseService(client);
  }
}
