import { fetchArticles, type Article } from "@/api/article";
import { computed, type ComputedRef, type Ref } from "vue";
import { useRoute } from "vue-router";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface YearPageState {
  title: ComputedRef<string>;
  articles: Ref<Article[]>;
}

export const useYearPageState = (): YearPageState => {
  const route = useRoute();

  const year = computed(() => route.params.id as string);
  const articlesFetcher = computed(
    () => async () => fetchArticles("year", parseInt(year.value))
  );
  const articles = useEndpoint(articlesFetcher, []);

  usePageTitle(year);

  return {
    title: year,
    articles,
  };
};
