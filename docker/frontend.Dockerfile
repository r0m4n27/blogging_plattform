FROM node:alpine AS builder

WORKDIR /app

COPY . .

WORKDIR /app/apps/frontend

RUN npm install && npm run build

FROM nginx:alpine as runner
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html
