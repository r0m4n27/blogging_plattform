export interface Category {
  id: string;
  name: string;
  articleCount: number;
}

export const programmingCategory: Category = {
  id: "1",
  name: "Programming",
  articleCount: 10,
};

export const jsCategory: Category = {
  id: "2",
  name: "Javascript",
  articleCount: 5,
};
let mockCategories: Category[] = Array(3).fill(programmingCategory);
mockCategories.push(jsCategory);

export const fetchCategories = async (): Promise<Category[]> => {
  return mockCategories;
};

export const fetchCategory = async (id: string): Promise<Category> => {
  return mockCategories.find((category) => category.id === id) as Category;
};

export const deleteCategory = async (category: Category): Promise<void> => {
  mockCategories = mockCategories.filter((c) => c.id !== category.id);
};
