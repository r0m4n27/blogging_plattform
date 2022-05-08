import type { NewArticlePayload } from "@/api/article";
import { authorRoutes } from "@/lib/router/author";
import { useRouter } from "vue-router";
import { usePageTitle } from "../../head/usePageTitle";
import { publishArticle as publishArticleInternal } from "@/api/article";

export interface NewArticleState {
  publishArticle: (payload: NewArticlePayload) => Promise<void>;
}

export const useNewArticleState = (): NewArticleState => {
  usePageTitle("New Article");

  const router = useRouter();

  const publishArticle = async (payload: NewArticlePayload) => {
    await publishArticleInternal(payload);
    router.replace(authorRoutes.home.route);
  };

  return {
    publishArticle,
  };
};
