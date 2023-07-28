FROM node:18-alpine3.17
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=development

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
