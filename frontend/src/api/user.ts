import {
  deleteWithToken,
  getWithToken,
  patchWithToken,
  post,
} from "@/lib/fetch";
import type { Option } from "@/lib/types";

export type UserRole = "AUTHOR" | "ADMIN";

export interface User {
  token: string;
  role: UserRole;
}

export interface AdminUser {
  id: string;
  username: string;
}

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  try {
    return await post("/api/auth/login", {
      username: username.trim(),
      password,
    });
  } catch (e) {
    return undefined;
  }
};

const usersBase = "/api/users";

export const updatePassword = async (
  newPassword: string,
  token: string
): Promise<void> =>
  patchWithToken(`${usersBase}/me`, token, { password: newPassword });

export const getAdminUsers = async (token: string): Promise<AdminUser[]> =>
  getWithToken(usersBase, token);

export const deleteUser = async (
  token: string,
  user: AdminUser
): Promise<unknown> => deleteWithToken(`${usersBase}/${user.id}`, token);
