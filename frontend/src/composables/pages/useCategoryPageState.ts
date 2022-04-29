import { fetchArticles, type Article } from "@/api/article";
import { fetchCategory } from "@/api/category";
import { computed, type ComputedRef, type Ref } from "vue";
import { useRoute } from "vue-router";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";

export interface CategoryPageState {
  title: ComputedRef<string>;
  articles: Ref<Article[]>;
}

export const useCategoryPageState = (): CategoryPageState => {
  const route = useRoute();

  const categoryId = computed(() => route.params.id as string);

  const categoryFetcher = computed(
    () => async () => fetchCategory(categoryId.value)
  );
  const category = useEndpoint(categoryFetcher);

  const articlesFetcher = computed(
    () => async () => fetchArticles("category", categoryId.value)
  );
  const articles = useEndpoint(articlesFetcher, []);

  const title = computed(() => category.value?.name ?? "");

  usePageHead(title);

  return {
    title,
    articles,
  };
};
