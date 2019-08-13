FROM node:10.16.0-alpine 
WORKDIR /backend
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY ./backend/index.js .
ENTRYPOINT node index.js