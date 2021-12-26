FROM node:alpine3.14 AS builder
WORKDIR /DockerDemo
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.20.2-alpine
COPY --from=builder /resto-management-ui/dist/DockerDemo /usr/share/nginx/html