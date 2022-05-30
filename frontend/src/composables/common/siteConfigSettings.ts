import { ref, type Ref } from "vue";

export interface SiteConfigSettingsState {
  title: Ref<string>;

  setLogo: (file: File) => void;
  setIcon: (file: File) => void;
  onButtonClick: (type: "update" | "create") => void;
}

interface SiteConfigSettingsEmits {
  (e: "update", title?: string, logo?: File, icon?: File): void;
  (e: "create", title?: string, logo?: File, icon?: File): void;
}

export const useSiteConfigSettings = (
  emit: SiteConfigSettingsEmits,
  initialTitle: string
): SiteConfigSettingsState => {
  const title = ref(initialTitle);
  const logo = ref<File | undefined>(undefined);
  const icon = ref<File | undefined>(undefined);

  const setLogo = (file: File) => {
    logo.value = file;
  };
  const setIcon = (file: File) => {
    icon.value = file;
  };

  const onButtonClick = (type: "update" | "create") => {
    // If type is set directly for the emit
    // the ts compiler starts to cry :(
    if (type == "update") {
      emit("update", title.value, logo.value, icon.value);
    } else {
      emit("create", title.value, logo.value, icon.value);
    }
  };

  return {
    title,
    setIcon,
    setLogo,
    onButtonClick,
  };
};
