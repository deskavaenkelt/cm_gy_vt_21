# Server med Express

`npm init -y`

I ``package.json`` lägg till keywords så filen ser ut så här:

``json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "RestAPI",
    "Express"
  ],
  "author": "",
  "license": "ISC"
}
```

Installera npm paketen:
- express `npm i express`
- nodemon: `npm install -D nodemon`
- eslint: `npm i -D eslint` (frivilligt)

`nodemon Server.js`
`npm start Server.js`

## modules

I `package.json` lägg till type så filen ser ut så här:

``json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "RestAPI",
    "Express"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
```

- `npm i dotenv`
- `npm i cors`
