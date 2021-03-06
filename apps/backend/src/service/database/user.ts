import { authErrorMessages } from "@blog/backend/common/errorMessages";
import { HttpException } from "@blog/backend/common/router/types";
import type { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "argon2";

// Allow only one admin in the database
export const createAllowOnlyOneAdmin =
  (client: PrismaClient): Prisma.Middleware =>
  async (params, next) => {
    if (
      params.model === "User" &&
      (params.action === "create" || params.action === "createMany") &&
      params.args.data.role === "ADMIN"
    ) {
      const rowCount = await client.user.count({
        where: {
          role: "ADMIN",
        },
      });
      if (rowCount >= 1) {
        throw new HttpException(authErrorMessages.noSecondAdmin);
      }
    }

    return next(params);
  };

// Hash user password before it is inserted into the database
export const hashUserPassword: Prisma.Middleware = async (params, next) => {
  if (
    params.model === "User" &&
    ["create", "createMany", "update", "updateMany"].includes(params.action) &&
    params.args.data.password !== undefined
  ) {
    const hashedPassword = await hash(params.args.data.password);
    params.args.data.password = hashedPassword;
  }

  return next(params);
};
