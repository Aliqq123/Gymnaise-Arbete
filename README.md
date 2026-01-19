# Gymnaise Arbete

# Miniräknare & Funktionsplotter

Ett webbaserat verktyg som kombinerar en **miniräknare** med en **funktionsplotter**. Applikationen är byggd med **HTML**, **CSS** och **JavaScript**, och använder **Plotly** för att rita grafer.

---

## Funktioner

### 1. Miniräknare

* Grundläggande aritmetik: `+`, `-`, `*`, `/`
* Exponentberäkningar med `^`
* Stöd för flyttal (decimalpunkt)
* Rensningsfunktion

### 2. Funktionsplotter

* Rita matematiska funktioner med variabeln `x`
* Anpassningsbart intervall för x-axeln
* Stöd för matematiska uttryck, inklusive trigonometriska funktioner
* Automatisk skalning av grafen

---

## Hur man använder

### Installation

1. Ladda ner alla filer:

   * `index.html`
   * `style.css`
   * `beh.js`
2. Se till att alla filer ligger i samma mapp.
3. Öppna `index.html` i en webbläsare.

---

### Miniräknaren

* Använd knapparna i gränssnittet eller skriv direkt i inmatningsfältet.
* Använd `^` för exponenter (t.ex. `2^3` för 2³).
* Tryck på `=` för att beräkna resultatet.
* Tryck på **Rensa** för att nollställa.

---

### Funktionsplottern

1. Ange en funktion i formatet `f(x)` (t.ex. `Math.sin(x)`, `x^2`, `2*x+3`, `Math.asin(x)`).
2. Ange x-intervallet (från och till).
3. Tryck på **Rita** för att visa grafen.

---

## Exempel på funktioner

* `Math.sin(x)` – Sinusfunktion
* `x^2` – Parabel
* `2*x+3` – Linjär funktion
* `Math.cos(x)` – Cosinusfunktion
* `Math.log(x)` – Logaritm (endast definierad för `x > 0`)

---

## Kända problem och begränsningar

### Säkerhet

* **Användning av `eval()`**: Både miniräknaren och funktionsplottern använder `eval()` för att utvärdera uttryck.

**Risk:**

* Användaren kan exekvera godtycklig JavaScript-kod om applikationen används i en oskyddad kontext.


---

### Funktionsbegränsningar

* Ingen validering av inmatning.

  * Ogiltiga uttryck som `1/0` eller `sin(` leder till fel.
* Begränsat matematiskt stöd:

  * Inget stöd för komplexa tal.
  * Ingen implicit multiplikation (t.ex. `2x` måste skrivas `2*x`).
  * Begränsad hantering av parenteser.

---

### Prestanda

* Endast 200 punkter används vid plottning, vilket kan ge ojämna grafer för vissa funktioner.
* Ingen cachning av tidigare resultat.

---

## Användarupplevelse

* Ingen felhantering för ogiltiga intervall (t.ex. om `xMin > xMax`).
* Ingen automatisk uppdatering – användaren måste trycka på **Rita** efter varje ändring.
* Ingen möjlighet att spara eller exportera grafer.
* Ingen responsiv design för mobila enheter.

---

## Gränssnittsbegränsningar

* Ingen tangentbordssupport för miniräknaren (t.ex. Enter för beräkning).
* Ingen historik för tidigare beräkningar eller ritade grafer.
* Det går inte att rita flera funktioner i samma graf.
