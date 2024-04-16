# Stage 1
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2
FROM node:20-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["npm", "start"]