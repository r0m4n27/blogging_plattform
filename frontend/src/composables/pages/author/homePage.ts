import { fetchAuthorArticles, type AuthorArticle } from "@/api/article";
import type { Ref } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface HomePageState {
  articles: Ref<AuthorArticle[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Articles");

  const { value: articles } = useEndpoint(fetchAuthorArticles, []);

  return {
    articles,
  };
};
