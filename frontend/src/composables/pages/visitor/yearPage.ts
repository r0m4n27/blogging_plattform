import { fetchArticles, type Article } from "@/api/article";
import { useRouteParams } from "@/composables/routeParams";
import { computed, type ComputedRef, type Ref } from "vue";
import type { RouteParams } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../useEndpoint";

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
    () => async () => fetchArticles("year", parseInt(year.value))
  );
  const { value: articles } = useEndpoint(articlesFetcher, []);

  usePageTitle(year);

  return {
    title: year,
    articles,
  };
};
