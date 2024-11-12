<script setup lang="ts">
import Parabola from './components/Parabola.vue'
</script>

# Parabola

Parabola este curba de ordinul 2 cu excentricitatea $e = 1$.
Adică $\rho(M, F) = \rho(M, d)$

<Parabola />

## Cheatsheet parabola

$$
\textbf{Parametrul} \text{ parabolei:} \newline
p = \rho(F, d)
\newline
\text{Distanța de la focar la directoare}
\newline \text{ } \newline
\textbf{Focarul} \text{ parabolei:} \newline
F(\dfrac{p}{2}, 0)
\newline \text{ } \newline
\textbf{Directoarea} \text{ parabolei:} \newline
x = -\dfrac{p}{2} \Leftrightarrow x + \dfrac{p}{2} = 0
\newline \text{ } \newline
\text{Parabola ca } \textbf{mulțime} \text{:} \newline
\Gamma = \{ M(x, y) \in \mathbb{R}^2 \mid \rho(M, F) = \rho(M, d) \}
\newline \text{ } \newline
\textbf{Ecuția} \text{ canonică a parabolei:} \newline
y^2 = 4px
\newline \text{ } \newline
\textbf{Raza focală} \text{ a parabolei:} \newline
\forall M(x, y) \in \Gamma \Rightarrow \rho(F, M) = \dfrac{p}{2}
\newline
\text{Segmentul } [F, M] \text{ la fel este numit rază focală}
\newline \text{ } \newline
\textbf{Vârful} \text{ parabolei:} \newline
O(0, 0)
\newline \text{ } \newline
\textbf{Ecuția} \text{ tangentei în punctul } M_0(x_0, y_0) \text{:} \newline
y_0 - y = p(x - x_0)
$$

## Parametrul parabolei

Parametrul parabolei este distanța de la focar la directoare.

$$
p = \rho(F, d)
$$

## Focarul parabolei

Punctul $F$ se numește **focarul** parabolei.

$$
F(\dfrac{p}{2}, 0)
$$

## Directoarea parabolei

Dreapta $d$ se numește **directoara** parabolei și se află la distanța $p$ de focar.

Ecuția directoarei este:

$$
x = -\dfrac{p}{2} \Leftrightarrow x + \dfrac{p}{2} = 0
$$

## Ecuația canonică a parabolei

Fie parabobola formata de punctele $M(x, y)$.

$$
1 = \dfrac{\rho(F, M)}{\rho(F, d)} = \dfrac{\sqrt{(x - \dfrac{p}{2})^2 + y^2}}{\sqrt{(x + \dfrac{p}{2})^2}}
\newline \text{ } \newline
\text{ridicăm la pătrat}
\newline \text{ } \newline
1 = \dfrac{(x - \dfrac{p}{2})^2 + y^2}{(x + \dfrac{p}{2})^2}
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
(x - \dfrac{p}{2})^2 + y^2 = (x + \dfrac{p}{2})^2
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
x^2 - px + \dfrac{p^2}{4} + y^2 = x^2 + px + \dfrac{p^2}{4}
\Leftrightarrow
\newline \text{ } \newline
\Leftrightarrow
y^2 = 4px
$$

## Raza focală a parabolei

Raza focală a parabolei este segmentul $[F, M]$.

$$
\forall M(x, y) \in \Gamma \Rightarrow \rho(F, M) = \dfrac{p}{2}
$$
