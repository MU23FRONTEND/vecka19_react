# Övningar

## API-anrop med useEffect

### Chuck Norris Joke Generator
![Chuck Norris Joke](https://qph.cf2.quoracdn.net/main-qimg-2141243491f887a7634e95f0704e386b.webp);

- [Chuck Norris API](https://api.chucknorris.io/).

Skapa en applikation där en användare utifrån olika parametrar kan generera fram X antal Chuck Norris-skämt.

Din applikation skall MINST bestå av följande komponenter:
- App (Huvudkomponenten för ditt program, skall läsa in Generator)
- Generator (Din generator-komponent, skall läsa in JokeForm och JokeDisplay)
- JokeForm (Här skapar du ditt formulär)
- JokeDisplay (Här listar du din/dina Joke-komponenter)
- Joke

Börja med att vid *Mount* göra ett anrop till api:et för att hämta de olika kategorierna som finns. Fundera en stund på varifrån i programmet som detta anrop bör göras.
Använd följande sträng för att hämta kategorier:

```GET https://api.chucknorris.io/jokes/categories```

Använd kategorierna för att skapa en *select*-box i ditt formulär. Vid en *onChange*-händelse skall ett skämt omedebart visas på skärmen.
Använd följande sträng för att göra dina kategoribaserade anrop:

```GET https://api.chucknorris.io/jokes/random?category={category}```

Skapa även ett *input*-fält i ditt formulär, med en tillhörande *submit*-knapp, där användaren skall kunna ange en söksträng som anropet baseras på. 
Använd följande sträng för att göra dina söksträngsbaserade anrop:

```GET https://api.chucknorris.io/jokes/search?query={query}```

Steg 1:
- Gör anropet när användaren trycker på *submit*-knappen.

Steg 2: 
- Gör anropet varje gång värdet i *input*-fältet ändras.

Skapa även en *Clear*-knapp som tömmer sidan på alla skämt.

NOTERA att det inte går att kombinera kategori och söksträng, och att ni därför måste göra vissa justeringar i era olika API-anrop.

### Skapa eget projekt
Skapa gärna ett eget projekt där du behöver använda dig av API-anrop. Det är jättebra övning att själv läsa dokumentationen för olika APIer, och därigenom försöka förstå sig på dem!

Förslag på APIer:
- [Poke-API](https://pokeapi.co/) - Om ni ännu inte tröttnat på vår gamla favorit PokeApi så hittar ni den här!
- [Hund-API:et](https://dog.ceo/dog-api/) - Hämta en massa gulliga data om hundar!
- [REST-Countries](https://restcountries.com/) - Kul API som kan användas för att hämta information om alla världens länder.
- [Weather API](https://openweathermap.org/api) - Ett av de mest populära APIerna för hemmasnickrare, som kan användas för att skapa en väderapp.
- [Ron Swanson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes?tab=readme-ov-file#ron-swanson-quotes-api) - Skapa en rolig quotifyer med citat från min personliga favorit Ron Swanson.
- [Public APIs](https://github.com/public-apis/public-apis?tab=readme-ov-file) - En jäkla massa fler APIer.

