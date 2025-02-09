---
{
	"title": "Platformspel in Scratch",
	"img" : "../images/platform-spel-screenshot.png",
	"difficulty": "gevorderd",
	"author": "Hans-Christiaan Braun",
	"material": "Scratch",
	"template": "exercise"
}
---
<!-- {section.page} -->
## Inleiding
Heb je wel eens een platformspel gespeeld? Dat is een spel waar je van platform naar platform moet springen.

Een bekend platformspel is Super Mario, die ken je vast wel!

In deze opdracht ga jij zelf een platformspel maken!

In het spel moet een tovenaar magische kristallen oppakken. Hij heeft echter maar een minuut de tijd. Hoeveel kristallen kan je de tovenaar laten pakken?
<!-- {/section} -->

<!-- {section.page} -->
## Het basisbestand downloaden
Om je op weg te helpen hebben wij alvast een basisbestand voor je gemaakt.

Hierin staat alles wat je nodig hebt om je spel te maken.

Denk hierbij aan plaatjes, achtergronden en geluiden, maar ook aan wat code die je uit moet breiden.

Het basisbestand kan je onderaan deze webpagina downloaden:

<a href="https://coderdojowijchennoord.nl/blog/coderdojo_exercises/platformspel/">https://coderdojowijchennoord.nl/blog/coderdojo_exercises/platformspel/</a>

Open het bestand in **Scratch 3**. Je kan Scratch hier downloaden als dit nog niet op je computer staat: <a href="https://scratch.mit.edu/download">https://scratch.mit.edu/download</a>.
<!-- {/section} -->

<!-- {section.page} -->
## Het basisbestand ontdekken
In het basisbestand hebben wij al een start gemaakt voor het programma.

Wanneer je op de **Tovenaar** sprite klikt, vind je alvast deze blokken:
<!-- {div.two-columns} -->
```blocks
Wanneer op @greenFlag wordt geklikt
maak [x-snelheid v] [0]
maak [y-snelheid v] [0]
maak [voeten op de vloer v] [nee]
maak draaistijl [links-rechts v]
herhaal
	Springen
	Lopen
	Botsen tegen muren
	Vallen
	Voeten op de vloer
einde
```
<!-- {div} -->
De blokken onder "Wanneer op de groene vlag wordt geklikt" resetten eerst het spel. Onder andere door sommige variabelen naar een basiswaarde te zetten.

Daaronder is er een herhaallus, met daarin een aantal blokken die straks gaan zorgen voor de beweging in het spel.
<!-- {/div} -->
<!-- {/div} -->
<!-- {/section} -->

<!-- {section.page} -->
### Mijn blokken
Naast het bestaande blok code staan een aantal roze blokken in de vorm "definieer 'Blok naam'". Deze blokken bepalen welke stappen moeten worden uitgevoerd wanneer een roze blok met de naam 'Blok naam' ergens anders in je code voorkomt.

Dit is een handige manier om je code te organiseren en het overzicht te behouden.

Wij hebben de volgende blokken gemaakt:
- **Springen**: Dit blok gaat ervoor zorgen dat de tovenaar kan springen.
- **Lopen**: Dit blok gaat ervoor zorgen dat de tovenaar naar links en naar rechts kan bewegen.
- **Botsen tegen muur**: Dit blok gaat ervoor zorgen dat de tovenaar niet door muren kan lopen.
- **Vallen**: Dit blok gaat ervoor zorgen dat er zwaartekracht is, en de tovenaar naar beneden valt.
- **Voeten op vloer**: Dit blok gaat ervoor zorgen dat de tovenaar niet door de vloer valt.

De blokken doen nog niks. In de volgende pagina's gaan wij samen de inhoud van deze blokken bepalen!
<!-- {/section} -->

<!-- {section.page} -->
## Lopen
Laten we als eerste stap ervoor zorgen dat de tovenaar naar links en rechts kan lopen.

### Naar links lopen
De code voor "naar links" ziet er als volgt uit:
<!-- {div.two-columns} -->
```blocks
definieer Lopen
als &lt;toets (pijltje links v) ingedrukt?> dan
    verander [x-snelheid v] met (-2)
	richt naar (-90) graden
einde
maak [x-snelheid v] ((x-snelheid)*(0.8))
verander x met (x-snelheid)
```
<!-- {div} -->
#### Uitleg
De blokken in het als-dan blok worden alleen uitgevoerd wanneer de conditie (het lichtblauwe, hoekige blok) waar is. In dit geval wanneer de linker pijltjestoets is ingedrukt.

