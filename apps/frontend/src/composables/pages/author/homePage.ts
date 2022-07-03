import { getAuthorArticles, type AuthorArticle } from "@blog/frontend/api/article";
import { useUser } from "@blog/frontend/composables/store/user";
import { computed, type Ref } from "vue";
import { usePageTitle } from "../../head/pageTitle";
import { useEndpoint } from "../../util/endpoint";

export interface HomePageState {
  articles: Ref<AuthorArticle[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle("Articles");

  const user = useUser();
  const articlesFetcher = computed(
    () => () => user.fetchWithToken(getAuthorArticles, []),
  );
  const { value: articles } = useEndpoint(articlesFetcher, []);

  return {
    articles,
  };
};
