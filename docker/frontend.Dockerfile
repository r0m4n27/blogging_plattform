FROM node:alpine AS builder

# Prepare cached values
WORKDIR /app

RUN mkdir -p /app/apps/frontend
COPY ./package*.json .
COPY ./apps/frontend/package*.json ./apps/frontend/.
COPY ./packages/config ./packages/config

WORKDIR /app/apps/backend
RUN npm install

# Install app
WORKDIR /app

COPY . .

WORKDIR /app/apps/frontend

RUN npm run build

FROM nginx:alpine as runner
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html
