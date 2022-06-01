<script setup lang="ts">
import TextInputField from "@/components/common/input/TextInputField.vue";
import { useUpdatePasswordState } from "@/composables/common/updatePassword";
import { greenButtonFg, greenButtonBg } from "@/config/content/color";
import InputFormLayout from "../layout/InputFormLayout.vue";
import { computed } from "vue";

interface UpdatePasswordProps {
  showSuccess: boolean;
}
const props = defineProps<UpdatePasswordProps>();

interface UpdatePasswordEmits {
  (e: "updatePassword", newPassword: string): void;
}

const emit = defineEmits<UpdatePasswordEmits>();

const { newPassword, secondNewPassword, showError, updatePassword } =
  useUpdatePasswordState(emit);

const successText = computed(() =>
  props.showSuccess ? "Password updated!" : undefined
);

const errorText = computed(() =>
  showError.value ? "Passwords don't match!" : undefined
);
</script>
<template>
  <InputFormLayout
    title="New Password"
    submit-button-label="Update Password"
    :error-text="errorText"
    :success-text="successText"
    :submit-button-bg-color="greenButtonBg"
    :submit-button-fg-color="greenButtonFg"
    @click="updatePassword"
  >
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
  </InputFormLayout>
</template>
