<script setup lang="ts">
import VTableHead from "@/components/base/table/VTableHead.vue";
import VTableRow from "@/components/base/table/VTableRow.vue";
import VTableHeader from "../../../base/table/VTableHeader.vue";
</script>

<template>
  <VTableHead>
    <VTableRow>
      <VTableHeader label="TITLE" width="full" />
      <VTableHeader label="STATUS" />
    </VTableRow>
  </VTableHead>
</template>
