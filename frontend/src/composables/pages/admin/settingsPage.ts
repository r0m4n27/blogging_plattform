import { usePageTitle } from "@/composables/head/pageTitle";
import {
  useSiteConfigSettingsPage,
  type SiteConfigSettingsPageState,
} from "../shared/siteConfigSettingsPage";
import {
  useUpdatePassword,
  type UpdatePasswordPageState,
} from "../shared/updatePasswordPage";

export interface AdminSettingsPageState {
  updatePasswordState: UpdatePasswordPageState;
  siteConfigSettingsState: SiteConfigSettingsPageState;
}

export const useAdminSettingsPageState = (): AdminSettingsPageState => {
  usePageTitle("Settings");

  const updatePasswordState = useUpdatePassword();
  const siteConfigSettingsState = useSiteConfigSettingsPage();

  return {
    updatePasswordState,
    siteConfigSettingsState,
  };
};
