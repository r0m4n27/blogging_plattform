import { LoginToken } from "@/model/authModels";
import { PrismaClient, UserRole } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createErrorResponse } from ".";
import { verify } from "../jwt";

export const validateBody =
  <T>(schema: z.ZodSchema<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      createErrorResponse(res, "Malformed body!");
    } else {
      next();
    }
  };

export const userGuard =
  (prisma: PrismaClient, jwtSecret: string, userRole: UserRole) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const authValue = req.headers["authorization"];
    if (authValue !== undefined) {
      const bearer = authValue.split(" ");

      const firstPart = bearer.at(0);
      if (firstPart === undefined || firstPart.toLowerCase() !== "bearer") {
        return createErrorResponse(res, "Authorization header malformed");
      } else {
        const token = bearer.at(1);
        if (token !== undefined) {
          await verifyRoleAndExistingUser(
            prisma,
            jwtSecret,
            userRole,
            res,
            token,
          );
        } else {
          return createErrorResponse(res, "Authorization header malformed");
        }
      }
    } else {
      return createErrorResponse(res, "Token not provided!", 401);
    }

    next();
  };

const verifyRoleAndExistingUser = async (
  prisma: PrismaClient,
  jwtSecret: string,
  userRole: UserRole,
  res: Response,
  token: string,
) => {
  try {
    const loginToken = await verify<LoginToken>(token, jwtSecret);
    // Check if the user has the correct role
    if (userRole !== loginToken.role) {
      return createErrorResponse(res, "Unauthorized", 401);
    }

    // Check if the user was not deleted
    const user = await prisma.user.findUnique({
      where: { username: loginToken.username },
    });
    if (user === undefined) {
      return createErrorResponse(res, "Unauthorized", 401);
    }
  } catch (e) {
    return createErrorResponse(res, "Unauthorized", 401);
  }
};
