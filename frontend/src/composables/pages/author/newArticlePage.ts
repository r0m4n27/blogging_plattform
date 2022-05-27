import type { NewArticlePayload } from "@/api/article";
import { authorRoutes } from "@/lib/router/author";
import { useRouter } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { publishArticle as publishArticleInternal } from "@/api/article";
import { computed, type ComputedRef, type Ref } from "vue";
import { getAuthorCategories, type AuthorCategory } from "@/api/category";
import { useEndpoint } from "@/composables/util/endpoint";
import { useUser } from "@/composables/store/user";

export interface NewArticleState {
  existingCategories: Ref<AuthorCategory[]>;
  publishArticle: ComputedRef<(payload: NewArticlePayload) => Promise<void>>;
}

export const useNewArticleState = (): NewArticleState => {
  usePageTitle("New Article");

  const router = useRouter();
  const user = useUser();

  const publishArticle = computed(() => async (payload: NewArticlePayload) => {
    await publishArticleInternal(user.unsafeValue.token, payload);
    router.replace(authorRoutes.home.route);
  });

  const existingCategoriesFetcher = computed(
    () => () => getAuthorCategories(user.unsafeValue.token)
  );
  const { value: existingCategories } = useEndpoint(
    existingCategoriesFetcher,
    []
  );

  return {
    existingCategories,
    publishArticle,
  };
};
