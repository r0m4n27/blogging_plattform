FROM node:alpine AS builder

# Prepare cached values
WORKDIR /app

RUN mkdir -p /app/apps/frontend
COPY ./package*.json .
COPY ./apps/frontend/package*.json ./apps/frontend/.
COPY ./packages/config ./packages/config

RUN npm install --workspace=@blog/config --workspace=@blog/frontend

# Install app
COPY ./packages /app/packages
COPY ./apps/frontend /app/apps/frontend
RUN npm run build --workspace=@blog/frontend

FROM nginx:alpine as runner
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html
