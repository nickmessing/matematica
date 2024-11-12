<script setup lang="ts">
import Elipsa from './components/Elipsa.vue'
</script>

# Elipsa

Elipsa este curba de ordinul 2 cu excentricitatea $0 < e < 1$.
Adică $\rho(M, F) < \rho(M, d)$.

<Elipsa />

## Cheatsheet elipsă

$$
\textbf{Parametrul} \text{ elipsei:} \newline
p = \rho(F, d)
\newline \text{ } \newline
\textbf{Ecuația} \text{ elipsei:} \newline
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1
\newline \text{ } \newline
\textbf{Notații:} \newline
a > 0, \text{ astfel încât:} \newline
p = a(\dfrac{1}{e} - 1) \Leftrightarrow a = \dfrac{p}{\dfrac{1}{e} - 1} \newline
b^2 = a^2(1 - e^2) \newline
b^2 = a^2 - c^2 \newline
c = ae \newline
e = \dfrac{c}{a}
\newline \text{ } \newline
\textbf{Focarele} \text{ elipsei:} \newline
F_1(-c, 0), F_2(c, 0)
\newline \text{ } \newline
\textbf{Razele} \text{ focale:} \newline
[F_1, M], [F_2, M]
\newline
r_1 = \rho(F_1, M) = a + ex \newline
r_2 = \rho(F_2, M) = a - ex \newline
r_1 + r_2 = 2a
\newline \text{ } \newline
\textbf{Directoarele} \text{ elipsei:} \newline
x - \dfrac{a}{e} = 0, x + \dfrac{a}{e} = 0
\newline \text{ } \newline
\textbf{Tangenta} \text{ la elipsă:} \newline
\dfrac{x_0x}{a^2} + \dfrac{y_0y}{b^2} = 1
\newline \text{ } \newline
\textbf{Intersecția} \text{ cu axele de coordonate:} \newline
A(a, 0), A_1(-a, 0) \newline
B(0, b), B_1(0, -b)
$$

## Parametrul elipsei

Parametrul elipsei este distanța de la focar la directoare.

$$
p = \rho(F, d)
$$

## Ecuția elipsei

$$
\newline \text{ } \newline
\dfrac{\rho(M, F)}{\rho(M, d)} = e
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
\dfrac{\sqrt{(x - ae)^2 + y^2}}{\sqrt{(x - \dfrac{a}{e})^2}} = e
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
(x - ae)^2 + y^2 = (ex - a)^2
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
x^2 - 2aex + a^2e^2 + y^2 = e^2x^2 - 2aex + a^2
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
(1 - e^2)x^2 + y^2 = a^2(1 - e^2)
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1
\newline \text{unde:} \newline
b^2 = a^2(1 - e^2)
$$

## Focarele elipsei

Punctele $F_1(c, 0)$ și $F_2(-c, 0)$ se numesc **focarele** elipsei.

## Directoarele elipsei

Dreptele $d_1: x - \dfrac{a}{e} = 0$ și $d_2: x + \dfrac{a}{e} = 0$ se numesc **directoarele** elipsei.

## Tangenta la elipsă

Tangenta la elipsă în punctul $M(x_0, y_0)$ are ecuația:

$$
\dfrac{x_0x}{a^2} + \dfrac{y_0y}{b^2} = 1
$$

## Razele focale

Razele focale sunt segmentele $[F_1, M]$ și $[F_2, M]$.

## Punctele de intersecție cu axele de coordonate

Punctele de intersecție cu axa O_x sunt $A(a, 0)$ și $A_1(-a, 0)$.

Punctele de intersecție cu axa O_y sunt $B(0, b)$ și $B_1(0, -b)$.
