# Logica Matematică

## Introducere

Logica matematică este ramura matematicii care se ocupă cu studiul raționamentului matematic și al structurii demonstrațiilor. Ea furnizează instrumentele necesare pentru a formaliza și a analiza argumentele matematice, asigurând corectitudinea și consistența acestora. Logica matematică este fundamentală pentru toate domeniile matematicii, deoarece stabilește bazele pe care se construiesc teoremele și demonstrațiile.

## Propoziții

### Definiție

O **propoziție** este o afirmație care poate fi fie adevărată (A), fie falsă (F), dar nu ambele simultan. Propozițiile sunt elementele de bază în logica matematică și stau la baza construirii raționamentelor logice.

### Exemple

- **Propoziții**:

  - "Numărul 2 este un număr prim." (Adevărat)
  - "5 este un număr par." (Fals)

- **Non-propoziții**:
  - "x este un număr real." (Depinde de valoarea lui x)
  - "Deschide ușa, te rog." (Comandă, nu poate fi evaluată ca adevărată sau falsă)

### Conective Logice

Propozițiile pot fi combinate folosind **conective logice**:

- **Negarea** ($\lnot$): Dacă $p$ este o propoziție, atunci $\lnot p$ este propoziția "nu $p$".
- **Conjuncția** ($\land$): $p \land q$ este propoziția "p și q".
- **Disjuncția** ($\lor$): $p \lor q$ este propoziția "p sau q" (sau inclusiv).
- **Implicația** ($\implies$): $p \implies q$ este propoziția "dacă $p$, atunci $q$".
- **Echivalența** ($\iff$): $p \iff q$ este propoziția "$p$ dacă și numai dacă $q$".

### Tabele de Adevăr

**Exemplu**: Tabelul de adevăr pentru implicația $p \implies q$:

| $p$ | $q$ | $p \implies q$ |
| --- | --- | -------------- |
| A   | A   | A              |
| A   | F   | F              |
| F   | A   | A              |
| F   | F   | A              |

## Cuantificatori

Cuantificatorii sunt simboluri folosite pentru a exprima afirmații despre toate elementele unei mulțimi sau despre existența unor elemente cu o anumită proprietate.

### Cuantificatorul Universal

- Simbol: $\forall$
- Lectură: "pentru orice", "pentru toate"
- **Exemplu**: $\forall x \in \mathbb{R}, \ x^2 \geq 0$ (Pentru orice număr real $x$, $x^2$ este mai mare sau egal cu zero.)

### Cuantificatorul Existențial

- Simbol: $\exists$
- Lectură: "există cel puțin un", "există"
- **Exemplu**: $\exists x \in \mathbb{R}, \ x^2 = -1$ (Există un număr real $x$ astfel încât $x^2 = -1$.) (Această propoziție este falsă în $\mathbb{R}$.)

### Cuantificatorul Existențial Unic

- Simbol: $\exists !$
- Lectură: "există un unic"
- **Exemplu**: $\exists ! x \in \mathbb{R}, \ x + 2 = 5$ (Există un unic număr real $x$ astfel încât $x + 2 = 5$.)

## Legi Logice Fundamentale

### Legile De Morgan

- **Negarea conjuncției**:

  $$
  \lnot (p \land q) \equiv \lnot p \lor \lnot q
  $$

- **Negarea disjuncției**:

  $$
  \lnot (p \lor q) \equiv \lnot p \land \lnot q
  $$

### Legile de Asociativitate

- **Conjuncția**:

  $$
  (p \land q) \land r \equiv p \land (q \land r)
  $$

- **Disjuncția**:

  $$
  (p \lor q) \lor r \equiv p \lor (q \lor r)
  $$

### Legile de Distributivitate

- **Conjuncția peste disjuncție**:

  $$
  p \land (q \lor r) \equiv (p \land q) \lor (p \land r)
  $$

- **Disjuncția peste conjuncție**:

  $$
  p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)
  $$

### Legile de Dublă Negare

- **Dublă negare**:

  $$
  \lnot (\lnot p) \equiv p
  $$

