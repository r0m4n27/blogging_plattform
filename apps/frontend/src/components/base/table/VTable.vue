<script setup lang="ts">
import { systemProps } from "@blog/frontend/styling/props/systemProps";
import VTableHead from "./VTableHead.vue";
import VTableBody from "./VTableBody.vue";
import VTableRow from "./VTableRow.vue";
import VCard from "../layout/VCard.vue";
import type { PropType } from "vue";

const props = defineProps({
  ...systemProps,
  // Needs to be specified otherwise vue just default the value to false
  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
});
</script>
<template>
  <VCard :padding="3" v-bind="props" is="table">
    <VTableHead>
      <VTableRow>
        <slot name="head" />
      </VTableRow>
    </VTableHead>
    <VTableBody>
      <slot name="body" />
    </VTableBody>
  </VCard>
</template>
