FROM node:latest
# WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5000
CMD [ "node", "index.js" ]


