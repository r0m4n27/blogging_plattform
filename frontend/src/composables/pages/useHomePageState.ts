import { fetchArticles, type Article } from "@/api/article";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { useEndpoint } from "../useEndpoint";
import { useSiteConfig } from "../useSiteConfig";

export interface HomePageState {
  blogTitle: Ref<string>;
  articles: Ref<Article[]>;
}

export const useHomePageState = (): HomePageState => {
  const siteConfig = useSiteConfig();
  const { blogTitle } = storeToRefs(siteConfig);

  const articles = useEndpoint(fetchArticles, []);

  return {
    blogTitle,
    articles,
  };
};
