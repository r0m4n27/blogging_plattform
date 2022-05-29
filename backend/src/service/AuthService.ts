import { verifyJwt, signJwt } from "@/common/jwt";
import { AuthResponse, LoginToken } from "@/model/authModels";
import { User, UserRole } from "@prisma/client";
import { DatabaseService } from "./database";
import { verify as verifyPassword } from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { HttpException } from "@/common/router/types";

export class AuthService {
  // Give just a simple generic response
  private readonly badLoginText = "Password does not match!";
  private readonly cantFindCodeText = "Can't find register code!";
  private readonly usernameExistsText = "Username is already taken!";

  constructor(
    private readonly database: DatabaseService,
    private readonly jwtSecret: string,
    private readonly adminRegisterCode: string,
  ) {}

  login = async (username: string, password: string): Promise<AuthResponse> => {
    const user = await this.database.user.findUnique({ where: { username } });
    if (user === null) throw new HttpException(this.badLoginText);

    if (await verifyPassword(user.password, password)) {
      return await this.createAuthResponse(user);
    } else {
      throw new HttpException(this.badLoginText);
    }
  };

  register = async (
    username: string,
    password: string,
    registerCode: string,
  ): Promise<AuthResponse> => {
    // Check and claim register code
    if (registerCode != this.adminRegisterCode) {
      const registerCodes = (await this.database.registerCode.findMany()).map(
        (code) => code.id,
      );

      if (!registerCodes.includes(registerCode))
        throw new HttpException(this.cantFindCodeText);
    }

    const role: UserRole =
      registerCode === this.adminRegisterCode ? "ADMIN" : "AUTHOR";

    try {
      const user = await this.database.user.create({
        data: {
          username,
          role,
          password,
        },
      });

      // Delete register code only when registration was successful
      if (registerCode !== this.adminRegisterCode) {
        await this.database.registerCode.delete({
          where: { id: registerCode },
        });
      }

      return await this.createAuthResponse(user);
    } catch (e) {
      // Catch error when username is already taken
      if (e instanceof PrismaClientKnownRequestError) {
        throw new HttpException(this.usernameExistsText);
      } else {
        throw e;
      }
    }
  };

  private createAuthResponse = async (user: User): Promise<AuthResponse> => {
    const token: LoginToken = {
      username: user.username,
      role: user.role,
    };

    return {
      token: await signJwt(token, this.jwtSecret, { expiresIn: "30d" }),
      role: user.role,
    };
  };

  verifyLoggedInUser = async (
    rawToken: string,
    userRole?: UserRole,
  ): Promise<User | undefined> => {
    try {
      const loginToken = await verifyJwt<LoginToken>(rawToken, this.jwtSecret);

      // Check if the user has the correct role
      // If no role is provided allow every role
      if (userRole !== undefined && userRole !== loginToken.role)
        return undefined;

      // Check if the user was not deleted
      const user =
        (await this.database.user.findUnique({
          where: { username: loginToken.username },
        })) ?? undefined;

      return user;
    } catch (e) {
      // Catch jwt verification error
      return undefined;
    }
  };
}
