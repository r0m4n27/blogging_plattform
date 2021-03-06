import { getArticles, type Article } from "@blog/frontend/api/article";
import { useRouteParams } from "@blog/frontend/composables/util/routeParams";
import { computed, type ComputedRef, type Ref } from "vue";
import type { RouteParams } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface YearPageState {
  title: ComputedRef<string>;
  articles: Ref<Article[]>;
}

interface YearRouteParams extends RouteParams {
  id: string;
}

export const useYearPageState = (): YearPageState => {
  const params = useRouteParams<YearRouteParams>();
  const year = computed(() => params.value.id);

  const articlesFetcher = computed(
    () => () => getArticles("year", parseInt(year.value)),
  );
  const { value: articles } = useEndpoint(articlesFetcher, []);
  const yearTitle = computed(() => (year.value ? year.value : ""));

  usePageTitle(yearTitle);

  return {
    title: yearTitle,
    articles,
  };
};
