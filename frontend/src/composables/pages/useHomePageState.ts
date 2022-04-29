import { fetchArticles, type Article } from "@/api/article";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";
import { useSiteConfig } from "../useSiteConfig";

export interface HomePageState {
  blogTitle: Ref<string>;
  articles: Ref<Article[]>;
}

export const useHomePageState = (): HomePageState => {
  usePageHead();

  const siteConfig = useSiteConfig();
  const { blogTitle } = storeToRefs(siteConfig);

  const articles = useEndpoint(fetchArticles, []);

  return {
    blogTitle,
    articles,
  };
};
