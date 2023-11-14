FROM node:18

WORKDIR /Server
COPY /Server/package.json
RUN npm install
COPY . .
EXPOSE 3306
CMD ["node", "app.js"]