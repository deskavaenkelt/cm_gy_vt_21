# Inlämningsuppgift 1

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
- [Projekt Uppgift](#projekt-uppgift)
    - [Lägg till varor i kundkorgen](#lgg-till-varor-i-kundkorgen)
    - [Tips](#tips)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på kursen Programmering 1

## Frågeställningen

Hur kan vi göra en kundkorg som uppdateras.

## Mål

I detta projekt ska ni göra en enkel hemsida där man kan lägga böcker man vil köpa i en kundkorg. Man ska kunna
uppdatera antalet böcker samt att när en viss summa nås får man fri frakt.

## Avgränsning

HTML och CSS för det grafiska gränssnittet och Vanilla JavaScript för funktionaliteten. Dvs ingen:

- JQuery
- Media Queries
- JavaScript Frameworks

## Syfte

Att ni ska lära er vad JavaScript tillför för funktionalitet samt vilket möjligheter det ger för programutveckling.

## Vad ska ni leverera?

En applikation med en kundkorg, där man ska kunna

- Visa vilka böcker som finns
- Lägga till böcker i en kundkorg
- Ta bort böcker i en kundkorg
- Uppdatera antalet böcker i en kundkorg

# Projekt Uppgift

## Lägg till varor i kundkorgen

![](img/1.png)

### Funktioner som ska finnas

- När användaren ändrar antalet böcker så ska summan uppdateras med en gång.

- Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet böcker boxarna".

- Kundkorgen ska vara tillgänglig från bilden på en kundkorg samt knappen "Checkout".

- Om ordern är på mer än 159kr (eller lika med) så ska det vara fri frakt. Om summan för fri frakt inte uppnåtts så visa
  hur långt det är kvar till fri frakt:

![](img/2.png)

## Tips

Använd `Map` istället för en `array` för din kundkorg:

```javascript
const cart = new Map()
```

Länk: [w3schools](https://www.w3schools.com/jsref/jsref_map.asp)

# Betygskrav

Det är funktionaliteten på ert arbete som betygssätts inte hur gränssnittet ser ut. Dock gör det inget om gränssnittet
ser polerat ut då det ger erfarenhet, repetition och kunskaper till nästkommande kurser.

## Betyg E

- Planera lösningsförslag innan uppgiften påbörjas med till exempel:
    - Hur du tänker försöka lösa uppgiften.
    - Pseudokod.
    - Diagram.
- Konsekvent kod stil:
    - Tydlig namngivning av variabler.
    - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
    - **Lättläst kod.**
- Gör en enklare kontroll så att dina funktioner fungerar som de ska.

### Dokumentation

- Gör en enkel dokumentation på ditt arbete, till exempel:
    - Beskriv lite olika lösningar du gjort.
    - Beskriv något som var besvärligt att få till.
    - Beskriv om du fått byta lösning och varför i sådana fall.
    - Använd korrekta begrepp och syntax i dina beskrivningar.

#### Programmet skall fungera

## Betyg C

Allt i [Betyg E](#betyg-e) ska vara uppfyllt samt:

- Kontrollera dina funktioner inte har sidoeffekter:
    - det vill säga kontrollera vad som matar sin i funktionerna och säkerställ att programmet inte kraschar vid
      felaktig inmatning.
    - Kontrollera så att du inte får orimliga resultat beroende på inmatning.
- Se till så att det inte finns programlogiska fel

### Dokumentation

Din dokumentation ska utöver det i [Betyg E](#betyg-e) innehålla:

- Beskriv hur du felsökt ditt program när det uppstått problem
- Utvärdera din inlämning
    - Vad gick bra
    - Vad gick dåligt
    - Vad har du lärt dig
- Vilka möjligheter ser du med de kunskaper du fått under kursen.

## Betyg A

Allt i [Betyg C](#betyg-c) ska vara uppfyllt samt:

- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med mindre-/nybörjar-kunskaper ska kunna läsa och förstå er kod.

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera

# Sista inlämningstid

4 April kl 23:59
