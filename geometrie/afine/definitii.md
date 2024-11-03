# Definiții

## Spațiu afin {#spatiu-afin}

Se numește **spațiu afin** o [mulțime](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/multime.md#definitie) nevidă $\mathcal{A}$ ale cărei elemente sunt numite **puncte**, pentru care sunt date un [spațiu vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) $V$ și o aplicație $\phi: \mathcal{A} \times \mathcal{A} \to V$, astfel încât sunt îndeplinite următoarele condiții:

1. **Există unicitate pentru translație:**

   Pentru $\forall A \in \mathcal{A}$ și $\forall \mathbf{v} \in V$, $\exists! B \in \mathcal{A}$ cu proprietatea că:

   $$
   \overrightarrow{AB} = \mathbf{v}.
   $$

   De regulă, punctul $B$ este notat cu $A + \mathbf{v}$ și se spune că $B$ se obține **depunând** vectorul $\mathbf{v}$ cu **originea** în $A$ (iar **extremitatea** este $B$). Această operație definește aplicația:

   $$
   \psi: \mathcal{A} \times V \to \mathcal{A}, \quad (A, \mathbf{v}) \mapsto A + \mathbf{v}.
   $$

2. **Compatibilitate cu adunarea vectorială:**

   $$
   \forall A, B, C \in \mathcal{A} \implies \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}
   $$

### Observații

- Din prima condiție rezultă că, pentru fiecare $A \in \mathcal{A}$, aplicația:

  $$
  \psi_A: V \to \mathcal{A}, \quad \psi_A(\mathbf{v}) = A + \mathbf{v},
  $$

  este [bijectivă](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/functie.md#functie-bijectiva).

- Operația ${\phi}$ satisface proprietățile:
  - **Identitate**: $\overrightarrow{AA} = \mathbf{0}$, unde $\mathbf{0}$ este vectorul zero din $V$.
  - **Simetrie**: $\overrightarrow{AB} = -\overrightarrow{BA}$, pentru orice $A, B \in \mathcal{A}$.

### Exemple

#### Exemplul 1: Cazul $A = B = C$

Dacă $A = B = C$, atunci:

$$
\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AA} + \overrightarrow{AA} = \mathbf{0} + \mathbf{0} = \mathbf{0} = \overrightarrow{AC}.
$$

#### Exemplul 2: Cazul $A = C$

Dacă $A = C$, atunci:

$$
\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \mathbf{0} \implies \overrightarrow{AB} = -\overrightarrow{BA}.
$$

## Spațiu vectorial asociat (spațiu vectorial director) {#spatiu-vectorial-asociat}

Fie $\mathcal{A}$ un spațiu afin și $V$ spațiul vectorial asociat acestuia. Se numește **spațiu vectorial asociat** sau **spațiu vectorial director** (sau simplu, **direcție**) al lui $\mathcal{A}$, spațiul vectorial $V$.

### Exemplu

#### Exemplu 1

Pentru orice $n \in \mathbb{N}_+$, considerăm:

- **Spațiul afin**: $\mathcal{A} = \mathbb{R}^n$, mulțimea n-tuplurilor de numere reale (puncte în spațiul n-dimensional).
- **Spațiul vectorial director**: $V = \mathbb{R}^n$, spațiul vectorilor coloane cu $n$ componente reale.

Pentru $A = (a_1, a_2, \ldots, a_n) \in \mathcal{A}$ și $B = (b_1, b_2, \ldots, b_n) \in \mathcal{A}$, vectorul $\overrightarrow{AB}$ este definit prin:

$$
\overrightarrow{AB} = B - A = (b_1 - a_1,\, b_2 - a_2,\, \dotsc,\, b_n - a_n) \in V.
$$

**Operațiile:**

- **Adunarea unui vector la un punct:**

  $$
  A + \mathbf{v} = (a_1 + v_1,\, a_2 + v_2,\, \dotsc,\, a_n + v_n),
  $$

  unde $\mathbf{v} = (v_1, v_2, \dotsc, v_n) \in V$.

- **Determinarea vectorului dintre două puncte:**
  $$
  \overrightarrow{AB} = B - A.
  $$

**Observație:**

În acest exemplu, spațiul afin $\mathcal{A}$ coincide cu spațiul vectorial $V$ ca mulțime, dar operațiile sunt distincte. În $\mathcal{A}$, elementele sunt considerate puncte, iar în $V$, elementele sunt vectori direcționali.

#### Exemplu 2

Fie $V$ un spațiu vectorial oarecare. Definim spațiul afin $\mathcal{A}$ astfel:

- $\mathcal{A} = V$,
- Pentru $\forall a, v \in V$, vectorul $\overrightarrow{ab}$ este definit prin $b - a$.

Atunci, pentru $\forall a, b, c \in V$:

1. $\overrightarrow{ac} = c - a = (c - b) + (b - a) = \overrightarrow{bc} + \overrightarrow{ab}$.
2. Spațiile $E_1, E_2, E_3$ sunt spații euclidiene având spațiile vectoriale $V_1, V_2, V_3$ ca direcții.

## Dimensiunea unui spațiu afin {#dimensiune-spatiu-afin}

