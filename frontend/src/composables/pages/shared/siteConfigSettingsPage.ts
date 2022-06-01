import type { SiteConfig } from "@/api/siteConfig";
import { useSiteConfig } from "@/composables/store/siteConfig";
import { useUser } from "@/composables/store/user";
import { fileToBase64 } from "@/lib/fileReader";
import { promise } from "@/lib/promise";
import { computed, ref, type ComputedRef, type Ref } from "vue";
import {
  updateSiteConfig as updateSiteConfigInternal,
  createSiteConfig as createSiteConfigInternal,
} from "@/api/siteConfig";

// Settings for the siteConfig
// where it can be either created or updated
//
// The creation only works if all parameters are provided
export interface SiteConfigSettingsPageState {
  initialTitle: ComputedRef<string>;
  isInitialized: ComputedRef<boolean>;

  showSuccess: Ref<boolean>;
  error: Ref<string | undefined>;

  updateSiteConfig: (title?: string, logo?: File, icon?: File) => Promise<void>;
  createSiteConfig: (title?: string, logo?: File, icon?: File) => Promise<void>;
}

export const useSiteConfigSettingsPage = (): SiteConfigSettingsPageState => {
  const siteConfig = useSiteConfig();
  const initialTitle = computed(() => siteConfig.blogTitle);
  const isInitialized = computed(() => siteConfig.isInitialized);

  const user = useUser();

  const showSuccess = ref(false);
  const error = ref<string | undefined>(undefined);

  const updateSiteConfig = async (title?: string, logo?: File, icon?: File) => {
    const payload = await createSiteConfigPayload(title, logo, icon);

    if (user.token !== undefined) {
      await updateSiteConfigInternal(user.token, payload);
      showSuccess.value = true;
      error.value = undefined;
      siteConfig.refetch();
    }
  };

  const createSiteConfig = async (title?: string, logo?: File, icon?: File) => {
    if (title !== undefined && logo !== undefined && icon !== undefined) {
      const payload = await createSiteConfigPayload(title, logo, icon);

      if (user.token !== undefined) {
        await createSiteConfigInternal(user.token, payload);
        showSuccess.value = true;
        error.value = undefined;
        siteConfig.refetch();
      }
    } else {
      error.value = "Not all values were provided!";
      showSuccess.value = false;
    }
  };

  return {
    initialTitle,
    updateSiteConfig,
    showSuccess,
    error,
    createSiteConfig,
    isInitialized,
  };
};

async function createSiteConfigPayload(
  title: string,
  logo: File,
  icon: File
): Promise<SiteConfig>;

async function createSiteConfigPayload(
  title?: string,
  logo?: File,
  icon?: File
): Promise<Partial<SiteConfig>>;

async function createSiteConfigPayload(
  title?: string,
  logo?: File,
  icon?: File
) {
  const payload: Partial<SiteConfig> = {};
  if (title !== undefined) {
    payload.blogTitle = title;
  }

  const logoBase64Promise = logo ? fileToBase64(logo) : promise(undefined);
  const iconBase64Promise = icon ? fileToBase64(icon) : promise(undefined);

  const [logoBase64, iconBase64] = await Promise.all([
    logoBase64Promise,
    iconBase64Promise,
  ]);

  if (logoBase64 !== undefined) {
    payload.logo = logoBase64;
  }
  if (iconBase64 !== undefined) {
    payload.icon = iconBase64;
  }

  return payload;
}
