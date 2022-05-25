import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "argon2";

export const createAllowOnlyOneAdmin =
  (client: PrismaClient): Prisma.Middleware =>
  async (params, next) => {
    if (
      params.model === "User" &&
      (params.action === "create" || params.action === "createMany") &&
      params.args.role === "ADMIN"
    ) {
      const rowCount = await client.user.count({
        where: {
          role: "ADMIN",
        },
      });
      if (rowCount >= 1) {
        throw new Error("Only one admin can exist!");
      }
    }

    return next(params);
  };

// Hash user password before it is inserted into the database
export const hashUserPassword: Prisma.Middleware = async (params, next) => {
  if (
    params.model === "User" &&
    ["create", "createMany", "update", "updateMany"].includes(params.action) &&
    params.args.password !== undefined
  ) {
    const hashedPassword = await hash(params.args.password);
    params.args.password = hashedPassword;
  }

  return next(params);
};
