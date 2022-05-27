import type { AdminUser } from "@/api/user";
import { usePageTitle } from "@/composables/head/pageTitle";
import { fetchAdminUsers, deleteUser as deleteUserInternal } from "@/api/user";
import { useEndpoint } from "@/composables/util/endpoint";
import { computed, type ComputedRef, type Ref } from "vue";
import { useUser } from "@/composables/store/user";
import {
  getRegisterCodes,
  deleteRegisterCode,
  createRegisterCode,
} from "@/api/registerCodes";

export interface HomePageState {
  users: Ref<AdminUser[]>;
  deleteUser: ComputedRef<(user: AdminUser) => Promise<void>>;

  codes: Ref<string[]>;
  deleteCode: ComputedRef<(code: string) => Promise<void>>;
  createCode: ComputedRef<() => Promise<void>>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Users");

  const user = useUser();
  const { value: users, refetch: refetchUsers } = useEndpoint(
    fetchAdminUsers,
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const codesFetcher = computed(() => () => {
    console.log(user.unsafeValue.token);
    return getRegisterCodes(user.unsafeValue.token);
  });
  const { value: codes, refetch: refetchCodes } = useEndpoint(codesFetcher, []);

  const deleteUser = computed(() => async (user: AdminUser) => {
    await deleteUserInternal(user);
    refetchUsers.value();
  });

  const deleteCode = computed(() => async (registerCode: string) => {
    await deleteRegisterCode(registerCode, user.unsafeValue.token);
    refetchCodes.value();
  });

  const createCode = computed(() => async () => {
    await createRegisterCode(user.unsafeValue.token);
    refetchCodes.value();
  });

  return { users, deleteUser, codes, deleteCode, createCode };
};
