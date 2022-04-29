<script setup lang="ts">
import VButton from "../base/button/VButton.vue";
import VText from "../base/text/VText.vue";
import type { Category } from "@/api/category";
import VCenter from "@/components/base/layout/VCenter.vue";
import VLink from "../base/VLink.vue";
import { computed } from "vue";
import { createCategoryDestination } from "@/lib/router";
import type { CategoryTagSize } from "@/config/components/categoryTag";
import { type Responsive, mapResponsiveFromConfig } from "@/lib/responsive";
import {
  categoryTagButtonConfig,
  categoryTagTextConfig,
} from "@/config/components/categoryTag";

interface SummaryTagProps {
  category: Category;
  size?: Responsive<CategoryTagSize>;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
});

const categoryDestination = computed(() =>
  createCategoryDestination(props.category)
);

const buttonProps = computed(() => {
  const height = mapResponsiveFromConfig(
    props.size,
    categoryTagButtonConfig.height
  );

  const padding = mapResponsiveFromConfig(
    props.size,
    categoryTagButtonConfig.padding
  );

  return {
    height,
    padding,
  };
});

const textProps = computed(() => {
  const size = mapResponsiveFromConfig(props.size, categoryTagTextConfig.size);
  const lineHeight = mapResponsiveFromConfig(
    props.size,
    categoryTagTextConfig.lineHeight
  );

  return {
    size,
    lineHeight,
  };
});
</script>

<template>
  <VLink :to="categoryDestination">
    <VButton v-bind="buttonProps">
      <VCenter>
        <VText is="span" weight="medium" v-bind="textProps">
          {{ category.name }}
        </VText>
      </VCenter>
    </VButton>
  </VLink>
</template>
