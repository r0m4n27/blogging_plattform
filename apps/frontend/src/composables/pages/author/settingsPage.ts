import { usePageTitle } from "@blog/frontend/composables/head/pageTitle";
import {
  useUpdatePassword,
  type UpdatePasswordPageState,
} from "../shared/updatePasswordPage";

export interface AuthorSettingsPageState {
  updatePasswordState: UpdatePasswordPageState;
}

export const useAuthorSettingsPageState = () => {
  usePageTitle("Settings");

  const updatePasswordState = useUpdatePassword();

  return {
    updatePasswordState,
  };
};
