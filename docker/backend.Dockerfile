FROM node:slim AS builder

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

WORKDIR /app/apps/backend

RUN npm install && npx prisma generate
RUN npm run build

CMD ["node", "./dist/main.js"]
