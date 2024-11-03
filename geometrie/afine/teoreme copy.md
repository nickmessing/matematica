# Teoreme {#teoreme}

## Teorema 1

### Fie:

Un [reper $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al [spațiului afin $\mathcal{A}$](/geometrie/afine/definitii.md#spatiu-afin).

### Dacă:

$$
M(x_1, x_2, \ldots, x_n), N(y_1, y_2, \ldots, y_n) \in \mathcal{A}.
$$

### Atunci:

$$
\overrightarrow{MN} = (y_1 - x_1) e_1 + \ldots + (y_n - x_n) e_n.
$$

Adică coordonatele lui $\overrightarrow{MN}$ în baza $(e_1, e_2, \ldots, e_n)$ sunt scalarii $y_1 - x_1, y_2 - x_2, \ldots, y_n - x_n$.

## Teorema 2

### Fie:

Un [reper $O_{e_1 e_2}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al [spațiului afin $\mathcal{A}$](/geometrie/afine/definitii.md#spatiu-afin).

### Dacă:

$$
M_1(x_1, y_1), M_2(x_2, y_2), M(x, y) \in \mathcal{A}.
\newline și \newline
M \in [M_1, M_2].
$$

### Atunci:

$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda} \newline
y = \frac{y_1 + \lambda y_2}{1 + \lambda}.
$$

Unde $\lambda$ este [raportul](/geometrie/afine/definitii.html#impartire-segment-raport) în care punctul $M$ împarte segmentul $[M_1, M_2]$.

## Teorema 3

### Fie:

Un [reper $O_{e_1 e_2 e_3}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al [spațiului afin $\mathcal{A}$](/geometrie/afine/definitii.md#spatiu-afin).

### Dacă:

$$
M_1(x_1, y_1, z_1), M_2(x_2, y_2, z_2), M(x, y, z) \in \mathcal{A}.
\newline și \newline
M \in [M_1, M_2].
$$

### Atunci:

$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda} \newline
y = \frac{y_1 + \lambda y_2}{1 + \lambda} \newline
z = \frac{z_1 + \lambda z_2}{1 + \lambda}.
$$

Unde $\lambda$ este [raportul](/geometrie/afine/definitii.md#impartire-segment-raport) în care punctul $M$ împarte segmentul $[M_1, M_2]$.

## Teorema 4

### Fie:

Un [reper $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-spatiu-afin) al [spațiului afin $\mathcal{A}$](/geometrie/afine/definitii.md#spatiu-afin).

### Dacă:

$A, B, C \in \mathcal{A}$.

### Atunci:

$$
\rho(A, C) \leq \rho(A, B) + \rho(B, C).
$$

Această inegalitate se numește **inegalitatea triunghiului**.

## Teorema 5

[Relația](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#definitie) [„a fi la fel orientate”](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#orientarea-bazei), definită pe mulțimea tuturor [bazelor](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#baza) [spațiului vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) $V$ este o [relație de echivalență](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/relatie-binara.md#relatie-de-echivalenta).

Întrucât [determinantul](/algebra-liniara/matrice/matrice.md#determinant) unei [matrice de tranziție](/algebra-liniara/matrice/matrice-de-tranzitie.md#definitie) este fie pozitiv fie negativ, există exact două clase de echivalență în raport cu această relație de echivalență.

Fiecare dintre aceste două clase de echivalență este numită **orientare** a spațiului $V$.

Spațiul $V$ se zice **orientat** dacă este fixată una dintre aceste două orientări, adică una din aceste două clase de echivalență, atunci bazele din clasa fixată ca orientare se zic **pozitive** sau **pozitiv orientate**. În fine, spațiul afin $\mathcal{A}$ se zice **orientat** dacă spațiul vectorial director al său este orientat.

De regulă, pentru a orienta un spațiu afin se procedează astfel: se fixează un reper să zicem $O_{e_1 e_2 \ldots e_n}$ al lui $\mathcal{A}$ și se ia în calitate de orientare a lui $\mathcal{A}$ orientarea determinată de baza $(e_1, e_2, \ldots, e_n)$.
