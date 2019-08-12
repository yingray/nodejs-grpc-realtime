FROM node:10.16.0
WORKDIR /web
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .
RUN yarn build