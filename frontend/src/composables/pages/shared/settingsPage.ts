import { updatePassword as updatePasswordInternal } from "@/api/user";
import { usePageTitle } from "@/composables/head/usePageTitle";
import { ref, type Ref } from "vue";

export interface SettingsPageState {
  passwordUpdated: Ref<boolean>;
  updatePassword: (newPassword: string) => Promise<void>;
}

export const useSettingsPageState = () => {
  usePageTitle("Settings");
  const passwordUpdated = ref(false);

  const updatePassword = async (newPassword: string) => {
    await updatePasswordInternal(newPassword);
    passwordUpdated.value = true;
  };

  return {
    passwordUpdated,
    updatePassword,
  };
};
