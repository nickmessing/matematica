<script setup lang="ts">
import Reprezentant from './components/Reprezentant.vue'
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
<span class="clickable-graph" data-id="ab-segment" data-repr>$v$</span>
din clasa de echivalență a bipunctului
<span class="clickable-graph" data-id="ab-segment" data-repr>$(A, B)$</span>
se numește **reprezentant** al vectorului
<span class="clickable-graph" data-id="ab-segment" data-repr>$\overrightarrow{AB}$</span>
.

<Reprezentant dataSuffix="repr" />

## Definiții

### Lungimea Vectorului

Distanța dintre punctele $A$ și $B$ sau lungimea segmentului $[AB]$ se numește **lungimea vectorului** $\overrightarrow{AB}$ și se notează cu $|\overrightarrow{AB}|$, $|AB|$ sau $\rho(A, B)$.

### Direcția Vectorului

Dacă bipunctul $(A, B)$ este propriu - vom numi **direcție a vectorului** $\overrightarrow{AB}$ - direcția bipunctului $(A, B)$. Vectorului $\overrightarrow{AA}$ nu i se asociază nicio direcție.

### Orientarea Vectorilor

Doi vectori $\overrightarrow{AB}$ și $\overrightarrow{CD}$ sunt **la fel orientați** sau **coorientați** dacă bipunctele $(A, B)$ și $(C, D)$ sunt proprii și coorientate.

Respectiv, doi vectori $\overrightarrow{AB}$ și $\overrightarrow{CD}$ sunt **opus orientați** dacă bipunctele $(A, B)$ și $(C, D)$ sunt proprii și orientate opus.

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
