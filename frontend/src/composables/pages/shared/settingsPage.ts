import { updatePassword as updatePasswordInternal } from "@/api/user";
import { usePageTitle } from "@/composables/head/pageTitle";
import { useUser } from "@/composables/store/user";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export interface SettingsPageState {
  passwordUpdated: Ref<boolean>;
  updatePassword: ComputedRef<(newPassword: string) => Promise<void>>;
}

export const useSettingsPageState = () => {
  usePageTitle("Settings");
  const passwordUpdated = ref(false);

  const updatePassword = useUpdatePassword(passwordUpdated);

  return {
    passwordUpdated,
    updatePassword,
  };
};

const useUpdatePassword = (passwordUpdated: Ref<boolean>) => {
  const user = useUser();

  return computed(() => async (newPassword: string) => {
    await updatePasswordInternal(newPassword, user.unsafeValue.token);
    passwordUpdated.value = true;
  });
};
