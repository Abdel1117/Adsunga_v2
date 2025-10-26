
ARG NODE_VERSION=20

FROM node:${NODE_VERSION} AS base
WORKDIR /app
COPY package*.json ./

FROM base AS dev

ARG PORT
ARG APP_ENV
ARG MONGO_PORT

ENV NODE_ENV=${APP_ENV}
ENV PORT=${PORT}
ENV MONGO_PORT=${MONGO_PORT}

# Installer les dépendances
RUN npm install && npm install nodemon && npm install -g pm2
COPY . .
EXPOSE ${PORT}
# Lancement en mode développement

CMD [ "/bin/sh", "-c", "if [ \"$APP_ENV\" = \"prod\" ]; then pm2-runtime server.js; else npm run dev; fi" ]
