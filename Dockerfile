FROM node:18-alpine
# FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json /usr/src/app/
COPY . .

RUN yarn
RUN yarn install
RUN yarn build


EXPOSE 3000
EXPOSE 80
CMD ["yarn", "start"] 