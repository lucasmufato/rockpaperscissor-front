FROM node:16.17-alpine as builder
WORKDIR /src/app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=builder /src/app/dist/rockpaperscissor-front /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
