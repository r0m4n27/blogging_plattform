import { getArchive } from "@/api/year";
import type { Collection } from "@/components/visitor/summary/collection/collection";
import { yearToCollection } from "@/lib/collection";
import { computed, type ComputedRef } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface ArchivePageState {
  yearsCollections: ComputedRef<Collection[]>;
}

export const useArchivePageState = (): ArchivePageState => {
  usePageTitle("Archive");

  const { value: years } = useEndpoint(getArchive, []);

  const yearsCollections = computed(() => years.value.map(yearToCollection));

  return {
    yearsCollections,
  };
};
