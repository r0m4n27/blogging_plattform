<script setup lang="ts">
import TextInputField from "@/components/common/input/TextInputField.vue";
import { ref } from "vue";
import SimpleDialogLayout from "../../layout/SimpleDialogLayout.vue";
import { orangeButtonBg, orangeButtonFg } from "@/config/content/color";

interface EditCategoryDialogProps {
  initialName: string;
}

interface EditCategoryDialogEmits {
  (e: "cancel"): void;
  (e: "update", name: string): void;
}
const emit = defineEmits<EditCategoryDialogEmits>();
const props = defineProps<EditCategoryDialogProps>();

const categoryName = ref(props.initialName);

const submitCategory = () => {
  emit("update", categoryName.value);
};
</script>

<template>
  <SimpleDialogLayout
    title="Edit Category"
    positive-button-label="Update"
    :positive-button-bg="orangeButtonBg"
    :positive-button-fg="orangeButtonFg"
    @cancel="emit('cancel')"
    @confirm="submitCategory"
  >
    <TextInputField
      label="New Name"
      v-model:input-value="categoryName"
      width="full"
    />
  </SimpleDialogLayout>
</template>
