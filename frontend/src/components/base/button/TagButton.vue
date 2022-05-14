<script setup lang="ts">
import VButton from "./VButton.vue";
import VText from "../text/VText.vue";
import VCenter from "@/components/base/layout/VCenter.vue";
import { computed } from "vue";
import type { Color } from "@/styling/color";
import {
  type TagButtonSize,
  createTagButtonVButtonProps,
  createTagButtonTextProps,
} from "@/styling/props/tagButton";
import type { Responsive } from "@/lib/responsive";

interface SummaryTagProps {
  label: string;
  size?: Responsive<TagButtonSize>;
  color?: Responsive<Color>;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
});

const buttonProps = computed(() =>
  createTagButtonVButtonProps(props.size, props.color)
);

const textProps = computed(() => createTagButtonTextProps(props.size));
</script>

<template>
  <VButton v-bind="buttonProps" :color="color">
    <VCenter>
      <VText is="span" weight="medium" v-bind="textProps">
        {{ label }}
      </VText>
    </VCenter>
  </VButton>
</template>
