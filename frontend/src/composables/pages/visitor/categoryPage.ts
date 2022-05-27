import { getArticles, type Article } from "@/api/article";
import { fetchCategory } from "@/api/category";
import { useRouteParams } from "@/composables/util/routeParams";
import { createPromise } from "@/lib/promise";
import { computed, type ComputedRef, type Ref } from "vue";
import type { RouteParams } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface CategoryPageState {
  title: ComputedRef<string>;
  articles: Ref<Article[]>;
}

interface CategoryRouteParams extends RouteParams {
  id: string;
}

export const useCategoryPageState = (): CategoryPageState => {
  const params = useRouteParams<CategoryRouteParams>();

  const categoryFetcher = computed(() => () => {
    if (params.value.id !== undefined) {
      return fetchCategory(params.value.id);
    } else {
      return createPromise(undefined);
    }
  });
  const { value: category } = useEndpoint(categoryFetcher);

  const articlesFetcher = computed(() => () => {
    if (params.value.id !== undefined) {
      return getArticles("category", params.value.id);
    } else {
      return createPromise([]);
    }
  });
  const { value: articles } = useEndpoint(articlesFetcher, []);

  const title = computed(() => category.value?.name ?? "");

  usePageTitle(title);

  return {
    title,
    articles,
  };
};
