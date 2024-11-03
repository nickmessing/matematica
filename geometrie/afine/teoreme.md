# Teoreme {#teoreme}

## Teorema 1: Coordonatele vectorului dintre două puncte în spațiul afin

### Enunț

Fie un [reper $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al spațiului afin $\mathcal{A}$.

Dacă $M(x_1, x_2, \ldots, x_n)$ și $N(y_1, y_2, \ldots, y_n)$ sunt două puncte din $\mathcal{A}$, atunci vectorul $\overrightarrow{MN}$ are expresia:

$$
\overrightarrow{MN} = (y_1 - x_1) e_1 + (y_2 - x_2) e_2 + \dotsb + (y_n - x_n) e_n.
$$

Adică, coordonatele vectorului $\overrightarrow{MN}$ în baza $(e_1, e_2, \ldots, e_n)$ sunt scalarii $y_1 - x_1,\, y_2 - x_2,\, \ldots,\, y_n - x_n$.

## Teorema 2: Coordonatele punctului care împarte un segment în planul afin

### Enunț

Fie un [reper $O_{e_1 e_2}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al planului afin $\mathcal{A}$.

Dacă $M_1(x_1, y_1)$ și $M_2(x_2, y_2)$ sunt două puncte distincte din $\mathcal{A}$, iar $M(x, y)$ este un punct care împarte segmentul $[M_1, M_2]$ în raportul $\lambda \in \mathbb{R}$, atunci coordonatele punctului $M$ sunt date de:

$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad
y = \frac{y_1 + \lambda y_2}{1 + \lambda}.
$$

**Unde:** Punctul $M$ împarte segmentul $[M_1, M_2]$ în raportul $\lambda$ dacă vectorul $\overrightarrow{M_1 M}$ este proporțional cu vectorul $\overrightarrow{M_1 M_2}$ conform relației:

$$
\overrightarrow{M_1 M} = \frac{\lambda}{1 + \lambda} \overrightarrow{M_1 M_2}.
$$

## Teorema 3: Coordonatele punctului care împarte un segment în spațiul tridimensional afin

### Enunț

Fie un [reper $O_{e_1 e_2 e_3}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al spațiului afin tridimensional $\mathcal{A}$.

Dacă $M_1(x_1, y_1, z_1)$ și $M_2(x_2, y_2, z_2)$ sunt două puncte distincte din $\mathcal{A}$, iar $M(x, y, z)$ este un punct care împarte segmentul $[M_1, M_2]$ în raportul $\lambda \in \mathbb{R}$, atunci coordonatele punctului $M$ sunt date de:

$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad
y = \frac{y_1 + \lambda y_2}{1 + \lambda}, \quad
z = \frac{z_1 + \lambda z_2}{1 + \lambda}.
$$

**Unde:** Punctul $M$ împarte segmentul $[M_1, M_2]$ în raportul $\lambda$ dacă:

$$
\overrightarrow{M_1 M} = \frac{\lambda}{1 + \lambda} \overrightarrow{M_1 M_2}.
$$

## Teorema 4: Inegalitatea triunghiului în spațiul afin

### Enunț

Fie un [reper $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al spațiului afin $\mathcal{A}$.

Pentru orice puncte $A, B, C \in \mathcal{A}$, are loc inegalitatea:

$$
\rho(A, C) \leq \rho(A, B) + \rho(B, C),
$$

unde $\rho(A, B)$ reprezintă **distanța** dintre punctele $A$ și $B$.

**Explicație:** Distanța dintre două puncte $A$ și $C$ nu poate depăși suma distanțelor de la $A$ la $B$ și de la $B$ la $C$.

## Teorema 5: Orientarea spațiului vectorial și relația de echivalență a bazelor

### Enunț

[Relația](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#definitie) **„a fi la fel orientate”**, definită pe mulțimea tuturor [bazelor](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#baza) unui [spațiu vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) $V$, este o [relație de echivalență](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-de-echivalenta).

**Detalii:**

- [**Reflexivitate:**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-reflexiva) Orice bază este la fel orientată cu ea însăși.
- [**Simetrie:**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-simetrica) Dacă o bază $B$ este la fel orientată cu baza $B'$, atunci $B'$ este la fel orientată cu $B$.
- [**Tranzitivitate:**](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-tranzitiva) Dacă baza $B$ este la fel orientată cu baza $B'$, și $B'$ este la fel orientată cu baza $B''$, atunci $B$ este la fel orientată cu $B''$.

**Observație:**

- Deoarece [determinantul](/algebra-liniara/matrice/matrice.md#determinant) unei [matrice de tranziție](/algebra-liniara/matrice/matrice-de-tranzitie.md#definitie) dintre două baze poate fi fie pozitiv, fie negativ, există exact **două clase de echivalență** în raport cu această relație.

**Consecințe:**

- Fiecare dintre aceste două clase de echivalență este numită **orientare** a spațiului $V$.
- Spațiul $V$ se numește **orientat** dacă se fixează una dintre aceste două orientări.
- Bazele din clasa fixată ca orientare se numesc **pozitive** sau **pozitiv orientate**.
- Spațiul afin $\mathcal{A}$ se numește **orientat** dacă spațiul său vectorial director $V$ este orientat.

**Mod de lucru:**

- Pentru a orienta un spațiu afin, se fixează un reper $O_{e_1 e_2 \ldots e_n}$ al lui $\mathcal{A}$ și se consideră orientarea determinată de baza $(e_1, e_2, \ldots, e_n)$.
- Toate bazele care sunt la fel orientate cu baza $(e_1, e_2, \ldots, e_n)$ fac parte din clasa de echivalență a bazelor pozitive.
