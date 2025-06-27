FROM node:20-alpine

WORKDIR /home-api-jobs

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
