import type { NewArticlePayload } from "@blog/frontend/api/article";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import { useRouter } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { publishArticle as publishArticleInternal } from "@blog/frontend/api/article";
import { computed, type ComputedRef, type Ref } from "vue";
import { getAuthorCategories, type AuthorCategory } from "@blog/frontend/api/category";
import { useEndpoint } from "@blog/frontend/composables/util/endpoint";
import { useUser } from "@blog/frontend/composables/store/user";

export interface NewArticleState {
  existingCategories: Ref<AuthorCategory[]>;
  publishArticle: ComputedRef<(payload: NewArticlePayload) => Promise<void>>;
}

export const useNewArticleState = (): NewArticleState => {
  usePageTitle("New Article");

  const router = useRouter();
  const user = useUser();

  const publishArticle = computed(() => async (payload: NewArticlePayload) => {
    await user.fetchWithToken(publishArticleInternal(payload));
    router.replace(authorRoutes.home.route);
  });

  const existingCategoriesFetcher = computed(
    () => () => user.fetchWithToken(getAuthorCategories, []),
  );
  const { value: existingCategories } = useEndpoint(existingCategoriesFetcher, []);

  return {
    existingCategories,
    publishArticle,
  };
};
