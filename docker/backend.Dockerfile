FROM node:slim AS builder

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y openssl && rm -rf /var/lib/apt/lists/*

# Prepare cached values
WORKDIR /app

RUN mkdir -p /app/apps/backend
COPY ./package*.json .
COPY ./apps/backend/package*.json ./apps/backend/.
COPY ./apps/backend/prisma ./apps/backend/.
COPY ./packages/config ./packages/config

WORKDIR /app/apps/backend

RUN npm install && npx prisma generate

# Install app
WORKDIR /app

COPY . .

WORKDIR /app/apps/backend

RUN npm run build

CMD ["node", "./dist/main.js"]
