import type { NewArticlePayload } from "@/api/article";
import { authorRoutes } from "@/lib/router/author";
import { useRouter } from "vue-router";
import { usePageTitle } from "../../head/usePageTitle";

export interface NewArticleState {
  publishArticle: (payload: NewArticlePayload) => Promise<void>;
}

export const useNewArticleState = (): NewArticleState => {
  usePageTitle("New Article");

  const router = useRouter();

  const publishArticle = async (payload: NewArticlePayload) => {
    await publishArticle(payload);
    router.replace(authorRoutes.home.route);
  };

  return {
    publishArticle,
  };
};
