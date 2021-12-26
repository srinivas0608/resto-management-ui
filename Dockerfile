# Stage 1 - Build React App inside temporary Node Container
FROM node:12.7-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#Stage 2 - Deploy with NGINX
FROM nginx:1.20.2-alpine as prod-stage
COPY --from=builder /app/dist/angular-docker /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]