import type { NewArticlePayload } from "@/api/article";
import { authorRoutes } from "@/lib/router/author";
import { useRouter } from "vue-router";
import { usePageTitle } from "../../head/pageTitle";
import { publishArticle as publishArticleInternal } from "@/api/article";
import type { Ref } from "vue";
import { fetchCategories, type Category } from "@/api/category";
import { useEndpoint } from "@/composables/util/endpoint";

export interface NewArticleState {
  existingCategories: Ref<Category[]>;
  publishArticle: (payload: NewArticlePayload) => Promise<void>;
}

export const useNewArticleState = (): NewArticleState => {
  usePageTitle("New Article");

  const router = useRouter();

  const publishArticle = async (payload: NewArticlePayload) => {
    await publishArticleInternal(payload);
    router.replace(authorRoutes.home.route);
  };

  const { value: existingCategories } = useEndpoint(fetchCategories, []);

  return {
    existingCategories,
    publishArticle,
  };
};
