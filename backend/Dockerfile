FROM node:slim as base
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y openssl && rm -rf /var/lib/apt/lists/*

FROM base AS builder

WORKDIR /app

COPY ./package*.json .
COPY prisma ./prisma
RUN npm install && npx prisma generate

COPY . .
RUN npm run build

FROM base as runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["node", "/app/dist/main.js"]
