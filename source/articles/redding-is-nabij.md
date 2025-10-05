---
{
  "title": "Redding is nabij",
  "img": "../images/redding-is-nabij.png",
  "difficulty": "gemiddeld",
  "author": "Hans-Christiaan Braun",
  "material": "Scratch",
  "template": "exercise"
}
---
<!-- {section.page} -->
## Introductie
Een orkaan heeft het eiland verwoest. Veel bewoners hebben geen huis meer. Gelukkig heeft een ander eiland een vliegtuig gestuurd. In dit vliegtuig zitten kratten met tenten, eten en drinken.

Jij zit in het vliegtuig en moet de kratten op het juiste moment uit het vliegtuig gooien. De kratten vallen daarna aan parachutes naar beneden. Maar pas op! De orkaan is nog niet helemaal weg. Er staat nog een wind die de kratten kan laten verwaaien.

In deze opdracht gaan wij dit spel maken. Een vliegtuig vliegt van links naar rechts. De speler moet op het juiste moment op de spatiebalk drukken om de krat te laten vallen. De wind heeft invloed hoe ver de krat verwaait. Hoe sterker de wind waait, hoe eerder de speler de krat moet laten vallen.
<!-- {/section} -->

<!-- {section.page} -->
## Voorbereiding
Wij hebben al een basisbestand opgezet zodat je makkelijk kan beginnen. Je kan het basisbestand via deze link vinden: 

