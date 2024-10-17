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

### Metoda Determinării Dependenței Liniare prin Rangul Matricei

#### Definiție

Pentru un set de vectori $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ din spațiul vectorial $V$, putem forma matricea $A$ având vectorii ca coloane (sau linii). **Rangul** matricei $A$ este egal cu numărul maxim de vectori liniar independenți dintre $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$.

#### Criteriu

- **Dacă rangul matricei $A$ este egal cu numărul de vectori $n$, atunci vectorii sunt liniar independenți.**
- **Dacă rangul matricei $A$ este mai mic decât $n$, atunci vectorii sunt liniar dependenți.**

[Vezi secțiunea **Rangul unei Matrice și Dependența Liniară**](/algebra/operatii-si-proprietati-in-spatii-vectoriale#rangul-unei-matrice-și-dependența-liniară)

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

3. **Funcții în Spațiul $C[0,1]$**

   Fie $f_1(x) = \sin x$ și $f_2(x) = \cos x$. Atunci, subspațiul generat de aceste funcții este:

   $$
   \text{sg}(f_1, f_2) = \left\{ f \mid f(x) = \alpha \sin x + \beta \cos x, \ \alpha, \beta \in \mathbb{R} \right\}.
   $$

### Observații

- Dacă $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n) = V$, atunci se spune că vectorii $\mathbf{v}_1, \ldots, \mathbf{v}_n$ **generează** spațiul $V$.
- În cazul în care setul de vectori este liniar dependent, subspațiul generat poate fi de dimensiune mai mică decât numărul vectorilor.

### Relația cu Baza Spațiului Vectorial

O **bază** a spațiului vectorial $V$ este un set de vectori liniar independenți care generează $V$. Cu alte cuvinte, dacă vectorii $\mathbf{v}_1, \ldots, \mathbf{v}_n$ sunt liniar independenți și $\text{sg}(\mathbf{v}_1, \ldots, \mathbf{v}_n) = V$, atunci $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ este o bază a lui $V$.

### Teorema Subspațiului Generat de o Submulțime a Spațiului Vectorial

Fie $V$ un spațiu vectorial peste corpul $\mathbb{K}$ și $X \subseteq V$ o submulțime (posibil infinită) a lui $V$. Atunci:

1. **Dacă $X$ este mulțimea vidă sau $\{ \mathbf{0} \}$**:

   $$
   \text{sg}(X) = \{ \mathbf{0} \}.
   $$

   **Explicație:**

   - Mulțimea vidă nu conține niciun vector, deci singura combinație liniară posibilă este vectorul zero.
   - Dacă $X = \{ \mathbf{0} \}$, orice combinație liniară a vectorului zero este tot vectorul zero, deoarece $\alpha \mathbf{0} = \mathbf{0}$ pentru orice scalar $\alpha$.

2. **Dacă $X$ nu este mulțimea vidă și nu conține doar vectorul zero**:

   $$
   \text{sg}(X) = \left\{ \sum_{i=1}^n \alpha_i \mathbf{x}_i \mid \mathbf{x}_i \in X, \ \alpha_i \in \mathbb{K}, \ n \in \mathbb{N}_+ \right\}.
   $$

   **Explicație:**

   - Subspațiul generat de $X$ constă în toate combinațiile liniare finite ale elementelor din $X$.
   - Chiar dacă $X$ este infinită, fiecare combinație liniară implică doar un număr finit de vectori nenuli din $X$.
   - Coeficienții $\alpha_i$ aparțin corpului $\mathbb{K}$, iar $n$ este un număr natural nenul care indică numărul de termeni din combinația liniară.

**Observații:**

- **Subspațiul generat ca cel mai mic subspațiu care conține $X$**:

  $\text{sg}(X)$ este cel mai mic subspațiu vectorial al lui $V$ care conține $X$. Orice alt subspațiu care conține $X$ trebuie să conțină și toate combinațiile liniare ale elementelor din $X$.

- **Cazuri Particulare**:

  - Dacă $X$ este un set finit $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$, atunci formula se reduce la:

    $$
    \text{sg}(X) = \left\{ \sum_{i=1}^k \alpha_i \mathbf{v}_i \mid \alpha_i \in \mathbb{K} \right\}.
    $$

  - Dacă $X$ este un set infinit, combinațiile liniare implică doar un număr finit de vectori nenuli, deoarece doar sumele finite sunt definite în contextul combinațiilor liniare.

**Exemplu cu Set Infinit:**

Fie $V$ spațiul vectorial al polinoamelor cu coeficienți reali, $\mathbb{P}$. Fie $X = \{ x^n \mid n \in \mathbb{N} \}$.

## Suma Subspațiilor Vectoriale

### Teoremă

