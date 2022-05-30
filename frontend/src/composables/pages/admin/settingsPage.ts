import { usePageTitle } from "@/composables/head/pageTitle";
import {
  useUpdatePassword,
  type UpdatePasswordPageState,
} from "../shared/updatePasswordPage";

export interface AdminSettingsPageState {
  updatePasswordState: UpdatePasswordPageState;
}

export const useAdminSettingsPageState = () => {
  usePageTitle("Settings");

  const updatePasswordState = useUpdatePassword();

  return {
    updatePasswordState,
  };
};
