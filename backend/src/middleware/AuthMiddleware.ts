import { createErrorResponse } from "@/common/express";
import { AuthService } from "@/service/AuthService";
import { UserRole } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export class AuthMiddleware {
  constructor(private readonly auth: AuthService) {}

  userGuard =
    (userRole?: UserRole) =>
    async (req: Request, res: Response, next: NextFunction) => {
      const headerValue = req.headers["authorization"];
      if (headerValue === undefined)
        return createErrorResponse(res, "Token not provided!", 401);

      const token = this.verifyHeader(headerValue);
      if (token === undefined)
        return createErrorResponse(res, "Authorization header malformed");

      const user = await this.auth.verifyLoggedInUser(token, userRole);

      if (user !== undefined) {
        req.injected ??= {};
        req.injected.user = user;
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
}
