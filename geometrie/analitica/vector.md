<script setup lang="ts">
import Reprezentant from './components/Reprezentant.vue'
import SumaVectorilor from './components/SumaVectorilor.vue'
import ProdusVector from './components/ProdusVector.vue'
</script>

# Vector {#vector}

## Vectori liberi {#vectori-liberi}

Clasele de echivalență determinate de relația de echipolență a bipunctelor se numesc **vectori liberi**.

Notăm:

$$
\overrightarrow{AB} = \{(X, Y) \in P \times P \mid (A, B) \sim (X, Y)\}
$$

## Reprezentanți ai vectorilor {#reprezentanti-vectori}

Orice bipunct
<span class="clickable-graph" data-id="xy-segment" data-repr>$(X, Y)$</span>
$\in$
<span class="clickable-graph" data-id="ab-segment" data-repr>$\overrightarrow{AB}$</span>
$=$
<span class="clickable-graph" data-id="ab-segment" data-repr>$\mathbf{v}$</span>
din clasa de echivalență a bipunctului
<span class="clickable-graph" data-id="ab-segment" data-repr>$(A, B)$</span>
se numește **reprezentant** al vectorului
<span class="clickable-graph" data-id="ab-segment" data-repr>$\overrightarrow{AB}$</span>
.

<Reprezentant dataSuffix="repr" />

## Operații cu Vectori

### Adunarea Vectorilor

Dacă
<span class="clickable-graph" data-id="a-point" data-sum>$A$</span>,
<span class="clickable-graph" data-id="b-point" data-sum>$B$</span>,
<span class="clickable-graph" data-id="c-point" data-sum>$C$</span>
$\in P$, atunci vectorul
<span class="clickable-graph" data-id="ab-line" data-sum>$\overrightarrow{AB}$</span>
$+$
<span class="clickable-graph" data-id="bc-line" data-sum>$\overrightarrow{BC}$</span>
se numește **suma vectorilor**
<span class="clickable-graph" data-id="ab-line" data-sum>$\overrightarrow{AB}$</span>
și
<span class="clickable-graph" data-id="bc-line" data-sum>$\overrightarrow{BC}$</span>
și se notează cu
<span class="clickable-graph" data-id="ac-line" data-sum>$\overrightarrow{AC}$</span>.

<span class="clickable-graph" data-id="x-line" data-sum>$\mathbf{x}$</span>
$\;=\;$
<span class="clickable-graph" data-id="ab-line" data-sum>$\overrightarrow{AB}$</span>
,
<span class="clickable-graph" data-id="y-line" data-sum>$\mathbf{y}$</span>
$\;=\;$
<span class="clickable-graph" data-id="bc-line" data-sum>$\overrightarrow{BC}$</span>
,
<span class="clickable-graph" data-id="z-line" data-sum>$\mathbf{z}$</span>
$\;=\;$
<span class="clickable-graph" data-id="ac-line" data-sum>$\overrightarrow{AC}$</span>.

<span class="clickable-graph" data-id="ab-line" data-sum>$\overrightarrow{AB}$</span>
$+$
<span class="clickable-graph" data-id="bc-line" data-sum>$\overrightarrow{BC}$</span>
$=$
<span class="clickable-graph" data-id="ac-line" data-sum>$\overrightarrow{AC}$</span>
$\Leftrightarrow$
<span class="clickable-graph" data-id="x-line" data-sum>$\mathbf{x}$</span>
$+$
<span class="clickable-graph" data-id="y-line" data-sum>$\mathbf{y}$</span>
$=$
<span class="clickable-graph" data-id="z-line" data-sum>$\mathbf{z}$</span>.

<SumaVectorilor dataSuffix="sum" />

### Înmulțirea Vectorilor cu un Scalar

Fie $\alpha \in \mathbb{R}$ și $\mathbf{x}$ un vector.

#### $\mathbf{x} = \theta$

Dacă $\mathbf{x} = \theta$, atunci $\alpha \mathbf{x} = \theta$.

#### $\alpha = 0$

Dacă $\alpha = 0$, atunci $\alpha \mathbf{x} = 0 \mathbf{x} = \theta$.

#### $\alpha > 0$

Dacă $\alpha > 0$ și $\mathbf{x} \neq \theta$ atunci:

