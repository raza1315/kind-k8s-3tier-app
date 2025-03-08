# Use Node.js image to build Vite app

FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build


# Use nginx to serve the built app

FROM nginx:alpine
WORKDIR usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

