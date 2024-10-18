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

Pentru detalii suplimentare, consultați [Subspații, Baze și Dimensiune](/algebra/subspatii-baze-si-dimensiune.md).

## Concluzie

Înțelegerea operațiilor și proprietăților spațiilor vectoriale este esențială pentru studiul algebrei liniare și al matematicii superioare. Combinațiile liniare, dependența și independența liniară, bazele și dimensiunea sunt concepte fundamentale care permit analiza și înțelegerea profundă a structurilor liniare.

Pentru a aprofunda aceste concepte, vă recomandăm să explorați și [Aplicațiile Liniare și Matrice](/algebra/aplicatii-liniare-si-matrice.md).
