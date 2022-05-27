import { getArticle, type Article } from "@/api/article";
import { useRouteParams } from "@/composables/util/routeParams";
import { createPromise } from "@/lib/promise";
import type { Option } from "@/lib/types";
import { computed } from "@vue/reactivity";
import type { Ref } from "vue";
import type { RouteParams } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface ArticlePageState {
  article: Ref<Option<Article>>;
}

interface ArticleRouteParams extends RouteParams {
  id: string;
}

export const useArticlePageState = (): ArticlePageState => {
  const params = useRouteParams<ArticleRouteParams>();

  const articleFetcher = computed(() => () => {
    if (params.value.id !== undefined) {
      return getArticle(params.value.id);
    } else {
      return createPromise(undefined);
    }
  });

  const { value: article } = useEndpoint(articleFetcher);
  const articleTitle = computed(() => article.value?.title ?? "");

  usePageTitle(articleTitle);

  return {
    article,
  };
};
