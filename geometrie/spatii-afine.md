# Spații Afine și Sisteme de Coordonate Afine

## Introducere

Geometria afină este ramura matematicii care studiază proprietățile geometrice ce rămân neschimbate sub transformări afine. Aceasta nu se concentrează pe măsurarea distanțelor sau a unghiurilor, ci pe relațiile dintre puncte și vectori într-un spațiu fără origine privilegiată.

## Definiția Spațiului Afin

Un **spațiu afin** $A$ este o mulțime nevidă ale cărei elemente se numesc **puncte**, împreună cu:

- Un spațiu vectorial $V$, numit **spațiu vectorial director** sau **spațiu vectorial asociat**.
- O aplicație:

  $$
  \varphi: A \times A \to V, \quad (A, B) \mapsto \overrightarrow{AB},
  $$

  care asociază fiecărui bipunct $(A, B)$ vectorul $\overrightarrow{AB} \in V$, astfel încât sunt îndeplinite următoarele condiții:

### Condiții Fundamentale

1. **Există Unicitatea Translației**:

   Pentru orice punct $A \in A$ și orice vector $\mathbf{v} \in V$, există un unic punct $B \in A$ astfel încât:

   $$
   \overrightarrow{AB} = \mathbf{v}.
   $$

   Acest punct $B$ se notează $B = A + \mathbf{v}$ și se spune că se obține prin **translatarea** punctului $A$ cu vectorul $\mathbf{v}$.

2. **Regula Triunghiului**:

   Pentru orice puncte $A, B, C \in A$, se verifică:

   $$
   \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.
   $$

### Observații

- **Vectorul Zero**: Pentru orice punct $A \in A$, avem $\overrightarrow{AA} = \mathbf{0}$, unde $\mathbf{0}$ este vectorul zero din $V$.
- **Opoziția Vectorilor**: Pentru orice $A, B \in A$, se îndeplinește $\overrightarrow{AB} = -\overrightarrow{BA}$.
- **Bijectivitatea Aplicației**: Pentru un punct fix $A \in A$, aplicația $\varphi(A, \cdot): A \to V$ definită prin $B \mapsto \overrightarrow{AB}$ este bijectivă.

## Dimensiunea Spațiului Afin

Dimensiunea spațiului afin $A$ este egală cu dimensiunea spațiului vectorial director $V$:

$$
\dim(A) = \dim(V).
$$

Aceasta reflectă numărul de direcții independente în care ne putem deplasa în spațiul afin.

## Sisteme de Coordonate Afine (Repere Afine)

### Definiție

Un **reper afin** sau **sistem de coordonate afin** al spațiului $A$ este un cuplu format din:

1. **Originea Reperului**: Un punct fix $O \in A$.
2. **Baza Ordonată**: O bază ordonată $(\mathbf{e_1}, \mathbf{e_2}\, \ldots, \mathbf{e_n})$ a spațiului vectorial $V$.

Reperul se notează $O_{\mathbf{e_1} \mathbf{e_2} \ldots \mathbf{e_n}}$.

### Vectorul de Poziție și Coordonatele unui Punct

Pentru orice punct $M \in A$, **vectorul de poziție** $\overrightarrow{OM}$ se exprimă unic în baza $(\mathbf{e_1}, \mathbf{e_2}, \ldots, \mathbf{e_n})$:

$$
\overrightarrow{OM} = x_1 \mathbf{e_1} + x_2 \mathbf{e_2} + \ldots + x_n \mathbf{e_n}.
$$

Numerele reale $x_1, x_2, \ldots, x_n$ sunt **coordonatele** punctului $M$ în reperul ales și se notează $M(x_1, x_2, \ldots, x_n)$.

### Coordonatele unui Vector

Pentru un vector $\mathbf{v} \in V$, exprimarea în baza $(\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n)$ este:

$$
\mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + \ldots + v_n \mathbf{e}_n,
$$

unde $v_i$ sunt coordonatele vectorului $\mathbf{v}$.

## Teoremă: Coordonatele Vectorului Între Două Puncte

Într-un reper afin $O_{\mathbf{e}_1 \mathbf{e}_2 \ldots \mathbf{e}_n}$, pentru punctele $M(x_1, x_2, \ldots, x_n)$ și $N(y_1, y_2, \ldots, y_n)$, vectorul $\overrightarrow{MN}$ are coordonatele:

