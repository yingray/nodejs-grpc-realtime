FROM node:10.16.0 AS compiler
WORKDIR /web
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn
COPY ./frontend .
RUN yarn build

FROM node:10.16.0-alpine 
WORKDIR /web
COPY --from=compiler /web/package.json /web/yarn.lock ./
COPY --from=compiler /web/dist ./dist
RUN yarn install --production
ENTRYPOINT yarn start