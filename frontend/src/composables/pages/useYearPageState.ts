import { fetchArticles, type Article } from "@/api/article";
import { computed, type ComputedRef, type Ref } from "vue";
import { useRoute } from "vue-router";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";

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

  usePageHead(year);

  return {
    title: year,
    articles,
  };
};
