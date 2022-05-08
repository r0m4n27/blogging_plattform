import { fetchArticles, type Article } from "@/api/article";
import type { Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface HomePageState {
  articles: Ref<Article[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Articles");

  const articles = useEndpoint(fetchArticles, []);

  return {
    articles,
  };
};
