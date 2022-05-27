<script setup lang="ts">
import VCard from "@/components/base/layout/VCard.vue";
import VColumn from "@/components/base/layout/VColumn.vue";
import TextInputField from "@/components/common/input/TextInputField.vue";
import TextButton from "@/components/base/button/TextButton.vue";
import VText from "@/components/base/text/VText.vue";
import VHeading from "@/components/base/text/VHeading.vue";
import { contentSpacingConfig } from "@/config/content/spacing";
import { useUpdatePasswordState } from "@/composables/common/updatePassword";
import { getColor } from "@/config/theme/colors";
import { greenButtonFg, greenButtonBg } from "@/config/content/color";

interface UpdatePasswordProps {
  showSuccess: boolean;
}
defineProps<UpdatePasswordProps>();

interface UpdatePasswordEmits {
  (e: "updatePassword", newPassword: string): void;
}

const emit = defineEmits<UpdatePasswordEmits>();

const { newPassword, secondNewPassword, showError, updatePassword } =
  useUpdatePasswordState(emit);
</script>
<template>
  <VCard :width="{ sm: 'sm', md: 'md' }" :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start" is="form">
      <VColumn width="full">
        <VHeading is="h1" size="lg">New Password</VHeading>
      </VColumn>

      <TextInputField
        label="New Password"
        input-type="password"
        v-model:input-value="newPassword"
        width="full"
      />
      <TextInputField
        label="Retype New Password"
        input-type="password"
        v-model:input-value="secondNewPassword"
        width="full"
      />

      <VText
        :color="{
          light: getColor('red', 400),
          dark: getColor('red', 400),
        }"
        v-if="showError"
      >
        Passwords don't match!
      </VText>

      <VText
        :color="{
          light: getColor('green', 400),
          dark: getColor('green', 400),
        }"
        v-if="showSuccess && !showError"
      >
        Password updated!
      </VText>

      <TextButton
        @click="updatePassword"
        label="Update Password"
        width="full"
        :show-border="false"
        :background-color="greenButtonBg"
        :color="greenButtonFg"
      />
    </VColumn>
  </VCard>
</template>
