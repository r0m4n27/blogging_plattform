import { PrismaClient, PrismaPromise } from "@prisma/client";
import { createAllowOnlyOneSiteConfigRow } from "./siteConfig";
import { createAllowOnlyOneAdmin, hashUserPassword } from "./user";

export class DatabaseService {
  private readonly client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;

    // siteConfig
    this.client.$use(createAllowOnlyOneSiteConfigRow(client));

    // user

    this.client.$use(createAllowOnlyOneAdmin(client));
    this.client.$use(hashUserPassword);
  }

  transaction<P extends PrismaPromise<unknown>[]>(arg: [...P]) {
    return this.client.$transaction(arg);
  }

  get siteConfig() {
    return this.client.siteConfig;
  }

  get user() {
    return this.client.user;
  }

  get registerCode() {
    return this.client.registerCode;
  }

  get category() {
    return this.client.category;
  }

  get article() {
    return this.client.article;
  }
}
