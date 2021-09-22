# Fullstack Users API with TypeScript

## Content

- [Installation](#installation)
    - [Backend installation](#backend-installation)
    - [Frontend installation](#frontend-installation)
- [](#)
- [](#)
- [](#)
- [](#)

## Installation

### Backend installation

Install:

- `npm init -y`
- `npm install express`
- `npm install dotenv`
- `npm install -D nodemon`
- `npm install --save-dev typescript`
- `npm install --save-dev tslint`

#### Setup your Node.js project to use TypeScript.

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

Based on this `tsconfig.json` file, the TypeScript compiler will (attempt to) compile any files ending with `.ts` it finds in the `src` folder, and store the results in a folder named `dist`. Node.js uses the CommonJS module system, so the value for the `module` setting is `commonjs`. Also, the target version of JavaScript is ES6 (ES2015), which is compatible with modern versions of Node.js.

Next, create a new file in the root folder named `tslint.json` file and add the following configuration.

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "trailing-comma": [ false ]
  },
  "rulesDirectory": []
}
```

Next, update your `package.json` to change `main` to point to the new `dist folder created by the TypeScript compiler. Also, add a couple of scripts to execute TSLint and the TypeScript compiler just before starting the Node.js server.

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



- ``
- ``

### Frontend installation







