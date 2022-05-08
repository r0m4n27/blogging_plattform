import { fetchAuthorArticle, type AuthorArticle } from "@/api/article";
import type { Option } from "@/lib/types";
import { usePageTitle } from "@/composables/head/usePageTitle";
import { useRouteParams } from "@/composables/routeParams";
import { computed } from "@vue/reactivity";
import { useEndpoint } from "@/composables/useEndpoint";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { authorRoutes } from "@/lib/router/author";
import {
  deleteArticle as deleteArticleInternal,
  updateArticle as updateArticleInternal,
} from "@/api/article";

export interface EditArticlePageState {
  article: Ref<Option<AuthorArticle>>;
  deleteArticle: () => Promise<void>;
  updateArticle: (newArticle: AuthorArticle) => Promise<void>;
}

interface EditArticlePageParams extends Record<string, string> {
  id: string;
}

export const useEditArticlePage = (): EditArticlePageState => {
  usePageTitle("Edit Article");

  const router = useRouter();

  const params = useRouteParams<EditArticlePageParams>();
  const articleFetcher = computed(
    () => () => fetchAuthorArticle(params.value.id)
  );

  const article = useEndpoint(articleFetcher);

  const deleteArticle = async () => {
    if (article.value !== undefined) {
      await deleteArticleInternal(article.value);
      router.replace(authorRoutes.home.route);
    }
  };
  const updateArticle = async (newArticle: AuthorArticle) => {
    await updateArticleInternal(newArticle);
    router.replace(authorRoutes.home.route);
  };

  return {
    article,
    deleteArticle,
    updateArticle,
  };
};
