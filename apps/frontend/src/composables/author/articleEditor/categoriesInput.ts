import type { AuthorCategory } from "@blog/frontend/api/category";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export interface CategoriesInputState {
  showListing: Ref<boolean>;

  availableCategories: ComputedRef<AuthorCategory[]>;

  removeCategory: ComputedRef<(category: AuthorCategory) => void>;
  selectCategory: ComputedRef<(category: AuthorCategory) => void>;
}

interface CategoriesInputEmits {
  (e: "update:selectedCategories", newValue: AuthorCategory[]): void;
}

export const useCategoriesInputState = (
  selectedCategories: Ref<AuthorCategory[]>,
  existingCategories: Ref<AuthorCategory[]>,
  emit: CategoriesInputEmits,
): CategoriesInputState => {
  const showListing = ref(false);

  const availableCategories = computed(() =>
    existingCategories.value.filter((c) => !selectedCategories.value.includes(c)),
  );

  const removeCategory = computed(() => (category: AuthorCategory) => {
    emit(
      "update:selectedCategories",
      selectedCategories.value.filter((c) => c.id !== category.id),
    );
  });

  const selectCategory = computed(() => (category: AuthorCategory) => {
    showListing.value = false;
    emit("update:selectedCategories", [...selectedCategories.value, category]);
  });

  return {
    showListing,
    availableCategories,
    removeCategory,
    selectCategory,
  };
};
