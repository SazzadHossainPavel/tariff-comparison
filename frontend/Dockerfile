
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build

EXPOSE 80

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
