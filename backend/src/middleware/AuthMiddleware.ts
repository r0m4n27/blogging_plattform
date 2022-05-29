import { HttpException, Req } from "@/common/router/types";
import { ReqWithUser } from "@/model/authModels";
import { AuthService } from "@/service/AuthService";
import { UserRole } from "@prisma/client";

export class AuthMiddleware {
  constructor(private readonly auth: AuthService) {}

  userGuard =
    (userRole?: UserRole) =>
    async (req: Req): Promise<ReqWithUser> => {
      const headerValue = req.actualRequest.headers["authorization"];
      if (headerValue === undefined)
        throw new HttpException("Token not provided!", 401);

      const token = this.verifyHeader(headerValue);
      if (token === undefined)
        throw new HttpException("Authorization header malformed");

      const user = await this.auth.verifyLoggedInUser(token, userRole);

      if (user !== undefined) {
        const extras =
          typeof req.extras === "object"
            ? {
                ...req.extras,
                user,
              }
            : {
                user,
              };

        return {
          ...req,
          extras,
        };
      } else {
        throw new HttpException("Unauthorized", 401);
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
