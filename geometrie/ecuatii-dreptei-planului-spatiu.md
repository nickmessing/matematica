# Ecuațiile Dreptei și Planului în Spațiu {#ecuatiile-dreptei-si-planului-in-spatiu}

## Introducere

În spațiul tridimensional, dreptele și planele pot fi reprezentate folosind ecuații vectoriale și parametrice. Vom studia ecuațiile dreptei și planului în spațiu și pozițiile reciproce ale acestora.

---

## Ecuația Vectorială Parametrică a Planului

### Definiție

Fie $A$ un spațiu afin de dimensiune $3$, cu spațiul vectorial director $V$. Fixăm un reper $O_{\mathbf{e}_1 \mathbf{e}_2 \mathbf{e}_3}$ al spațiului afin $A$.

Fie $\pi = A + U$ un **plan afin** în $A$, unde $U$ este un subspațiu vectorial de dimensiune $2$ al lui $V$. Alegem un punct $M_0 \in \pi$ și o bază $\{ \mathbf{a}, \mathbf{b} \}$ a lui $U$.

Un punct $M \in \pi$ dacă și numai dacă vectorul $\overrightarrow{M_0 M} \in U$, adică există scalari $s, t \in \mathbb{R}$ astfel încât:

$$
\overrightarrow{M_0 M} = s \mathbf{a} + t \mathbf{b}
$$

Notând $\mathbf{r}_0 = \overrightarrow{OM_0}$ și $\mathbf{r} = \overrightarrow{OM}$, ecuația vectorială a planului $\pi$ este:

$$
\mathbf{r} = \mathbf{r}_0 + s \mathbf{a} + t \mathbf{b}, \quad s, t \in \mathbb{R}
$$

Aceasta este **ecuația vectorială parametrică** a planului în spațiu.

---

## Ecuația Vectorială Parametrică a Dreptei în Spațiu

Similar, pentru o **dreaptă afină** $d = A + U$ cu $\dim U = 1$, ecuația vectorială parametrică este:

$$
\mathbf{r} = \mathbf{r}_0 + t \mathbf{a}, \quad t \in \mathbb{R}
$$

unde $\mathbf{a}$ este un vector director al dreptei $d$.

---

## Ecuațiile Parametrice în Coordonate

Dacă vectorii $\mathbf{a}$ și $\mathbf{b}$ au coordonatele $(a_1, a_2, a_3)$ și respectiv $(b_1, b_2, b_3)$, iar punctul $M_0$ are coordonatele $(x_0, y_0, z_0)$, atunci ecuațiile parametrice ale planului sunt:

$$
\begin{cases}
x = x_0 + s a_1 + t b_1 \\
y = y_0 + s a_2 + t b_2 \\
z = z_0 + s a_3 + t b_3
\end{cases}, \quad s, t \in \mathbb{R}
$$

Pentru dreaptă, ecuațiile parametrice sunt:

$$
\begin{cases}
x = x_0 + t a_1 \\
y = y_0 + t a_2 \\
z = z_0 + t a_3
\end{cases}, \quad t \in \mathbb{R}
$$

---

## Poziții Reciproce ale Dreptelor și Planurilor

Urmează să studiem condițiile de paralelism, perpendicularitate și intersectare între drepte și plane în spațiu.

---

_Conținutul detaliat despre ecuațiile plane și pozițiile reciproce va fi dezvoltat în secțiunile următoare._
