import { type User, login as loginUser } from "@/api/user";
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
  // Use when it is certain that the user is logged in
  unsafeValue: ComputedRef<User>;

  // Return true if the user was successfully logged in
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useUser = defineStore<string, UserState>(
  piniaKeysConfig.user,
  () => {
    const emptyStore = useEmptyStore();

    const user = useLocalStorage<string, User>(localStorageKeys.user);

    // See comment in the interface
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const unsafeValue = computed(() => user.value!);

    const login = async (username: string, password: string) => {
      const newUser = await loginUser(username, password);
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
      unsafeValue,
      login,
      logout,
    };
  }
);
