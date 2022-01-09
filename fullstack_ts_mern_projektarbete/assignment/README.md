# Bookface Fullstack projekt

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
        - [Webbutveckling 3 del](#webbutveckling-3-del)
        - [Webbserverprogrammering 2 del](#webbserverprogrammering-2-del)
        - [Övrigt](#vrigt)
- [Projekt Uppgift](#projekt-uppgift)
    - [Skapa Bookface](#skapa-bookface)
    - [Funktioner som ska finnas](#funktioner-som-ska-finnas)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)


# Inledning

## Bakgrund

Ni är nu i slutet på utbildningen och vi kommer slå ihop kurserna Webbutveckling 3 och Webbserverprogrammering 2.

## Frågeställningen

Hur kan vi bygga en helhetslösning (fullstack) där vi kombinerar alla tidigare kunskaper under utbildningen. Vi ska
alltså bygga:

- Frontend i React
- Backend/API med NodeJS
- Databas med MongoDB

Med tester på frontend och backend samt använda TypeScript i denna inlämningen.

## Mål

I detta projektet ska ni göra en backend med ett RESTapi som kopplas till en frontend samt har automatiska tester i
Insomnia Rest Client eller Postman samt enhetstester på backend och frontend. MongoDB skall användas som databas.

Projektet ska driftas i live miljö hos någon aktör (ex: Azure, AWS, Digital Ocean med flera). Ett delmål är även att ha
någon enkel verifiering där alla testerna måste gå igenom för att de skall vara tillåtet att drifta projektet.

I denna kursen så måste ni även tänka på hur er hemsida ser ut med design och användarupplevelse (UI/UX). Ni ska även ha
responsiv design för:

- Mobile
- Tablet
- Desktop

## Avgränsning

Ni ska använda:

- React på frontend.
- NodeJS på backend.
- MongoDB som databas.

Ni får använda:

Valfria Node paket men ni måste kunna förklara vad alla gör och hur ni använt dem.

## Syfte

Få en förståelse för hur man bygger responsiva webbplatser med ett snyggt UI samt genomtänkt UX design. Praktisera de
kunskaper ni fått under kursen och på så vis kombinera ihop samtliga till en helhetslösning som vi driftsätter i live
miljö.

## Vad ska ni leverera?

Ni skall använda er av TypeScript i denna inlämningen.

### Webbutveckling 3 del

En frontend byggd i React. Det ska finnas tester i projektet som kan användas för validering av koden innan bygge av
koden för driftning online.

### Webbserverprogrammering 2 del

En backend byggd i NodeJS. Det ska finnas tester i projektet som kan användas för validering av koden innan bygge av
koden för driftning online.

Ni bör ha separata databaser för development och production.

### Övrigt

- Ni ska använda er av Jira för projektplanering
- Strukturera upp ert arbete
- Dokumentera ert arbete

# Projekt Uppgift

## Skapa Bookface

Ni ska leverera en meddelandetjänst som kräver inloggning för att använda och visa innehållet på webbplatsen. Detta
medför att man måste kunna registrera sig och logga in. Lösenorden ska krypteras i databasen och man ska inte kunna
utföra "reverse engineering" på det. Man ska kunna posta meddelanden i ett flöde som alla kan se.

Utöver detta så ska man kunna skicka meddelanden mellan användare men det är en uppgift som ligger som "extra uppgift"
som skall prioriteras at göras sist. Det är en så kallad "nice to have feature".

## Funktioner som ska finnas

En helhetslösning med följande egenskaper:

- Lagra
    - Användare
    - Meddelanden

- Kryptering av lösenord
- Inloggning
- Registrering

- Skicka/Skriva inlägg
- Skicka meddelanden (nice to have feature)

# Betygskrav

- Semantik i möjligaste mån och god programmeringspraxis
- Jira och projekthantering enligt Scrum
- Användande av TypeScript
- Ordentlig dokumentation på:
    - Hur man driftar hela projektet
    - Hur man startar/stoppar backend/frontend/databas
    - Allt som behövs för att vem som helst ska kunna starta projektet på sin dator


## Betyg E

Allt i [Betygskrav](#betygskrav) (ovanför) ska vara uppfyllt samt:

- Upprätta en enkel projektplan innan uppgiften påbörjas med till exempel:
    - Hur du tänker försöka lösa uppgiften.
    - Pseudokod.
    - Diagram.
- Konsekvent kod stil:
    - Tydlig namngivning av variabler.
    - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
    - **Lättläst kod.**
- Gör en enklare kontroll så att dina funktioner fungerar som de ska.
- Manuella tester

### Dokumentation

- Gör en enkel dokumentation på ditt arbete, till exempel:
    - Beskriv lite olika lösningar du gjort.
    - Beskriv något som var besvärligt att få till.
    - Beskriv om du fått byta lösning och varför i sådana fall.
    - Använd korrekta begrepp och syntax i dina beskrivningar.

#### Programmet skall fungera

## Betyg C

Allt i [Betyg E](#betyg-e) ska vara uppfyllt samt:

- Upprätta en genomarbetad projektplan
- Ren struktur på din kod
- Arbeta enligt DRY-principen (Do Not Repeat you’re self)
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

- Upprätta en genomarbetad projektplan som revideras vid behov
- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med mindre-/nybörjar-kunskaper ska kunna läsa och förstå er kod.
- Automatiska tester

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera

## Sista inlämningstid

Deadline 2 Jan 2022, 23:59
