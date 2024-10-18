# Operații și Proprietăți în Spații Vectoriale

## Introducere

[**Spațiile vectoriale**](/algebra/spatii-vectoriale/) sunt structuri matematice fundamentale în algebră liniară, care permit operații precum adunarea vectorilor și înmulțirea vectorilor cu scalari. În această lecție, vom explora operațiile de bază și proprietățile spațiilor vectoriale, concentrându-ne pe conceptul de **combinație liniară**, precum și pe alte proprietăți esențiale precum dependența liniară, bazele și dimensiunea.

## Combinație Liniară

### Definiție

Fie $V$ un spațiu vectorial peste corpul $\mathbb{K}$ și fie $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \in V$ vectori. O **combinație liniară** a acestor vectori este un vector $\mathbf{v} \in V$ care poate fi scris sub forma:

$$
\mathbf{v} = \alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \ldots + \alpha_n \mathbf{v}_n,
$$

unde $\alpha_1, \alpha_2, \ldots, \alpha_n \in \mathbb{K}$ sunt scalari.

### Exemple

1. **Vectori în $\mathbb{R}^3$**

   Fie vectorii $\mathbf{v}_1 = (1, 0, 0)$, $\mathbf{v}_2 = (0, 1, 0)$ și $\mathbf{v}_3 = (0, 0, 1)$ din $\mathbb{R}^3$. Orice vector $\mathbf{v} = (x, y, z) \in \mathbb{R}^3$ poate fi exprimat ca o combinație liniară a acestor vectori:

   $$
   \mathbf{v} = x \mathbf{v}_1 + y \mathbf{v}_2 + z \mathbf{v}_3.
   $$

2. **Funcții Continui**

   Fie spațiul vectorial $C([a, b])$ al funcțiilor continue pe intervalul $[a, b]$ și funcțiile $f_1(x) = 1$, $f_2(x) = x$. O combinație liniară a acestor funcții este:

   $$
   f(x) = \alpha_1 f_1(x) + \alpha_2 f_2(x) = \alpha_1 + \alpha_2 x,
   $$

   unde $\alpha_1, \alpha_2 \in \mathbb{R}$.

### Proprietăți

- Setul tuturor combinațiilor liniare ale unui set de vectori formează un **subspațiu vectorial** al lui $V$.
- Dacă un vector poate fi exprimat ca o combinație liniară a altor vectori, atunci el aparține subspațiului generat de acei vectori.

### Notă

Pentru mai multe detalii despre [subspațiile vectoriale](/algebra/spatii-vectoriale/operatii.md#subspațiul-generat-anvelopa-liniară-a-unui-set-de-vectori), consultați secțiunea dedicată.

## Dependență și Independență Liniară

### Definiție

Un set de vectori $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ din $V$ este:

- **Liniar dependent** dacă există scalari $\alpha_1, \alpha_2, \ldots, \alpha_n$, nu toți nuli, astfel încât:

  $$
  \alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \ldots + \alpha_n \mathbf{v}_n = \mathbf{0}.
  $$

- **Liniar independent** dacă singura combinație liniară care dă vectorul zero este cea în care toți coeficienții sunt zero:

  $$
  \alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \ldots + \alpha_n \mathbf{v}_n = \mathbf{0} \implies \alpha_1 = \alpha_2 = \ldots = \alpha_n = 0.
  $$

### Exemple

1. **Vectori Liniar Dependenți în $\mathbb{R}^2$**

   Fie $\mathbf{v}_1 = (1, 2)$ și $\mathbf{v}_2 = (2, 4)$. Observăm că $\mathbf{v}_2 = 2 \mathbf{v}_1$, deci:

   $$
   2 \mathbf{v}_1 - \mathbf{v}_2 = \mathbf{0}.
   $$

   Prin urmare, vectorii $\mathbf{v}_1$ și $\mathbf{v}_2$ sunt liniar dependenți.

2. **Vectori Liniar Independenți în $\mathbb{R}^3$**

   Fie $\mathbf{v}_1 = (1, 0, 0)$, $\mathbf{v}_2 = (0, 1, 0)$ și $\mathbf{v}_3 = (0, 0, 1)$. Singura soluție pentru:

   $$
   \alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \alpha_3 \mathbf{v}_3 = \mathbf{0}
   $$

   este $\alpha_1 = \alpha_2 = \alpha_3 = 0$. Astfel, vectorii sunt liniar independenți.

### Metoda Determinării Dependenței Liniare prin Rangul Matricei

Pentru a determina dependența liniară a vectorilor, se poate utiliza [metoda Gauss de eliminare](/algebra/metoda-gauss.md) pentru a calcula rangul matricei formate din vectori. Dacă rangul este mai mic decât numărul de vectori, aceștia sunt liniar dependenți.

## Subspațiul Generat (Anvelopa Liniară) a unui Set de Vectori

### Definiție

Fie $V$ un spațiu vectorial peste corpul $\mathbb{K}$ și fie $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ un set de vectori din $V$. **Subspațiul generat** sau **anvelopa liniară** (notăm, **sg**) a acestor vectori este mulțimea tuturor combinațiilor liniare posibile ale lor:

$$
\text{sg}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n) = \left\{ \mathbf{v} \in V \mid \mathbf{v} = \sum_{i=1}^n \alpha_i \mathbf{v}_i, \ \alpha_i \in \mathbb{K} \right\}.
$$