Alegem un bipunct
<span class="clickable-graph" data-id="oa-segment" data-repr>$(O, A)$</span>
astfel încât
<span class="clickable-graph" data-id="oa-segment" data-repr>$\mathbf{x} = \overrightarrow{OA}$</span>.
Pe semidreapta
<span class="clickable-graph" data-id="oa-semi-line" data-repr>$[OA$</span>
alegem un punct unic
<span class="clickable-graph" data-id="b-point" data-repr>$B$</span>
astfel încât
$|\,$
<span class="clickable-graph" data-id="ob-segment" data-repr>$OB$</span>
$\,| = \alpha |\,$
<span class="clickable-graph" data-id="oa-segment" data-repr>$OA$</span>
$\,|$.

<ProdusVector dataSuffix="repr" />

#### $\alpha < 0$

Dacă $\alpha < 0$ și $\mathbf{x} \neq \theta$ atunci $\alpha \mathbf{x} = -(|\alpha| \mathbf{x})$.

## Definiții

### Lungimea Vectorului

Distanța dintre punctele $A$ și $B$ sau lungimea segmentului $[AB]$ se numește **lungimea vectorului** $\overrightarrow{AB}$ și se notează cu $|\overrightarrow{AB}|$, $|AB|$ sau $\rho(A, B)$.

### Direcția Vectorului

Dacă bipunctul $(A, B)$ este propriu - vom numi **direcție a vectorului** $\overrightarrow{AB}$ - direcția bipunctului $(A, B)$. Vectorului $\overrightarrow{AA}$ nu i se asociază nicio direcție.

### Orientarea Vectorilor

Doi vectori $\overrightarrow{AB}$ și $\overrightarrow{CD}$ sunt **la fel orientați** sau **coorientați** dacă bipunctele $(A, B)$ și $(C, D)$ sunt proprii și coorientate.

Respectiv, doi vectori $\overrightarrow{AB}$ și $\overrightarrow{CD}$ sunt **opus orientați** dacă bipunctele $(A, B)$ și $(C, D)$ sunt proprii și orientate opus.

### Vectorul Nul

Vectorul $\overrightarrow{AA}$ se numește **vectorul nul** și se notează cu $\theta$.

### Vectorul Opus

Dacă bipunctul $(A, B)$ este propriu, atunci vectorul $\overrightarrow{BA}$ se numește **vectorul opus** al vectorului $\overrightarrow{AB}$ și se notează cu $-\overrightarrow{AB}$.

### Vectori Paraleli (Coliniari)

Un vector nenul $\mathbf{x} = \overrightarrow{AB}$ este **paralel** cu o dreaptă $d$ dacă și numai dacă dreapta $d$ este paralelă cu dreapta $AB$.

Doi vectori sunt **paraleli** (sau **coliniari**) dacă și numai dacă sunt paraleli cu aceeași dreaptă din $\mathcal{E}_i$.

Vectorul $\theta$ este paralel cu orice vector sau dreaptă.

### Vector Paralel cu un Plan

Fie $i \in \{2, 3\}$ și $\mathbf{x} \in V_i$ un vector nenul. Vectorul $\mathbf{x}$ este **paralel** cu un plan $\pi \in \mathcal{E}_i$ dacă și numai dacă $\mathbf{x}$ este **paralel** cu o dreaptă din planul $\pi$.

Vectorul $\theta$ este paralel cu orice vector, dreaptă sau plan.

Trei vectori sunt **coplanari** dacă și numai dacă sunt paraleli cu același plan.

## Notații

### Echivalența Vectorilor

$$
\overrightarrow{AB} = \overrightarrow{OX} \Leftrightarrow (A, B) \sim (O, X).
$$

## Teoreme

### Teorema Existenței și Unicității Vectorului cu Origine Dată

$\forall A, B, O \in P$, $\exists!X \in P$ astfel încât $\overrightarrow{AB} = \overrightarrow{OX}$.

### Teorema Egalității Vectorilor

$$
\overrightarrow{AB} = \overrightarrow{OX} \Leftrightarrow \overrightarrow{OX} = \overrightarrow{AB}.
$$

### Teorema Dimensiunii Spațiilor Vectoriale

Pentru $\forall i \in \{1, 2, 3\}$: $\text{dim}(V_i) = i$, adică toate bazele unui spațiu vectorial $V_1$ au un singur vector, toate bazele unui spațiu vectorial $V_2$ au două vectori, iar toate bazele unui spațiu vectorial $V_3$ au trei vectori.

### Teorema Dependenței Liniare

Doi vectori sunt **coliniari** dacă și numai dacă sunt **dependenți liniar**.

### Teorema Coplanarității

Trei vectori liberi sunt coplanari dacă și numai dacă sunt dependenți liniar.
