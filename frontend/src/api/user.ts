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
  if (username === "admin" && password === "admin") {
    return {
      token: "123",
      type: "admin",
    };
  } else if (username === "author" && password === "author") {
    return {
      token: "123",
      type: "author",
    };
  } else {
    return undefined;
  }
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
