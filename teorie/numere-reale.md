# Numere Reale și Mulțimi de Numere

## Introducere

Numerele reale formează un sistem numeric fundamental în matematică, fiind esențiale pentru studiul algebrei, analizei matematice, geometriei și altor domenii. Mulțimea numerelor reale, notată cu $\mathbb{R}$, include toate numerele raționale și iraționale și are proprietăți importante care permit dezvoltarea conceptelor de limită, continuitate și derivabilitate.

## Definiția Numerelor Reale

### Numere Raționale

Un **număr rațional** este un număr care poate fi exprimat ca raportul a două numere întregi, cu numitor diferit de zero:

$$
\mathbb{Q} = \left\{ \frac{p}{q} \mid p, q \in \mathbb{Z}, \ q \ne 0 \right\}.
$$

Exemple: $\frac{1}{2}, \ -3, \ 0.75$

### Numere Iraționale

Un **număr irațional** este un număr care nu poate fi scris ca raportul a două numere întregi. Aceste numere au dezvoltări zecimale infinite neperiodice.

Exemple: $\sqrt{2}, \ \pi, \ e$

### Numere Reale

Mulțimea numerelor reale $\mathbb{R}$ cuprinde toate numerele raționale și iraționale:

$$
\mathbb{R} = \mathbb{Q} \cup (\mathbb{R} \setminus \mathbb{Q}).
$$

Numerele reale pot fi reprezentate pe o linie continuă, numită **axa numerelor reale**.

## Proprietățile Numerelor Reale

### Proprietăți Algebrice

Numerele reale formează un **corp** cu operațiile de adunare și înmulțire, satisfăcând următoarele proprietăți:

- **Comutativitate**:
  - Adunare: $a + b = b + a$
  - Înmulțire: $a \cdot b = b \cdot a$
- **Asociativitate**:
  - Adunare: $(a + b) + c = a + (b + c)$
  - Înmulțire: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
- **Element Neutru**:
  - Adunare: există $0$ astfel încât $a + 0 = a$
  - Înmulțire: există $1$ astfel încât $a \cdot 1 = a$
- **Element Invers**:
  - Adunare: pentru fiecare $a$ există $-a$ astfel încât $a + (-a) = 0$
  - Înmulțire: pentru fiecare $a \ne 0$ există $a^{-1}$ astfel încât $a \cdot a^{-1} = 1$
- **Distributivitate**:
  - $a \cdot (b + c) = a \cdot b + a \cdot c$

### Proprietăți de Ordine

Numerele reale sunt **ordonate** și respectă următoarele proprietăți:

- **Tricotomie**: Pentru orice $a, b \in \mathbb{R}$, una și numai una dintre următoarele este adevărată: $a < b$, $a = b$, $a > b$.
- **Transitivitate**: Dacă $a < b$ și $b < c$, atunci $a < c$.
- **Compatibilitate cu Adunarea**: Dacă $a < b$, atunci $a + c < b + c$ pentru orice $c \in \mathbb{R}$.
- **Compatibilitate cu Înmulțirea**:
  - Dacă $a < b$ și $c > 0$, atunci $a \cdot c < b \cdot c$.
  - Dacă $a < b$ și $c < 0$, atunci $a \cdot c > b \cdot c$.

### Proprietatea Completitudinii

Mulțimea numerelor reale este **completă**, adică orice submulțime nevidă mărginită superior are o **limită superioară** (supremum), iar orice submulțime nevidă mărginită inferior are o **limită inferioară** (infimum).

## Intervalele în $\mathbb{R}$

### Definiție

Un **interval** este o submulțime a numerelor reale care conține toate numerele dintre două capete specificate.

### Tipuri de Intervale

- **Interval Deschis**:
  - $(a, b) = \{ x \in \mathbb{R} \mid a < x < b \}$
- **Interval Închis**:
  - $[a, b] = \{ x \in \mathbb{R} \mid a \leq x \leq b \}$
- **Interval Semi-Deschis / Semi-Închis**:
  - $[a, b) = \{ x \in \mathbb{R} \mid a \leq x < b \}$
  - $(a, b] = \{ x \in \mathbb{R} \mid a < x \leq b \}$
- **Intervale Infinite**:
  - $(-\infty, a) = \{ x \in \mathbb{R} \mid x < a \}$
  - $(a, \infty) = \{ x \in \mathbb{R} \mid x > a \}$
  - $(-\infty, \infty) = \mathbb{R}$

### Reprezentarea Grafică

Intervalele pot fi reprezentate pe axa numerelor reale, cu următoarele convenții:

- **Paranteze rotunde** $(\ )$ indică faptul că capătul este **neinclus** (deschis).
- **Paranteze pătrate** $[\ ]$ indică faptul că capătul este **inclus** (închis).
- **Puncte pline** pe axă pentru capete incluse.
- **Puncte goale** pe axă pentru capete neincluse.

