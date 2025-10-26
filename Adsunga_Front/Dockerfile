FROM node:20
WORKDIR /app

COPY package*.json ./

# 1) Installe la plupart des deps (incl. optionnelles)
RUN npm install --legacy-peer-deps

# 2) Force l’ajout des binaires natifs Linux
RUN npm install \
    @tailwindcss/oxide-linux-x64-gnu@$(npm view @tailwindcss/oxide-linux-x64-gnu version) \
    lightningcss-linux-x64-gnu@$(npm view lightningcss-linux-x64-gnu version)

COPY . .

ARG VITE_PORT VITE_APP_ENV
ENV VITE_PORT=${VITE_PORT} VITE_APP_ENV=${VITE_APP_ENV}

# Build en prod seulement
RUN if [ "$VITE_APP_ENV" = "prod" ]; then npm run build; fi

CMD [ "/bin/sh", "-c","if [ \"$VITE_APP_ENV\" = \"prod\" ]; then npm install -g serve && serve -s dist -l ${VITE_PORT}; else npm run dev; fi"]
