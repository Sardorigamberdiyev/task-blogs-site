FROM node:20 as node
WORKDIR /opt/app
ADD *.json ./
RUN npm install
ADD . .
RUN npm run build

FROM nginx:1.13
COPY --from=node /opt/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80