<script setup lang="ts">
import SameOrientation1 from './components/SameOrientation1.vue'
import SameOrientation2 from './components/SameOrientation2.vue'
import Echipolenta1 from './components/Echipolenta1.vue'
import Echipolenta2 from './components/Echipolenta2.vue'
import Reprezentant from './components/Reprezentant.vue'
</script>

# Bipunct {#bipunct}

## Definiție {#definitie}

Un **bipunct** al planului $P$ este $\forall$ pereche ordonată de puncte $(A, B) \in P \times P$ unde $A, B \in P$.

Numim $A$ originea bipunctului, iar $B$ extremitatea bipunctului.

## Bipunct propriu și bipunct impropriu {#bipunct-prop-improp}

Un bipunct $(A, B)$ se numește:

1. **propriu** dacă $A \neq B$;
2. **impropriu** dacă $A = B$.

## Direcția bipunctului {#directie-bipunct}

Dacă bipunctul $(A, B)$ este propriu, atunci are direcția de la $A$ la $B$.

## Dreapta suport al bipunctului {#dreapta-bipunct}

Dreapta care trece prin originea bipunctului și extremitatea acestuia se numește **dreapta suport** a bipunctului.

## Orientarea bipunctelor {#orientare-bipuncte}

2 bipuncte $(A, B)$ și $(C, D)$ proprii ale căror drepte suport sunt distincte atunci se numesc **la fel orientate** (sau **coorientate**) dacă:

### Dacă bipunctele sunt necolineare {#necolineare}

Dacă bipunctele sunt necolineare, atunci acestea sunt la fel orientate dacă dreptele
<span class="clickable-graph" data-id="ab-line" data-so1>$AB$</span>
$\parallel$
<span class="clickable-graph" data-id="cd-line" data-so1>$CD$</span>
și în planul determinat de
<span class="clickable-graph" data-id="ab-line" data-so1>$AB$</span>
și
<span class="clickable-graph" data-id="cd-line" data-so1>$CD$</span>
extremitățile bipunctelor
<span class="clickable-graph" data-id="ab-segment" data-so1>$(A, B)$</span>
și
<span class="clickable-graph" data-id="cd-segment" data-so1>$(C, D)$</span>
se află de aceeași parte a dreptei
<span class="clickable-graph" data-id="ac-line" data-so1>$AC$</span>
trecând prin originele lor, adică se află în același
<span class="clickable-graph" data-id="semiplan" data-so1>semiplan</span>
cu frontiera
<span class="clickable-graph" data-id="ac-line" data-so1>$AC$</span>
.

<SameOrientation1 dataSuffix="so1" />

### Dacă bipunctele sunt colineare {#colineare}

În cazul când bipunctele proprii
<span class="clickable-graph" data-id="ab-segment" data-so-21 data-so-22>$(A, B)$</span>
și
<span class="clickable-graph" data-id="cd-segment" data-so-21 data-so-22>$(C, D)$</span>
sunt colineare, acestea sunt la fel orientate dacă
<span class="clickable-graph" data-id="ab-half-line" data-so-21 data-so-22>$\left[ AB \right.$</span>
$\, \cap \,$
<span class="clickable-graph" data-id="cd-half-line" data-so-21 data-so-22>$\left[ CD \right.$</span>
este la fel o semidreaptă (și corespunde cu una din ele).

<span class="clickable-graph" data-id="ab-half-line" data-so-21>$\left[ AB \right.$</span>
$\, \cap \,$
<span class="clickable-graph" data-id="cd-half-line" data-so-21>$\left[ CD \right.$</span>
$=$
<span class="clickable-graph" data-id="cd-half-line" data-so-21>$\left[ CD \right.$</span>
<SameOrientation2 dataSuffix="so-21" />
sau
<span class="clickable-graph" data-id="ab-half-line" data-so-22>$\left[ AB \right.$</span>
$\, \cap \,$
<span class="clickable-graph" data-id="cd-half-line" data-so-22>$\left[ CD \right.$</span>
$=$
<span class="clickable-graph" data-id="cd-half-line" data-so-22>$\left[ AB \right.$</span>
<SameOrientation2 reversed dataSuffix="so-22" />

## Echipolența bipunctelor {#echipolenta-bipuncte}

2 bipuncte
<span class="clickable-graph" data-id="ab-segment" data-echi-1 data-echi-2>$(A, B)$</span>
și
<span class="clickable-graph" data-id="cd-segment" data-echi-1 data-echi-2>$(C, D)$</span>
proprii se numesc **echipolente** dacă mijloacele segmentelor
<span class="clickable-graph" data-id="ad-segment" data-echi-1 data-echi-2>$[AD]$</span>
și
<span class="clickable-graph" data-id="bc-segment" data-echi-1 data-echi-2>$[BC]$</span>
coincid, adică
<span class="clickable-graph" data-id="m-point" data-echi-1 data-echi-2>$M = M_{AB} = M_{CD}$</span>
.

<Echipolenta1 dataSuffix="echi-1" />
<Echipolenta2 dataSuffix="echi-2" />

Echipolența bipunctelor se notează cu $(A, B) \sim (C, D)$.

### Teorema Paralelogramului pentru Echipolența Bipunctelor {#teorema-paralelogramului}

Dacă punctele $A, B, C, D$ sunt ne coliniare, atunci $(A, B) \sim (C, D)$ dacă și numai dacă $ABCD$ este un paralelogram.

### Teorema Existenței și Unicității Bipunctului Echipolent cu Origine Dată {#teorema-existenta-unicitate}

Fie un bipunct $(A, B) \in P \times P$ și un punct $O \in P$, atunci există un unic punct $X$ astfel încât $(O, X) \sim (A, B)$.

### Teorema Proprietăților Bipunctelor Echipolente {#teorema-proprietati}

$\forall$ două bipuncte $(A, B) \sim (C, D)$, $(A, B)$ și $(C, D)$ sunt **la fel orientate** și $|AB| = |CD|$.

### Teorema Relației de Echivalență a Echipolenței Bipunctelor {#teorema-relatie-echivalenta}

Relația de echipolență a bipunctelor este o relație de echivalență.

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
