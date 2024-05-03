# Övningar

## State

### Bokhandeln

I denna övning ska du göra bygga vidare på [din bokhandel](https://github.com/Santosnr6/lektion_27_mars/tree/main/%C3%96vningar) och skapa verklig funktionalitet. Använd dig av eventlyssnare, samt tillståndsvariabler, för att automatiskt uppdatera varukorgens saldo varje gång en användare klickar på *Add to cart*.  

Använd er av ```books.json``` för data till era objekt. Välj själva vilka delar av objekten ni vill rendera ut. Skissen behöver naturligtvis inte följas, den är bara ett förslag.

#### Skiss
![Screenshot](./assets/bookstore.png)

### Bokhandeln Utmaning!
Fundera på hur du skulle kunna gå till väga för att ge varje enskild bok i din bokhandel en egen counter som håller koll på hur många exemplar av just den boken som just nu ligger i varukorgen. Försök att implementera denna funktionalitet, samtidigt som du behåller din ursprungliga varukorgsräknare. 

### Shakespearean insult generator
> *Have you no wit, manners, nor honesty but to gabble like tinkers at this time of night? - Twelfth Night*

I denna övning ska du få bygga en sida som slumpar en förolämpningar från en pjäs skriven av Shakespeare och visar dessa för användaren.
En "sick burn" från Shakespeare ger en bra start på dagen!

I denna övning skall du använda dig av 4 komponenter:
- App
- Header
- Page
- Insult

Din *Header* skall innehåla ett formulär där användaren kan ange hur många (max 10) förolämpningar hen vill ha kastade i ansiktet. Denna data skall sedan användas i din *Page* för att rendera ut X antal *Insult*-komponenter.

Fundera på strukturen i din applikation, vilka tillståndsvariabler behöver du använda, och var någonstans bör de ligga?

Förolämpningarna hittar du i ```insults.json``` i *assets*-mappen.

Tips på typsnitt: [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp), [IM Fell English SC](https://fonts.google.com/specimen/IM+Fell+English+SC).

### Booking form

Bygg din React-app enligt [denna skiss](https://www.figma.com/file/XenjCcyq3pZUOa9MF3urqQ/Vue.js-form-exercise---Book-a-flight?node-id=0%3A1).

#### Steg 1
Koppla ihop varje datapunkt ( klass, titel, förnamn, efternamn, godkänner ) med en funktion i din React-komponent som lyssnar efter inmatning och sparar värdet i en tillståndsvariabel.

#### Steg 2
Lyssna efter ett klickevent på knappen. Vid klick skall du bygga ihop all data till ett bokningsobjekt som du sedan antingen console.loggar ut, alt. presenterar på skärmen för användare på ett snyggt sätt.

### React Bootcamp
[I detta dokument](https://docs.google.com/document/d/15Ez_E2d3mh7NuDa60A3Lj-4rZZc52eN7I05PhYwtvk8/edit?usp=sharing) finner ni uppgifter som ni nu bör kunna utföra (även useState!!!).

### Eget projekt
I *assets*-mappen finner ni nu en mängd .json-filer som ni kan använda som bas för att skapa ert eget projekt.
