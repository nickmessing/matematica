# Definiții {#definitii}

Fie $V$ un [spațiu vectorial peste $\mathbb{R}$](./spatii-vectoriale-peste-r.md), iar $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ ($n \in \mathbb{N}_+$) vectori din $V$.

## Combinație Liniară {#combinatie-liniara}

$\forall\ \mathbf{x} \in V$ care poate fi scris sub forma:

$$
\mathbf{x} = \alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \dotsb + \alpha_n \mathbf{v}_n = \sum_{i=1}^n \alpha_i \mathbf{v}_i,
$$

se numește **combinație liniară** a vectorilor $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$.

Scalarii $\alpha_1, \alpha_2, \dotsc, \alpha_n \in \mathbb{R}$ se numesc **coeficienți**.

## Sistem de generatori {#sistem-generatori}

Dacă $\forall\ \mathbf{x} \in V$ poate fi scris ca o combinație liniară a unui șir finit de vectori $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$, atunci $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ se numesc **sistem de generatori** pentru $V$.

## Sistem liniar dependent {#sistem-liniar-dependent}

Dacă există scalari $\alpha_1, \alpha_2, \dotsc, \alpha_n$, nu toți nuli, astfel încât:

$$
\sum_{i=1}^n \alpha_i \mathbf{v}_i = 0
$$

atunci vectorii $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ se numesc **liniar dependenți**.

##

## Sistem liniar independent {#sistem-liniar-independent}

Dacă singura combinație liniară a vectorilor $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ care dă vectorul nul este cea trivială, adică:

$$
\sum_{i=1}^n \alpha_i \mathbf{v}_i = 0 \Rightarrow \alpha_1 = \alpha_2 = \dotsb = \alpha_n = 0
$$

atunci vectorii $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ se numesc **liniar independenți**.

### Cum se determină dacă un sistem de vectori este liniar independent?

Pentru a determina dacă un sistem de vectori $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$ este liniar independent, se verifică [determinantul](/algebra-liniara/matrice/matrice.md#determinant) matricei formate din vectorii respectivi. Dacă determinantul este nenul, atunci vectorii sunt liniar independenți.

#### Exemplu:

Fie vectorii $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ și $\mathbf{v}_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Pentru a verifica dacă acești vectori sunt liniar independenți, se formează matricea:

$$
\begin{pmatrix}
1 & 3 \\
2 & 4 \\
\end{pmatrix}
$$

și se calculează determinantul acesteia:

$$
\begin{vmatrix}
1 & 3 \\
2 & 4 \\
\end{vmatrix} = 1 \cdot 4 - 3 \cdot 2 = 4 - 6 = -2.
$$

Deoarece determinantul este nenul, vectorii $\mathbf{v}_1$ și $\mathbf{v}_2$ sunt liniar independenți.

## Bază {#baza}

Un [**sistem de generatori** $\mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n$](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#sistem-generatori) care este [**liniar independent**](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#sistem-liniar-independent) se numește **bază** pentru $V$.

## Baza canonică {#baza-canonica}

În spațiul vectorial $\mathbb{R}^n$, baza canonică este formată din vectorii

$$
\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix},
\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix},
\dotsc,
\mathbf{e}_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}
$$

care au componentele nule, cu excepția componentei de pe poziția $i$, care este egală cu 1.

## Dimensiune {#dimensiune}

**Dimensiunea** unui spațiu vectorial $V$, notată $\dim V$, este numărul de vectori dintr-o [**bază**](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#baza) a lui $V$.

Pentru un spațiu vectorial finit-dimensional, toate bazele sale au același număr finit de elemente. Astfel, dimensiunea este bine definită și reprezintă **numărul minim de vectori necesari pentru a genera spațiul** și **numărul maxim de vectori liniar independenți** din spațiu.

### Observații:

- Dacă $V$ admite o bază formată din $n$ vectori, atunci $\dim V = n$.
- **Egalitatea dimensiunilor:** Orice două baze ale aceluiași spațiu vectorial finit-dimensional au același număr de vectori.
- **Spațiu finit-dimensional:** Un spațiu vectorial este numit **finit-dimensional** dacă are o bază formată dintr-un număr finit de vectori. În caz contrar, este **infinit-dimensional**.

### Exemple:

1. **Spațiul $\mathbb{R}^n$:**

   - Baza canonică a spațiului $\mathbb{R}^n$ este formată din vectorii unitate $\mathbf{e}_1, \mathbf{e}_2, \dotsc, \mathbf{e}_n$.
   - **Dimensiunea:** $\dim \mathbb{R}^n = n$.

2. **Spațiul polinoamelor $P_n(\mathbb{R})$:**

   - Spațiul polinoamelor reale de grad cel mult $n$ are baza $\{1, x, x^2, \dotsc, x^n\}$.
   - **Dimensiunea:** $\dim P_n(\mathbb{R}) = n + 1$.

3. **Spațiul matricilor $\mathbb{R}^{m \times n}$:**

   - Spațiul tuturor matricilor reale cu $m$ linii și $n$ coloane are dimensiunea $m \times n$.
   - **Dimensiunea:** $\dim \mathbb{R}^{m \times n} = m \cdot n$.

4. **Spațiul funcțiilor continue $C[a, b]$:**

   - Este un spațiu vectorial infinit-dimensional, deoarece nu există un număr finit de funcții care să genereze toate funcțiile continue pe intervalul $[a, b]$.

### Proprietăți:

- **Adăugarea unui vector la bază:** Dacă se adaugă un vector la o bază, rezultatul nu mai este o bază, deoarece vectorii devin liniar dependenți.
- **Eliminarea unui vector din bază:** Dacă se elimină un vector dintr-o bază, mulțimea rămasă nu mai este un sistem de generatori pentru spațiu.
- **Subspații vectoriale:** Dimensiunea oricărui subspațiu al lui $V$ este mai mică sau egală cu dimensiunea lui $V$.

## Orientarea bazei {#orientarea-bazei}

Două baze ordonate $e = (e_1, e_2, \dotsc, e_n)$ și $e' = (e'_1, e'_2, \dotsc, e'_n)$ ale [spațiului vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) $V$ sunt **la fel orientate** dacă [determinantul](/algebra-liniara/matrice/matrice.md#determinant) [matricii de tranziție](/algebra-liniara/matrice/matrice-de-tranzitie.md#definitie) de la baza $e$ la baza $e'$ este pozitiv. În caz contrar, vom spune că bazele $e$ și $e'$ sunt **opus orientate**.

## Vector {#vector}

Un **vector** este un element al unui [spațiu vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) $V$.

## Scalar {#scalar}

Un **scalar** este un element al corpului $\mathbb{R}$ sau $\mathbb{C}$, care este folosit pentru a înmulți un vector dintr-un spațiu vectorial.
