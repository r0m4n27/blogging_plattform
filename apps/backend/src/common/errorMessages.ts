export const authErrorMessages = {
  badLogin: "Password does not match!",
  cantFindCode: "Can't find register code!",
  usernameExists: "Username is already taken!",
  noSecondAdmin: "Only one admin can be created!",
} as const;

export const siteConfigErrorMessages = {
  siteNotInitialized: "Site is not initialized!",
  siteAlreadyInitialized: "Site is already initialized!",
} as const;

export const articleErrorMessages = {
  articleNotFound: "Article not found!",
} as const;

export const categoryErrorMessages = {
  categoryNotFound: "Category not found!",
} as const;

export const registerCodesMessages = {
  registerCodeNotFound: "RegisterCode not found!",
} as const;

export const userErrorMessages = {
  userNotFound: "User not found!",
} as const;
