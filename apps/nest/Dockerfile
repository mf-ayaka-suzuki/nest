FROM node:22.14.0-alpine3.21

WORKDIR /opt/apps/nest

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

#　まだschema.prismaにモデルがないためコメントアウトしておく。
# RUN npx prisma generate

ENTRYPOINT ["yarn", "run", "start:dev"]