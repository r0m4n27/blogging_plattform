import { fetchArticles, type Article } from "@/api/article";
import { fetchCategory } from "@/api/category";
import { useRouteParams } from "@/composables/routeParams";
import { computed, type ComputedRef, type Ref } from "vue";
import type { RouteParams } from "vue-router";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface CategoryPageState {
  title: ComputedRef<string>;
  articles: Ref<Article[]>;
}

interface CategoryRouteParams extends RouteParams {
  id: string;
}

export const useCategoryPageState = (): CategoryPageState => {
  const params = useRouteParams<CategoryRouteParams>();

  const categoryFetcher = computed(
    () => async () => fetchCategory(params.value.id)
  );
  const { value: category } = useEndpoint(categoryFetcher);

  const articlesFetcher = computed(
    () => async () => fetchArticles("category", params.value.id)
  );
  const { value: articles } = useEndpoint(articlesFetcher, []);

  const title = computed(() => category.value?.name ?? "");

  usePageTitle(title);

  return {
    title,
    articles,
  };
};
