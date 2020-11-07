FROM node:alpine as build-stage
WORKDIR /usr/src/app
COPY package.json index.js index.test.js ./
RUN npm install
COPY src src
ENTRYPOINT ["npm", "test", "start"]