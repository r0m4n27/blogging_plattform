import {
  deleteWithToken,
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

export const programmingCategory: Category = {
  id: "1",
  name: "Programming",
  articleCount: 10,
};

export const jsCategory: Category = {
  id: "3",
  name: "Javascript",
  articleCount: 5,
};
let mockCategories: Category[] = Array(3).fill(programmingCategory);
mockCategories.push(jsCategory);
mockCategories = mockCategories.map((category, index) => {
  return {
    ...category,
    id: `${index}`,
  };
});

export const fetchCategories = async (): Promise<Category[]> => {
  return mockCategories;
};

export const fetchCategory = async (id: string): Promise<Category> => {
  return mockCategories.find((category) => category.id === id) as Category;
};

const authorCategoryBase = "/api/author/categories";

export const getAuthorCategories = (token: string) =>
  getWithToken<AuthorCategory[]>(authorCategoryBase, token);

export const deleteCategory = (token: string, category: AuthorCategory) =>
  deleteWithToken(`${authorCategoryBase}/${category.id}`, token);

export const createCategory = (token: string, name: string) =>
  postWithToken<AuthorCategory, CreateCategoryPayload>(
    authorCategoryBase,
    token,
    {
      name,
    }
  );

export const updateCategory = (
  token: string,
  category: Category
): Promise<unknown> => {
  const { id, ...payload } = category;

  return patchWithToken(`${authorCategoryBase}/${id}`, token, payload);
};
