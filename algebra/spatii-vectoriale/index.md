# Spații Vectoriale {#spatii-vectoriale}

## Definiție

Un **spațiu vectorial** (sau **spațiu liniar**) peste un corp $\mathbb{K}$ este o [mulțime](http://localhost:5173/teorie/multime.html) $V$ împreună cu două operații: **adunarea vectorilor** și **înmulțirea unui vector cu un scalar**, care satisfac următoarele proprietăți:

1. **Adunarea Vectorilor**: Există o operație $+$ astfel încât $\forall u, v \in V$, rezultatul $u + v \in V$ (spațiul este **închis** la adunare).

2. **Înmulțirea cu un Scalar**: Există o operație $\cdot$ astfel încât $\forall \lambda \in \mathbb{K}$ și $\forall v \in V$, rezultatul $\lambda \cdot v \in V$ (spațiul este **închis** la înmulțire cu scalari).

Aceste operații trebuie să satisfacă următoarele **axiome**:

### Notă

Pe parcursul acestui articol și al articolelor următoare, vom folosi termenul **scalari** pentru a ne referi la elementele corpului $\mathbb{K}$ și termenul **vectori** pentru elementele spațiului vectorial $V$. Așadar, orice element al lui $\mathbb{K}$ va fi numit **scalar**, iar orice element al lui $V$ va fi numit **vector**.

### Axiome pentru Adunarea Vectorilor:

1. **Asociativitatea adunării**: $\forall u, v, w \in V$, avem:

   $$
   u + (v + w) = (u + v) + w.
   $$

2. **Comutativitatea adunării**: $\forall u, v \in V$, avem:

   $$
   u + v = v + u.
   $$

3. **Elementul neutru**: Există un element $0_V \in V$ (numit **vectorul zero**) astfel încât $\forall v \in V$, avem:

   $$
   v + 0_V = v.
   $$

4. **Elementul opus**: $\forall v \in V$, există un vector $-v \in V$ (numit **vectorul opus**) astfel încât:

   $$
   v + (-v) = 0_V.
   $$

### Axiome pentru Înmulțirea cu un Scalar:

5. **Compatibilitatea înmulțirii**: $\forall \lambda, \mu \in \mathbb{K}$ și $\forall v \in V$, avem:

   $$
   (\lambda \cdot \mu) \cdot v = \lambda \cdot (\mu \cdot v).
   $$

6. **Elementul neutru pentru scalari**: $\forall v \in V$, avem:
   $$
   1_{\mathbb{K}} \cdot v = v,
   $$
   unde $1_{\mathbb{K}}$ este elementul neutru din $\mathbb{K}$.

### Axiomele distributivității:

7. **Distributivitatea scalară**: $\forall \lambda \in \mathbb{K}$ și $\forall u, v \in V$, avem:

   $$
   \lambda \cdot (u + v) = \lambda \cdot u + \lambda \cdot v.
   $$

8. **Distributivitatea vectorială**: $\forall \lambda, \mu \in \mathbb{K}$ și $\forall v \in V$, avem:
   $$
   (\lambda + \mu) \cdot v = \lambda \cdot v + \mu \cdot v.
   $$

---

Aceste axiome definesc structura unui spațiu vectorial și permit efectuarea operațiilor cu vectori și scalari în mod coerent și previzibil. Spațiile vectoriale joacă un rol esențial în multe domenii ale matematicii, fizicii și informaticii.
