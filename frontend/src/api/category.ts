import {
  deleteWithToken,
  get,
  getWithToken,
  patchWithToken,
  postWithToken,
} from "@/lib/fetch";

export interface Category {
  id: string;
  name: string;
  articleCount: number;
}

export type AuthorCategory = Omit<Category, "articleCount">;

type CreateCategoryPayload = {
  name: string;
};

const categoryBase = "/api/categories";

export const getCategories = () => get<Category[]>(categoryBase);

export const getCategory = (id: string) =>
  get<Category>(`${categoryBase}/${id}`);

const authorCategoryBase = "/api/author/categories";

export const getAuthorCategories = (token: string) =>
  getWithToken<AuthorCategory[]>(authorCategoryBase, token);

export const deleteCategory = (category: AuthorCategory) => (token: string) =>
  deleteWithToken(`${authorCategoryBase}/${category.id}`, token);

export const createCategory = (name: string) => (token: string) =>
  postWithToken<AuthorCategory, CreateCategoryPayload>(
    authorCategoryBase,
    token,
    {
      name,
    }
  );

export const updateCategory =
  (category: Category) =>
  (token: string): Promise<unknown> => {
    const { id, ...payload } = category;

    return patchWithToken(`${authorCategoryBase}/${id}`, token, payload);
  };
