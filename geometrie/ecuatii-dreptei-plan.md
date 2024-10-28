# Ecuațiile Dreptei în Plan {#ecuatiile-dreptei-in-plan}

## Introducere

În geometria analitică, dreptele din plan pot fi reprezentate folosind diferite tipuri de ecuații. Vom explora ecuațiile vectoriale parametrice, ecuațiile canonice și ecuațiile generale ale dreptei, precum și pozițiile relative ale a două drepte în plan.

---

## Ecuația Vectorială Parametrică a Dreptei

### Definiție

Fie $A$ un spațiu afin dirijat de spațiul vectorial $V$, și fie $A \in A$ un punct fix. Pentru orice vector $\mathbf{v} \in V$, există un unic punct $B \in A$ astfel încât:

$$
\overrightarrow{AB} = \mathbf{v}
$$

Acest punct se notează $B = A + \mathbf{v}$.

Dacă $U$ este un subspațiu vectorial al lui $V$, atunci mulțimea:

$$
A + U = \{ A + \mathbf{u} \mid \mathbf{u} \in U \}
$$

se numește **subspațiu afin** al lui $A$. Se spune că $A + U$ trece prin punctul $A$ în direcția dată de $U$.

- Dacă $\dim U = 1$, atunci $A + U$ este o **dreaptă afină**.
- Dacă $\dim U = 2$, atunci $A + U$ este un **plan afin**.

### Ecuația Vectorială a Dreptei în Plan

Considerăm cazul în care $\dim V = 2$ și $\dim U = 1$. Fixăm un reper $O_{\mathbf{e}_1 \mathbf{e}_2}$ al planului afin $A$.

Fie $d = A + U$ o dreaptă afină, și fie $M_0 \in d$ un punct fixat și $\mathbf{a} \in U$ un vector nenul (vector director al dreptei). Pentru orice punct $M \in d$, avem:

$$
\overrightarrow{M_0 M} = t \mathbf{a}, \quad t \in \mathbb{R}
$$

Notăm:

$$
\mathbf{r} = \overrightarrow{OM}, \quad \mathbf{r}_0 = \overrightarrow{OM_0}
$$

Atunci:

$$
\overrightarrow{M_0 M} = \mathbf{r} - \mathbf{r}_0 = t \mathbf{a}
$$

De unde rezultă **ecuația vectorială parametrică** a dreptei $d$:

$$
\mathbf{r} = \mathbf{r}_0 + t \mathbf{a}, \quad t \in \mathbb{R}
$$

---

## Ecuațiile Parametrice în Coordonate

Dacă vectorul $\mathbf{a}$ are coordonatele $(\alpha, \beta)$ și punctul $M_0$ are coordonatele $(x_0, y_0)$, atunci ecuațiile parametrice ale dreptei $d$ sunt:

$$
\begin{cases}
x = x_0 + t \alpha \\
y = y_0 + t \beta
\end{cases}, \quad t \in \mathbb{R}
$$

Acestea se numesc **ecuațiile parametrice** ale dreptei $d$ în coordonate.

---

## Ecuația Canonică a Dreptei

Dacă $\alpha \ne 0$ și $\beta \ne 0$, putem elimina parametrul $t$ din ecuațiile parametrice:

$$
\frac{x - x_0}{\alpha} = \frac{y - y_0}{\beta}
$$

Aceasta este **ecuația canonică** a dreptei $d$.

Notă:

- Dacă $\alpha = 0$ și $\beta \ne 0$, atunci ecuația devine $x = x_0$, dreapta este paralelă cu axa $Oy$.
- Dacă $\alpha \ne 0$ și $\beta = 0$, atunci ecuația devine $y = y_0$, dreapta este paralelă cu axa $Ox$.

---

## Ecuația Dreptei care Trece prin Două Puncte

Fie $M_1(x_1, y_1)$ și $M_2(x_2, y_2)$ două puncte distincte de pe dreapta $d$. Vectorul director este:

$$
\mathbf{a} = \overrightarrow{M_1 M_2} = (x_2 - x_1, \ y_2 - y_1)
$$

Ecuația canonică a dreptei devine:

$$
\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1}
$$

Aceasta este **ecuația dreptei prin două puncte**.

Alternativ, ecuația poate fi scrisă sub forma determinantului:

