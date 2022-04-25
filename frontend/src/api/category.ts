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
export const mockCategories: Category[] = Array(3).fill(programmingCategory);
mockCategories.push(jsCategory);
