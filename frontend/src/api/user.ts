import { deleteWithToken, getWithToken, patchWithToken } from "@/lib/fetch";

export interface AdminUser {
  id: string;
  username: string;
}

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
