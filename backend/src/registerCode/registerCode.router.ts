import { userGuard } from "@/common/express/middleware";
import { SiteRouter } from "@/common/siteRouter";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { RegisterCodeController } from "./registerCode.controller";

export class RegisterCodeRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth/registerCodes";

  constructor(
    controller: RegisterCodeController,
    prisma: PrismaClient,
    jwtSecret: string,
  ) {
    this.router = Router();

    this.router.get(
      "/",
      userGuard(prisma, jwtSecret, "ADMIN"),
      controller.listAll,
    );

    this.router.post(
      "/",
      userGuard(prisma, jwtSecret, "ADMIN"),
      controller.create,
    );

    this.router.delete(
      "/:id",
      userGuard(prisma, jwtSecret, "ADMIN"),
      controller.delete,
    );
  }
}