$$
\overrightarrow{MN} = (y_1 - x_1) \mathbf{e}_1 + (y_2 - x_2) \mathbf{e}_2 + \ldots + (y_n - x_n) \mathbf{e}_n.
$$

**Demonstrație:**

Avem:

$$
\overrightarrow{MN} = \overrightarrow{ON} - \overrightarrow{OM} = \sum_{i=1}^n (y_i - x_i) \mathbf{e}_i.
$$

Astfel, coordonatele vectorului $\overrightarrow{MN}$ sunt diferențele coordonatelor punctelor $N$ și $M$.

## Împărțirea unui Segment în Raport Dat

### Definiție

Fie $M_1, M_2 \in A$ două puncte distincte și $\lambda \in \mathbb{R}$. Punctul $M \in A$ împarte segmentul $[M_1, M_2]$ în raportul $\lambda$ dacă:

$$
\overrightarrow{M_1 M} = \lambda \overrightarrow{M M_2}.
$$

### Teoremă

1. **În Plan ($n = 2$)**

   Dacă $M_1(x_1, y_1)$, $M_2(x_2, y_2)$ și $M(x, y)$, atunci:

   $$
   x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad y = \frac{y_1 + \lambda y_2}{1 + \lambda}.
   $$

2. **În Spațiu ($n = 3$)**

   Pentru punctele $M_1(x_1, y_1, z_1)$, $M_2(x_2, y_2, z_2)$ și $M(x, y, z)$:

   $$
   x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad y = \frac{y_1 + \lambda y_2}{1 + \lambda}, \quad z = \frac{z_1 + \lambda z_2}{1 + \lambda}.
   $$

**Observație:**

- Dacă $\lambda = 1$, atunci $M$ este **mijlocul** segmentului $[M_1, M_2]$.

## Spațiul Afin Euclidian

Pentru a măsura distanțe și unghiuri în spațiul afin, echipăm spațiul vectorial director $V$ cu un **produs scalar**, transformându-l într-un **spațiu vectorial euclidian**. Astfel, spațiul afin $A$ devine un **spațiu afin euclidian**.

### Definiție: Produsul Scalar

Pentru doi vectori nenuli $\mathbf{x}, \mathbf{y} \in V$, **produsul scalar** se definește prin:

$$
(\mathbf{x}, \mathbf{y}) = ||\mathbf{x}|| \cdot ||\mathbf{y}|| \cdot \cos(\theta),
$$

unde:

- $||\mathbf{x}||$ este norma (lungimea) vectorului $\mathbf{x}$.
- $\theta$ este unghiul dintre vectorii $\mathbf{x}$ și $\mathbf{y}$.

Dacă cel puțin unul dintre vectori este nul, atunci:

$$
(\mathbf{x}, \mathbf{y}) = 0.
$$

### Proprietățile Produsului Scalar

Pentru orice $\mathbf{x}, \mathbf{y}, \mathbf{z} \in V$ și $\alpha \in \mathbb{R}$:

1. **Pozitivitatea Definită**:

   $$
   (\mathbf{x}, \mathbf{x}) \geq 0, \quad (\mathbf{x}, \mathbf{x}) = 0 \iff \mathbf{x} = \mathbf{0}.
   $$

2. **Simetria**:

   $$
   (\mathbf{x}, \mathbf{y}) = (\mathbf{y}, \mathbf{x}).
   $$

3. **Biliniaritatea**:

   $$
   (\mathbf{x} + \mathbf{y}, \mathbf{z}) = (\mathbf{x}, \mathbf{z}) + (\mathbf{y}, \mathbf{z}).
   $$

4. **Omogenitatea**:

   $$
   (\alpha \mathbf{x}, \mathbf{y}) = \alpha (\mathbf{x}, \mathbf{y}).
   $$

Aceste proprietăți asigură că produsul scalar este o aplicație biliniară simetrică pozitiv definită.

### Exemplu

Fie $n \in \mathbb{N}_+$, $V = \mathbb{R}^n$. Pentru vectorii $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ și $\mathbf{y} = (y_1, y_2, \ldots, y_n)$, produsul scalar standard este:

