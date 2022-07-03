import { getAuthorArticle, type AuthorArticle } from "@blog/frontend/api/article";
import type { Option } from "@blog/frontend/lib/types";
import { usePageTitle } from "@blog/frontend/composables/head/pageTitle";
import { useRouteParams } from "@blog/frontend/composables/util/routeParams";
import { computed } from "@vue/reactivity";
import { useEndpoint } from "@blog/frontend/composables/util/endpoint";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { authorRoutes } from "@blog/frontend/lib/router/author";
import {
  deleteArticle as deleteArticleInternal,
  updateArticle as updateArticleInternal,
} from "@blog/frontend/api/article";
import { getAuthorCategories, type AuthorCategory } from "@blog/frontend/api/category";
import { useUser } from "@blog/frontend/composables/store/user";

export interface EditArticlePageState {
  article: Ref<Option<AuthorArticle>>;
  existingCategories: Ref<AuthorCategory[]>;
  deleteArticle: () => Promise<void>;
  updateArticle: (newArticle: AuthorArticle) => Promise<void>;
}

interface EditArticlePageParams extends Record<string, string> {
  id: string;
}

export const useEditArticlePage = (): EditArticlePageState => {
  usePageTitle("Edit Article");

  const router = useRouter();
  const user = useUser();

  const params = useRouteParams<EditArticlePageParams>();
  const articleFetcher = computed(
    () => () => user.fetchWithToken(getAuthorArticle(params.value.id)),
  );

  const { value: article } = useEndpoint(articleFetcher);

  const categoriesFetcher = computed(
    () => () => user.fetchWithToken(getAuthorCategories, []),
  );
  const { value: existingCategories } = useEndpoint(categoriesFetcher, []);

  const deleteArticle = async () => {
    if (article.value !== undefined) {
      await user.fetchWithToken(deleteArticleInternal(article.value));
      router.replace(authorRoutes.home.route);
    }
  };
  const updateArticle = async (newArticle: AuthorArticle) => {
    await user.fetchWithToken(updateArticleInternal(newArticle));
    router.replace(authorRoutes.home.route);
  };

  return {
    article,
    existingCategories,
    deleteArticle,
    updateArticle,
  };
};
