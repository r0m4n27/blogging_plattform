# Anhang

<!-- ## API-Routen \label{APIRoutes}

In diesem Abschnitt finden sich alle API-Routen des Backends.
So wird jeder Router in einem Unterabschnitt dargestellt.
Für einen Endpunkt wird immer wird immer seine Route, Methode,
mögliche Statuscodes, Middleware und Response angegeben.
Der Typ des Requests kann durch die einzelnen Validations-Middleware
abgeleitet werden.
Für die Daten des Request werden mit Hilfe eines Typescript Typen
oder der `zod`-Schema Definition angegeben. Der Return eines Endpunktes
wird mit Hilfe eines Typescript Typen angegeben. Den Endpunkten
stehen folgenden Middleware zur Verfügung:

- `userGuard(userRole?: UserRole)`:
  - Verifiziert anhand des JWT-Token den User
  - Wenn eine `userRole` mitgegeben wurde, muss der User die Rolle haben
- `validateBody(schema: ZodSchema<Body>)`:
  - Validiert den Request-Body nach dem Schema
- `validateQuery(schema: ZodSchema<Body>)`:
  - Validiert die Request-Query nach dem Schema
- `validateParams(schema: ZodSchema<Body>)`:
  - Validiert die Request-Parameter nach dem Schema

Bei jeder einzelnen Route kann noch ein Error zurückgegeben werden, dieser
hat den folgenden Typen: `type ErrorResponse = { message: string; }`.
Auch wird bei jeden Router eine Basisroute angegeben. Diese wird
vor der Route eines einzelnen Endpunktes angehängt. Außerdem stehen die folgenden
Typen jedem Router zur Verfügung:

```ts
type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  year: number;
  published: boolean;
  updatedAt: Date;
  authorId: string;
};

const idParamsSchema = z.object({
  id: z.string().uuid(),
});
```

### AuthorArticleRouter

#### Verwendete Typen

```ts
type ArticleResponse = Omit<Article, "authorId" | "updatedAt">

const categoriesIdsSchema = z.array(z.object({ id: z.string() }));

const articleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  content: z.string(),

  published: z.boolean(),

  categories: categoriesIdsSchema,
});
```

#### Endpunkte

- Basisroute: /author/articles
- Jeder Endpunkt verwendet die `userGuard("Author")` Middleware

- Route: / GET
  - Statuscodes: 200, 401
  - Response: `ArticleResponse[]`
- Route: /:id GET
  - Statuscodes: 200, 404, 401
  - Middleware: `validateParams(idParamsSchema)`
- Route: / POST
  - Statuscodes: 200, 400, 401
  - Middleware: `validateBody(articleSchema)`
  - Response: `ArticleResponse`
- Route: /:id DELETE
  - Statuscodes: 200, 404, 401
  - Middleware: `validateParams(idParamsSchema)`
  - Response: `{}`
- Route: /:id PATCH
  - Statuscodes: 200, 404, 401
  - Middleware:
    - `validateBody(articleSchema.partial())`
    - `validateParams(idParamsSchema)` -->
