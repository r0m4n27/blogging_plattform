import type { Category } from "@/api/category";
import { computed, ref, type ComputedRef, type Ref } from "vue";

export interface CategoriesInputState {
  showListing: Ref<boolean>;

  availableCategories: ComputedRef<Category[]>;

  removeCategory: ComputedRef<(category: Category) => void>;
  selectCategory: ComputedRef<(category: Category) => void>;
}

interface CategoriesInputEmits {
  (e: "update:selectedCategories", newValue: Category[]): void;
}

export const useCategoriesInputState = (
  selectedCategories: Ref<Category[]>,
  existingCategories: Ref<Category[]>,
  emit: CategoriesInputEmits
): CategoriesInputState => {
  const showListing = ref(false);

  const availableCategories = computed(() =>
    existingCategories.value.filter(
      (c) => !selectedCategories.value.includes(c)
    )
  );

  const removeCategory = computed(() => (category: Category) => {
    emit(
      "update:selectedCategories",
      selectedCategories.value.filter((c) => c.id !== category.id)
    );
  });

  const selectCategory = computed(() => (category: Category) => {
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
