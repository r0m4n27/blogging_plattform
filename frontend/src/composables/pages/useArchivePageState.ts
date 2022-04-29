import { fetchYears } from "@/api/year";
import type { Collection } from "@/components/summary/collection/collection";
import { yearToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";

export interface ArchivePageState {
  yearsCollections: ComputedRef<Collection[]>;
}

export const useArchivePageState = (): ArchivePageState => {
  usePageHead("Archive");

  const years = useEndpoint(fetchYears, []);

  const yearsCollections = computed(() => years.value.map(yearToCollection));

  return {
    yearsCollections,
  };
};