## Inegalități

### Definiție

O **inegalitate** este o relație care arată că un număr este mai mare sau mai mic decât altul.

### Simboluri

- $<$ : mai mic decât
- $\leq$ : mai mic sau egal cu
- $>$ : mai mare decât
- $\geq$ : mai mare sau egal cu

### Proprietăți ale Inegalităților

- **Adunare**: Dacă $a < b$, atunci $a + c < b + c$ pentru orice $c \in \mathbb{R}$.
- **Scădere**: Dacă $a < b$, atunci $a - c < b - c$.
- **Înmulțire**:
  - Dacă $a < b$ și $c > 0$, atunci $a c < b c$.
  - Dacă $a < b$ și $c < 0$, atunci $a c > b c$ (sensul inegalității se inversează).
- **Împărțire**:
  - Similar cu înmulțirea, cu atenție la sensul inegalității când se împarte la un număr negativ.

### Rezolvarea Inegalităților

Procesul de rezolvare a inegalităților implică manipularea acestora pentru a determina valorile variabilei care satisfac inegalitatea.

**Exemplu**:

Rezolvați inegalitatea $2x - 5 > 7$.

**Soluție**:

1. Adunăm 5 de ambele părți: $2x > 12$.
2. Împărțim la 2: $x > 6$.

**Răspuns**: $x \in (6, \infty)$.

## Valoarea Absolută

### Definiție

**Valoarea absolută** a unui număr real $a$, notată $|a|$, este distanța dintre $a$ și zero pe axa numerelor reale:

$$
|a| = \begin{cases}
a, & \text{dacă } a \geq 0, \\
-a, & \text{dacă } a < 0.
\end{cases}
$$

### Proprietăți

- **Non-negativitate**: $|a| \geq 0$.
- **Identitatea**: $|a| = |-a|$.
- **Modulul produsului**: $|a \cdot b| = |a| \cdot |b|$.
- **Modulul catului**: $| \dfrac{a}{b} | = \dfrac{|a|}{|b|}$, cu $b \ne 0$.
- **Inegalitatea triunghiului**: $|a + b| \leq |a| + |b|$.
- **Inegalitatea triunghiului inversată**: $||a| - |b|| \leq |a - b|$.

### Ecuații și Inegalități cu Valoare Absolută

- **Ecuații**:

  Pentru $|x| = k$, cu $k \geq 0$:

  $$
  x = k \quad \text{sau} \quad x = -k.
  $$

- **Inegalități**:

  - $|x| < k$ (cu $k > 0$):

    $$
    -k < x < k.
    $$

  - $|x| > k$ (cu $k > 0$):

    $$
    x < -k \quad \text{sau} \quad x > k.
    $$

**Exemplu**:

Rezolvați inegalitatea $|2x - 3| \leq 5$.

**Soluție**:

1. Scriem inegalitatea dublă:

   $$
   -5 \leq 2x - 3 \leq 5.
   $$

2. Adunăm 3:

   $$
   -2 \leq 2x \leq 8.
   $$

3. Împărțim la 2:

   $$
   -1 \leq x \leq 4.
   $$

**Răspuns**: $x \in [-1, 4]$.

## Mulțimi de Numere

### Clasificare

- **Numere Naturale**: $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$
- **Numere Întregi**: $\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$
- **Numere Raționale**: $\mathbb{Q} = \left\{ \dfrac{p}{q} \mid p, q \in \mathbb{Z}, \ q \ne 0 \right\}$
- **Numere Iraționale**: $\mathbb{I} = \mathbb{R} \setminus \mathbb{Q}$
- **Numere Reale**: $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$

### Relații Între Mulțimi

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}
$$

## Exemplu Aplicativ

**Exemplu**: Determinați mulțimea soluțiilor ecuației $|x + 2| = 3$.

**Soluție**:

1. $x + 2 = 3 \implies x = 1$
2. $x + 2 = -3 \implies x = -5$

**Răspuns**: $x \in \{ -5, 1 \}$

## Concluzie

Studiul numerelor reale și al proprietăților acestora este fundamental în matematică. Înțelegerea conceptelor de intervale, inegalități și valoare absolută este esențială pentru rezolvarea problemelor și pentru avansarea în domenii precum analiza matematică și algebra.

## Simboluri Asociate

- **$\mathbb{N}$**: Mulțimea numerelor naturale
- **$\mathbb{Z}$**: Mulțimea numerelor întregi
- **$\mathbb{Q}$**: Mulțimea numerelor raționale
- **$\mathbb{R}$**: Mulțimea numerelor reale
- **$<$, $\leq$, $>$, $\geq$**: Simboluri de inegalitate
- **$|a|$**: Valoarea absolută a lui $a$
- **$\infty$**: Infinit
