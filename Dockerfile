# Stage 1 - Build React App inside temporary Node Container
# FROM node:carbon-alpine as a react-build
FROM node:10-alpine AS builder
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run ng build --prod

#Stage 2 - Deploy with NGINX
FROM nginx:1.20.2-alpine
COPY --from=builder /usr/src/app/dist/resto-app /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]