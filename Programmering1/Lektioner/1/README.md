# Lektion 1

JavaScript är världens mest populära programmeringsspråk.  
JavaScript är programmeringsspråket för webben.  
JavaScript är lätt att lära sig.  
Denna handledning lär dig JavaScript från grunden.

## Introduktion
Några exempel på vad man kan göra med JavaScript

- I det här exemplet ändrar JavaScript värdet på attributet src (source) för en <img> -tagg: [exempel 1](exempel/exempel1.html)
- JavaScript kan ändra HTML-format (CSS): [exempel 2](exempel/exempel2.html)
- JavaScript kan dölja HTML-element: [exempel 3](exempel/exempel3.html)
- JavaScript kan visa dolda HTML-element: [exempel 4](exempel/exempel4.html)

## \<script> - taggen
I HTML infogas JavaScript-kod mellan `<script>` och `</script>` taggar.

### Intern/Inline JavaScript
``` html
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```

#### Notera
Äldre JavaScript-exempel kan använda ett typattribut:

``` html
<script type = "text / javascript">
```

Typattributet krävs inte då JavaScript är standardspråk för skript i HTML.

## JavaScript-funktioner och händelser
En JavaScript-funktion är ett block av JavaScript-kod, som kan köras när den "kallas" på.

Till exempel kan en funktion anropas när en händelse inträffar, som när användaren klickar på en knapp.

Vi kommer gå igenom funktioner senare i kursen.

## JavaScript i `<head>` eller `<body>`
Du kan placera valfritt antal skript i ett HTML-dokument.

Skript kan placeras i `<body>`, eller i `<head>` -sektionen på en HTML-sida, eller i båda.

## JavaScript i `<head>`
I det här exemplet placeras en JavaScript-funktion i avsnittet `<head>` på en HTML-sida.

Funktionen anropas (kallas) när man klickar på en knapp:

``` html 
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```
[Exempel 5](exempel/exempel5.html)

## JavaScript i `<body>`
I det här exemplet placeras en JavaScript-funktion i avsnittet `<body>` på en HTML-sida.

Funktionen anropas (kallas) när man klickar på en knapp:

``` html 
<!DOCTYPE html>
<html>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```
[Exempel 6](exempel/exempel6.html)

### Viktigt!
Att placera skript längst ner på `<body>` -elementet förbättrar visningshastigheten, eftersom tolkning av skript saktar ner visningen av innehållet på skärmen.


## Extern JavaScript
Skript kan också placeras i externa filer:

```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```
[Exempel 7](exempel/exempel7.js)

Externa skript är praktiska när samma kod används på många olika webbsidor.

JavaScript-filer har fil-tillägget `.js`.

För att använda ett externt skript, placera namnet på skriptfilen i attributet src (source) för en `<script>` -tagg:

```html
<script src="myScript.js"></script>
```

Du kan placera en extern skriptreferens i `<head>` eller `<body>` som du vill.

Skriptet beter sig som om det befann sig exakt där taggen `<script>` finns.

Externa skript kan inte innehålla `<script>` -taggar.


### Fördelar med externa JavaScript
Att placera skript i externa filer har några fördelar:

- Den separerar HTML och kod
- Det gör HTML och JavaScript lättare att läsa och underhålla
- Cachade JavaScript-filer kan påskynda sidläsningar

För att lägga till flera skript-filer på en sida - använd flera skript-taggar:

```html
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```


## Externa referenser
Externa skript kan hänvisas till med en fullständig URL eller med en sökväg i förhållande till den aktuella webbsidan.

I det här exemplet används en fullständig URL för att länka till ett skript:

```html
<script src="https://www.w3schools.com/js/myScript1.js"></script>
```

I det här exemplet används ett skript i en angiven mapp på den aktuella webbplatsen:
```html
<script src="/js/myScript1.js"></script>
```

This example links to a script located in the same folder as the current page:
```html
<script src="myScript1.js"></script>
```


## Separat JavaScript fil (enligt kom igång dokumentet)
```html
<html>
<header>
<script src="./index.js"/>
</header>

<body>
<h1>Let's learn JavaScript</h1>
</body>

</html>
```

```javascript
alert ("Welcome to this JavaScript tutorial")
```
