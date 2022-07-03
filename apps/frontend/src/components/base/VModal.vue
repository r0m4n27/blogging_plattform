<script setup lang="ts">
import VBox from "./layout/VBox.vue";
import { getColor } from "@/config/theme/colors";
import { computed, type PropType } from "vue";
import { systemProps } from "@/styling/props/systemProps";
import type { Responsive } from "@/lib/responsive";
import type { Color } from "@/styling/color";
import type { Spacing } from "@/styling/spacing";
import { contentSpacingConfig } from "@/config/content/spacing";
import VRow from "./layout/VRow.vue";

const props = defineProps({
  showModal: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  modalBackground: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => ({
      light: getColor("blackAlpha", 600),
      dark: getColor("blackAlpha", 600),
    }),
  },
  ...systemProps,
  margin: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => ({ x: contentSpacingConfig.sm, y: 20 }),
  },
});

interface VModalEmits {
  (e: "update:showModal", newValue: boolean): void;
}

const emit = defineEmits<VModalEmits>();
const showModalModel = computed({
  get() {
    return props.showModal;
  },
  set(newValue: boolean) {
    return emit("update:showModal", newValue);
  },
});

// NOTE: An extra VBox is used to properly dismiss the
// modal when the user clicks outside of the dialog.
// If it would be done directly on the VRow
// then the complete horizontal space of the row would prevent the click
</script>

<template>
  <Teleport to="#app" v-if="showModalModel">
    <VBox
      width="full"
      height="full"
      class="modal"
      :background-color="modalBackground"
      @click="showModalModel = false"
    >
      <VRow justify="center" v-bind="props">
        <VBox @click.stop>
          <slot />
        </VBox>
      </VRow>
    </VBox>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
