# Backend with TypeScript

## Setting up the project environment

- `npm init -y`
- `npm install express`
- `npm install dotenv`
- `npm install -D nodemon`

### Create a standard express application:

Create a folder named `src`. In this folder, create a file named `server.js`. Open the file and add the following
JavaScript.

```javascript
const express = require("express");
const app = express();
const port = 3001; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("API is Alive!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
```

Next, update `package.json` to instruct `npm` on how to run your application. Change the main property value to point
to `src/index.js`, and add a `start` script to the `scripts` object.

```json
  "main": "src/server.js",
"scripts": {
"start": "node .",
"test": "echo \"Error: no test specified\" && exit 1"
},
```

Now, from the terminal or command line, you can launch the application.

`npm run start`

If all goes well, you should see this message written to the console.

`server started at http://localhost:3001`

### Setup your Node.js project to use TypeScript.

- `npm install --save-dev typescript`
- `npm install --save-dev tslint`

Create a file named `tsconfig.json` in the root folder of your project, and add the following configuration.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*"
      ]
    }
  },
  "include": [
    "src/**/*"
  ]
}
```

Based on this `tsconfig.json` file, the TypeScript compiler will (attempt to) compile any files ending with `.ts` it
finds in the `src` folder, and store the results in a folder named `dist`. Node.js uses the CommonJS module system, so
the value for the `module` setting is `commonjs`. Also, the target version of JavaScript is ES6 (ES2015), which is
compatible with modern versions of Node.js.

Next, create a new file in the root folder named `tslint.json` file and add the following configuration.

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "trailing-comma": [
      false
    ]
  },
  "rulesDirectory": []
}
```

Next, update your `package.json` to change `main` to point to the new `dist folder created by the TypeScript compiler.
Also, add a couple of scripts to execute TSLint and the TypeScript compiler just before starting the Node.js server.

```json
{
  "main": "dist/index.js",
  "scripts": {
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Finally, change the extension of the `src/server.js` file from `.js` to `.ts`, the TypeScript extension, and run the
start script.

`npm run start`

### Fix TypeScript Errors

Change the server.ts content to this

```typescript
// const express = require( "express" );
import express from "express";

const app = express();
const port = 3001; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
	res.send("API is Alive!");
});

// start the Express server
app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${ port }`);
});
```

Update your project so that TypeScript can use the type declarations for Node.js and Express.

- `npm install --save-dev @types/node @types/express`

Next, rerun the start script and verify there are no more errors.

- `npm run start`

### Nodemon

- `npm install --save-dev nodemon`

Create `nodemon.json` configuration file inside root directory.

```json
{
  "ignore": [".git", "node_modules", "dist"],
  "watch": ["./src"], // <- files inside folder to watch
  "exec": "npm start", // <- command that will be executed when nodemon starts
  "ext": "ts"// <- files to watch
}
```

Remove the comments of course. Add additional script for nodemon inside package.json scripts.

```json
"start:nodemon": "./node_modules/nodemon/bin/nodemon.js",
```

- `npm run start:nodemon`

### CORS

- `npm install cors`
- `npm install --save-dev @types/cors`

```typescript
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
};

app.use(cors(options))
```

### Add JSON support

```typescript
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
```

- `npm run start:nodemon`

## Bonus: Replace `console.log()` with `winston`

[winston](https://www.npmjs.com/package/winston)

- `npm i winston`

[Better logs for ExpressJS using Winston and Morgan with Typescript](https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342)

### Morgan middleware

- `npm i winston`


## Resources

- [Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)
- [Create new Node.js application with Express, TypeScript, Nodemon and ESLint - Part 1](https://dev.to/admirnisic/create-new-node-js-application-with-express-typescript-nodemon-and-eslint-f2l)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [How to serve POST request with Node using Express and Typescript?](https://stackoverflow.com/questions/61291330/how-to-serve-post-request-with-node-using-express-and-typescript)
- [Add CORS Support to Your Express + TypeScript API](https://www.twilio.com/blog/add-cors-support-express-typescript-api)
