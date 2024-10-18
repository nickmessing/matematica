# Matricea unei Forme Pătratice

## Introducere

[**Formele pătratice**](/algebra/matricea-formei-patratice#definitia-formei-patratice) sunt funcții algebrice care asociază un număr real fiecărui vector dintr-un [spațiu vectorial](/algebra/spatii-vectoriale/). Studiul formelor pătratice este esențial în algebră liniară și are aplicații în diverse domenii precum geometria, analiza numerică și fizica teoretică. În această lecție, vom explora modul în care o formă pătratică poate fi reprezentată prin intermediul unei matrice simetrice și cum se schimbă această reprezentare la schimbarea bazei.

## Definiția Formei Pătratice

Fie $V$ un [spațiu vectorial](/algebra/spatii-vectoriale/) de dimensiune finită peste corpul $\mathbb{R}$ sau $\mathbb{C}$. O **formă pătratică** pe $V$ este o funcție $Q: V \to \mathbb{R}$ definită prin:

$$
Q(\mathbf{x}) = B(\mathbf{x}, \mathbf{x}),
$$

unde $B$ este o [formă biliniară simetrică](/algebra/spatii-vectoriale/operatii.md#forma-bilinara) asociată.

### Proprietăți ale Formelor Pătratice

- **Omogenitate de gradul doi**: Pentru orice scalar $\alpha \in \mathbb{R}$ și vector $\mathbf{x} \in V$, avem:

  $$
  Q(\alpha \mathbf{x}) = \alpha^2 Q(\mathbf{x}).
  $$

- **Definită printr-o formă biliniară simetrică**: Există o formă biliniară simetrică $B: V \times V \to \mathbb{R}$ astfel încât:

  $$
  Q(\mathbf{x}) = B(\mathbf{x}, \mathbf{x}).
  $$

## Matricea unei Forme Pătratice

### Definiție

Fie $V$ un [spațiu vectorial](/algebra/spatii-vectoriale/) de dimensiune $n$, și fie $Q: V \to \mathbb{R}$ o formă pătratică. Alegând o [bază ordonată](/algebra/spatii-vectoriale/operatii.md#baza) $(\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n)$ a spațiului $V$, forma pătratică $Q$ poate fi reprezentată prin intermediul unei **matrice simetrice** $A \in \mathbb{R}^{n \times n}$ astfel încât pentru orice vector $\mathbf{x} \in V$ cu coordonatele $(x_1, x_2, \ldots, x_n)$, avem:

$$
Q(\mathbf{x}) = \mathbf{x}^\top A \mathbf{x},
$$

unde $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$.

### Obținerea Matricei Asociate

Elementele matricei $A = (a_{ij})$ se determină folosind forma biliniară asociată $B$:

$$
a_{ij} = B(\mathbf{e}_i, \mathbf{e}_j).
$$

Deoarece $B$ este simetrică ($B(\mathbf{e}_i, \mathbf{e}_j) = B(\mathbf{e}_j, \mathbf{e}_i)$), rezultă că matricea $A$ este simetrică ($a_{ij} = a_{ji}$).

### Expresia Formei Pătratice

Forma pătratică $Q$ se poate scrie explicit:

$$
Q(\mathbf{x}) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j.
$$

Aceasta este o sumă de termeni de gradul doi în variabilele $x_i$.

## Exemple

### Exemplul 1

Fie $V = \mathbb{R}^2$ și forma pătratică $Q: \mathbb{R}^2 \to \mathbb{R}$ definită prin:

$$
Q(x, y) = 3x^2 + 4xy + y^2.
$$

#### Matricea Asociată

Scriem $Q$ sub forma $\mathbf{x}^\top A \mathbf{x}$, unde $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$ și $A \in \mathbb{R}^{2 \times 2}$. Determinăm matricea $A$:

$$
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}.
$$

Din expresia lui $Q$:

$$
Q(x, y) = a_{11} x^2 + (a_{12} + a_{21}) x y + a_{22} y^2.
$$

Comparând coeficienții:

- $a_{11} = 3$
- $a_{12} + a_{21} = 4$
- $a_{22} = 1$

Deoarece $A$ este simetrică, $a_{12} = a_{21}$. Astfel:

$$
2a_{12} = 4 \implies a_{12} = 2.
$$

Matricea asociată este:

$$
A = \begin{pmatrix}
3 & 2 \\
2 & 1
\end{pmatrix}.
$$

### Exemplul 2

Fie $V = \mathbb{R}^3$ și forma pătratică:

$$
Q(x, y, z) = x^2 + 2y^2 + 3z^2 + 4xy + 2xz + 6yz.
$$

#### Matricea Asociată

Avem:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}.
$$

Comparăm coeficienții:

- $a_{11} = 1$
- $a_{22} = 2$
- $a_{33} = 3$
- $a_{12} + a_{21} = 4 \implies a_{12} = a_{21} = 2$
- $a_{13} + a_{31} = 2 \implies a_{13} = a_{31} = 1$
- $a_{23} + a_{32} = 6 \implies a_{23} = a_{32} = 3$

Matricea asociată este:

$$
A = \begin{pmatrix}
1 & 2 & 1 \\
2 & 2 & 3 \\
1 & 3 & 3
\end{pmatrix}.
$$

## Schimbarea Bazei și Matricea Formei Pătratice

### Teoremă

Dacă schimbăm baza spațiului vectorial $V$, matricea asociată formei pătratice $Q$ se transformă conform relației:

$$
A' = P^\top A P,
$$

unde:

- $A$ este matricea formei pătratice în baza veche.
- $A'$ este matricea în baza nouă.
- $P$ este [matricea de trecere](/algebra/spatii-vectoriale/operatii.md#matricea-de-trecere) de la baza veche la baza nouă.
- $P^\top$ este transpusa lui $P$.

### Diagonalizarea Formei Pătratice

Scopul diagonalizării este de a găsi o bază în care matricea formei pătratice este diagonală. Aceasta facilitează studiul formei pătratice și determinarea semnului acesteia.

#### Metodă

- **Calcularea valorilor proprii și a vectorilor proprii** ai matricei $A$.
- Construirea matricei $P$ având vectorii proprii ca coloane.
- Forma pătratică devine:

  $$
  Q(\mathbf{x}) = (\mathbf{x}')^\top D \mathbf{x}',
  $$

  unde $D$ este matricea diagonală conținând valorile proprii ale lui $A$.

## Forma Canonică a unei Forme Pătratice

Prin diagonalizare, orice formă pătratică poate fi adusă la o **formă canonică**:

$$
Q(\mathbf{x}) = \lambda_1 {x'_1}^2 + \lambda_2 {x'_2}^2 + \ldots + \lambda_n {x'_n}^2,
$$

unde $\mathbf{x}' = P^{-1} \mathbf{x}$ și $\lambda_i$ sunt valorile proprii ale matricei $A$.

## Concluzie

Reprezentarea formelor pătratice prin matrice simetrice și înțelegerea modului în care acestea se transformă la schimbarea bazei sunt esențiale pentru studiul aprofundat al algebrei liniare. Diagonalizarea formelor pătratice facilitează analiza acestora și are aplicații în diverse domenii ale matematicii și fizicii, precum analiza numerica și [mecanica cuantică](https://ro.wikipedia.org/wiki/Mecanic%C4%83_cuantic%C4%83).

## Legături Externe

- [Wikipedia - Formă Pătratică](https://ro.wikipedia.org/wiki/Form%C4%83_p%C4%83tratic%C4%83)
- [Matematică Online - Forme Pătratice](https://www.mateinfo.ro/forme-patratice)