### Legile de Implicație

- **Contrapozitiva**:

  $$
  p \implies q \equiv \lnot q \implies \lnot p
  $$

- **Echivalența implicației**:

  $$
  p \implies q \equiv \lnot p \lor q
  $$

## Demonstrații

### Metode de Demonstrație

1. **Demonstrație Directă**

   Se pornește de la ipoteze și, prin raționamente logice, se ajunge la concluzie.

   **Exemplu**: Demonstrați că dacă $n$ este număr par, atunci $n^2$ este par.

   **Demonstrație**:

   - Dacă $n$ este par, atunci există $k \in \mathbb{Z}$ astfel încât $n = 2k$.
   - Atunci $n^2 = (2k)^2 = 4k^2 = 2(2k^2)$, deci $n^2$ este par.

2. **Demonstrație prin Contradicție**

   Se presupune că afirmația este falsă și se deduce o contradicție.

   **Exemplu**: Demonstrați că $\sqrt{2}$ este irațional.

   **Demonstrație**:

   - Presupunem că $\sqrt{2}$ este rațional, deci $\sqrt{2} = \dfrac{a}{b}$, cu $a, b \in \mathbb{Z}$ coprimi și $b \ne 0$.
   - Atunci $2 = \dfrac{a^2}{b^2}$, deci $a^2 = 2b^2$.
   - Deci $a^2$ este par, deci $a$ este par, deci $a = 2k$.
   - Atunci $a^2 = (2k)^2 = 4k^2$, deci $4k^2 = 2b^2$, deci $b^2 = 2k^2$.
   - Deci $b^2$ este par, deci $b$ este par.
   - Atunci $a$ și $b$ sunt ambii pari, contradictie cu faptul că $a$ și $b$ sunt coprimi.

3. **Demonstrație prin Inducție Matematică**

   Se folosește pentru propoziții dependente de un număr natural $n$.

   **Pași**:

   - **Baza inductivă**: Se verifică afirmația pentru $n = n_0$.
   - **Pasul inductiv**: Se arată că dacă afirmația este adevărată pentru $n = k$, atunci este adevărată și pentru $n = k + 1$.

   **Exemplu**: Demonstrați că $\sum_{i=1}^n i = \dfrac{n(n+1)}{2}$.

   **Demonstrație**:

   - **Baza**: Pentru $n = 1$, $\sum_{i=1}^1 i = 1 = \dfrac{1(1+1)}{2} = 1$.
   - **Pasul inductiv**: Presupunem că afirmația este adevărată pentru $n = k$, deci $\sum_{i=1}^k i = \dfrac{k(k+1)}{2}$.
   - Pentru $n = k+1$:
     $$
     \sum_{i=1}^{k+1} i = \left( \sum_{i=1}^k i \right) + (k+1) = \dfrac{k(k+1)}{2} + (k+1) = \dfrac{k(k+1) + 2(k+1)}{2} = \dfrac{(k+1)(k+2)}{2}
     $$
     Deci formula este adevărată pentru $n = k+1$.

## Simboluri Asociate

- **$\lnot$**: Negarea
- **$\land$**: Conjuncția (și)
- **$\lor$**: Disjuncția (sau)
- **$\implies$**: Implicația
- **$\iff$**: Echivalența
- **$\forall$**: Cuantificatorul universal (pentru orice)
- **$\exists$**: Cuantificatorul existențial (există)
- **$\exists !$**: Cuantificatorul existențial unic (există un unic)
- **$\mathbb{N}$**: Mulțimea numerelor naturale
- **$\mathbb{Z}$**: Mulțimea numerelor întregi
- **$\mathbb{Q}$**: Mulțimea numerelor raționale
- **$\mathbb{R}$**: Mulțimea numerelor reale

## Concluzie

Logica matematică oferă instrumentele necesare pentru a construi și a evalua raționamente matematice solide. Înțelegerea conceptelor fundamentale precum propozițiile, cuantificatorii, legile logice și metodele de demonstrație este esențială pentru orice matematician sau student al matematicii.
