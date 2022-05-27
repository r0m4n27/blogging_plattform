import { deleteWithToken, getWithToken, post } from "@/lib/fetch";
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

export const updatePassword = async (newPassword: string): Promise<void> => {
  return;
};

export const getAdminUsers = async (token: string): Promise<AdminUser[]> =>
  getWithToken("/api/users", token);

export const deleteUser = async (
  token: string,
  user: AdminUser
): Promise<unknown> => deleteWithToken(`/api/users/${user.id}`, token);