$$
(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^n x_i y_i.
$$

### Reperul Ortonormat

Un reper $O_{\mathbf{e}_1 \mathbf{e}_2 \ldots \mathbf{e}_n}$ este **ortonormat** dacă baza $(\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n)$ este ortonormată, adică:

$$
(\mathbf{e}_i, \mathbf{e}_j) = \begin{cases} 1, & \text{dacă } i = j, \\ 0, & \text{dacă } i \ne j. \end{cases}
$$

Într-un reper ortonormat:

- Fiecare vector al bazei are lungimea 1 (este un **versor**).
- Vectorii bazei sunt reciproc ortogonali.

### Distanța Între Două Puncte

În spațiul afin euclidian, **distanța** dintre două puncte $A, B \in A$ este:

$$
\rho(A, B) = ||\overrightarrow{AB}|| = \sqrt{(\overrightarrow{AB}, \overrightarrow{AB})}.
$$

Într-un reper ortonormat, pentru $A(a_1, a_2, \ldots, a_n)$ și $B(b_1, b_2, \ldots, b_n)$:

$$
\rho(A, B) = \sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2 + \ldots + (b_n - a_n)^2}.
$$

### Inegalitatea Triunghiului

Pentru orice $A, B, C \in A$, se verifică:

$$
\rho(A, C) \leq \rho(A, B) + \rho(B, C).
$$

Aceasta este **inegalitatea triunghiului**, o proprietate fundamentală în geometrie.

## Orientarea Spațiului Afin

### Definiție: Orientarea Bazelor

Două baze ordonate $(\mathbf{e}_1, \ldots, \mathbf{e}_n)$ și $(\mathbf{e}'_1, \ldots, \mathbf{e}'_n)$ ale spațiului vectorial $V$ sunt **la fel orientate** dacă determinantul matricei de tranziție de la prima bază la a doua este pozitiv:

$$
\det \begin{pmatrix}
| & & | \\
\mathbf{e}'_1 & \ldots & \mathbf{e}'_n \\
| & & |
\end{pmatrix}

> 0.
$$

În caz contrar, bazele sunt **opus orientate**.

### Proprietate

Relația "a fi la fel orientate" este o **relație de echivalență** pe mulțimea bazelor ordonate ale lui $V$. Există două clase de echivalență, fiecare numită **orientare** a spațiului $V$.

### Orientarea Spațiului Afin

Spațiul vectorial $V$ se numește **orientat** dacă este fixată una dintre cele două orientări. Spațiul afin $A$ se numește **orientat** dacă spațiul său vectorial director $V$ este orientat.

**Notă:**

- Pentru a orienta spațiul afin $A$, se fixează un reper $O_{\mathbf{e}_1 \mathbf{e}_2 \ldots \mathbf{e}_n}$ și se consideră orientarea determinată de baza $(\mathbf{e}_1, \ldots, \mathbf{e}_n)$.

## Exemple

### Exemplul 1: Spațiul Afin al Vectorilor Linie

Fie $n \in \mathbb{N}_+$. Considerăm:

- $A = \mathbb{R}^{1 \times n}$: spațiul vectorilor linie (matrici de dimensiune $1 \times n$).
- $V = \mathbb{R}^{n \times 1}$: spațiul vectorilor coloană (matrici de dimensiune $n \times 1$).

Pentru $A = (a_1, a_2, \ldots, a_n)$ și $B = (b_1, b_2, \ldots, b_n)$ în $A$, vectorul $\overrightarrow{AB}$ este:

$$
\overrightarrow{AB} = \begin{pmatrix}
b_1 - a_1 \\
b_2 - a_2 \\
\vdots \\
b_n - a_n
\end{pmatrix} \in V.
$$

### Exemplul 2: Spațiul Vectorial ca Spațiu Afin

Fie $V$ un spațiu vectorial. Dacă luăm $A = V$ și definim:

- Pentru $a, b \in A$, $\overrightarrow{ab} = b - a$.

Atunci:

- Pentru $a \in A$ și $\mathbf{v} \in V$, $b = a + \mathbf{v}$.
- Pentru orice $a, b, c \in A$:

  $$
  \overrightarrow{ac} = \overrightarrow{ab} + \overrightarrow{bc}.
  $$

Aceasta arată că orice spațiu vectorial poate fi considerat un spațiu afin peste el însuși.

## Concluzie

Spațiile afine și sistemele de coordonate afine extind conceptul de spațiu vectorial, permițând studierea punctelor și vectorilor într-un cadru geometric mai general. Aceste concepte sunt fundamentale în matematică și fizică, având aplicații în geometrie, mecanică, informatică și alte domenii.

Prin introducerea produsului scalar și a orientării, putem extinde studiul spațiilor afine pentru a include noțiuni de distanță, unghi și direcție, esențiale în geometria euclidiană și în analize mai avansate.
