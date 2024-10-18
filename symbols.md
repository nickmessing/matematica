# Notații și Simboluri Utilizate

Această pagină explică notațiile, simbolurile și semnele matematice utilizate în articolele noastre. Aceste explicații vă vor ajuta să înțelegeți mai bine conceptele și formulele prezentate. Documentul va fi extins pe măsură ce noi articole sunt adăugate.

## Notații Generale

#### **$\mathbb{R}$** {#multimea-numerelor-reale}

Mulțimea numerelor reale. Pentru detalii, vedeți [Numere Reale și Mulțimi de Numere](/teorie/numere-reale.md).

#### **$\mathbb{C}$** {#multimea-numerelor-complexe}

Mulțimea numerelor complexe.

#### **$\mathbb{N}$** {#multimea-numerelor-naturale}

Mulțimea numerelor naturale.

#### **$\mathbb{N}_+$** {#multimea-numerelor-naturale-pozitive}

Mulțimea numerelor naturale strict pozitive.

#### **$n$** {#numar-natural}

Un număr natural, de obicei reprezentând dimensiunea unui [spațiu vectorial](/algebra/spatii-vectoriale/).

## Alte Simboluri și Notații

#### **$\forall$** {#pentru-orice}

Simbolul "pentru orice". Pentru mai multe despre [cuantificatori](/teorie/logica-matematica#cuantificatori), consultați secțiunea dedicată.

#### **$\exists$** {#exista}

Simbolul "există".

## Spații Vectoriale Specifice

#### **$\mathbb{R}^n$** {#spatiul-vectorial-rn}

Spațiul vectorial de dimensiune $n$, format din multiplete ordonate de $n$ numere reale $(x_1, x_2, \ldots, x_n)$, unde $x_1, x_2, \ldots, x_n \in \mathbb{R}$. Este unul dintre cele mai utilizate exemple de spații vectoriale în matematică și fizică.

#### **$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$** {#baza-standard-rn}

Baza standard a spațiului $\mathbb{R}^n$, definită ca:

$$
\mathbf{e}_1 = (1, 0, \ldots, 0), \quad \mathbf{e}_2 = (0, 1, \ldots, 0), \ldots, \quad \mathbf{e}_n = (0, 0, \ldots, 1).
$$

#### **$x = (x_1, x_2, \ldots, x_n)$** {#vector-rn}

Un vector din spațiul $\mathbb{R}^n$ reprezentat de $n$ coordonate reale $(x_1, x_2, \ldots, x_n)$.

#### **$||x||$** {#norma-vector-rn}

Norma (lungimea) unui vector $x = (x_1, x_2, \ldots, x_n)$ din $\mathbb{R}^n$, definită ca:

$$
||x|| = \sqrt{x_1^2 + x_2^2 + \ldots + x_n^2}.
$$

#### **$d(x, y)$** {#distanta-vector-rn}

Distanța dintre doi vectori $x = (x_1, x_2, \ldots, x_n)$ și $y = (y_1, y_2, \ldots, y_n)$ din $\mathbb{R}^n$, definită prin:

$$
d(x, y) = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \ldots + (x_n - y_n)^2}.
$$

## Spații și Structuri Matematice

### Spații Afine și Vectoriale

#### **$A$** {#spatiu-afin}

Un [**spațiu afin**](/geometrie/spatii-afine), o mulțime de puncte.

#### **$V$** {#spatiu-vectorial}

