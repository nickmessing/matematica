# Teoreme ale spațiilor vectoriale peste $\mathbb{R}$ {#teoreme-spatii-vectoriale-peste-r}

## Teorema Unicității Elementului Neutru (Vectorul Zero) {#teorema-unicitatii-elementului-neutru}

**Enunț:**  
În orice spațiu vectorial peste $\mathbb{R}$, elementul neutru pentru operația de adunare vectorială este **unic** și se notează cu $\theta$. Acest element neutru se mai numește și **vectorul nul** sau **vectorul zero**.

**Exemplu:**  
În spațiul $\mathbb{R}^2$, vectorul zero este $\theta = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, iar în $\mathbb{R}^3$, vectorul zero este $\theta = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$. Orice vector adunat cu $\theta$ rămâne neschimbat: $\mathbf{v} + \theta = \mathbf{v}$.

## Teorema Unicității Elementului Opus (Inversul Aditiv) al unui Vector {#teorema-unicitatii-elementului-opus}

**Enunț:**  
Fie $\mathbf{x}$ un vector dintr-un spațiu vectorial peste $\mathbb{R}$. Elementul opus al vectorului $\mathbf{x}$ este **unic** și se notează cu $-\mathbf{x}$. Vectorul opus este definit astfel încât $\mathbf{x} + (-\mathbf{x}) = \theta$.

**Exemplu:**  
În $\mathbb{R}^2$, pentru vectorul $\mathbf{x} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, elementul opus este $-\mathbf{x} = \begin{pmatrix} -3 \\ -4 \end{pmatrix}$. Suma $\mathbf{x} + (-\mathbf{x}) = \begin{pmatrix} 3 \\ 4 \end{pmatrix} + \begin{pmatrix} -3 \\ -4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \theta$.

## Teorema Proprietăților Fundamentale ale Multiplicării cu Scalar {#teorema-proprietatilor-fundamentale-multiplicarii-cu-scalar}

**Enunț:**  
În orice spațiu vectorial peste $\mathbb{R}$, sunt valabile următoarele proprietăți fundamentale ale înmulțirii cu scalar:

1. **Anularea prin scalarul zero:**

   $$
   \forall\, \mathbf{x} \in V,\quad 0 \cdot \mathbf{x} = \theta
   $$

   **Exemplu:** În $\mathbb{R}^2$, dacă $\mathbf{x} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, atunci $0 \cdot \mathbf{x} = \begin{pmatrix} 0 \cdot 3 \\ 0 \cdot 4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \theta$.

2. **Multiplicarea vectorului zero cu un scalar:**

   $$
   \forall\, \alpha \in \mathbb{R},\quad \alpha \cdot \theta = \theta
   $$

   **Exemplu:** Dacă $\theta = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ în $\mathbb{R}^2$ și $\alpha = 5$, atunci $\alpha \cdot \theta = \begin{pmatrix} 5 \cdot 0 \\ 5 \cdot 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \theta$.

3. **Multiplicarea cu $-1$:**

   $$
   \forall\, \mathbf{x} \in V,\quad (-1) \cdot \mathbf{x} = -\mathbf{x}
   $$

   **Exemplu:** Dacă $\mathbf{x} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, atunci $(-1) \cdot \mathbf{x} = \begin{pmatrix} -1 \cdot 3 \\ -1 \cdot 4 \end{pmatrix} = \begin{pmatrix} -3 \\ -4 \end{pmatrix}$, care este chiar vectorul opus $-\mathbf{x}$.