Wanneer de linker pijltjestoets is ingedrukt, veranderen wij de variable "x-snelheid" met -2. Dus als het eerst 0 was, is het nu -2. Als het -2 was, wordt het nu -4.
<!-- {/div} -->
<!-- {/div} -->

We richten de tovenaar naar -90 graden. Dit zorgt ervoor dat de tovenaar naar links kijkt wanneer die naar links beweegt.

Na het als-dan blok zeggen wij dat de variabele x-snelheid met 20% naar beneden gaat. Dus als de x-snelheid eerst -2 was, is het nu -1.6. Dit zorgt voor frictie, zodat de sprite langzaam tot stilstand komt wanneer de speler niet op de pijltjestoets drukt.

Voer de code uit door op het groene vlaggetje te drukken! Kijk wat er gebeurt en of je de code snapt.
<!-- {/section} -->

<!-- {section.page} -->
### Naar rechts lopen
Kan jij de code voor naar rechts zelf in elkaar zetten met de blokken hieronder?

Voeg de blokken code, in de juiste volgorde, toe aan het "definieer Lopen" blok, net onder het "als toets pijltje links ingedrukt? dan" blok en net boven "maak x-snelheid x-snelheid * 0.8".

**Let op!** Voeg de blokken **onder** het als-dan-blok toe, en niet er binnen in. Weet je ook waarom?

```blocks
als &lt; > dan
einde

verander [x-snelheid v] met (2)

toets (pijltje rechts v) ingedrukt?

richt naar (90) graden
```

Zie de oplossing op de volgende pagina!
<!-- {/section} -->

<!-- {section.page} -->
Het "definieer Lopen" blok moet er uiteindelijk zo uitzien:
```blocks
definieer Lopen
als &lt;toets (pijltje links v) ingedrukt?> dan
	verander [x-snelheid v] met (-2)
	richt naar (-90) graden
einde
als &lt;toets (pijltje rechts v) ingedrukt?> dan
	verander [x-snelheid v] met (2)
	maak [kijkt naar v] [rechts]
	richt naar (90) graden
einde
maak [x-snelheid v] ((x-snelheid)*(0.8))
verander x met (x-snelheid)
```

#### Uitleg
De blokken voor het naar rechts lopen zien er vergelijkbaar uit als voor het lopen naar links. 

Het grootste verschil is dat het als-dan blok nu kijkt of de rechter pijltjestoets in ingedrukt. En dat de x-snelheid met 2 toeneemt wanneer dit het geval is.

Wanneer de x-snelheid positief is beweegt de tovenaar naar rechts.
<!-- {/section} -->

<!-- {section.page} -->
## Botsen tegen muren
De tovenaar kan nu nog door muren heen bewegen. Dat is natuurlijk niet de bedoeling! Laten wij ervoor zorgen dat de tovenaar tegen de muren opbotst.

De blokken voor het botsen tegen muren zien er zo uit:
```blocks
definieer Botsen tegen muur
als &lt;raak ik (Muren v)?> dan
	herhaal tot &lt;niet &lt;raak ik (Muren v)?>>
		verander x met ((x-snelheid)*(1))
	einde
einde
```

Voeg de blokken toe onder het "definieer Botsen tegen muur"-blok.

### Uitleg
Het programma start weer met een als-dan blok. Dit blok kijkt of de tovenaar een muur raakt.

Als de tovenaar een muur raakt, of er zelfs in zit, dan wordt de tovenaar in de andere richting geduwd, totdat de tovenaar uit de muur is.
<!-- {/section} -->

<!-- {section.page} -->
## Vallen
De tovenaar zweeft nu nog, alsof er geen zwaartekracht is. Dat is natuurlijk niet zoals in het echt. Laten wij ervoor zorgen dat de tovenaar naar beneden valt.

Als de y-snelheid (de snelheid van de tovenaar van boven naar beneden en andersom) groter is dan -10, dan moet de snelheid veranderd worden met -2. Dit zorgt ervoor dat de tovenaar steeds sneller naar beneden valt, maar nooit sneller dan 10 pixels per keer.

De blokken die je moet gebruiken vind je hieronder. Kan jij ze in de juiste volgorde plaatsen?

Voeg de blokken toe onder het "definieer Vallen"-blok.

Zit je vast? Je kan de oplossing op de volgende pagina vinden!

