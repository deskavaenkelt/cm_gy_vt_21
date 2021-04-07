# Lektion 2021-04-07

## Innehåll

- [](#)
- [Node & NPM](#node--npm)
- [](#)
- [](#)

# Frågor och svar

Vad kan man göra för att bli bättre på det vi gör?
- HTML
- CSS
- JavaScript


# Punkter idag

Gör en snabb hemsida

# Node & NPM

## Vad är NPM?

Node Package Manager, register med färdiga packet som vi kan använda.

- Vem som helst kan ladda upp packet till npm
- Vi har redan använt ett packet, `live-server`

Paketet innehåller:

- package.json
- js-filer

Alternativ är yarn.

Finns packet för frontend och backend

**3 saker kommer vi använda os av framgent**

1. HTML + CSS + JavaScript
2. Github Repo + Git
3. Package.json fil (Manage files)

## Uppgradera npm

Vi har redan installerat node & npm men vi kan uppgradera vår version med kommandot.

**Linux och Mac**

`npm install npm@latest -g`

**Windows**

Öppna PowerShell som Administratör och klistra in:

`Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force`

Installera en uppgraderingshanterare:

`npm install --global --production npm-windows-upgrade`

Uppdatera till senaste versionen:

`npm-windows-upgrade --npm-version latest`

Uppdatera till och välj version manuellt:

`npm-windows-upgrade`

[Källa](https://github.com/felixrieseberg/npm-windows-upgrade)

## För att starta ett npm projekt

Skriv i konsolen:

`npm init`


# React

[Reacts npm sida](https://www.npmjs.com/package/react)

## Hämta och installera npm paketet

`npm install <package-name>`

**Linux och Mac**

Skriv i konsolen:

`npm install react`

Om du får felmeddelande så beror det antagligen på rättighetsproblem, man måste installera som Administratör eller root användare.

Skriv i konsolen:

`sudo npm install react`

**Windows**

`npm install react`

## Avinstallera npm paketet

`npm uninstall <package-name>`

`npm uninstall react`

## Installera React

Vi ska använda [create-react-app](https://www.npmjs.com/package/create-react-app)

Gå till den mappen du vill skapa dina projekt i och skriv i terminalen:

`npx create-react-app react-test`
`cd react-test`

Starta applikationen

`npm start`

Genomgång

Funktionella element, returnerar endast ett element, wrappern kan vara tom


## React-Router-DOM

`npm i react-router-dom`

