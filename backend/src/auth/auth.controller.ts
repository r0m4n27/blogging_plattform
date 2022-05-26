import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import { sign } from "@/common/jwt";
import { PrismaClient, UserRole } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { verify } from "argon2";
import {
  LoginPayload,
  AuthResponse,
  LoginToken,
  RegisterPayload,
} from "./auth.types";

export class AuthController {
  // Give just a simple generic response
  private readonly badLoginText = "Password does not match!";
  private readonly cantFindCodeText = "Can't find register code!";
  private readonly usernameExistsText = "Username is already taken!";

  constructor(
    private readonly prisma: PrismaClient,
    private readonly jwtSecret: string,
    // With the provided register code an admin can be created
    private readonly adminRegisterCode: string,
  ) {}

  login = async (
    req: RequestWithBody<LoginPayload>,
    res: ResponseWithError<AuthResponse>,
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
        await this.createAuthResponse(res, username, dbUser.role);
      } else {
        createErrorResponse(res, this.badLoginText);
      }
    }
  };

  register = async (
    req: RequestWithBody<RegisterPayload>,
    res: ResponseWithError<AuthResponse>,
  ) => {
    const { username, password, registerCode } = req.body;

    if (registerCode !== this.adminRegisterCode) {
      const registerCodes = (await this.prisma.registerCode.findMany()).map(
        (code) => code.id,
      );

      if (registerCodes.includes(registerCode)) {
        await this.prisma.registerCode.delete({ where: { id: registerCode } });
      } else {
        return createErrorResponse(res, this.cantFindCodeText);
      }
    }

    const role: UserRole =
      registerCode === this.adminRegisterCode ? "ADMIN" : "AUTHOR";

    try {
      await this.prisma.user.create({
        data: {
          username,
          role,
          password,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return createErrorResponse(res, this.usernameExistsText);
      } else {
        throw e;
      }
    }

    await this.createAuthResponse(res, username, role);
  };

  private createAuthResponse = async (
    res: ResponseWithError<AuthResponse>,
    username: string,
    role: UserRole,
  ) => {
    const token: LoginToken = {
      username,
      role,
    };

    res.json({
      token: await sign(token, this.jwtSecret, { expiresIn: "30d" }),
      role,
    });
  };
}