Acest subspațiu este cel mai mic subspațiu vectorial al lui $V$ care conține vectorii $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$.

### Proprietăți

- **Subspațiu Vectorial**: $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n)$ este un subspațiu vectorial al lui $V$.
- **Închidere la Combinații Liniare**: Orice combinație liniară a vectorilor din $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n)$ este, de asemenea, în $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n)$.
- **Minimalitate**: Dacă $W$ este un subspațiu vectorial al lui $V$ care conține vectorii $\mathbf{v}_1, \ldots, \mathbf{v}_n$, atunci $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n) \subseteq W$.

### Exemple

1. **În $\mathbb{R}^2$**

   Fie vectorii $\mathbf{v}_1 = (1, 0)$ și $\mathbf{v}_2 = (0, 1)$. Atunci:

   $$
   \text{sg}(\mathbf{v}_1, \mathbf{v}_2) = \mathbb{R}^2.
   $$

   Orice vector din $\mathbb{R}^2$ poate fi exprimat ca o combinație liniară a lui $\mathbf{v}_1$ și $\mathbf{v}_2$.

2. **Vectori Coliniari în $\mathbb{R}^2$**

   Fie $\mathbf{v}_1 = (1, 2)$ și $\mathbf{v}_2 = (2, 4)$. Observăm că $\mathbf{v}_2 = 2\mathbf{v}_1$. Atunci:

   $$
   \text{sg}(\mathbf{v}_1, \mathbf{v}_2) = \left\{ \alpha \mathbf{v}_1 \mid \alpha \in \mathbb{R} \right\},
   $$

   care este o dreaptă prin origine în $\mathbb{R}^2$.

### Observații

- Dacă $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n) = V$, atunci se spune că vectorii $\mathbf{v}_1, \ldots, \mathbf{v}_n$ **generează** spațiul $V$.
- În cazul în care setul de vectori este liniar dependent, subspațiul generat poate fi de dimensiune mai mică decât numărul vectorilor.

## Bază și Dimensiune

### Definiție: Bază

Un set de vectori $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ din $V$ este o **bază** a spațiului vectorial $V$ dacă:

1. Vectorii sunt **liniar independenți**.
2. Spațiul generat al vectorilor este întregul spațiu $V$:

   $$
   V = \text{sg}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n).
   $$

### Definiție: Dimensiune

**Dimensiunea** unui spațiu vectorial $V$, notată $\dim V$, este numărul de vectori din orice bază a lui $V$.

### Proprietăți

- Toate bazele unui spațiu vectorial au același număr de elemente.
- Dacă $V$ are dimensiune finită, atunci orice set de vectori liniar independenți poate fi extins la o bază a lui $V$.

## Schimbarea Bazei și Matricea de Trecere

### Introducere

