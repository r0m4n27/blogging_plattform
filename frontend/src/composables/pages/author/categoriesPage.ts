import {
  getAuthorCategories,
  type AuthorCategory,
  type Category,
} from "@/api/category";
import { computed, ref, type Ref } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";
import {
  deleteCategory as deleteCategoryInternal,
  createCategory as createCategoryInternal,
  updateCategory as updateCategoryInternal,
} from "@/api/category";
import type { Option } from "@/lib/types";
import { useUser } from "@/composables/store/user";

export interface CategoriesPageState {
  categories: Ref<AuthorCategory[]>;
  deleteCategory: (category: AuthorCategory) => Promise<void>;

  showNewCategoryModal: Ref<boolean>;
  createCategory: (name: string) => Promise<void>;

  categoryToUpdate: Ref<Option<AuthorCategory>>;
  updateCategory: (name: string) => Promise<void>;
}

export const useCategoriesPageState = (): CategoriesPageState => {
  usePageTitle("Categories");

  const showNewCategoryModal = ref(false);
  const categoryToUpdate = ref<Option<Category>>(undefined);

  const { categories, deleteCategory, createCategory, updateCategory } =
    useCategoriesPageInteractions(showNewCategoryModal, categoryToUpdate);

  return {
    categories,
    deleteCategory,
    showNewCategoryModal,
    createCategory,
    categoryToUpdate,
    updateCategory,
  };
};

const useCategoriesPageInteractions = (
  showNewCategoryModal: Ref<boolean>,
  categoryToUpdate: Ref<Option<Category>>
) => {
  const user = useUser();

  const categoriesFetcher = computed(
    () => () => user.fetchWithToken(getAuthorCategories, [])
  );
  const { value: categories, refetch } = useEndpoint(categoriesFetcher, []);

  const deleteCategory = async (category: AuthorCategory) => {
    await user.fetchWithToken(deleteCategoryInternal(category));
    refetch.value();
  };

  const createCategory = async (name: string) => {
    await user.fetchWithToken(createCategoryInternal(name));
    showNewCategoryModal.value = false;
    refetch.value();
  };

  const updateCategory = async (name: string) => {
    const category = categoryToUpdate.value;
    if (category !== undefined) {
      await user.fetchWithToken(
        updateCategoryInternal({
          ...category,
          name,
        })
      );
      categoryToUpdate.value = undefined;
      refetch.value();
    }
  };

  return {
    categories,
    deleteCategory,
    createCategory,
    updateCategory,
  };
};