4. **Caracterul anulator al produsului scalar:**
   $$
   \forall\, \alpha \in \mathbb{R},\ \forall\, \mathbf{x} \in V,\quad \alpha \cdot \mathbf{x} = \theta \Rightarrow \alpha = 0 \ \lor\ \mathbf{x} = \theta
   $$
   **Exemplu:** Dacă $\alpha = 2$ și $\mathbf{x} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, atunci $2 \cdot \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \theta$. În acest caz, $\mathbf{x} = \theta$. În schimb, dacă $\alpha = 0$ și $\mathbf{x} = \begin{pmatrix} 5 \\ -3 \end{pmatrix}$, atunci $0 \cdot \begin{pmatrix} 5 \\ -3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} = \theta$, iar condiția este îndeplinită pentru că $\alpha = 0$.

## Teorema Liniarității unui Sistem cu un Singur Vector {#teorema-liniaritatii-sistem-singur-vector}

**Enunț:**  
Un sistem conținând un singur vector $\mathbf{x}$ este **liniar independent** dacă și numai dacă $\mathbf{x} \neq \theta$. Dacă $\mathbf{x} = \theta$, atunci sistemul este **liniar dependent**.

**Exemplu:**

- Sistemul $\{\mathbf{x}\}$, unde $\mathbf{x} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, este liniar independent deoarece $\mathbf{x} \neq \theta$.
- Sistemul $\{\mathbf{x}\}$, unde $\mathbf{x} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, este liniar dependent, deoarece conține vectorul zero.

## Teorema Independenței Oricărui Subsistem {#teorema-independentei-subsistem}

**Enunț:**  
Orice subsistem al unui sistem liniar independent este **liniar independent**.

**Exemplu:**  
Considerăm sistemul de vectori $\left\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}\right\}$, care este liniar independent în $\mathbb{R}^2$. Orice subsistem al acestuia, cum ar fi $\left\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\right\}$ sau $\left\{\begin{pmatrix} 0 \\ 1 \end{pmatrix}\right\}$, este de asemenea liniar independent.

## Teorema Dependentei Extinse {#teorema-dependentei-extinse}

**Enunț:**  
Dacă un sistem de vectori este liniar dependent, atunci orice sistem care conține acești vectori este **liniar dependent**. În particular, orice sistem care conține vectorul nul este **liniar dependent**.

**Exemplu:**  
Dacă sistemul de vectori $\left\{\begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 2 \\ 4 \end{pmatrix}\right\}$ este liniar dependent (deoarece $2 \cdot \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$), atunci orice sistem care include acești vectori, cum ar fi $\left\{\begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 2 \\ 4 \end{pmatrix}, \begin{pmatrix} 3 \\ 5 \end{pmatrix}\right\}$, va fi de asemenea liniar dependent.

În mod similar, dacă un sistem conține vectorul zero $\theta = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, de exemplu, $\left\{\begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \end{pmatrix}\right\}$, atunci acesta va fi întotdeauna liniar dependent.

## Teorema Completării Sistemului Liniar Independent {#teorema-completarii-sistem-liniar-independent}

**Enunț:**

Fie $V$ un spațiu vectorial peste $\mathbb{R}$ de dimensiune $n$. $\forall\, \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \in V$, unde $k < n$ și sistemul $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ este liniar independent, poate fi completat cu $n - k$ vectori astfel încât sistemul rezultat să fie o bază a spațiului $V$.

**Exemplu:**

- În $\mathbb{R}^3$, sistemul $\left\{\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}\right\}$ este liniar independent. Acesta poate fi completat cu un singur vector, de exemplu $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$, pentru a forma o bază a spațiului $\mathbb{R}^3$.

## Teorema Echivalenței Bazelor {#teorema-echivalenta-bazelor}

**Enunț:**

Fie $V$ un spațiu vectorial finit generat și $S = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ un sistem de $n$ vectori din $V$. Următoarele afirmații sunt echivalente:

1. Sistemul $S$ este o bază a spațiului $V$.
2. Sistemul $S$ generează pe $V$ și orice subsistem propriu al său nu mai generează pe $V$.
3. Sistemul $S$ este liniar independent și $\forall$ sistem de vectori din $V$ care conține elementele din $S$ (dar nu numai) este liniar dependent.
