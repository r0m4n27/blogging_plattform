<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import TextInputField from "@/components/common/input/TextInputField.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VText from "@/components/base/text/VText.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import { getColor } from "@/config/theme/colors";
import { greenButtonFg, greenButtonBg } from "@/config/content/color";
import FileInputField from "@/components/common/input/FileInputField.vue";
import { useSiteConfigSettings } from "@/composables/common/siteConfigSettings";
import { computed } from "vue";

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
</script>

<template>
  <VCard :width="{ sm: 'sm', md: 'md' }" :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start" is="form">
      <VColumn width="full">
        <VHeading is="h1" size="lg">Site Config</VHeading>
      </VColumn>

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

      <VText
        :color="{
          light: getColor('red', 400),
          dark: getColor('red', 400),
        }"
        v-if="error !== undefined"
      >
        {{ error }}
      </VText>

      <VText
        :color="{
          light: getColor('green', 400),
          dark: getColor('green', 400),
        }"
        v-if="error === undefined && showSuccess"
      >
        Site config updated!
      </VText>

      <TextButton
        :label="buttonText"
        width="full"
        :show-border="false"
        :background-color="greenButtonBg"
        :color="greenButtonFg"
        @click="onButtonClick(onButtonClickType)"
      />
    </VColumn>
  </VCard>
</template>
