# Fullstack-Course Project: Blogging-Plattform

This project was done as part of the fullstack course at the
[HSA](https://www.hs-augsburg.de/Informatik.html) where the goal
was to build up a web app that uses `express` and `Vue`.

The goal of this project was to build a simple blog that
has a administrative interface for the admin and the authors of the blog.
The posts could be written in markdown thanks to [unified.js](https://unifiedjs.com/).

![](./assets/author_view.png)

## Getting Started

1. Create a `.env` file with the following variables

```sh
DB_USER="<username>"
DB_PASSWORD="<password>"
DB_DATABASE="<db-name>"

DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_DATABASE}?schema=public"
JWT_SECRET="<random hex string>"
ADMIN_REGISTER_CODE="<random uuid>"
TOKEN_EXPIRY_INTERVALL="<time span>"
```

If you want to build and run the docker containers swap `localhost` with `db`.
The `TOKEN_EXPIRY_INTERVALL` is a time span that is described with [vercel/ms](https://github.com/vercel/ms).

2. Copy the env file into the `backend`: `cp .env apps/backend`
3. Install npm packages: `npm i`
4. Start the database: `docker-compose -f compose-database.yml up`
5. Perform the migrations: `npm run migrate --workspace=@blog/backend`
6. Start the application: `npm run start:watch`

## Monorepo structure

### Apps

- `@blog/backend`: The backend using `express` and `prisma`
- `@blog/frontend`: `Vue` app running and bundles with `vite`
- `@blog/storybook`: App for `storybook` that shows every story of the Monorepo
  - Currently only has the stories of `@blog/frontend`

### Packages

- `@blog/config`: Base configuration files like `tsconfig.base.json`

## Acknowledgments

Other projects/blog posts that helped me in creating this project:

- [Chakra UI](https://chakra-ui.com/): Beautiful Component library
  - Since [@chakra-ui/vue](https://github.com/chakra-ui/chakra-ui-vue-next) is in alpha
    the actual components were recreated with the help of the react source
- [Writing a Book with Pandoc, Make, and Vim](https://keleshev.com/my-book-writing-setup/): Setup for the report
- [pandoc-thesis](https://github.com/cagix/pandoc-thesis): The template for the report
- [node-typescript-boilerplate
](https://github.com/jsynowiec/node-typescript-boilerplate): Scaffolding of `@blog/backend`
