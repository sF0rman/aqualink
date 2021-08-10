# Build Project
FROM node:12.22.4-alpine as build
WORKDIR /app
COPY . /app/
RUN npm ci --silent
RUN npm install react-scripts@4.0.3 -g --silent
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]