import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/model/authModels";
import { AuthService } from "@/service/AuthService";

export class AuthController {
  constructor(private readonly auth: AuthService) {}

  login = async (
    req: RequestWithBody<LoginPayload>,
    res: ResponseWithError<AuthResponse>,
  ) => {
    const { username, password } = req.body;

    const authResponse = await this.auth.login(username, password);
    if (typeof authResponse === "object") {
      return res.json(authResponse);
    } else {
      return createErrorResponse(res, authResponse);
    }
  };

  register = async (
    req: RequestWithBody<RegisterPayload>,
    res: ResponseWithError<AuthResponse>,
  ) => {
    const { username, password, registerCode } = req.body;

    const authResponse = await this.auth.register(
      username,
      password,
      registerCode,
    );

    if (typeof authResponse === "object") {
      return res.json(authResponse);
    } else {
      return createErrorResponse(res, authResponse);
    }
  };
}