$$
\begin{vmatrix}
x - x_1 & y - y_1 \\
x_2 - x_1 & y_2 - y_1 \\
\end{vmatrix}
= 0
$$

sau:

$$
\begin{vmatrix}
x & y & 1 \\
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
\end{vmatrix}
= 0
$$

---

## Ecuația Generală a Dreptei

Pornind de la ecuația canonică, notăm $A = \beta$ și $B = -\alpha$. Ecuația devine:

$$
A(x - x_0) + B(y - y_0) = 0
$$

Calculând $C = -A x_0 - B y_0$, obținem **ecuația generală** a dreptei:

$$
A x + B y + C = 0
$$

Vectorul director al dreptei este $\mathbf{a} = (-B, A)$.

---

## Poziții Relative ale a Două Drepte

Fie $d_1$ și $d_2$ două drepte date prin ecuațiile:

1. $A_1 x + B_1 y + C_1 = 0$, cu $A_1^2 + B_1^2 \ne 0$

2. $A_2 x + B_2 y + C_2 = 0$, cu $A_2^2 + B_2^2 \ne 0$

### Teoremă

1. **Dreptele $d_1$ și $d_2$ coincid** dacă și numai dacă:

$$
\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}
$$

2. **Dreptele $d_1$ și $d_2$ sunt paralele și distincte** dacă:

$$
\frac{A_1}{A_2} = \frac{B_1}{B_2} \ne \frac{C_1}{C_2}
$$

3. **Dreptele $d_1$ și $d_2$ se intersectează într-un punct unic** dacă:

$$
\frac{A_1}{A_2} \ne \frac{B_1}{B_2}
$$

---

## Drepte Perpendiculare

### Definiție

Dreptele $d_1$ și $d_2$ sunt **perpendiculare** dacă vectorii lor directori $\mathbf{a}_1$ și $\mathbf{a}_2$ sunt ortogonali, adică:

$$
(\mathbf{a}_1, \mathbf{a}_2) = 0
$$

În coordonate, dacă $d_1: A_1 x + B_1 y + C_1 = 0$ și $d_2: A_2 x + B_2 y + C_2 = 0$, atunci vectorii directori sunt $\mathbf{a}_1 = (-B_1, A_1)$ și $\mathbf{a}_2 = (-B_2, A_2)$.

### Teoremă

Dreptele $d_1$ și $d_2$ sunt perpendiculare dacă și numai dacă:

$$
A_1 A_2 + B_1 B_2 = 0
$$

---

## Unghiul Dintre Două Drepte

Unghiul $\varphi \in [0, \pi]$ dintre dreptele $d_1$ și $d_2$ este definit ca unghiul dintre vectorii lor directori $\mathbf{a}_1$ și $\mathbf{a}_2$:

$$
\cos \varphi = \frac{(\mathbf{a}_1, \mathbf{a}_2)}{||\mathbf{a}_1|| \cdot ||\mathbf{a}_2||}
$$

În coordonate:

$$
\cos \varphi = \frac{A_1 A_2 + B_1 B_2}{\sqrt{A_1^2 + B_1^2} \cdot \sqrt{A_2^2 + B_2^2}}
$$

---

## Distanța de la un Punct la o Dreaptă

### Teoremă

Distanța de la punctul $M_0(x_0, y_0)$ la dreapta $d: A x + B y + C = 0$ este:

$$
\rho(M_0, d) = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}
$$

---

## Aria unui Triunghi

Dacă punctele $A(x_1, y_1)$, $B(x_2, y_2)$ și $C(x_3, y_3)$ sunt necoliniare, aria triunghiului $ABC$ este:

$$
S = \frac{1}{2} \left| \begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
x_3 & y_3 & 1 \\
\end{vmatrix} \right|
$$

---

## Vector Normal la o Dreaptă

Un vector $\mathbf{n} \in V$ se numește **vector normal** la dreapta $d$ dacă este ortogonal la orice vector director al lui $d$.

Pentru dreapta $d: A x + B y + C = 0$, vectorul $\mathbf{n} = (A, B)$ este un vector normal la $d$.

---

## Ecuația Dreptei în Funcție de Vector Normal

Dreapta $d$ care trece prin punctul $M_0(x_0, y_0)$ și are vector normal $\mathbf{n} = (A, B)$ are ecuația:

$$
A(x - x_0) + B(y - y_0) = 0
$$

---
