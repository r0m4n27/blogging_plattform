import { fetchAuthorArticles, type AuthorArticle } from "@/api/article";
import type { Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";

export interface HomePageState {
  articles: Ref<AuthorArticle[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Articles");

  const articles = useEndpoint(fetchAuthorArticles, []);

  return {
    articles,
  };
};
