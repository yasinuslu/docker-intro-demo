FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

CMD ["yarn", "start"]
