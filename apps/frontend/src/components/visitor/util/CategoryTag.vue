<script setup lang="ts">
import type { Category } from "@blog/frontend/api/category";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { computed } from "vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import { visitorRoutes } from "@blog/frontend/lib/router/visitor";
import TagButton from "@blog/frontend/components/base/button/TagButton.vue";
import type { TagButtonSize } from "@blog/frontend/styling/props/tagButton";

interface SummaryTagProps {
  category: Category;
  size?: Responsive<TagButtonSize>;
}

const props = withDefaults(defineProps<SummaryTagProps>(), {
  size: "sm",
});

const categoryDestination = computed(() =>
  visitorRoutes.category.createRoute(props.category),
);
</script>

<template>
  <VLink :to="categoryDestination">
    <TagButton :size="size" :label="category.name" />
  </VLink>
</template>
