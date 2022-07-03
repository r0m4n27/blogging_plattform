FROM node:slim AS base

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y openssl && rm -rf /var/lib/apt/lists/*

FROM base AS deps

# Prepare cached values
WORKDIR /app

RUN mkdir -p /app/apps/backend
COPY ./package*.json .
COPY ./apps/backend/package*.json ./apps/backend/.
COPY ./apps/backend/prisma ./apps/backend/.
COPY ./packages/config ./packages/config

FROM deps as builder

RUN npm install --workspace=@blog/config --workspace=@blog/backend && \
  cd apps/backend && \
  npx prisma generate

# Install app
COPY ./packages /app/packages
COPY ./apps/backend /app/apps/backend
RUN npm run build --workspace=@blog/backend

# Only copy production dependencies to runner image
FROM deps as prod_deps

RUN npm install --workspace=@blog/config --workspace=@blog/backend --omit=dev

FROM base AS runner

WORKDIR /app

COPY --from=prod_deps /app/node_modules /app/node_modules
COPY --from=builder /app/apps/backend/dist /app/dist
# Copy also generated prisma client
COPY --from=builder /app/node_modules/.prisma /app/node_modules/.prisma

CMD ["node", "./dist/main.js"]
