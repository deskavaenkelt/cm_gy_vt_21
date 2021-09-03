# Inlämningsuppgift Webbutveckling 2

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
        - [Webbutveckling 2 del](#webbutveckling-2-del)
        - [Gränssnittsdesign del](#grnssnittsdesign-del)
        - [Övrigt](#vrigt)
- [Projekt Uppgift](#projekt-uppgift)
    - [Beräkna kostnaden för en bilresa](#berkna-kostnaden-fr-en-bilresa)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på kursen Webbutveckling 2

## Frågeställningen

Hur kan vi göra en sida för att beräkna kostnaden för en resa baserat på:

- Hur mycket bensin bilen drar
- Sträckan
- Priset på bensinen?

## Mål

I detta projektet ska ni göra en hemsida med hjälp av React. Inlämningen kombineras med Gränssnittsdesign kursen.

## Avgränsning

Ni ska använda:

- React

Ni får använda:

- react-router-dom
- Tachyons

Valfria verktyg för att göra Wireframes så länge som ni kan exportera bilder eller spara bilder på er design.

## Syfte

Få en förståelse för hur man bygger responsiva webbplatser med ett snyggt UI samt genomtänkt UX design.

## Vad ska ni leverera?

### Webbutveckling 2 del

En applikation där man kan beräkna kostnaden för en resa med de tre variablerna:

- Förbrukning
- Sträckan
- Bensinpriset

Med både fördefinierade värden samt möjlighet till egna värden.

### Gränssnittsdesign del

Ni ska leverera:

- Wireframes (en grov skiss på vad ni tänkt)
- En snyggare Prototyp på hur ni tänkt er resultatet
- Personas (2-3 st)
- Genomtänkta/enhetliga fonter
- Genomtänkt/enhetligt färgschema
- Genomtänkt UI (Användargränssnitt) som ska ge en bra UX (Användarupplevelse)

### Övrigt

- Ni bör använda er av Trello för projektplanering
- Strukturera upp ert arbete
- Dokumentation på ert arbete

# Projekt Uppgift

## Beräkna kostnaden för en bilresa

### Funktioner som ska finnas

1. När man ändrar på något av de tre variablerna:

- Förbrukning
- Sträckan
- Bensinpriset

  Så ska kostnaden uppdateras direkt.

2. Kontrollera och hantera felaktiga värden

3. Om totalkostnaden är:
    - under 400kr så skriv ut texten "Resonabel resa"
    - mellan 400kr till 1000kr så skriv ut texten "Har du funderat på att åka tåg?"
    - över 1000kr så skriv ut texten "Har du funderat på flyg?"

# Betygskrav

Flera aspekter vägs samman till ert betyg här:

- Webbdesign
- Gränssnittsdesign

## Betyg E

### Webbdesign

- Planera lösningsförslag innan uppgiften påbörjas med till exempel:
    - Hur du tänker försöka lösa uppgiften.
    - Pseudokod.
    - Diagram.
- Konsekvent kod stil:
    - Tydlig namngivning av variabler.
    - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
    - **Lättläst kod.**
- Gör en enklare kontroll/manuella tester så att dina funktioner fungerar som de ska.

### Gränssnittsdesign

- Eleven gör en enkel projektplan för att utveckla ett gränssnitt till en applikation. Projektplanen innehåller en enkel
  problemformulering utifrån identifikation av målgruppen och dess behov.
- För att utveckla gränssnittet hämtar eller skapar eleven texter, bilder och eventuell annan media samt infogar dessa i
  gränssnittet till applikationen.
- Eleven utvecklar en prototyp med tillfredsställande resultat i fråga om funktion, utseende och användbarhet. Dessutom
  testar eleven prototypens användbarhet med några enkla metoder. Prototypen kompletteras med en stilguide som täcker
  någon av designens viktigaste delar.

### Dokumentation

- Gör en enkel dokumentation på ditt arbete, till exempel:
    - Beskriv lite olika lösningar du gjort.
    - Beskriv något som var besvärligt att få till.
    - Beskriv om du fått byta lösning och varför i sådana fall.
    - Använd korrekta begrepp och syntax i dina beskrivningar.
-  I utvärderingen diskuterar eleven översiktligt hur det egna gränssnittet förhåller sig till generella principer för hur en god användarupplevelse skapas.


#### Webbplatsen skall fungera!

## Betyg C

Allt i [Betyg E](#betyg-e) ska vara uppfyllt samt:

### Webbdesign

- Dela upp din kod i strukturerade komponenter
- Kontrollera dina funktioner inte har sidoeffekter:
    - det vill säga kontrollera vad som matar sin i funktionerna och säkerställ att programmet inte kraschar vid felaktig inmatning.
    - Kontrollera så att du inte får orimliga resultat beroende på inmatning.
- Se till så att det inte finns programlogiska fel
- Manuella och automatiserade tester finns

### Gränssnittsdesign

- Eleven gör en genomarbetad projektplan för att utveckla ett gränssnitt till en applikation. Projektplanen innehåller en problemformulering utifrån kundönskemål, identifikation av målgruppen och dess behov samt projektets tekniska förutsättningar.
- Resultatet är tillfredsställande anpassat till användarens behov utifrån några principer för användbarhet. Detta gör eleven genom att anpassa den visuella designen och interaktionen så att gränssnittet har en tillfredsställande kvalitet i fråga om uppfattningsbarhet och användbarhet också för användare med funktionsned-sättningar.

### Dokumentation

Din dokumentation ska utöver det i [Betyg E](#betyg-e) innehålla:

- Beskriv hur du felsökt ditt program när det uppstått problem
- Utvärdera din inlämning
    - Vad gick bra
    - Vad gick dåligt
    - Vad har du lärt dig
- Vilka möjligheter ser du med de kunskaper du fått under kursen.
- Eleven gör en noggrann dokumentation av sitt arbete med **UX** samt utvärderar med nyanserade omdömen sitt arbete och resultat utifrån projektplanen.

## Betyg A

Allt i [Betyg C](#betyg-c) ska vara uppfyllt samt:

### Webbdesign

- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med mindre-/nybörjar-kunskaper ska kunna läsa och förstå er kod.
- Majoriteten av din kod ska bestå av strukturerade komponenter samt återanvända komponenter.
- Produkten är av god kvalitet när det gäller funktion vilket eleven kontrollerar med hjälp av flera tester, även manuella. Dessutom kontrollerar eleven med säkerhet produktens tillgänglighet med automatiserade tester och simuleringar samt manuella tester.

### Gränssnittsdesign

- Eleven gör en genomarbetad projektplan för att utveckla ett gränssnitt till en applikation. Projektplanen innehåller en problemformulering utifrån kundönskemål, identifikation av målgruppen och dess behov. Eleven värderar med nyanserade omdömen sin projektplan ur flera perspektiv samt föreslår vid behov förbättringar av planen.
- För att utveckla gränssnittet hämtar eleven eller skapar eleven texter, bilder och eventuell annan media samt infogar dessa i gränssnittet till applikationen.
- Detta gör eleven genom att anpassa den visuella designen och interaktionen så att gränssnittet har en god kvalitet i fråga om uppfattningsbarhet och användbarhet också för användare med funktionsned-sättningar.
- Ordentlig Prototyp på hur er färdiga produkt kommer att se ut.

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera

# Sista inlämningstid

27 Juni kl 23:59


- kolla på exempelkod
