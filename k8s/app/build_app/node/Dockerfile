FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar apenas arquivos de dependências para aproveitar o cache
COPY package*.json ./

# Instalar dependências (production apenas, para reduzir tamanho)
RUN npm install --production

# Agora copiar o código restante
COPY . .

# Instalar dockerize
RUN apk add --no-cache wget tar

ENV DOCKERIZE_VERSION=v0.6.1


RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD ["node", "index.js"]
