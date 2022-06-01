<script setup lang="ts">
import TextInputField from "@/components/common/input/TextInputField.vue";
import { greenButtonFg, greenButtonBg } from "@/config/content/color";
import FileInputField from "@/components/common/input/FileInputField.vue";
import { useSiteConfigSettings } from "@/composables/common/siteConfigSettings";
import { computed } from "vue";
import InputFormLayout from "@/components/common/layout/InputFormLayout.vue";

interface SiteConfigSettingsProps {
  showSuccess: boolean;
  error?: string;
  initialTitle: string;
  isInitialized: boolean;
}
const props = defineProps<SiteConfigSettingsProps>();

interface SiteConfigSettingsEmits {
  (e: "update", title?: string, logo?: File, icon?: File): void;
  (e: "create", title?: string, logo?: File, icon?: File): void;
}

const emit = defineEmits<SiteConfigSettingsEmits>();
const { title, setIcon, setLogo, onButtonClick } = useSiteConfigSettings(
  emit,
  props.initialTitle
);

const buttonText = computed(() => (props.isInitialized ? "UPDATE" : "CREATE"));
const onButtonClickType = computed(() =>
  props.isInitialized ? "update" : "create"
);
const successText = computed(() =>
  props.showSuccess ? "Site config updated!" : undefined
);
</script>

<template>
  <InputFormLayout
    title="Site Config"
    :submit-button-label="buttonText"
    :error-text="error"
    :success-text="successText"
    :submit-button-bg-color="greenButtonBg"
    :submit-button-fg-color="greenButtonFg"
    @click="onButtonClick(onButtonClickType)"
  >
    <TextInputField label="Title" v-model:input-value="title" width="full" />

    <FileInputField
      label="Logo"
      input-id="logo_upload"
      accept="image/*"
      @new-file="setLogo"
    />

    <FileInputField
      label="Icon"
      input-id="icon_upload"
      accept="image/x-icon"
      @new-file="setIcon"
    />
  </InputFormLayout>
</template>