[http://coderdojowijchennoord.nl/blog/coderdojo_exercises/redding-is-nabij](http://coderdojowijchennoord.nl/blog/coderdojo_exercises/redding-is-nabij)

### Wat staat er al in het bestand?
Er staan drie sprites in het bestand en twee achtergronden. Deze kan je rechtsonder in Scratch vinden.

#### Sprites
- Een **reddingsvliegtuig**: Deze vliegt steeds van links naar rechts.
- Een **krat aan een parachute**: Deze wordt uit het vliegtuig gegooid wanneer de speler straks op de spatiebalk drukt.
- Een **landingsplek**: Hier moet de krat op landen.

#### Achtergronden
- Een **eiland** achtergrond: Dit is het basisachtergrond van het spel.
- Een **game over** achtergrond: Deze wordt getoond wanneer het spel voorbij is.
<!-- {/section} -->

<!-- {section.page} -->
## Het vliegtuig
Het vliegtuig moet van links naar rechts vliegen. Wanneer het vliegtuig aan de rechterkant van het scherm is, start het weer aan de linkerkant. Laten wij dit naar Scratch vertalen! 🙂

In het basisbestand hebben wij al een klein programma voor het vliegtuig voor je gemaakt:

```blocks
Wanneer op @greenFlag wordt geklikt
verander achtergrond naar (eiland v)
maak [windkracht v] (1)
maak [score v] (1)
maak [levens v] (1)
herhaal
einde
```

### Het vliegtuig van links naar rechts laten bewegen
Zoek de volgende blokken, zet ze in elkaar en voeg ze toe binnen het herhaal-blok van de blokken hierboven.

```blocks
ga naar x: (-280) y: (132)
herhaal tot <(x-positie) = (300)>
    neem (5) stappen
```
<!-- #### Tips 
 - De blokken _ga naar_, _x-positie_ en _neem x stappen_ kan je vinden onder **beweging**.
 - De cijfers in de witte blokken staan verkeerd in de lijst, maar kan je zelf aanpassen door er op te klikken! -->

<!-- {/section} -->

<!-- {section.page} -->
## De krat
De volgende stappen zijn voor de krat-sprite. Zorg er dus voor dat je de krat-sprite selecteert, rechtsonder in Scratch!

### De krat laten vallen
We willen wachten totdat de speler op de spatiebalk heeft gedrukt, voordat wij de krat uit het vliegtuig laten vallen. Wanneer de krat uit het vliegtuig is, willen wij de parachute openen.

Voeg daarom deze blokken toe aan de herhaal-lus:

```blocks
wacht tot &lt;toets (spatiebalk v) ingedrukt?>
ga naar x: ([x-positie v] van (reddings-vliegtuig v)) y: (132)
verander uiterlijk naar (krat-aan-parachute v)
verschijn
```

**Let op**: Het "x-positie van reddingsvliegtuig" is moeilijk te vinden. Die ziet er namelijk standaard zo uit in de lijst van blokken! 

```blocks
([achtergrond # v] van (Speelveld v))
```

Je moet zelf **eerst** "Speelveld" veranderen naar "reddings-vliegtuig", daarna kan je "achtergrond #" veranderen. 
<!-- {/section} -->

<!-- {section.page} -->
Nu willen wij de krat laten vallen totdat het de landingsplek of het water heeft geraakt. 

Wij doen het simpel en kijken naar de hoogte (y-positie) van de krat. Wanneer de krat te laag is, stoppen we met vallen.

De positie van links-naar-rechts veranderen wij op basis van de huidige windkracht. Dit maakt het spel moeilijker: de speler moet nu goed inschatten wanneer die de krat moet laten vallen. Als de windsnelheid hoog is, moet dat eerder dan wanneer die laag is. Het veranderen van de windkracht voegen wij later toe!

Als de krat geland is veranderen wij het uiterlijk van de krat, zodat de parachute weer verdwijnt.

Dit ziet er zo uit:

```blocks
herhaal tot &lt;(y-positie) < (-100)>
    verander y met (-5)
    verander x met (windkracht)
einde
verander uiterlijk naar (krat v)
```

Voeg deze blokken toen aan de herhaal-lus van de krat, onder de blokken die je bij de vorige stap hebt toegevoegd.

<!-- {/section} -->

<!-- {section.page} -->
## Levens en Score
Een spel is geen spel als je geen score kan verdienen of levens kwijt kan raken! Laten wij dit toevoegen 🙂.

### De score verhogen wanneer de krat geland is
**(en een leven afnemen wanneer de krat in het water is beland)**

Als de krat op de landingsplek is, willen wij de speler een punt geven. Anders is de krat in het water beland, en willen wij een leven van de speler afnemen.

Dit kan je naar deze blokken vertalen:
```blocks
als &lt;raak ik (landingsplek v)?> dan
    verander (score) met (1)
    start geluid (Coin v)
anders
    verander (levens) met (-1)
    start geluid (Plons v)
    verdwijn
einde
```

Voeg deze toe na het "verander uiterlijk naar krat"-blok, binnen de herhaal-lus.

<!-- {/section} -->

<!-- {section.page} -->
## De wind
Laten wij het spel leuker maken door de windkracht te veranderen!

Bij elke vlucht van het vliegtuig willen wij de windkracht veranderen, naar een willekeurig getal tussen de 0 en de 4.

De speler kan de windkracht linksboven het speelscherm aflezen. Hoe sterker de wind waait, hoe eerder de krat uit het vliegtuig moet vallen.

### De windkracht willekeurig maken
Om de windkracht willekeurig te maken, voeg dit blok toe aan de sprite van het reddingsvliegtuig. Om precies te zijn binnen de eerste herhaal-lus:
```blocks
maak (windkracht v) (willekeurig getal tussen (0) en (4))
```
<!-- {/section} -->

<!-- {section.page} -->
## Game over!
Wij moeten nog één ding toevoegen voordat het spel gespeeld kan worden: Het spel moet voorbij zijn wanneer de speler geen levens meer heeft.

### Het spel stoppen wanneer de speler geen levens meer heeft
Dit kunnen wij maken door een als-dan-blok toe te voegen.

Voeg de onderstaande blokken toe aan de binnenste herhaal-lus van het reddingsvliegtuig (zie ook "Het vliegtuig van links naar rechts laten bewegen.")
```blocks
als &lt;(levens) = (0)> dan
    verander achtergrond naar (Game over! v)
    start geluid (Lose v) en wacht
    stop [alle v]
einde
```
<!-- {/section} -->

<!-- {section.page} -->
## Het spel is klaar!
Nu is het spel klaar! Druk op de groene vlag linksboven het speelveld (rechtsboven in Scratch) om het spel te testen.

Hieronder zie je hoe de code voor je spel er uiteindelijke uit zou moeten zien.

### De code voor het reddingsvliegtuig
```blocks
Wanneer op @greenFlag wordt geklikt
verander achtergrond naar (eiland v)
maak [windkracht v] (1)
maak [score v] (1)
maak [levens v] (1)
herhaal
    maak (windkracht v) (willekeurig getal tussen (0) en (4))
    ga naar x: (-280) y: (132)
    herhaal tot <(x-positie) = (300)>
        neem (5) stappen
        als &lt;(levens) = (0)> dan
            verander achtergrond naar (Game over! v)
            start geluid (Lose v) en wacht
            stop [alle v]
        einde
    einde
einde
```
<!-- {/section} -->

<!-- {section.page} -->
### De code voor de krat
```blocks
Wanneer op @greenFlag wordt geklikt
verdwijn
herhaal
    wacht tot &lt;toets (spatiebalk v) ingedrukt?>
    ga naar x: ([x-positie v] van (reddings-vliegtuig v)) y: (132)
    verander uiterlijk naar (krat-aan-parachute v)
    verschijn
    herhaal tot &lt;(y-positie) < (-100)>
        verander y met (-5)
        verander x met (windkracht)
    einde
    verander uiterlijk naar (krat v)
    als &lt;raak ik (landingsplek v)?> dan
        verander (score) met (1)
        start geluid (Coin v)
    anders
        verander (levens) met (-1)
        start geluid (Plons v)
        verdwijn
    einde
einde
```
<!-- {/section} -->