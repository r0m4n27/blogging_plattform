import {
  deleteWithToken,
  getWithToken,
  patchWithToken,
} from "@blog/frontend/lib/fetch";

export interface AdminUser {
  id: string;
  username: string;
}

const usersBase = "/api/users";

export const updatePassword =
  (newPassword: string) =>
  (token: string): Promise<void> =>
    patchWithToken(`${usersBase}/me`, token, { password: newPassword });

export const getAdminUsers = async (token: string): Promise<AdminUser[]> =>
  getWithToken(usersBase, token);

export const deleteUser =
  (user: AdminUser) =>
  (token: string): Promise<unknown> =>
    deleteWithToken(`${usersBase}/${user.id}`, token);
