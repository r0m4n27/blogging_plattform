import { fetchYears } from "@/api/year";
import type { Collection } from "@/components/visitor/summary/collection/collection";
import { yearToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface ArchivePageState {
  yearsCollections: ComputedRef<Collection[]>;
}

export const useArchivePageState = (): ArchivePageState => {
  usePageTitle("Archive");

  const { value: years } = useEndpoint(fetchYears, []);

  const yearsCollections = computed(() => years.value.map(yearToCollection));

  return {
    yearsCollections,
  };
};
