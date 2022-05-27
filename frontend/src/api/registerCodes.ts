import { deleteWithToken, getWithToken, postWithToken } from "@/lib/fetch";

export const getRegisterCodes = (token: string): Promise<string[]> =>
  getWithToken("/api/auth/registerCodes", token);

export const createRegisterCode = (token: string): Promise<string[]> =>
  postWithToken("/api/auth/registerCodes", token, {});

export const deleteRegisterCode = (
  registerCode: string,
  token: string
): Promise<void> =>
  deleteWithToken(`/api/auth/registerCodes/${registerCode}`, token);
