import { getArticle, type Article } from "@blog/frontend/api/article";
import { useRouteParams } from "@blog/frontend/composables/util/routeParams";
import type { Option } from "@blog/frontend/lib/types";
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

  const articleFetcher = computed(() => () => getArticle(params.value.id));

  const { value: article } = useEndpoint(articleFetcher);
  const articleTitle = computed(() => article.value?.title ?? "");

  usePageTitle(articleTitle);

  return {
    article,
  };
};
