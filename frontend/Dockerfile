FROM node:20-alpine3.20

WORKDIR /app

COPY package* ./

RUN npm install axios && npm install -g json-server && npm install 

# Expone los puertos necesarios
EXPOSE 3001 5173







