<script setup lang="ts">
import Hiperbola from './components/Hiperbola.vue'
</script>

# Hiperbola

Hiperbola este curba de ordinul 2 cu excentricitatea $e > 1$.
Adică $\rho(M, F) = e \rho(M, d)$.

<Hiperbola />

## Cheatsheet hiperbolă

$$
\textbf{Parametrul} \text{ hiperbolei:} \newline
p = \rho(F, d)
\newline \text{ } \newline
\textbf{Ecuația} \text{ hiperbolei:} \newline
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
\newline \text{ } \newline
\textbf{Notații:} \newline
a > 0, \text{ astfel încât:} \newline
p = a(e - 1) \Leftrightarrow a = \frac{p}{e - 1} \newline
b^2 = a^2(e^2 - 1) \newline
c^2 = a^2 + b^2 \newline
c = a e \newline
e = \frac{c}{a}
\newline \text{ } \newline
\textbf{Focarele} \text{ hiperbolei:} \newline
F_1(-c, 0), \quad F_2(c, 0)
\newline \text{ } \newline
\textbf{Razele} \text{ focale:} \newline
[F_1, M], \quad [F_2, M]
\newline
r_1 = \rho(F_1, M) = e x - a \newline
r_2 = \rho(F_2, M) = e x + a \newline
| r_1 - r_2 | = 2 a
\newline \text{ } \newline
\textbf{Directoarele} \text{ hiperbolei:} \newline
x = \frac{a}{e}, \quad x = -\frac{a}{e}
\newline \text{ } \newline
\textbf{Asimptotele} \text{ hiperbolei:} \newline
y = \frac{b}{a} x, \quad y = -\frac{b}{a} x
\newline \text{ } \newline
\textbf{Tangenta} \text{ la hiperbolă:} \newline
\frac{x_0 x}{a^2} - \frac{y_0 y}{b^2} = 1
\newline \text{ } \newline
\textbf{Intersecția} \text{ cu axele de coordonate:} \newline
A(a, 0), \quad A'(-a, 0)
$$

## Parametrul hiperbolei

Parametrul hiperbolei este distanța de la focar la directoare.

$$
p = \rho(F, d)
$$

## Ecuația hiperbolei

$$
\frac{\rho(M, F)}{\rho(M, d)} = e
\Leftrightarrow
\newline \text{ } \newline
\frac{\sqrt{(x - a e)^2 + y^2}}{| x - \frac{a}{e} |} = e
\Leftrightarrow
\newline \text{ } \newline
\left( x - a e \right)^2 + y^2 = e^2 \left( x - \frac{a}{e} \right)^2
\Leftrightarrow
\newline \text{ } \newline
x^2 - 2 a e x + a^2 e^2 + y^2 = e^2 x^2 - 2 a e x + a^2
\Leftrightarrow
\newline \text{ } \newline
x^2 - e^2 x^2 + y^2 = a^2 e^2 - a^2
\Leftrightarrow
\newline \text{ } \newline
(1 - e^2) x^2 + y^2 = a^2 (e^2 - 1)
\Leftrightarrow
\newline \text{ } \newline
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
\newline \text{unde:} \newline
b^2 = a^2 (e^2 - 1)
$$

## Focarele hiperbolei

Punctele $F_1(-c, 0)$ și $F_2(c, 0)$ se numesc **focarele** hiperbolei, unde:

$$
c = a e
$$

## Directoarele hiperbolei

Dreptele $d_1: x = \frac{a}{e}$ și $d_2: x = -\frac{a}{e}$ se numesc **directoarele** hiperbolei.

## Asimptotele hiperbolei

Asimptotele hiperbolei au ecuațiile:

$$
y = \frac{b}{a} x \quad \text{și} \quad y = -\frac{b}{a} x
$$

## Tangenta la hiperbolă

Tangenta la hiperbolă în punctul $M(x_0, y_0)$ are ecuația:

$$
\frac{x_0 x}{a^2} - \frac{y_0 y}{b^2} = 1
$$

## Razele focale

Razele focale sunt segmentele $[F_1, M]$ și $[F_2, M]$.

## Punctele de intersecție cu axele de coordonate

Hiperbola intersectează axa $Ox$ în punctele $A(a, 0)$ și $A'(-a, 0)$.

Hiperbola nu intersectează axa $Oy$, dar asimptotele sale trec prin originea sistemului de coordonate.
