import type { AdminUser } from "@/api/user";
import { usePageTitle } from "@/composables/head/pageTitle";
import { fetchAdminUsers, deleteUser as deleteUserInternal } from "@/api/user";
import { useEndpoint } from "@/composables/useEndpoint";
import { computed, type ComputedRef, type Ref } from "vue";

export interface HomePageState {
  users: Ref<AdminUser[]>;
  deleteUser: ComputedRef<(user: AdminUser) => Promise<void>>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Users");
  const { value: users, refetch } = useEndpoint(fetchAdminUsers, []);

  const deleteUser = computed(() => async (user: AdminUser) => {
    await deleteUserInternal(user);
    refetch.value();
  });

  return { users, deleteUser };
};
