import type { Req } from "@blog/backend/common/router/types";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@blog/backend/model/authModels";
import type { AuthService } from "@blog/backend/service/AuthService";

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
