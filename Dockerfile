FROM node:12.22.12-alpine3.14

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]