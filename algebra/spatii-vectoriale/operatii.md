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

## Span-ul unui Set de Vectori

### Definiție

**Span-ul** (întinderea) unui set de vectori $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ este mulțimea tuturor combinațiilor liniare posibile ale acestora:

$$
\text{Span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\} = \left\{ \mathbf{v} \in V \mid \mathbf{v} = \sum_{i=1}^n \alpha_i \mathbf{v}_i, \ \alpha_i \in \mathbb{K} \right\}.
$$

### Proprietăți

- Span-ul unui set de vectori este un **subspațiu vectorial** al lui $V$.
- Dacă $V = \text{Span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$, atunci vectorii $\mathbf{v}_i$ **generează** spațiul $V$.

## Bază și Dimensiune

### Definiție: Bază

Un set de vectori $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ din $V$ este o **bază** a spațiului vectorial $V$ dacă:

1. Vectorii sunt **liniar independenți**.
2. Span-ul vectorilor este întregul spațiu $V$:

   $$
   V = \text{Span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}.
   $$

### Definiție: Dimensiune

**Dimensiunea** unui spațiu vectorial $V$, notată $\dim V$, este numărul de vectori din orice bază a lui $V$.

### Proprietăți

- Toate bazele unui spațiu vectorial au același număr de elemente.
- Dacă $V$ are dimensiune finită, atunci orice set de vectori liniar independenți poate fi extins la o bază a lui $V$.

### Exemple

1. **Baza Standard a lui $\mathbb{R}^n$**

   Vectorii $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$, unde $\mathbf{e}_i$ are 1 pe poziția $i$ și 0 în rest, formează o bază a lui $\mathbb{R}^n$.

2. **Baza Polinoamelor**

   În spațiul polinoamelor de grad cel mult $n$, $\mathbb{P}_n$, vectorii $1, x, x^2, \ldots, x^n$ formează o bază, iar $\dim \mathbb{P}_n = n+1$.

## Operații Fundamentale în Spații Vectoriale

### Adunarea Vectorilor

Pentru $\mathbf{u}, \mathbf{v} \in V$, adunarea este definită prin:

$$
\mathbf{u} + \mathbf{v} \in V.
$$

**Proprietăți:**

- **Comutativitate**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$.
- **Asociativitate**: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$.
- **Element neutru**: Există un vector zero $\mathbf{0}$ astfel încât $\mathbf{v} + \mathbf{0} = \mathbf{v}$.
- **Element opus**: Pentru fiecare $\mathbf{v} \in V$, există $-\mathbf{v} \in V$ astfel încât $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$.

### Înmulțirea cu un Scalar

Pentru $\alpha \in \mathbb{K}$ și $\mathbf{v} \in V$, operația este:

$$
\alpha \mathbf{v} \in V.
$$

**Proprietăți:**

- **Asociativitate scalară**: $\alpha (\beta \mathbf{v}) = (\alpha \beta) \mathbf{v}$.
- **Element neutru scalar**: $1 \mathbf{v} = \mathbf{v}$.
- **Distributivitatea față de adunarea vectorilor**: $\alpha (\mathbf{u} + \mathbf{v}) = \alpha \mathbf{u} + \alpha \mathbf{v}$.
- **Distributivitatea față de adunarea scalarilor**: $(\alpha + \beta) \mathbf{v} = \alpha \mathbf{v} + \beta \mathbf{v}$.

## Subspații Vectoriale

### Definiție

Un **subspațiu vectorial** $W$ al spațiului vectorial $V$ este o submulțime nevidă $W \subseteq V$ care este ea însăși un spațiu vectorial față de operațiile din $V$.

### Criterii

Pentru ca $W$ să fie un subspațiu vectorial al lui $V$, trebuie să satisfacă:

1. **Închidere la adunare**: $\forall \mathbf{u}, \mathbf{v} \in W$, atunci $\mathbf{u} + \mathbf{v} \in W$.
2. **Închidere la înmulțirea cu scalari**: $\forall \alpha \in \mathbb{K}$ și $\forall \mathbf{v} \in W$, atunci $\alpha \mathbf{v} \in W$.

### Exemple

1. **Dreapta prin Origine în $\mathbb{R}^2$**

   Mulțimea $W = \{ (x, y) \in \mathbb{R}^2 \mid y = mx \}$, unde $m$ este constantă, este un subspațiu vectorial al lui $\mathbb{R}^2$.

2. **Mulțimea Matricelor Simetrice**

   În spațiul tuturor matricelor pătratice de ordin $n$, mulțimea matricelor simetrice este un subspațiu vectorial.

## Concluzie

Înțelegerea operațiilor și proprietăților spațiilor vectoriale este esențială pentru studiul algebrei liniare și al matematicii superioare. Combinațiile liniare, dependența și independența liniară, bazele și dimensiunea sunt concepte fundamentale care permit analiza și înțelegerea profundă a structurilor liniare.
