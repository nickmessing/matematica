<script setup lang="ts">
import SameOrientation1 from './components/SameOrientation1.vue'
import SameOrientation2 from './components/SameOrientation2.vue'
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
