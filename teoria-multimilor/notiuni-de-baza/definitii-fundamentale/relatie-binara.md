# Relație Binara {#relatie-binara}

## Definiție

În matematică, o **relație binară** pe o [mulțime](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/multime.md#definitie) $A$ este o **submulțime** a [produsului cartezian](/simboluri.md#produs-cartezian) $A \times A$ al mulțimii $A$ cu ea însăși. Cu alte cuvinte, o relație binară $\rho$ este un subset al tuturor perechilor ordonate de elemente din $A$:

$$
\rho \subseteq A \times A.
$$

Relațiile binare sunt relații de **aritate doi**, adică implică două elemente.

**Notație:** Dacă $\rho \subseteq A \times A$ este o relație, atunci în loc să scriem $(a, b) \in \rho$, scriem:

$$
a \ \rho \ b,
$$

ceea ce înseamnă că elementul $a$ este în relație cu elementul $b$ prin relația $\rho$.

## Tipuri de relații binare

O relație binară $\rho \subseteq A \times A$ poate avea diferite proprietăți, care conduc la clasificarea relațiilor în funcție de aceste caracteristici.

### Relație Reflexivă

**Definiție:** Relația $\rho$ este **reflexivă** dacă pentru orice element $a \in A$:

$$
a \ \rho \ a.
$$

**Explicație:** Fiecare element este în relație cu sine însuși.

### Relație Antireflexivă

**Definiție:** Relația $\rho$ este **antireflexivă** dacă pentru orice element $a \in A$:

$$
(a, a) \notin \rho.
$$

**Explicație:** Niciun element nu este în relație cu sine însuși.

### Relație Simetrică

**Definiție:** Relația $\rho$ este **simetrică** dacă pentru orice $a, b \in A$:

$$
a \ \rho \ b \implies b \ \rho \ a.
$$

**Explicație:** Dacă $a$ este în relație cu $b$, atunci și $b$ este în relație cu $a$.

### Relație Antisimetrică

**Definiție:** Relația $\rho$ este **antisimetrică** dacă pentru orice $a, b \in A$:

$$
a \ \rho \ b \land b \ \rho \ a \implies a = b.
$$

**Explicație:** Dacă $a$ este în relație cu $b$ și $b$ este în relație cu $a$, atunci $a$ și $b$ sunt același element.

### Relație Tranzitivă

**Definiție:** Relația $\rho$ este **tranzitivă** dacă pentru $\forall a, b, c \in A$:

$$
a \ \rho \ b \land b \ \rho \ c \implies a \ \rho \ c.
$$

**Explicație:** Dacă $a$ este în relație cu $b$ și $b$ este în relație cu $c$, atunci $a$ este în relație cu $c$.

### Relație de Echivalență

**Definiție:** Relația $\rho$ este o **relație de echivalență** dacă este simultan:

- [**Reflexivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-reflexiva)
- [**Simetrică**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-simetrica)
- [**Tranzitivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-tranzitiva)

**Explicație:** Relațiile de echivalență împart mulțimea $A$ în clase de echivalență.

### Relație de Preordine

**Definiție:** Relația $\rho$ este o **relație de preordine** dacă este:

- [**Reflexivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-reflexiva)
- [**Tranzitivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-tranzitiva)

**Explicație:** Relațiile de preordine permit ordonarea elementelor, dar nu impun [antisimetricitatea](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-antisimetrica).

### Relație de Ordine (Parțială)

**Definiție:** Relația $\rho$ este o **relație de ordine** (parțială) dacă este:

- [**Reflexivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-reflexiva)
- [**Antisimetrică**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-antisimetrica)
- [**Tranzitivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-tranzitiva)

**Explicație:** Relațiile de ordine permit compararea elementelor într-un mod care respectă ordinea și unicitatea.

### Relație de Ordine Totală

**Definiție:** Relația $\rho$ este o **relație de ordine totală** dacă este o [relație de ordine](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-de-ordine-partiala) și, în plus, pentru $\forall a, b \in A$:

$$
a \ \rho \ b \lor b \ \rho \ a.
$$

**Explicație:** Orice două elemente sunt comparabile între ele.

### Relație de Bună Ordonare

**Definiție:** Relația $\rho$ este o **relație de bună ordonare** dacă este o [relație de ordine totală](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-de-ordine-totala) și, în plus, orice submulțime nevidă $B \subseteq A$ are un element minim:

$$
\forall B \subseteq A, \ B \ne \emptyset \implies \exists m \in B, \ \forall x \in B, \ m \ \rho \ x.
$$

**Explicație:** Există un element minim în orice submulțime nevidă a lui $A$.

### Relație de Ordine Strictă

**Definiție:** Relația $\rho$ este o **relație de ordine strictă** dacă este:

- [**Antireflexivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-antireflexiva)
- [**Tranzitivă**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-tranzitiva)

**Explicație:** Relațiile de ordine strictă nu permit ca un element să fie în relație cu sine însuși și respectă tranzitivitatea.

## Rezumat al proprietăților

| Proprietate       | Definiție                                                                        |
| ----------------- | -------------------------------------------------------------------------------- |
| Reflexivitate     | $\forall a \in A, \ a \ \rho \ a$                                                |
| Antireflexivitate | $\forall a \in A, \ (a, a) \notin \rho$                                          |
| Simetrie          | $\forall a, b \in A, \ a \ \rho \ b \implies b \ \rho \ a$                       |
| Antisimetrie      | $\forall a, b \in A, \ a \ \rho \ b \land b \ \rho \ a \implies a = b$           |
| Tranzitivitate    | $\forall a, b, c \in A, \ a \ \rho \ b \land b \ \rho \ c \implies a \ \rho \ c$ |

## Exemple

1. **Egalitatea ($=$) pe o mulțime $A$:**

   - **Reflexivă:** $a = a$ pentru orice $a \in A$.
   - **Simetrică:** Dacă $a = b$, atunci $b = a$.
   - **Tranzitivă:** Dacă $a = b$ și $b = c$, atunci $a = c$.
   - **Este o relație de echivalență.**

2. **Relația "mai mic sau egal" ($\leq$) pe numere reale $\mathbb{R}$:**

   - **Reflexivă:** $a \leq a$.
   - **Antisimetrică:** Dacă $a \leq b$ și $b \leq a$, atunci $a = b$.
   - **Tranzitivă:** Dacă $a \leq b$ și $b \leq c$, atunci $a \leq c$.
   - **Este o relație de ordine totală.**

3. **Relația "divizibilitate" ($\mid$) pe $\mathbb{N}$:**

   - **Reflexivă:** $a \mid a$.
   - **Antisimetrică:** Dacă $a \mid b$ și $b \mid a$, atunci $a = b$.
   - **Tranzitivă:** Dacă $a \mid b$ și $b \mid c$, atunci $a \mid c$.
   - **Este o relație de ordine parțială.**
