<script setup lang="ts">
import { systemProps } from "@/lib/base/props/systemProps";
import {
  writeResponsivePropToStyle,
  type Responsive,
} from "@/lib/base/responsiveProp";
import type { PropType } from "vue";
import VBox from "./VBox.vue";
import { containerConfig } from "@/config/theme/container";
import { createRecordWriter } from "@/lib/base/writer";
import { css, type CSSObject } from "@emotion/css";
import { computed } from "@vue/reactivity";

type ContainerSize = keyof typeof containerConfig;
const containerConfigWriter = createRecordWriter(containerConfig);

const props = defineProps({
  ...systemProps,
  size: {
    type: [String, Object] as PropType<Responsive<ContainerSize>>,
    required: true,
  },
});

const containerClass = computed(() => {
  const style: CSSObject = {};
  writeResponsivePropToStyle(
    style,
    "maxWidth",
    containerConfigWriter,
    props.size
  );

  style["margin"] = "0 auto";

  return css(style);
});
</script>

<template>
  <VBox v-bind="props" :class="containerClass">
    <slot />
  </VBox>
</template>