Fie $\mathcal{A}$ un spațiu afin de direcție $V$. Se numește **dimensiune** a lui $\mathcal{A}$ [dimensiunea lui $V$](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#dimensiune) și se notează cu $\dim(\mathcal{A})$.

## Reper în spațiul afin {#reper-spatiu-afin}

Un **reper** în spațiul afin $\mathcal{A}$ este un cuplu format dintr-un punct $O$ din $\mathcal{A}$ și o bază ordonată $e_1, e_2, \ldots, e_n$ a lui $V$. Acesta se notează cu $O_{e_1 \ldots e_n}$.

### Originea reperului {#originea-reperului}

Punctul $O$ se numește **originea** reperului.

## Reper ortonormat (canonic) {#reper-ortonormat}

Un [reper $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-spatiu-afin) se numește **ortonormat** dacă baza $(e_1, e_2, \ldots, e_n)$ este ortonormată, adică:

$$
\langle e_i, e_j \rangle = \begin{cases} 1, & \text{dacă } i = j, \\ 0, & \text{dacă } i \neq j. \end{cases}
$$

## Versori {#versori}

Într-un [reper ortonormat](/geometrie/afine/definitii.md#reper-ortonormat), vectorii $e_1, e_2, \ldots, e_n$ au lungimea 1 (acești vectori se numesc **versori**) și orice doi vectori distincți sunt [ortogonali](/algebra-liniara/spatii-vectoriale/definitii-exemple/produs-scalar.md#ortogonalitate).

### Exemplu în $\mathbb{R}^2$

În $\mathbb{R}^2$, reperul ortonormat este format din originea $O$ și versorii:

$$
e_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad
e_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$

### Exemplu în $\mathbb{R}^3$

În $\mathbb{R}^3$, reperul ortonormat este format din originea $O$ și versorii:

$$
e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad
e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \quad
e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}.
$$

## Distanța dintre două puncte {#distanta-doua-puncte}

Fie $\mathcal{A}$ un spațiu afin euclidian de direcție $V$. Pentru $\forall A, B \in \mathcal{A}$, se definește **distanța** de la $A$ la $B$, notată $\rho(A, B)$, prin formula:

$$
\rho(A, B) = \|\overrightarrow{AB}\| = \sqrt{\langle \overrightarrow{AB}, \overrightarrow{AB} \rangle}.
$$

### Într-un reper ortonormat

Dacă este dat un [reper ortonormat $O_{e_1 e_2 \ldots e_n}$](/geometrie/afine/definitii.md#reper-ortonormat) a lui $\mathcal{A}$, atunci distanța $\rho(A, B)$ de la punctul $A(a_1, \ldots, a_n)$ la punctul $B(b_1, \ldots, b_n)$ se calculează prin formula:

$$
\rho(A, B) = \sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2 + \ldots + (b_n - a_n)^2}.
$$

## Vectorul de poziție {#vectorul-de-pozitie}

Pentru orice punct $M$ din $\mathcal{A}$, vectorul $\overrightarrow{OM}$ este numit **vectorul de poziție** (sau **raza de poziție**) al lui $M$ în raport cu originea $O$ a reperului. Dacă $\overrightarrow{OM} = x_1 e_1 + x_2 e_2 + \ldots + x_n e_n$, atunci scalarii $x_1, x_2, \ldots, x_n$ se numesc **coordonate** ale punctului $M$ în reperul $O_{e_1 \ldots e_n}$.

Dacă $M$ are coordonatele $x_1, x_2, \ldots, x_n$ într-un reper, se va nota $M(x_1, x_2, \ldots, x_n)$.

## Împărțirea unui segment într-un raport dat {#impartire-segment-raport}

Fie $M_1, M_2 \in \mathcal{A}, M_1 \neq M_2$. Se spune că un punct $M \in \mathcal{A}$ împarte segmentul $[M_1, M_2]$ în raportul $\lambda_R$ dacă:

$$
\overrightarrow{M_1M} = \lambda_R \overrightarrow{MM_2}.
$$

Dacă $\lambda_R = 1$, atunci $M$ este mijlocul segmentului $[M_1, M_2]$.

## Spațiu afin euclidian {#spatiu-afin-euclidian}

Un **spațiu afin euclidian** este un spațiu afin $\mathcal{A}$ pentru care spațiul vectorial asociat $V$ este echipat cu un [produs scalar](/algebra-liniara/spatii-vectoriale/definitii-exemple/produs-scalar.md#definitie).

### Exemplu

#### Fie:

- $n \in \mathbb{N}_+$,
- $A = \mathbb{R}^{1, n}$ este un spațiu afin de direcție $V = \mathbb{R}^{1, n}$.

#### Dacă:

$$
x = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix};\quad
y = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix},
$$

#### Atunci:

$$
\langle x, y \rangle = \sum_{i=1}^n x_i y_i = x_1 y_1 + x_2 y_2 + \ldots + x_n y_n.
$$

## Notă

- **Clarificări terminologice:**

  - **Puncte**: Elemente ale spațiului afin $\mathcal{A}$.
  - **Vectori**: Elemente ale spațiului vectorial $V$ asociat.
  - **Vectorul de poziție**: În contextul în care $V$ și $\mathcal{A}$ sunt identificate ca mulțimi, vectorul de poziție al punctului $A$ este $\overrightarrow{OA} = A - O$, unde $O$ este un punct fix ales ca origine.

- **Relația dintre $\mathcal{A}$ și $V$:**
  - Spațiul afin $\mathcal{A}$ nu are structură de spațiu vectorial, dar diferența dintre două puncte din $\mathcal{A}$ este un vector din $V$.
  - Adunarea unui vector din $V$ la un punct din $\mathcal{A}$ conduce la un alt punct din $\mathcal{A}$.
    $$
