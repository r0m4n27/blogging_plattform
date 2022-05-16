import type { Option } from "@/lib/types";

export type UserType = "author" | "admin";

export interface User {
  token: string;
  type: UserType;
}

export interface AdminUser {
  id: string;
  name: string;
}

let mockAdminUsers: AdminUser[] = [
  {
    id: "1",
    name: "test1",
  },
  {
    id: "2",
    name: "test2",
  },
  {
    id: "3",
    name: "test3",
  },
  {
    id: "4",
    name: "test4",
  },
];

export const login = async (
  username: string,
  password: string
): Promise<Option<User>> => {
  return {
    token: `${username}:${password}`,
    type: "admin",
  };

  return undefined;
};

export const updatePassword = async (newPassword: string): Promise<void> => {
  return;
};

export const fetchAdminUsers = async (): Promise<AdminUser[]> => {
  return mockAdminUsers;
};

export const deleteUser = async (user: AdminUser): Promise<void> => {
  mockAdminUsers = mockAdminUsers.filter((u) => u.id !== user.id);
};
