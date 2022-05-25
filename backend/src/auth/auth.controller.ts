import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import { sign } from "@/common/jwt";
import { PrismaClient } from "@prisma/client";
import { verify } from "argon2";
import { LoginPayload, LoginResponse, LoginToken } from "./auth.types";

export class AuthController {
  // Give just a simple generic response
  private readonly badLoginText = "Password does not match!";
  constructor(
    private readonly prisma: PrismaClient,
    private readonly jwtSecret: string,
  ) {}

  login = async (
    req: RequestWithBody<LoginPayload>,
    res: ResponseWithError<LoginResponse>,
  ) => {
    const { username, password } = req.body;

    const dbUser = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (dbUser === null) {
      createErrorResponse(res, this.badLoginText);
    } else {
      if (await verify(dbUser.password, password)) {
        const token: LoginToken = {
          username: dbUser.username,
          role: dbUser.role,
        };

        res.json({
          token: await sign(token, this.jwtSecret, { expiresIn: "30d" }),
          role: dbUser.role,
        });
      } else {
        createErrorResponse(res, this.badLoginText);
      }
    }
  };
}
