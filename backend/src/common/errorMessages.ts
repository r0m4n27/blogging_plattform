export const authErrorMessages = {
  badLogin: "Password does not match!",
  cantFindCode: "Can't find register code!",
  usernameExists: "Username is already taken!",
} as const;

export const siteConfigErrorMessage = {
  siteNotInitialized: "Site is not initialized!",
  siteAlreadyInitialized: "Site is already initialized!",
} as const;

export const articleErrorMessages = {
  articleNotFound: "Article not found!",
} as const;

export const categoryErrorMessages = {
  categoryNotFound: "Category not found!",
} as const;
