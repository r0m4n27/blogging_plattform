FROM node:alpine AS builder

WORKDIR /app

COPY ./frontend/package*.json .
RUN npm install

COPY ./frontend .
RUN npm run build

# At this point we could also use nginx
FROM node:alpine AS runner

RUN npm install -g vite
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY ./frontend/package.json .

EXPOSE 8080
CMD ["npm", "run", "serve-prod"]
