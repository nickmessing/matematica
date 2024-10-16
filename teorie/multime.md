# Mulțime {#multime}

## Definiție

O **mulțime** este un concept fundamental în matematică, reprezentând o colecție bine definită de obiecte distincte, numite **elemente** sau **membre** ale mulțimii. Mulțimile sunt notate de obicei cu litere mari, cum ar fi $A$, $B$, $C$, iar elementele cu litere mici, cum ar fi $a$, $b$, $c$.

### Notații

- **Aparența unui element într-o mulțime**:

  - $a \in A$ indică faptul că $a$ este un element al mulțimii $A$.
  - $b \notin A$ indică faptul că $b$ nu este un element al mulțimii $A$.

- **Mulțimea Vidă**:
  - Mulțimea care nu conține niciun element, notată cu $\emptyset$ sau $\{\}$.

### Reprezentări ale Mulțimilor

- **Enumerarea elementelor**:

  $$
  A = \{ a_1, a_2, a_3, \ldots, a_n \}.
  $$

- **Caracterizarea proprietăților**:
  $$
  A = \{ x \mid \text{condiție asupra lui } x \}.
  $$

## Operații cu Mulțimi

### Reuniunea

**Reuniunea** a două mulțimi $A$ și $B$ este mulțimea elementelor care aparțin cel puțin uneia dintre mulțimi:

$$
A \cup B = \{ x \mid x \in A \ \text{sau} \ x \in B \}.
$$

### Intersecția

**Intersecția** a două mulțimi $A$ și $B$ este mulțimea elementelor comune ambelor mulțimi:

$$
A \cap B = \{ x \mid x \in A \ \text{și} \ x \in B \}.
$$

### Diferența

**Diferența** a două mulțimi $A$ și $B$ este mulțimea elementelor care aparțin lui $A$, dar nu și lui $B$:

$$
A \setminus B = \{ x \mid x \in A \ \text{și} \ x \notin B \}.
$$

### Complementarul

**Complementarul** unei mulțimi $A$ în raport cu o mulțime universală $U$ este:

$$
A^c = U \setminus A.
$$

## Submulțimi și Incluziune

### Submulțime

O mulțime $A$ este o **submulțime** a mulțimii $B$ (notat $A \subseteq B$) dacă fiecare element al lui $A$ este și element al lui $B$:

$$
\forall x \in A, \ x \in B.
$$

- Dacă $A \subseteq B$ și $B \subseteq A$, atunci $A = B$.
- Dacă $A \subseteq B$, dar $A \ne B$, atunci $A$ este o **submulțime proprie** a lui $B$ (notat $A \subsetneq B$).

## Cardinalul unei Mulțimi

Numărul de elemente dintr-o mulțime finită $A$ se numește **cardinalul** mulțimii și se notează $|A|$.

### Proprietăți

- Pentru mulțimile finite $A$ și $B$:
  - $|A \cup B| = |A| + |B| - |A \cap B|$.
  - Dacă $A$ și $B$ sunt disjuncte ($A \cap B = \emptyset$), atunci $|A \cup B| = |A| + |B|$.

## Exemple

1. **Mulțimea Numerelor Naturale**:

   $$
   \mathbb{N} = \{ 0, 1, 2, 3, \ldots \}.
   $$

2. **Mulțimea Numerelor Reale**:

   $$
   \mathbb{R} = \{ x \mid x \text{ este un număr real} \}.
   $$

3. **Mulțimea Literelor din Alfabet**:

   $$
   L = \{ \text{a}, \text{b}, \text{c}, \ldots, \text{z} \}.
   $$

## Notă

Conceptul de mulțime este fundamental în matematică și stă la baza teoriei mulțimilor, care este esențială pentru definirea și înțelegerea structurilor matematice mai avansate, cum ar fi spațiile vectoriale, mulțimile numerelor reale și altele.

## Simboluri Asociate

#### **$\in$** {#apartine}

Indică faptul că un element aparține unei mulțimi.

#### **$\notin$** {#nu-apartine}

Indică faptul că un element nu aparține unei mulțimi.

#### **$\subseteq$** {#submultime-symbol}

Indică faptul că o mulțime este [submulțime a alteia](/teorie/multime#submultime).

#### **$\subsetneq$** {#submultime-proprie}

Indică o [submulțime proprie](/teorie/multime#submultime).

#### **$\cup$** {#reuniune}

Simbolul reuniunii de mulțimi.

#### **$\cap$** {#intersectie}

Simbolul intersecției de mulțimi.

#### **$\setminus$** {#diferenta-symbol}

Simbolul diferenței de mulțimi.

#### **$\emptyset$** {#multime-vida}

Simbolul mulțimii vide.