În studiul spațiilor vectoriale, **alegerea bazei** este esențială pentru reprezentarea vectorilor și efectuarea calculelor. Uneori, este necesar să schimbăm baza pentru a simplifica o problemă sau pentru a obține o perspectivă diferită. **Schimbarea bazei** presupune trecerea de la o bază la alta, iar **matricea de trecere** este instrumentul matematic care facilitează această tranziție.

### Coordonatele unui Vector în Diferite Baze

Fie $V$ un spațiu vectorial de dimensiune finită peste un corp $\mathbb{K}$, și fie:

- $B = \{\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n\}$ o bază a lui $V$.
- $B' = \{\mathbf{e}'_1, \mathbf{e}'_2, \ldots, \mathbf{e}'_n\}$ o altă bază a lui $V$.

Pentru orice vector $\mathbf{v} \in V$, putem scrie:

1. În baza $B$:

   $$
   \mathbf{v} = x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2 + \ldots + x_n \mathbf{e}_n,
   $$

   unde $[ \mathbf{v} ]_B = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$ sunt coordonatele lui $\mathbf{v}$ în baza $B$.

2. În baza $B'$:
   $$
   \mathbf{v} = x'_1 \mathbf{e}'_1 + x'_2 \mathbf{e}'_2 + \ldots + x'_n \mathbf{e}'_n,
   $$
   unde $[ \mathbf{v} ]_{B'} = \begin{pmatrix} x'_1 \\ x'_2 \\ \vdots \\ x'_n \end{pmatrix}$ sunt coordonatele lui $\mathbf{v}$ în baza $B'$.

### Matricea de Trecere

**Matricea de trecere** de la baza $B$ la baza $B'$, notată $P_{B \to B'}$, este matricea care transformă coordonatele unui vector din baza $B$ în coordonatele sale în baza $B'$.

Definiția matricei de trecere:

$$
P_{B \to B'} = \begin{pmatrix} [ \mathbf{e}_1 ]_{B'} & [ \mathbf{e}_2 ]_{B'} & \ldots & [ \mathbf{e}_n ]_{B'} \end{pmatrix},
$$

