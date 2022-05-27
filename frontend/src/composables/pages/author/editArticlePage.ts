import { getAuthorArticle, type AuthorArticle } from "@/api/article";
import type { Option } from "@/lib/types";
import { usePageTitle } from "@/composables/head/pageTitle";
import { useRouteParams } from "@/composables/util/routeParams";
import { computed } from "@vue/reactivity";
import { useEndpoint } from "@/composables/util/endpoint";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { authorRoutes } from "@/lib/router/author";
import {
  deleteArticle as deleteArticleInternal,
  updateArticle as updateArticleInternal,
} from "@/api/article";
import { fetchCategories, type Category } from "@/api/category";
import { useUser } from "@/composables/store/user";
import { createPromise } from "@/lib/promise";

export interface EditArticlePageState {
  article: Ref<Option<AuthorArticle>>;
  existingCategories: Ref<Category[]>;
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
  const articleFetcher = computed(() => () => {
    if (params.value.id !== undefined) {
      return getAuthorArticle(user.unsafeValue.token, params.value.id);
    } else {
      return createPromise(undefined);
    }
  });

  const { value: article } = useEndpoint(articleFetcher);

  const { value: existingCategories } = useEndpoint(fetchCategories, []);

  const deleteArticle = async () => {
    if (article.value !== undefined) {
      await deleteArticleInternal(user.unsafeValue.token, article.value);
      router.replace(authorRoutes.home.route);
    }
  };
  const updateArticle = async (newArticle: AuthorArticle) => {
    await updateArticleInternal(user.unsafeValue.token, newArticle);
    router.replace(authorRoutes.home.route);
  };

  return {
    article,
    existingCategories,
    deleteArticle,
    updateArticle,
  };
};
