# Docker på ett MERN projekt

Kredit till [Girlie för källkoden](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList)

# Docker Files

Now, we need to create a Dockerfile for the server and the client. The Dockerfile essentially contains the build
instructions to build the image.

Let’s start by creating the Dockerfile for the client (our React Frontend).

## Frontend

1. In the client folder, create a file called `Dockerfile` without any extension.
2. Write the following lines of code in the file:

```dockerfile
# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
```

We can simply build our Frontend with this command

```shell
docker build -t girlie-todo-react-app .
```

To verify everything is fine, we run our newly built container using the command:

```shell
docker run -p 3000:3000 react-app 
```

This will run just the Frontend on [http://localhost:3000](http://localhost:3000).

## Backend

In the same way, we create a file called `Dockerfile` for the Backend Server.

1. Now, we create a Dockerfile for the server directory.
2. Write the following lines of code in the file:

```dockerfile
#  Dockerfile for Node Express Backend

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]
```

We can simply build our Backend with this command:

```shell
docker build -t node-app .
```

# Docker Compose

To run our entire application together, i.e run all containers parallelly, we need to configure the docker-compose file.

1. In the main directory of the project, (outside the server/client) create a file named `docker-compose.yml` .
2. Write these contents into the file.

```yaml
version: '3.7'

services:
  server:
    build:
      context: ./server
      dockerfile: Dockerfile
    image: myapp-server
    container_name: myapp-node-server
    command: /usr/src/app/node_modules/.bin/nodemon server.js
    volumes:
      - ./server/:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "5000:5000"
    depends_on:
      - mongo
    env_file: ./server/.env
    environment:
      - NODE_ENV=development
    networks:
      - app-network
  mongo:
    image: mongo
    volumes:
      - data-volume:/data/db
    ports:
      - "27017:27017"
    networks:
      - app-network
  client:
    build:
      context: ./client
      dockerfile: Dockerfile
    image: myapp-client
    container_name: myapp-react-client
    command: npm start
    volumes:
      - ./client/:/usr/app
      - /usr/app/node_modules
    depends_on:
      - server
    ports:
      - "3000:3000"
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  data-volume:
  node_modules:
  web-root:
    driver: local
```

## Creating the Build

To create the build for the entire application, we need to run the following command:

```shell
docker-compose build
```

## Starting the Services

We can start the multi-container system using the following simple command:

```shell
docker-compose up
```

- At last, we can open http://localhost:3000 to see our React Frontend.
- The backend server is live on http://localhost:5000
- And MongoDB is running on http://localhost:27017

## Maintenance & Inspection

We can inspect running services using the `docker-compose ps` command.

The `docker-compose logs` will dump logs of all the running services.

## Stopping the containers

To stop all the services, we use:

```shell
docker-compose stop
```

Using:

```shell
docker-compose down --volumes 
```

Brings everything down, removing the containers entirely, with the data volume of the services.
