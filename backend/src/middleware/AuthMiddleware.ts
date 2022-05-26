import { createErrorResponse } from "@/common/express";
import { verify } from "@/common/jwt";
import { LoginToken } from "@/model/authModels";
import { DatabaseService } from "@/service/database/DatabaseService";
import { UserRole } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export class AuthMiddleware {
  constructor(
    private readonly database: DatabaseService,
    private readonly jwtSecret: string,
  ) {}

  userGuard =
    (userRole: UserRole) =>
    async (req: Request, res: Response, next: NextFunction) => {
      const headerValue = req.headers["authorization"];
      if (headerValue === undefined)
        return createErrorResponse(res, "Token not provided!", 401);

      const token = this.verifyHeader(headerValue);
      if (token === undefined)
        return createErrorResponse(res, "Authorization header malformed");

      const verified = await this.verifyRoleAndExistingUser(userRole, token);

      if (verified) {
        next();
      } else {
        return createErrorResponse(res, "Unauthorized", 401);
      }
    };

  private verifyHeader = (header: string): string | undefined => {
    const bearer = header.split(" ");

    const bearerLiteral = bearer.at(0);
    if (bearerLiteral === undefined || bearerLiteral.toLowerCase() !== "bearer")
      return undefined;

    return bearer.at(1);
  };

  private verifyRoleAndExistingUser = async (
    userRole: UserRole,
    token: string,
  ): Promise<boolean> => {
    try {
      const loginToken = await verify<LoginToken>(token, this.jwtSecret);
      // Check if the user has the correct role
      if (userRole !== loginToken.role) return false;

      // Check if the user was not deleted
      const user = await this.database.user.findUnique({
        where: { username: loginToken.username },
      });

      return user !== undefined;
    } catch (e) {
      // Catch verify
      return false;
    }
  };
}
