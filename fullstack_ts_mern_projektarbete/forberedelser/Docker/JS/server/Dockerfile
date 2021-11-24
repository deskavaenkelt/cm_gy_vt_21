#  Dockerfile for Node Express Backend

FROM node:17-alpine3.14

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 3001

CMD ["npm","start"]
