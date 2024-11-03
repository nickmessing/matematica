# Matrice {#matrice}

## Definiție

O **matrice** este o dispunere dreptunghiulară de numere, simboluri sau expresii, aranjate în rânduri și coloane și încadrate între paranteze pătrate sau rotunde. Matricele sunt utilizate în [algebră liniară](/algebra-liniara/index.md) pentru a reprezenta și manipula sisteme de ecuații liniare, transformări liniare și alte concepte matematice.

O matrice cu $m$ rânduri și $n$ coloane este denumită **matrice de ordin** $m \times n$ și este notată în general cu litere majuscule, cum ar fi $A$, $B$, $M$ etc.

Elementele unei matrice $A$ sunt notate cu $a_{ij}$, unde $i$ indică numărul rândului, iar $j$ numărul coloanei.

### Forma generală

O matrice $A$ de ordin $m \times n$ este de forma:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{pmatrix}.
$$

## Exemple

### Matrice linie

O matrice cu un singur rând ($1 \times n$):

$$
A = \begin{pmatrix}
2 & -1 & 4
\end{pmatrix}.
$$

## Matrice coloană

O matrice cu o singură coloană ($m \times 1$):

$$
B = \begin{pmatrix}
3 \\
0 \\
-5 \\
\end{pmatrix}.
$$

## Matrice pătrată

O matrice cu același număr de rânduri și coloane ($n \times n$):

$$
C = \begin{pmatrix}
1 & 0 & 2 \\
-1 & 3 & 4 \\
0 & 5 & -2 \\
\end{pmatrix}.
$$

## Determinantul unei matrice pătrate {#determinant}

### Definiție

**Determinantul** este un scalar asociat unei matrice pătrate, care oferă informații despre proprietățile matricei și ale transformării liniare pe care o reprezintă. Determinantul unei matrice $n \times n$ este notat $\det A$ sau $|A|$.

### Calculul determinantului

Pentru matrice de ordin mic, determinantul se calculează după următoarele formule:

#### Matrice $2 \times 2$

Pentru matricea:

$$
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{pmatrix},
$$

determinantul este:

$$
\det A = a_{11} a_{22} - a_{12} a_{21}.
$$

#### Matrice $3 \times 3$

Pentru matricea:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{pmatrix},
$$

determinantul se calculează folosind regula lui Sarrus sau dezvoltarea după un rând sau o coloană.

**Regula lui Sarrus:**

$$
\det A = a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} - (a_{13} a_{22} a_{31} + a_{11} a_{23} a_{32} + a_{12} a_{21} a_{33}).
$$

### Exemplu de calcul al determinantului

Calculați determinantul matricei:

$$
A = \begin{pmatrix}
2 & -1 & 3 \\
0 & 4 & -2 \\
1 & -3 & 5 \\
\end{pmatrix}.
$$

#### Soluție

Aplicăm regula lui Sarrus:

1. Calculăm suma produselor diagonale principale:

   $$
   \begin{align*}
   S_1 &= a_{11} a_{22} a_{33} = (2)(4)(5) = 40, \\
   S_2 &= a_{12} a_{23} a_{31} = (-1)(-2)(1) = 2, \\
   S_3 &= a_{13} a_{21} a_{32} = (3)(0)(-3) = 0.
   \end{align*}
   $$

   Suma totală:

   $$
   S = S_1 + S_2 + S_3 = 40 + 2 + 0 = 42.
   $$

2. Calculăm suma produselor diagonale secundare:

   $$
   \begin{align*}
   T_1 &= a_{13} a_{22} a_{31} = (3)(4)(1) = 12, \\
   T_2 &= a_{11} a_{23} a_{32} = (2)(-2)(-3) = 12, \\
   T_3 &= a_{12} a_{21} a_{33} = (-1)(0)(5) = 0.
   \end{align*}
   $$

   Suma totală:

   $$
   T = T_1 + T_2 + T_3 = 12 + 12 + 0 = 24.
   $$

3. Determinantul este diferența dintre cele două sume:

   $$
   \det A = S - T = 42 - 24 = 18.
   $$

**Rezultat:** Determinantul matricei $A$ este $\det A = 18$.

### Interpretare și proprietăți

- Dacă $\det A \neq 0$, atunci matricea $A$ este **inversabilă** (are inversă).
- Determinantul unei matrice reprezintă factorul de scalare al ariei (în $\mathbb{R}^2$) sau volumului (în $\mathbb{R}^3$) după aplicarea transformării liniare asociate matricei.
- Schimbarea a două rânduri sau coloane ale matricei schimbă semnul determinantului.
- Dacă matricea conține un rând sau o coloană de zerouri, determinantul este zero.
