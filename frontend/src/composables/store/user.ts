import {
  type User,
  login as loginUser,
  register as registerUser,
} from "@/api/auth";
import { localStorageKeys } from "@/config/localStorage";
import { piniaKeysConfig } from "@/config/pinia";
import type { Option } from "@/lib/types";
import { defineStore } from "pinia";
import { computed, type ComputedRef, type Ref } from "vue";
import { useLocalStorage } from "../util/localStorage";
import { useEmptyStore } from "./emptyStore";
import { visitorRoutes } from "@/lib/router/visitor";

export interface UserState {
  value: Ref<Option<User>>;
  token: ComputedRef<Option<string>>;

  // Return true if the user was successfully logged in
  login: (username: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    password: string,
    registerCode: string
  ) => Promise<boolean>;
  logout: () => void;
}

// Holds the user that is saved in the local storage
export const useUser = defineStore<string, UserState>(
  piniaKeysConfig.user,
  () => {
    const emptyStore = useEmptyStore();

    const user = useLocalStorage<string, User>(localStorageKeys.user);
    const token = computed(() => user.value?.token);

    const login = async (username: string, password: string) => {
      const newUser = await loginUser(username, password);
      user.value = newUser;

      return newUser !== undefined;
    };

    const register = async (
      username: string,
      password: string,
      registerCode: string
    ) => {
      const newUser = await registerUser(username, password, registerCode);
      user.value = newUser;

      return newUser !== undefined;
    };

    // Remove the user and also just redirect to the home page
    // to not create a weird state
    const logout = () => {
      emptyStore.router.push(visitorRoutes.home.route);

      user.value = undefined;
    };

    return {
      value: user,
      token,
      login,
      logout,
      register,
    };
  }
);
