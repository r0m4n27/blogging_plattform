import type { AuthorArticle, NewArticlePayload } from "@blog/frontend/api/article";
import type { Category } from "@blog/frontend/api/category";
import { ref, type Ref } from "vue";

export type EditorAction = "publish" | "draft" | "delete" | "save";

export interface ArticleEditorState {
  title: Ref<string>;
  summary: Ref<string>;
  categories: Ref<Category[]>;
  content: Ref<string>;

  performAction: (action: EditorAction) => void;
}

// Has to be redefined since vue cant import interfaces for
// props or emits
interface ArticleEditorEmits {
  (e: "newArticle", payload: NewArticlePayload): void;
  (e: "updateArticle", article: AuthorArticle): void;
  (e: "deleteArticle"): void;
}

export const useArticleEditorState = (
  emit: ArticleEditorEmits,
  article?: AuthorArticle,
): ArticleEditorState => {
  const title = ref(article?.title ?? "");
  const summary = ref(article?.summary ?? "");
  const content = ref(article?.content ?? "");
  const categories = ref(article?.categories ?? []);

  const createNewArticle = (type: "publish" | "draft") => {
    const payload: NewArticlePayload = {
      title: title.value,
      summary: summary.value,
      content: content.value,
      categories: categories.value,
      published: type === "publish",
    };

    emit("newArticle", payload);
  };

  const updateArticle = (type: "publish" | "draft" | "save") => {
    let published: boolean;
    if (type === "publish") {
      published = true;
    } else if (type === "draft") {
      published = false;
    } else {
      // We know that updateArticle is only called
      // when article is not undefined
      // eslint-disable-next-line
      published = article!.published;
    }

    const newArticle = {
      // eslint-disable-next-line
      ...article!,
      published,
      title: title.value,
      summary: summary.value,
      content: content.value,
      categories: categories.value,
    };

    emit("updateArticle", newArticle);
  };

  const performAction = (action: EditorAction) => {
    if (article === undefined) {
      if (action !== "delete" && action !== "save") {
        createNewArticle(action);
      }
    } else {
      if (action !== "delete") {
        updateArticle(action);
      } else {
        emit("deleteArticle");
      }
    }
  };

  return {
    title,
    summary,
    content,
    categories,
    performAction,
  };
};
