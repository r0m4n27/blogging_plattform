import { HttpException, Req } from "@/common/router/types";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/model/authModels";
import { AuthService } from "@/service/AuthService";

export class AuthController {
  constructor(private readonly auth: AuthService) {}

  login = async (req: Req<LoginPayload>): Promise<AuthResponse> => {
    const { username, password } = req.body;

    const authResponse = await this.auth.login(username, password);
    if (typeof authResponse === "object") {
      return authResponse;
    } else {
      throw new HttpException(authResponse);
    }
  };

  register = async (req: Req<RegisterPayload>): Promise<AuthResponse> => {
    const { username, password, registerCode } = req.body;

    const authResponse = await this.auth.register(
      username,
      password,
      registerCode,
    );

    if (typeof authResponse === "object") {
      return authResponse;
    } else {
      throw new HttpException(authResponse);
    }
  };
}
