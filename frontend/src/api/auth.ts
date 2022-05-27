import type { Option } from "@/lib/types";
import { post } from "@/lib/fetch";

export type UserRole = "AUTHOR" | "ADMIN";

export interface User {
  token: string;
  role: UserRole;
}

const authBase = "/api/auth";

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  try {
    return await post(`${authBase}/login`, {
      username: username.trim(),
      password,
    });
  } catch (e) {
    return undefined;
  }
};

export const register = async (
  username: string,
  password: string,
  registerCode: string
): Promise<Option<User>> => {
  try {
    return await post(`${authBase}/register`, {
      username: username.trim(),
      password,
      registerCode: registerCode.trim(),
    });
  } catch (e) {
    return undefined;
  }
};