Un [**spațiu vectorial**](/symbols#spatiu-vectorial) asociat cu spațiul afin [$A$](#spatiu-afin), numit **spațiu vectorial director** sau **spațiu vectorial asociat**.

#### **$\dim(A)$** {#dimensiunea-spatiului-afin}

Dimensiunea spațiului afin [$A$](#spatiu-afin), egală cu dimensiunea spațiului vectorial [$V$](#spatiu-vectorial).

#### **$\dim(V)$** {#dimensiunea-spatiului-vectorial}

Dimensiunea spațiului vectorial [$V$](#spatiu-vectorial).

### Puncte și Vectori

#### **$O$** {#originea}

Un punct fix din [$A$](#spatiu-afin), numit **originea** unui [reper afin](#reper-afin).

#### **$M, N, P, Q$** {#puncte}

Puncte din spațiul afin [$A$](#spatiu-afin).

#### **$\mathbf{v}, \mathbf{w}, \mathbf{u}$** {#vectori}

Vectori din spațiul vectorial [$V$](#spatiu-vectorial).

#### **$\overrightarrow{AB}$** {#vector-director}

Vectorul de la punctul $A$ la punctul $B$ în [$V$](#spatiu-vectorial).

#### **$\overrightarrow{OM}$** {#vector-de-pozitie}

**Vectorul de poziție** al punctului [$M$](#puncte) față de originea [$O$](#originea).

#### **$\mathbf{0}$** {#vectorul-zero}

Vectorul zero din [$V$](#spatiu-vectorial), având toate componentele zero.

### Baze și Coordonate

#### **$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$** {#baza-ordonata}

O **bază ordonată** de vectori din [$V$](#spatiu-vectorial).

#### **$O_{\mathbf{e}_1 \mathbf{e}_2 \ldots \mathbf{e}_n}$** {#reper-afin}

Notarea unui **[reper afin](/geometrie/spatii-afine#sisteme-de-coordonate-afine-repere-afine)** cu originea în [$O$](#originea) și baza [$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$](#baza-ordonata).

#### **$M(x_1, x_2, \ldots, x_n)$** {#coordonatele-punctului}

Un punct [$M$](#puncte) din [$A$](#spatiu-afin) cu **coordonatele** $(x_1, x_2, \ldots, x_n)$ în reperul ales.

#### **$x_i$** {#coordonatele}

Coordonatele reale ale punctului [$M$](#puncte) sau componentele vectorului [$\overrightarrow{OM}$](#vector-de-pozitie) în baza [$\mathbf{e}_i$](#baza-ordonata).

#### **$\mathbf{x}$** {#vectorul-x}

Un vector reprezentat prin coordonatele sale în baza aleasă, $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$.

## Operații și Aplicații

### Aplicații între Spații

#### **$\varphi: A \times A \to V$** {#aplicatia-phi}

O aplicație care asociază fiecărei perechi de puncte $(A, B)$ vectorul [$\overrightarrow{AB}$](#vector-director).

#### **$\overrightarrow{AB} = \mathbf{v}$** {#vector-deplasare}

Relația care exprimă vectorul dintre două puncte $A$ și $B$ ca fiind vectorul [$\mathbf{v}$](#vectori) din [$V$](#spatiu-vectorial).

### Operații cu Vectori și Puncte

#### **Translatarea unui punct** {#translatare-punct}

Operația de a adăuga un vector [$\mathbf{v}$](#vectori) la un punct [$A$](#puncte) pentru a obține un nou punct $B = A + \mathbf{v}$.

#### **Regula triunghiului** {#regula-triunghiului}

Relația $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ pentru orice puncte [$A$](#puncte), [$B$](#puncte), [$C$](#puncte) din [$A$](#spatiu-afin).

#### **Opoziția vectorilor** {#vectori-opusi}

Relația $\overrightarrow{AB} = -\overrightarrow{BA}$, care arată că vectorul de la $A$ la $B$ este opusul vectorului de la $B$ la $A$.

#### **Coordonatele vectorului dintre două puncte** {#coordonate-vector}

$\overrightarrow{MN} = (y_1 - x_1) \mathbf{e}_1 + \ldots + (y_n - x_n) \mathbf{e}_n$, unde [$M$](#puncte) $(x_1, \ldots, x_n)$ și $N(y_1, \ldots, y_n)$.

### Împărțirea unui Segment

#### **Raportul de împărțire $\lambda$** {#raport-impartire}

Un scalar real care indică modul în care un punct $M$ împarte segmentul $[M_1, M_2]$, definit prin $\overrightarrow{M_1 M} = \lambda \overrightarrow{M M_2}$.

#### **Formula pentru coordonate în împărțirea segmentului** {#formula-impartire}

- **În plan ($n = 2$)**:
  $x = \dfrac{x_1 + \lambda x_2}{1 + \lambda}$, $y = \dfrac{y_1 + \lambda y_2}{1 + \lambda}$.

- **În spațiu ($n = 3$)**:
  $x = \dfrac{x_1 + \lambda x_2}{1 + \lambda}$, $y = \dfrac{y_1 + \lambda y_2}{1 + \lambda}$, $z = \dfrac{z_1 + \lambda z_2}{1 + \lambda}$.

## Produsul Scalar și Spații Euclidiene

### Produsul Scalar

#### **$(\mathbf{x}, \mathbf{y})$** {#produs-scalar}

**Produsul scalar** dintre vectorii $\mathbf{x}$ și $\mathbf{y}$, definit prin:

$$
(\mathbf{x}, \mathbf{y}) = ||\mathbf{x}|| \cdot ||\mathbf{y}|| \cdot \cos(\theta),
$$

unde $||\mathbf{x}||$ este norma vectorului $\mathbf{x}$ și $\theta$ este unghiul dintre $\mathbf{x}$ și $\mathbf{y}$.

#### **Norma unui vector** {#norma-vector}

$||\mathbf{x}|| = \sqrt{(\mathbf{x}, \mathbf{x})}$, lungimea vectorului $\mathbf{x}$.

#### **$\theta$** {#unghi}

Unghiul dintre doi vectori în spațiul euclidian.

#### **Proprietăți ale produsului scalar** {#proprietati-produs-scalar}

- **Pozitivitatea definită**:
  $(\mathbf{x}, \mathbf{x}) \geq 0$, cu egalitate doar dacă $\mathbf{x} = \mathbf{0}$.

- **Simetria**:
  $(\mathbf{x}, \mathbf{y}) = (\mathbf{y}, \mathbf{x})$.

- **Biliniaritatea**:
  $(\mathbf{x} + \mathbf{y}, \mathbf{z}) = (\mathbf{x}, \mathbf{z}) + (\mathbf{y}, \mathbf{z})$.

- **Omogenitatea**:
  $(\alpha \mathbf{x}, \mathbf{y}) = \alpha (\mathbf{x}, \mathbf{y})$.

### Spații Euclidiene și Repere Ortonormate

#### **Spațiu vectorial euclidian** {#spatiu-vectorial-euclidian}

Un spațiu vectorial [$V$](#spatiu-vectorial) echipat cu un [produs scalar](#produs-scalar).

#### **Reper ortonormat** {#reper-ortonormat}

Un reper în care baza este ortonormată, adică vectorii bazei sunt ortogonali și au lungime 1.

Proprietatea bazei ortonormate:

$$
(\mathbf{e}_i, \mathbf{e}_j) = \delta_{ij} = \begin{cases} 1, & \text{dacă } i = j, \\ 0, & \text{dacă } i \ne j. \end{cases}
$$

#### **$\delta_{ij}$** {#delta-kronecker}

Funcția delta a lui Kronecker.

### Distanța între Puncte

#### **$\rho(A, B)$** {#distanta}

**Distanța** dintre punctele $A$ și $B$ în spațiul afin euclidian, definită prin:

$$
\rho(A, B) = ||\overrightarrow{AB}|| = \sqrt{(\overrightarrow{AB}, \overrightarrow{AB})}.
$$

#### **Formula distanței în coordonate** {#formula-distanta}

$$
\rho(A, B) = \sqrt{(b_1 - a_1)^2 + \ldots + (b_n - a_n)^2},
$$

unde $A(a_1, \ldots, a_n)$ și $B(b_1, \ldots, b_n)$.

#### **Inegalitatea triunghiului** {#inegalitatea-triunghiului}

Pentru orice $A, B, C \in A$,

$$
\rho(A, C) \leq \rho(A, B) + \rho(B, C).
$$

## Forme Pătratice și Matrice Asociate

### Forme Pătratice

#### **$Q: V \to \mathbb{R}$** {#forma-patratica}

O [**formă pătratică**](/algebra/matricea-formei-patratice#definitia-formei-patratice) pe spațiul vectorial [$V$](#spatiu-vectorial), funcție care asociază fiecărui vector $\mathbf{x} \in V$ un număr real $Q(\mathbf{x})$.

#### **Formă biliniară asociată $B$** {#forma-bilinara}

O funcție $B: V \times V \to \mathbb{R}$ astfel încât $Q(\mathbf{x}) = B(\mathbf{x}, \mathbf{x})$.

#### **Omogenitatea de gradul doi** {#omogenitate}

Proprietatea că pentru orice scalar $\alpha$, $Q(\alpha \mathbf{x}) = \alpha^2 Q(\mathbf{x})$.

### Matricea Formei Pătratice

#### **$A = (a_{ij})$** {#matricea-formei-patratice-1}

**Matricea simetrică** asociată formei pătratice [$Q$](#forma-patratica) în baza aleasă.

#### **Elementele matricei** {#elementele-matricei}

$a_{ij} = B(\mathbf{e}_i, \mathbf{e}_j)$.

#### **Expresia formei pătratice în coordonate** {#expresia-formei-patratice}

$$
Q(\mathbf{x}) = \mathbf{x}^\top A \mathbf{x} = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j.
$$

#### **$\mathbf{x}^\top$** {#vector-transpus}

Transpusa vectorului $\mathbf{x}$ (vector linie).

### Schimbarea Bazei și Diagonalizarea

#### **Matricea de trecere $P$** {#matricea-de-trecere}

Matricea care transformă coordonatele vectorilor la schimbarea bazei.

#### **Transformarea matricei formei pătratice** {#transformare-matrice}

$$
A' = P^\top A P,
$$

unde $A'$ este matricea în baza nouă.

#### **Diagonalizarea** {#diagonalizare}

Procesul de a găsi o bază în care matricea $A$ devine diagonală, folosind valorile proprii și vectorii proprii.

#### **Valorile proprii $\lambda_i$** {#valori-proprii}

Soluțiile ecuației caracteristice $\det(A - \lambda I) = 0$.

#### **Vectorii proprii $\mathbf{v}_i$** {#vectori-proprii}

Vectori nenuli care satisfac $A\mathbf{v}_i = \lambda_i \mathbf{v}_i$.

#### **Matricea diagonală $D$** {#matrice-diagonala}

Matricea conținând valorile proprii pe diagonală.

#### **Forma canonică a formei pătratice** {#forma-canonica}

$$
Q(\mathbf{x}) = \lambda_1 {x'_1}^2 + \lambda_2 {x'_2}^2 + \ldots + \lambda_n {x'_n}^2,
$$

unde $\mathbf{x}' = P^{-1} \mathbf{x}$.

### Semidefinitatea Formei Pătratice

#### **Pozitiv definită** {#pozitiv-definita}

Dacă toate valorile proprii $\lambda_i > 0$.

#### **Negativ definită** {#negativ-definita}

Dacă toate valorile proprii $\lambda_i < 0$.

#### **Semidefinită pozitiv** {#semidefinita-pozitiv}

Dacă toate $\lambda_i \geq 0$ și cel puțin un $\lambda_i = 0$.

#### **Indefinită** {#indefinita}

Dacă valorile proprii au semne diferite.

## Alte Simboluri și Notații

#### **$\alpha, \beta, \gamma$** {#scalari}

Scalari reali sau parametri.

#### **$\sum$** {#suma}

Simbol de sumare, indicând adunarea mai multor termeni.

#### **$\prod$** {#produs}

Simbol de produs, indicând înmulțirea mai multor termeni.

#### **$\sqrt{\quad}$** {#radical}

Rădăcină pătrată.

#### **$\leq$, $\geq$** {#inegalitati}

Simbolurile "mai mic sau egal cu" și "mai mare sau egal cu".

#### **$<$, $>$** {#comparatie}

Simbolurile "mai mic decât" și "mai mare decât".

#### **$\in$** {#apartine}

Aparține; indică faptul că un element este membru al unei mulțimi.

#### **$\notin$** {#nu-apartine}

Nu aparține; indică faptul că un element nu este membru al unei mulțimi.

#### **$\cdot$** {#inmultire}

Simbolul înmulțirii.

#### **$^\top$** {#transpusa}

Simbolul transpusei unei matrice sau a unui vector.

#### **$| \ldots |$** {#modul-determinant}

Modulul unui număr sau determinantul unei matrice.

#### **$\det(A)$** {#determinant}

Determinantul matricei $A$.

#### **$I$** {#matrice-identitate}

Matricea identitate de dimensiune corespunzătoare.

#### **$\implies$** {#implicatie}

Simbol care indică implicația logică ("rezultă că").

#### **$\iff$** {#echivalenta}

Simbol care indică echivalența logică ("dacă și numai dacă").

## Concluzie

Această pagină de notații are scopul de a clarifica și explica simbolurile și semnele matematice utilizate în articolele noastre. Înțelegerea corectă a acestor notații este esențială pentru a aprofunda conceptele prezentate și pentru a putea aplica aceste cunoștințe în rezolvarea problemelor matematice. Pe măsură ce noi articole sunt adăugate, această listă va fi actualizată și extinsă.
