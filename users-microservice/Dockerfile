FROM node:18

WORKDIR /usr/src/app

# COPY package.json /.
# COPY yarn-lock ./

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .