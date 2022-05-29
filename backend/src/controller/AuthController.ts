import { Req } from "@/common/router/types";
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

    return await this.auth.login(username, password);
  };

  register = async (req: Req<RegisterPayload>): Promise<AuthResponse> => {
    const { username, password, registerCode } = req.body;

    return await this.auth.register(username, password, registerCode);
  };
}
