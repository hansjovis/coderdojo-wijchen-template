# CoderDojo Wijchen template
Dit is een generator voor opdrachten voor de CoderDojo in Wijchen. 

## Hoe te gebruiken
1. Installeer alle dependencies met [NPM](https://npmjs.org).
    ```
    npm install
    ```
2. Pas eventueel een opdracht aan, of voeg een opdracht toe (in de `source/articles` map).
3. Bouw de opdrachten.
    ```
    npm run build
    ```

### Een nieuwe opdracht toevoegen
Je kan een nieuwe opdracht toevoegen door een nieuw markdown-bestand aan te maken in `source/articles`. 

Een voorbeeld van een bron-bestand:
```md
---
{
	"title": "Titel van de opdracht",
	"img" : "../images/plaatje-voor-op-het-titelblad.png",
	"difficulty": "basis",
	"author": "Naam van de auteur",
	"material": "Scratch",
	"template": "exercise"
}
---
<!-- {section.page} -->
## Inleiding

<!-- {/section} -->

<!-- {section.page} -->
## Stap 1

<!-- {/section} -->
```