Fie $V$ un spațiu vectorial peste corpul $\mathbb{K}$ și fie $H_1, H_2, \ldots, H_n$ (unde $n \in \mathbb{N}_+$) o familie finită de subspații ale lui $V$. Atunci, mulțimea:

$$
H_1 + H_2 + \ldots + H_n = \left\{ \mathbf{x}_1 + \mathbf{x}_2 + \ldots + \mathbf{x}_n \mid \mathbf{x}_i \in H_i, \ \forall i = 1, 2, \ldots, n \right\}
$$

este un subspațiu vectorial al lui $V$, numit **suma subspațiilor** $H_1, H_2, \ldots, H_n$.

### Demonstrație

Pentru a demonstra că $H_1 + H_2 + \ldots + H_n$ este un subspațiu vectorial al lui $V$, trebuie să verificăm următoarele proprietăți:

1. **Mulțimea nu este vidă**

   Fiecare $H_i$ este un subspațiu vectorial, deci conține vectorul zero $\mathbf{0}$. Atunci:

   $$
   \mathbf{0} = \mathbf{0} + \mathbf{0} + \ldots + \mathbf{0} \in H_1 + H_2 + \ldots + H_n.
   $$

2. **Închidere la adunare**

   Fie $\mathbf{u}, \mathbf{v} \in H_1 + H_2 + \ldots + H_n$, astfel încât:

   $$
   \mathbf{u} = \mathbf{u}_1 + \mathbf{u}_2 + \ldots + \mathbf{u}_n, \quad \mathbf{u}_i \in H_i \\
   \mathbf{v} = \mathbf{v}_1 + \mathbf{v}_2 + \ldots + \mathbf{v}_n, \quad \mathbf{v}_i \in H_i
   $$

   Atunci:

   $$
   \mathbf{u} + \mathbf{v} = (\mathbf{u}_1 + \mathbf{v}_1) + (\mathbf{u}_2 + \mathbf{v}_2) + \ldots + (\mathbf{u}_n + \mathbf{v}_n)
   $$

   Deoarece $\mathbf{u}_i, \mathbf{v}_i \in H_i$ și $H_i$ este un subspațiu, rezultă că $\mathbf{u}_i + \mathbf{v}_i \in H_i$. Prin urmare, $\mathbf{u} + \mathbf{v} \in H_1 + H_2 + \ldots + H_n$.

3. **Închidere la înmulțirea cu scalari**

   Fie $\mathbf{u} \in H_1 + H_2 + \ldots + H_n$ și $\alpha \in \mathbb{K}$, astfel încât:

   $$
   \mathbf{u} = \mathbf{u}_1 + \mathbf{u}_2 + \ldots + \mathbf{u}_n, \quad \mathbf{u}_i \in H_i
   $$

   Atunci:

   $$
   \alpha \mathbf{u} = \alpha (\mathbf{u}_1 + \mathbf{u}_2 + \ldots + \mathbf{u}_n) = \alpha \mathbf{u}_1 + \alpha \mathbf{u}_2 + \ldots + \alpha \mathbf{u}_n
   $$

   Deoarece $\mathbf{u}_i \in H_i$ și $H_i$ este un subspațiu, rezultă că $\alpha \mathbf{u}_i \in H_i$. Prin urmare, $\alpha \mathbf{u} \in H_1 + H_2 + \ldots + H_n$.

Prin urmare, $H_1 + H_2 + \ldots + H_n$ este un subspațiu vectorial al lui $V$.

### Exemple

1. **Suma a două drepte în $\mathbb{R}^2$**

   Fie $H_1$ și $H_2$ două drepte prin origine în $\mathbb{R}^2$. Dacă $H_1$ și $H_2$ sunt coincidente, atunci $H_1 + H_2 = H_1$. Dacă sunt distincte și nu coliniare, atunci $H_1 + H_2 = \mathbb{R}^2$.

2. **Suma a două plane în $\mathbb{R}^3$**

   Fie $H_1$ și $H_2$ două plane prin origine în $\mathbb{R}^3$. Dacă planele sunt identice, atunci $H_1 + H_2 = H_1$. Dacă planele se intersectează doar în origine, atunci $H_1 + H_2 = \mathbb{R}^3$.

### Observații

- **Proprietatea Comutativă și Asociativă**

  Suma subspațiilor este comutativă și asociativă:

  $$
  H_1 + H_2 = H_2 + H_1 \\
  (H_1 + H_2) + H_3 = H_1 + (H_2 + H_3)
  $$

- **Relația cu Subspațiul Generat**

  Suma subspațiilor $H_1, H_2, \ldots, H_n$ este egală cu subspațiul generat de reuniunea lor:

  $$
  H_1 + H_2 + \ldots + H_n = \text{sg}(H_1 \cup H_2 \cup \ldots \cup H_n)
  $$

  Unde $\text{sg}$ denotă subspațiul generat (anvelopa liniară).

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
