<script setup lang="ts">
import TextInputField from "@/components/common/input/TextInputField.vue";
import { ref } from "vue";
import SimpleDialogLayout from "../../layout/SimpleDialogLayout.vue";

interface NewCategoryDialogEmits {
  (e: "cancel"): void;
  (e: "create", name: string): void;
}
const emit = defineEmits<NewCategoryDialogEmits>();
const categoryName = ref("");

const submitCategory = () => {
  emit("create", categoryName.value);
};
</script>

<template>
  <SimpleDialogLayout
    title="New Category"
    positive-button-label="Create"
    @cancel="emit('cancel')"
    @confirm="submitCategory"
  >
    <TextInputField
      label="Name"
      v-model:input-value="categoryName"
      width="full"
    />
  </SimpleDialogLayout>
</template>