unde $[ \mathbf{e}_i ]_{B'}$ reprezintă coordonatele vectorului $\mathbf{e}_i$ în baza $B'$.

### Relația dintre Coordonatele Vectorilor

Coordonatele vectorului $\mathbf{v}$ în cele două baze sunt legate prin matricea de trecere:

$$
[ \mathbf{v} ]_{B'} = P_{B \to B'}^\top [ \mathbf{v} ]_B,
$$

unde $P_{B \to B'}^\top$ este transpusa matricei de trecere. Notăm că în unele convenții se utilizează direct matricea de trecere fără transpusa, în funcție de cum sunt reprezentați vectorii (coloană sau linie).

### Calculul Matricei de Trecere

Pentru a calcula matricea de trecere $P_{B \to B'}$, exprimăm fiecare vector din baza veche $B$ în funcție de vectorii din baza nouă $B'$:

$$
\mathbf{e}_i = a_{1i} \mathbf{e}'_1 + a_{2i} \mathbf{e}'_2 + \ldots + a_{ni} \mathbf{e}'_n,
$$

pentru $i = 1, 2, \ldots, n$. Coeficienții $a_{ji}$ sunt elementele matricei de trecere $P_{B \to B'}$.

Astfel, matricea de trecere este:

$$
P_{B \to B'} = \begin{pmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \ldots & a_{nn} \\
\end{pmatrix}.
$$

### Inversa Matricei de Trecere

Matricea de trecere de la baza $B'$ la baza $B$, notată $P_{B' \to B}$, este inversa matricei $P_{B \to B'}$:

$$
P_{B' \to B} = (P_{B \to B'})^{-1}.
$$

Aceasta înseamnă că putem trece coordonatele unui vector din baza $B'$ în baza $B$ folosind:

$$
[ \mathbf{v} ]_B = P_{B' \to B}^\top [ \mathbf{v} ]_{B'}.
$$

### Exemple

#### Exemplul 1: Schimbarea bazei în $\mathbb{R}^2$

Fie spațiul vectorial $\mathbb{R}^2$ și bazele:

- Baza standard $B = \{ \mathbf{e}_1, \mathbf{e}_2 \}$, unde $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ și $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

- Baza $B' = \{ \mathbf{e}'_1, \mathbf{e}'_2 \}$, cu $\mathbf{e}'_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ și $\mathbf{e}'_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.

**Pasul 1:** Exprimăm vectorii din baza veche $B$ în baza nouă $B'$.

Să găsim coeficienții $a_{ji}$ astfel încât:

1. $\mathbf{e}_1 = a_{11} \mathbf{e}'_1 + a_{21} \mathbf{e}'_2$.

2. $\mathbf{e}_2 = a_{12} \mathbf{e}'_1 + a_{22} \mathbf{e}'_2$.

Pentru $\mathbf{e}_1$:

$$
\begin{cases}
1 = 2a_{11} - a_{21} \\
0 = a_{11} + a_{21}
\end{cases}
$$

Rezolvăm sistemul:

Din a doua ecuație:

$$
a_{21} = -a_{11}
$$

Înlocuim în prima ecuație:

$$
1 = 2a_{11} - (-a_{11}) \implies 1 = 2a_{11} + a_{11} \implies 1 = 3a_{11} \implies a_{11} = \dfrac{1}{3}
$$

Deci $a_{21} = -\dfrac{1}{3}$.

Pentru $\mathbf{e}_2$:

$$
\begin{cases}
0 = 2a_{12} - a_{22} \\
1 = a_{12} + a_{22}
\end{cases}
$$

Din a doua ecuație:

$$
a_{22} = 1 - a_{12}
$$

Înlocuim în prima ecuație:

$$
0 = 2a_{12} - (1 - a_{12}) \implies 0 = 2a_{12} -1 + a_{12} \implies 0 = 3a_{12} -1 \implies a_{12} = \dfrac{1}{3}
$$

Deci $a_{22} = 1 - \dfrac{1}{3} = \dfrac{2}{3}$.

**Pasul 2:** Matricea de trecere este:

$$
P_{B \to B'} = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{pmatrix} = \begin{pmatrix}
\dfrac{1}{3} & \dfrac{1}{3} \\
-\dfrac{1}{3} & \dfrac{2}{3} \\
\end{pmatrix}
$$

**Pasul 3:** Pentru a găsi coordonatele unui vector $\mathbf{v}$ în baza $B'$, înmulțim:

$$
[ \mathbf{v} ]_{B'} = P_{B \to B'}^\top [ \mathbf{v} ]_B
$$

#### Exemplul 2: Schimbarea bazei în $\mathbb{R}^3$

Fie spațiul vectorial $\mathbb{R}^3$ și bazele:

- Baza standard $B = \{ \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 \}$.

- Baza $B'$ definită prin vectorii:

  $$
  \mathbf{e}'_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \mathbf{e}'_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad \mathbf{e}'_3 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}
  $$

Calculul matricei de trecere se face similar, exprimând fiecare vector al bazei vechi în baza nouă.

### Proprietăți ale Matricei de Trecere

- **Inversabilitate**: Matricea de trecere $P_{B \to B'}$ este inversabilă, deoarece bazele $B$ și $B'$ sunt bazele aceluiași spațiu vectorial de dimensiune finită.

- **Compoziția Matriceilor de Trecere**: Dacă avem trei baze $B$, $B'$, $B''$, atunci:

  $$
  P_{B \to B''} = P_{B' \to B''} P_{B \to B'}
  $$

### Schimbarea Matricei unei Aplicații Liniare

Dacă $T: V \to V$ este o aplicație liniară, atunci matricea sa în baza $B$ este $[T]_B$, iar în baza $B'$ este $[T]_{B'}$.

Relația dintre aceste matrici este:

$$
[T]_{B'} = P_{B \to B'}^{-1} [T]_B P_{B \to B'}
$$

Această relație este utilă pentru diagonalizarea matricelor și pentru simplificarea formelor aplicațiilor liniare.

### Concluzie

Schimbarea bazei și utilizarea matricei de trecere sunt instrumente esențiale în algebră liniară, permițând analiza și simplificarea problemelor prin alegerea bazelor potrivite. Înțelegerea acestor concepte facilitează studiul aplicațiilor liniare, diagonalizarea matricelor și multe alte aspecte ale matematicii avansate.

---

## Înmulțirea Matricelor

### Introducere

Înmulțirea matricelor este o operație fundamentală în algebră liniară, cu aplicații în diverse domenii precum fizica, ingineria și informatica. Această operație permite compunerea aplicațiilor liniare și rezolvarea sistemelor de ecuații liniare.

### Definiția Înmulțirii Matricelor

Fie două matrice $A \in \mathbb{K}^{m \times n}$ și $B \in \mathbb{K}^{n \times p}$, unde $\mathbb{K}$ este un corp (de obicei $\mathbb{R}$ sau $\mathbb{C}$). **Produsul matricial** $C = A \cdot B$ este o matrice $C \in \mathbb{K}^{m \times p}$, definită prin:

$$
C_{ij} = \sum_{k=1}^{n} A_{ik} \cdot B_{kj},
$$

pentru $i = 1, 2, \ldots, m$ și $j = 1, 2, \ldots, p$.

### Proprietăți ale Înmulțirii Matricelor

1. **Asociativitatea**:

   $$
   (A \cdot B) \cdot C = A \cdot (B \cdot C),
   $$

   când dimensiunile matricelor permit efectuarea înmulțirilor.

2. **Distributivitatea**:

   - **Față de adunare la stânga**:

     $$
     A \cdot (B + C) = A \cdot B + A \cdot C.
     $$

   - **Față de adunare la dreapta**:

     $$
     (A + B) \cdot C = A \cdot C + B \cdot C.
     $$

3. **Necomutativitatea**:

   În general, $A \cdot B \ne B \cdot A$. Înmulțirea matricelor nu este comutativă.

4. **Matricea Identitate**:

   Există o matrice identitate $I_n \in \mathbb{K}^{n \times n}$, astfel încât pentru orice matrice $A \in \mathbb{K}^{n \times n}$:

   $$
   A \cdot I_n = I_n \cdot A = A.
   $$

### Exemple

#### Exemplul 1: Înmulțirea a două matrice compatibile

Fie:

$$
A = \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix}, \quad
B = \begin{pmatrix}
5 & 6 \\
7 & 8 \\
\end{pmatrix}.
$$

Calculăm $C = A \cdot B$:

$$
C_{11} = 1 \cdot 5 + 2 \cdot 7 = 5 + 14 = 19, \quad
C_{12} = 1 \cdot 6 + 2 \cdot 8 = 6 + 16 = 22, \\
C_{21} = 3 \cdot 5 + 4 \cdot 7 = 15 + 28 = 43, \quad
C_{22} = 3 \cdot 6 + 4 \cdot 8 = 18 + 32 = 50.
$$

Deci:

$$
C = A \cdot B = \begin{pmatrix}
19 & 22 \\
43 & 50 \\
\end{pmatrix}.
$$

#### Exemplul 2: Înmulțirea unei matrici $3 \times 2$ cu o matrice $2 \times 3$

Fie:

$$
A = \begin{pmatrix}
1 & 4 \\
2 & 5 \\
3 & 6 \\
\end{pmatrix}, \quad
B = \begin{pmatrix}
7 & 8 & 9 \\
10 & 11 & 12 \\
\end{pmatrix}.
$$

Calculăm $C = A \cdot B$, unde $C$ va fi o matrice $3 \times 3$.

Calculăm elementele lui $C$:

- $C_{11} = 1 \cdot 7 + 4 \cdot 10 = 7 + 40 = 47$
- $C_{12} = 1 \cdot 8 + 4 \cdot 11 = 8 + 44 = 52$
- $C_{13} = 1 \cdot 9 + 4 \cdot 12 = 9 + 48 = 57$

- $C_{21} = 2 \cdot 7 + 5 \cdot 10 = 14 + 50 = 64$
- $C_{22} = 2 \cdot 8 + 5 \cdot 11 = 16 + 55 = 71$
- $C_{23} = 2 \cdot 9 + 5 \cdot 12 = 18 + 60 = 78$

- $C_{31} = 3 \cdot 7 + 6 \cdot 10 = 21 + 60 = 81$
- $C_{32} = 3 \cdot 8 + 6 \cdot 11 = 24 + 66 = 90$
- $C_{33} = 3 \cdot 9 + 6 \cdot 12 = 27 + 72 = 99$

Astfel:

$$
C = A \cdot B = \begin{pmatrix}
47 & 52 & 57 \\
64 & 71 & 78 \\
81 & 90 & 99 \\
\end{pmatrix}.
$$

### Interpretarea Înmulțirii Matricelor

Înmulțirea matricelor poate fi interpretată în termeni de compunere de aplicații liniare. Dacă $A$ reprezintă matricea unei aplicații liniare $f: \mathbb{K}^n \to \mathbb{K}^m$, iar $B$ reprezintă matricea unei aplicații liniare $g: \mathbb{K}^p \to \mathbb{K}^n$, atunci produsul $A \cdot B$ reprezintă matricea compunerii $f \circ g: \mathbb{K}^p \to \mathbb{K}^m$.

### Proprietăți Suplimentare

- **Transpusa unui produs**:

  $$
  (A \cdot B)^\top = B^\top \cdot A^\top.
  $$

- **Determinantul unui produs de matrici pătratice**:

  Dacă $A$ și $B$ sunt matrici $n \times n$, atunci:

  $$
  \det(A \cdot B) = \det(A) \cdot \det(B).
  $$

- **Inversa unui produs de matrici inversabile**:

  Dacă $A$ și $B$ sunt matrici pătratice inversabile, atunci:

  $$
  (A \cdot B)^{-1} = B^{-1} \cdot A^{-1}.
  $$

### Cazuri Particulare

- **Înmulțirea cu un scalar**:

  Dacă $k \in \mathbb{K}$ și $A$ este o matrice, atunci $kA$ este matricea obținută prin înmulțirea fiecărui element al lui $A$ cu scalarul $k$.

- **Înmulțirea element cu element (Hadamard)**:

  Aceasta nu este aceeași cu înmulțirea matricială standard. Pentru matrici de aceeași dimensiune, produsul Hadamard $A \circ B$ este matricea obținută prin înmulțirea element cu element:

  $$
  (A \circ B)_{ij} = A_{ij} \cdot B_{ij}.
  $$

### Avertismente

- Înmulțirea matricelor nu este comutativă în general. Adică, chiar dacă $A \cdot B$ și $B \cdot A$ sunt definite, în general $A \cdot B \ne B \cdot A$.
- Pentru ca produsul $A \cdot B$ să fie definit, numărul de coloane al lui $A$ trebuie să fie egal cu numărul de linii al lui $B$.

### Aplicarea Înmulțirii Matricelor în Sisteme de Ecuații Liniare

Sistemele de ecuații liniare pot fi reprezentate în formă matricială $A \cdot \mathbf{x} = \mathbf{b}$, unde $A$ este matricea coeficienților, $\mathbf{x}$ este vectorul necunoscutelor, iar $\mathbf{b}$ este vectorul termenilor liberi. Înmulțirea matricelor permite utilizarea algoritmilor și a metodelor numerice pentru rezolvarea acestor sisteme.

### Concluzie

Înmulțirea matricelor este o operație esențială în algebră liniară, cu implicații profunde în matematică și aplicațiile sale. Înțelegerea proprietăților și a modului de calcul al produsului matricial este fundamentală pentru studiul subiectelor avansate precum diagonalizarea matricelor, transformări liniare și analiza numerică.

---

## Concluzie

Înțelegerea operațiilor și proprietăților spațiilor vectoriale este esențială pentru studiul algebrei liniare și al matematicii superioare. Combinațiile liniare, dependența și independența liniară, bazele și dimensiunea sunt concepte fundamentale care permit analiza și înțelegerea profundă a structurilor liniare.
