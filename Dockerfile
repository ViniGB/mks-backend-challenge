FROM node:16.14-alpine as backend
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start:dev"]