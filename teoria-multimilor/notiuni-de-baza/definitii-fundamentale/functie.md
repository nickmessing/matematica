# Funcție {#functie}

## Definiție

O **funcție** este o relație între două [mulțimi](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/multime.md), care asociază fiecărui element din prima mulțime exact un element din a doua mulțime. Formal, o funcție $f$ de la mulțimea $A$ la mulțimea $B$ este o aplicație:

$$
f: A \rightarrow B,
$$

astfel încât pentru fiecare $\forall a \in A$, $\exists! b \in B$ cu proprietatea că $f(a) = b$.

- **Domeniul de definiție**: Mulțimea $A$ se numește **domeniul** funcției $f$.
- **Codomeniul**: Mulțimea $B$ se numește **codomeniul** funcției $f$.
- **Imaginea**: Mulțimea valorilor $f(A) = \{ f(a) \mid a \in A \} \subseteq B$ se numește **imaginea** funcției $f$.

## Tipuri de funcții

### Funcție injectivă {#functie-injectiva}

#### Definiție

O funcție $f: A \rightarrow B$ este **injectivă** dacă imagini diferite ale funcției corespund la argumente diferite. Cu alte cuvinte, dacă:

$$
\forall\, a_1, a_2 \in A,\ f(a_1) = f(a_2) \ \Rightarrow\ a_1 = a_2.
$$

#### Caracteristici

- **Funcție unu-la-unu**: Fiecare element din imaginea funcției este imaginea unui singur element din domeniu.
- **Proprietatea inversabilității pe imagine**: O funcție injectivă are inversă pe imaginea sa.

#### Exemplu

- Funcția $f: \mathbb{R} \rightarrow \mathbb{R}$, definită prin $f(x) = 2x + 3$, este injectivă deoarece dacă $f(x_1) = f(x_2)$, atunci $x_1 = x_2$.

### Funcție surjectivă {#functie-surjectiva}

#### Definiție

O funcție $f: A \rightarrow B$ este **surjectivă** dacă imaginea sa este egală cu codomeniul. Adică:

$$
f(A) = B.
$$

Cu alte cuvinte, $\forall b \in B, \exists a \in A$ astfel încât $f(a) = b$.

#### Caracteristici

- **Funcție pe**: Fiecare element din codomeniu este imaginea cel puțin a unui element din domeniu.

#### Exemplu

- Funcția $f: \mathbb{R} \rightarrow \mathbb{R}$, definită prin $f(x) = x^3$, este surjectivă deoarece orice număr real are o rădăcină cubică reală.

### Funcție bijectivă {#functie-bijectiva}

#### Definiție

O funcție $f: A \rightarrow B$ este **bijectivă** dacă este atât [injectivă](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/functie.md#functie-injectiva), cât și [surjectivă](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/functie.md#functie-surjectiva). Cu alte cuvinte:

- Fiecare element din $B$ este imaginea exact a unui element din $A$.

#### Caracteristici

- **Corelare unu-la-unu între $A$ și $B$**.
- **Funcție inversabilă**: O funcție bijectivă are o funcție inversă $f^{-1}: B \rightarrow A$.

#### Exemplu

- Funcția $f: \mathbb{R} \rightarrow \mathbb{R}$, definită prin $f(x) = x + 5$, este bijectivă.

### Funcție monotonă {#functie-monotona}

#### Definiție

O funcție $f: I \rightarrow \mathbb{R}$, unde $I$ este un interval din $\mathbb{R}$, este **monotonă** dacă păstrează ordinea. Există două tipuri:

- **Monoton crescătoare**:

  $$
  \forall\, x_1, x_2 \in I,\ x_1 \leq x_2 \ \Rightarrow\ f(x_1) \leq f(x_2).
  $$

- **Monoton descrescătoare**:
  $$
  \forall\, x_1, x_2 \in I,\ x_1 \leq x_2 \ \Rightarrow\ f(x_1) \geq f(x_2).
  $$

#### Caracteristici

- **Păstrează ordinea**: Valorile funcției respectă ordinea valorilor din domeniu.
- **Proprietăți legate de derivată**: Dacă $f$ este derivabilă și $f' \geq 0$ pe $I$, atunci $f$ este monoton crescătoare.

#### Exemplu

- Funcția $f(x) = x^2$ este monoton crescătoare pe intervalul $[0, \infty)$ și monoton descrescătoare pe $(-\infty, 0]$.

### Funcție periodică {#functie-periodica}

#### Definiție

O funcție $f: \mathbb{R} \rightarrow \mathbb{R}$ este **periodică** dacă există un număr real $T > 0$ astfel încât:

$$
\forall\, x \in \mathbb{R},\ f(x + T) = f(x).
$$

Cel mai mic astfel de $T$ se numește **perioada fundamentală** a funcției.

#### Caracteristici

- **Repetitivitate**: Valorile funcției se repetă la intervale regulate.

#### Exemplu

- Funcția $f(x) = \sin(x)$ este periodică cu perioada fundamentală $T = 2\pi$, deoarece $\sin(x + 2\pi) = \sin(x)$ pentru orice $x \in \mathbb{R}$.
