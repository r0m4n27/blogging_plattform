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
import { getAuthorCategories, type AuthorCategory } from "@/api/category";
import { useUser } from "@/composables/store/user";
import { promise } from "@/lib/promise";

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
    () => () =>
      user.token
        ? getAuthorArticle(user.token, params.value.id)
        : promise(undefined)
  );

  const { value: article } = useEndpoint(articleFetcher);

  const categoriesFetcher = computed(
    () => () => user.token ? getAuthorCategories(user.token) : promise([])
  );
  const { value: existingCategories } = useEndpoint(categoriesFetcher, []);

  const deleteArticle = async () => {
    if (article.value !== undefined && user.token !== undefined) {
      await deleteArticleInternal(user.token, article.value);
      router.replace(authorRoutes.home.route);
    }
  };
  const updateArticle = async (newArticle: AuthorArticle) => {
    if (user.token != undefined) {
      await updateArticleInternal(user.token, newArticle);
      router.replace(authorRoutes.home.route);
    }
  };

  return {
    article,
    existingCategories,
    deleteArticle,
    updateArticle,
  };
};
