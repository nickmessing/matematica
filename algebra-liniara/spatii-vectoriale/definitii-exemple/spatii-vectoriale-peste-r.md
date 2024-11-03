# Spații vectoriale peste $\mathbb{R}$ {#spatii-vectoriale-peste-r}

## Definiția Spațiului Vectorial peste $\mathbb{R}$ {#definitia-spatiului-vectorial-peste-r}

Un **spațiu vectorial peste** $\mathbb{R}$ este o [mulțime](/teoria-multimilor/notiuni-de-baza/definitii-fundamentale/multime.md) nevidă de [vectori](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#vector) $V$ împreună cu două operații care respectă anumite axiome.

## Operații {#operatii}

### Adunare vectorială {#adunare-vectoriala}

O operație $+ : V \times V \rightarrow V$ care asociază oricăror doi vectori $\mathbf{u}, \mathbf{v} \in V$ un alt vector $\mathbf{u} + \mathbf{v} \in V$.

#### Axiome ale adunării vectoriale {#axiome-adunarii-vectoriale}

##### Comutativitate {#comutativitate}

$$
\forall\, \mathbf{u}, \mathbf{v} \in V,
\newline
\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}.
$$

##### Asociativitate {#asociativitate}

$$
\forall\, \mathbf{u}, \mathbf{v}, \mathbf{w} \in V,
\newline
(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w}).
$$

##### Element neutru (vectorul zero) {#element-neutru}

$$
\forall\, \mathbf{u} \in V,
\newline
\exists!\, \theta \in V,\ \mathbf{u} + \theta = \mathbf{u}.
$$

##### Element opus {#element-opus}

$$
\forall\, \mathbf{u} \in V,
\newline
\exists!\, (-\mathbf{u}) \in V,\ \mathbf{u} + (-\mathbf{u}) = \theta.
$$

### Multiplicare cu scalar {#multiplicare-cu-scalar}

O operație $\cdot : \mathbb{R} \times V \rightarrow V$ care asociază unui [scalar](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#scalar) $\alpha \in \mathbb{R}$ și unui vector $\mathbf{v} \in V$ un vector $\alpha \cdot \mathbf{v} \in V$.

#### Axiome ale multiplicării cu scalar {#axiome-multiplicarii-cu-scalar}

##### Asociativitate scalară {#asociativitate-scalar}

$$
\forall \alpha, \beta \in \mathbb{R}, \forall \mathbf{v} \in V,
\newline
(\alpha \cdot \beta) \cdot \mathbf{v} = \alpha \cdot (\beta \cdot \mathbf{v}).
$$

##### Distributivitate față de adunarea vectorilor {#distributivitate-fata-de-adunarea-vectorilor}

$$
\forall \alpha \in \mathbb{R}, \forall \mathbf{u}, \mathbf{v} \in V,
\newline
\alpha \cdot (\mathbf{u} + \mathbf{v}) = \alpha \cdot \mathbf{u} + \alpha \cdot \mathbf{v}.
$$

##### Distributivitate față de adunarea scalarilor {#distributivitate-fata-de-adunarea-scalarilor}

$$
\forall \alpha, \beta \in \mathbb{R}, \forall \mathbf{v} \in V,
\newline
(\alpha + \beta) \cdot \mathbf{v} = \alpha \cdot \mathbf{v} + \beta \cdot \mathbf{v}.
$$

##### Element neutru multiplicativ {#element-neutru-multiplicativ}

$$
\forall \mathbf{v} \in V,
\newline
1 \cdot \mathbf{v} = \mathbf{v}
$$

## Exemple {#exemple}

### $V = \mathbb{R}$ {#v-r}

Spațiul vectorial al numerelor reale este un spațiu vectorial peste $\mathbb{R}$ cu operațiile obișnuite de adunare și înmulțire cu scalar.

#### $+ : \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{R}, (x, y) \rightarrow x + y$ {#adunare-r}

$$
x, y \in \mathbb{R}
$$

#### $\cdot : \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{R}, (a, x) \rightarrow a \cdot x$ {#inmultire-r}

$$
a \in \mathbb{R}, x \in \mathbb{R}
$$

### $V = \mathbb{R}^n$ {#v-rn}

Spațiul vectorial al vectorilor coloană de dimensiune $n$ cu coeficienți reali este un spațiu vectorial peste $\mathbb{R}$ cu operațiile obișnuite de adunare și înmulțire cu scalar.

#### $+ : \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}^n, (\mathbf{x}, \mathbf{y}) \rightarrow \mathbf{x} + \mathbf{y}$ {#adunare-rn}

$$
\mathbf{x}, \mathbf{y} \in \mathbb{R}^n;
\newline
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix},
\mathbf{y} = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix};
\newline
\mathbf{x} + \mathbf{y} = \begin{pmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{pmatrix}
$$

#### $\cdot : \mathbb{R} \times \mathbb{R}^n \rightarrow \mathbb{R}^n, (\alpha, \mathbf{x}) \rightarrow \alpha \cdot \mathbf{x}$ {#inmultire-rn}

$$
\alpha \in \mathbb{R}, \mathbf{x} \in \mathbb{R}^n;
\newline
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix};
\newline
\alpha \cdot \mathbf{x} = \begin{pmatrix} \alpha \cdot x_1 \\ \alpha \cdot x_2 \\ \vdots \\ \alpha \cdot x_n \end{pmatrix}
$$

### $V = \mathbb{C}$

Spațiul vectorial al numerelor complexe este un spațiu vectorial peste $\mathbb{R}$ cu operațiile obișnuite de adunare și înmulțire cu scalar.

#### $+ : \mathbb{C} \times \mathbb{C} \rightarrow \mathbb{C}, (z, w) \rightarrow z + w$

$$
z, w \in \mathbb{C};
a, b, c, d \in \mathbb{R};
\newline
z = a + bi; w = c + di;
\newline
z + w = (a + c) + (b + d)i
$$

#### $\cdot : \mathbb{R} \times \mathbb{C} \rightarrow \mathbb{C}, (\alpha, z) \rightarrow \alpha \cdot z$

$$
\alpha \in \mathbb{R}, z \in \mathbb{C};
a, b \in \mathbb{R};
\newline
z = a + bi;
\newline
\alpha \cdot z = \alpha \cdot a + \alpha \cdot bi = \alpha a + \alpha bi
$$

### $V = \mathbb{C}[0;1]$

Spațiul vectorial al funcțiilor complexe continue pe intervalul $[0;1]$ este un spațiu vectorial peste $\mathbb{R}$ cu operațiile obișnuite de adunare și înmulțire cu scalar.

#### $+ : \mathbb{C}[0;1] \times \mathbb{C}[0;1] \rightarrow \mathbb{C}[0;1], (f, g) \rightarrow f + g$

$$
f, g \in \mathbb{C}[0;1];
\newline
f(t) = a + bi; g(t) = c + di;
\newline
(f + g)(t) = (a + c) + (b + d)i
$$

#### $\cdot : \mathbb{R} \times \mathbb{C}[0;1] \rightarrow \mathbb{C}[0;1], (\alpha, f) \rightarrow \alpha \cdot f$

$$
\alpha \in \mathbb{R}, f \in \mathbb{C}[0;1];
\newline
f(t) = a + bi;
\newline
(\alpha \cdot f)(t) = \alpha \cdot a + \alpha \cdot bi = \alpha a + \alpha bi
$$
