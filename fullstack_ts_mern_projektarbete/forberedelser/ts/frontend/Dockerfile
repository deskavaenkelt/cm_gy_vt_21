# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/frontend

# Copy package.json to container
COPY package*.json ./

###  Installing dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
