import type { ServerConfig } from "@blog/backend/server";

export class EnvironmentModule {
  readonly serverConfig: ServerConfig;

  readonly jwtSecret: string;
  readonly adminRegisterCode: string;

  readonly tokenExpiryIntervall: string;

  constructor() {
    const serverPort = parseInt(process.env.SERVER_PORT ?? "4000");

    this.serverConfig = {
      port: serverPort,
    };

    const jwtSecret = process.env.JWT_SECRET;
    if (jwtSecret) {
      this.jwtSecret = jwtSecret;
    } else {
      throw new Error("JWT_SECRET not set!");
    }

    const adminRegisterCode = process.env.ADMIN_REGISTER_CODE;
    if (adminRegisterCode) {
      this.adminRegisterCode = adminRegisterCode;
    } else {
      throw new Error("ADMIN_REGISTER_CODE not set!");
    }

    const tokenExpiryIntervall = process.env.TOKEN_EXPIRY_INTERVALL;
    if (tokenExpiryIntervall) {
      this.tokenExpiryIntervall = tokenExpiryIntervall;
    } else {
      throw new Error("TOKEN_EXPIRY_INTERVALL not set!");
    }
  }
}