```blocks
als &lt;> dan
einde

(y-snelheid) \> (-10)

verander y met (y-snelheid)

verander [y-snelheid v] met (-2)
```
<!-- {/section} -->

<!-- {section.page} -->
### De oplossing
```blocks
definieer Vallen
als &lt;(y-snelheid) \> (-10)> dan
	verander [y-snelheid v] met (-2)
einde
verander y met (y-snelheid)
```
<!-- {/section} -->

<!-- {section.page} -->
## Voeten op vloer
Als je nu op het groene vlaggetje drukt om het spel te testen, zie je nog iets vreemds. De tovenaar valt door de grond! Dat willen we natuurlijk niet.

De volgende blokken zorgen ervoor dat de tovenaar met de voeten op de vloer staat wanneer die de vloer raakt:
```blocks
definieer Voeten op vloer
als &lt;raak ik [Muren v]> dan
	Maak [voeten op de vloer v] [ja]
	herhaal tot &lt;niet &lt;raak ik (Muren v)?>>
		verander y met ((y-snelheid)*(-1))
	einde
	Maak [y-snelheid v] (0)
anders
	Maak [voeten op de vloer v][nee]
einde
```

Voeg de blokken toe onder het "definieer Voeten op vloer"-blok.

### Uitleg
De blokken zijn vergelijkbaar met de blokken voor "Botsen tegen muur". Wanneer de tovenaar de grond aanraakt, dan wordt die naar buiten geduwd.

Er is één ding anders: we zetten nog een variabele "voeten op de vloer". Deze variabele houdt bij of de tovenaar de voeten op de vloer heeft, of in de lucht is. Deze informatie hebben we straks nodig bij het springen!
<!-- {/section} -->

<!-- {section.page} -->
## Springen
Een platformer is geen platformer wanneer de tovenaar niet kan springen. Laten wij ervoor zorgen dat de tovenaar kan springen!

De volgende blokken zorgen ervoor dat de tovenaar kan springen:
```blocks
definieer Springen
als &lt;toets (pijltje omhoog v) ingedrukt?> dan
	als &lt;(voeten op vloer) = [ja]> dan
		maak (y-snelheid) (18)
	einde
einde
```

### Uitleg
De code kijkt of de speler de pijltje-omhoog toets heeft ingedrukt. Dan kijkt de code of de tovenaar de voeten op de vloer heeft. Als dit waar is, krijgt de tovenaar een boost naar boven.
<!-- {/section} -->

<!-- {section.page} -->
## Het volledige spel
Hieronder zie je het programma voor het volledige spel.
<!-- {div.two-columns} -->
```blocks
wanneer groene vlag wordt aangeklikt
maak [x-snelheid v] [0]
maak [y-snelheid v] [0]
maak [voeten op vloer v] [nee]
maak draaistijl [links-rechts v]
herhaal
	Springen
	Lopen
	Botsen tegen muur
	Vallen
	Voeten op de vloer

definieer Vallen
als &lt;(y-snelheid) \> (-10)> dan
	verander [y-snelheid v] met (-2)
einde
verander y met (y-snelheid)
```
```blocks
definieer Botsen tegen muur
als &lt;raak ik (Muren v)?> dan
	herhaal tot &lt;niet &lt;raak ik (Muren v)?>>
		verander x met ((x-snelheid)*(1))
	einde
einde

definieer Lopen
als &lt;toets (pijltje links v) ingedrukt?> dan
	verander [x-snelheid v] met (2)
	richt naar (-90) graden
einde
als &lt;toets (pijltje rechts v) ingedrukt?> dan
	verander [x-snelheid v] met (-2)
	richt naar (90) graden
einde
maak [x-snelheid v] ((x-snelheid)*(0.8))
verander x met (x-snelheid)
```
<!-- {/div} -->
<!-- {/section} -->

<!-- {section.page} -->
```blocks
definieer Springen
als &lt;toets (pijltje omhoog v) ingedrukt?> dan
	als &lt;(voeten op vloer) = [ja]> dan
		maak (y-snelheid) (18)
	einde
einde

definieer Voeten op vloer
als &lt;raak ik [Muren v]> dan
	Maak [voeten op de vloer v] [ja]
	herhaal tot &lt;niet &lt;raak ik (Muren v)?>>
		verander y met ((y-snelheid)*(-1))
	einde
	Maak [y-snelheid v] (0)
anders
	Maak [voeten op de vloer v][nee]
einde
```
<!-- {/section} -->