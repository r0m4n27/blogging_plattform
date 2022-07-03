<script setup lang="ts">
import type { SVGProps } from "lucide-vue-next";
import type { FunctionalComponent, PropType } from "vue";
import VButton from "./VButton.vue";
import VBox from "../layout/VBox.vue";
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import type { Spacing } from "@blog/frontend/styling/spacing";
import {
  fillIconProps,
  createFillIconPropsCss,
} from "@blog/frontend/styling/props/iconButton";
import type { Responsive } from "@blog/frontend/lib/responsive";

// Type extracted from the lucide icon package
export type Icon = (props: SVGProps) => FunctionalComponent<SVGProps>;

const props = defineProps({
  icon: { type: Function as PropType<Icon>, required: true },
  ...fillIconProps,
  ...systemProps,
  padding: {
    type: [Object, String, Number] as PropType<Responsive<Spacing>>,
    default: () => 2,
  },

  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
} as const);
</script>

<template>
  <VButton v-bind="props">
    <VBox :width="6" :height="6">
      <component :is="icon" :class="createFillIconPropsCss(props)" />
    </VBox>
  </VButton>
</template>
