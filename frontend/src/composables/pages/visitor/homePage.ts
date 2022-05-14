import { fetchArticles, type Article } from "@/api/article";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { usePageTitle } from "../../head/usePageTitle";
import { useEndpoint } from "../../useEndpoint";
import { useSiteConfig } from "../../useSiteConfig";

export interface HomePageState {
  blogTitle: Ref<string>;
  articles: Ref<Article[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageTitle();

  const siteConfig = useSiteConfig();
  const { blogTitle } = storeToRefs(siteConfig);

  const { value: articles } = useEndpoint(fetchArticles, []);

  return {
    blogTitle,
    articles,
  };
};
