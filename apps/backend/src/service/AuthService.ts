import { verifyJwt, signJwt } from "@blog/backend/common/jwt";
import type { AuthResponse, LoginToken } from "@blog/backend/model/authModels";
import type { User, UserRole } from "@prisma/client";
import type { DatabaseService } from "./database";
import { verify as verifyPassword } from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { HttpException } from "@blog/backend/common/router/types";
import { authErrorMessages } from "@blog/backend/common/errorMessages";

export class AuthService {
  constructor(
    private readonly database: DatabaseService,
    private readonly jwtSecret: string,
    private readonly adminRegisterCode: string,
    private readonly tokenExpiryIntervall: string,
  ) {}

  // Return the jwt token if the username is found and the password is correct
  login = async (username: string, password: string): Promise<AuthResponse> => {
    const user = await this.database.user.findUnique({ where: { username } });
    if (user === null) throw new HttpException(authErrorMessages.badLogin);

    if (await verifyPassword(user.password, password)) {
      return await this.createAuthResponse(user);
    } else {
      throw new HttpException(authErrorMessages.badLogin);
    }
  };

  // Create a user if the register code is found
  // If the admin register code is used and admin is created
  //
  // The register code is deleted when the registration is successful
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
        throw new HttpException(authErrorMessages.cantFindCode);
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
        throw new HttpException(authErrorMessages.usernameExists);
      } else {
        throw e;
      }
    }
  };

  // To have a simpler frontend API the token only expires in 30 days
  private createAuthResponse = async (user: User): Promise<AuthResponse> => {
    const token: LoginToken = {
      username: user.username,
      role: user.role,
    };

    return {
      token: await signJwt(token, this.jwtSecret, {
        expiresIn: this.tokenExpiryIntervall,
      }),
      role: user.role,
    };
  };

  // If the userRole is provided only the specified role will pass
  // otherwise every role will pass
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
