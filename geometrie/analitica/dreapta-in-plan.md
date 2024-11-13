# Dreapta în plan {#dreapta-in-plan}

## Definiții

### Definiția 1

Fie $\mathcal{A}$ spațiul afin euclidian dirijat $V$ și $A \in \mathcal{A}$ un punct oarecare. Pentru $\forall v \in V, \exists! B \in \mathcal{A}$ astfel încât $v = \overrightarrow{AB}$.

Notăm:

$$
B = A + v
$$

## Ecuații

### Ecuația vectorial parametrică

Fie $M_0(x_0, y_0) \in d$ un punct oarecare și $v(x, y) \neq 0$ un vector directoare al dreptei $d$.

Pentru $\forall M(x, y) \in d, \exists t \in \mathbb{R}$ astfel încât $\overrightarrow{M_0 M} = \overrightarrow{OM} - \overrightarrow{O M_0} = t a$

#### În vectori:

(1)

$$
r = r_0 + t a
$$

unde:

- $r = \overrightarrow{OM}$,
- $r_0 = \overrightarrow{OM_0}$,
- $a \text{ vector director}$.

#### În coordonate:

(2)

$$
\begin{cases}
x = x_0 + t \alpha \\
y = y_0 + t \beta
\end{cases}
$$

unde:

- $M(x, y)$,
- $M_0(x_0, y_0)$,
- $a = \begin{pmatrix} \alpha \\ \beta \end{pmatrix}$.

Eliminăm parametrul $t$ din (2):
(3)

$$
\beta(x - x_0) = \alpha(y - y_0)
$$

### Ecuația canonică a dreptei

Dacă $\alpha, \beta \neq 0$, atunci:

(4)

$$
\frac{x - x_0}{\alpha} = \frac{y - y_0}{\beta}
$$

Dacă $\alpha = 0$ și $\beta \neq 0$, atunci:

$$
x - x_0 = 0
$$

Dacă $\alpha \neq 0$ și $\beta = 0$, atunci:

$$
y - y_0 = 0
$$

Fie că sunt date 2 puncte distincte $M_1(x_1, y_1), M_2(x_2, y_2) \in d$, atunci $\overrightarrow{M_1 M_2} = \overrightarrow{OM_2} - \overrightarrow{OM_1} = \begin{pmatrix} x_2 - x_1 \\ y_2 - y_1 \end{pmatrix}$ este un vector director al dreptei $d$.

Din (4) obținem:

(5)

$$
\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1}
$$

Poate fi scris și în forme de determinanți ai matricelor:

$$
\begin{vmatrix}
x - x_1 & x_2 - x_1 \\
y - y_1 & y_2 - y_1
\end{vmatrix} = 0
$$

sau

$$
\begin{vmatrix}
x & y & 1 \\
x_1 & y_1 & 1 \\
x_2 & y_2 & 1
\end{vmatrix} = 0
$$

### Ecuația generală a dreptei trecând prin punctul $M_0(x_0, y_0)$

Punând în (3) $A = \beta, B = -\alpha$, obținem:

(6)

$$
A (x - x_0) + B (y - y_0) = 0
$$

### Ecuația generală a dreptei în plan

Punând în (6) $C = - A x_0 - B y_0$, obținem:

(7)

$$
A x + B y + C = 0
$$

Conform celor de mai sus $v$ are coordonatele $(-B, A)$.
