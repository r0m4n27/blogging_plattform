import { getArticles, type Article } from "@/api/article";
import { getCategory } from "@/api/category";
import { useRouteParams } from "@/composables/util/routeParams";
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

  const categoryFetcher = computed(() => () => getCategory(params.value.id));
  const { value: category } = useEndpoint(categoryFetcher);

  const articlesFetcher = computed(
    () => () => getArticles("category", params.value.id)
  );
  const { value: articles } = useEndpoint(articlesFetcher, []);

  const title = computed(() => category.value?.name ?? "");

  usePageTitle(title);

  return {
    title,
    articles,
  };
};
