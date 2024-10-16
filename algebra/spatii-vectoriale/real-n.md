# Spațiul Vectorial $\mathbb{R}^n$ {#spatiul-vectorial-rn}

## Definiție

Spațiul vectorial **$\mathbb{R}^n$** este un exemplu clasic de [spațiu vectorial](/algebra/spatii-vectoriale) peste corpul numerelor reale $\mathbb{R}$. Acesta constă din mulțimea **multipletelor ordonate** de $n$ numere reale, notate astfel:

$$
\mathbb{R}^n = \{ (x_1, x_2, \ldots, x_n) \mid x_1, x_2, \ldots, x_n \in \mathbb{R}, n \in \mathbb{N}_+ \}.
$$

Cu alte cuvinte, fiecare element al $\mathbb{R}^n$ este un **vector** format din $n$ componente, unde fiecare componentă este un număr real.

## Operațiile în $\mathbb{R}^n$

Spațiul $\mathbb{R}^n$ este definit prin două operații fundamentale: **adunarea vectorilor** și **înmulțirea unui vector cu un scalar**. Aceste operații trebuie să respecte axiomele unui [spațiu vectorial](/algebra/spatii-vectoriale).

### 1. Adunarea vectorilor

Pentru orice doi vectori $x = (x_1, x_2, \ldots, x_n)$ și $y = (y_1, y_2, \ldots, y_n)$ din $\mathbb{R}^n$, **adunarea vectorilor** se face componentă cu componentă:

$$
(x_1, x_2, \ldots, x_n) + (y_1, y_2, \ldots, y_n) = (x_1 + y_1, x_2 + y_2, \ldots, x_n + y_n).
$$

Aceasta înseamnă că rezultatul adunării a doi vectori din $\mathbb{R}^n$ este tot un vector din $\mathbb{R}^n$, deci operația de adunare este **închisă**.

### 2. Înmulțirea unui vector cu un scalar

Pentru orice vector $x = (x_1, x_2, \ldots, x_n)$ din $\mathbb{R}^n$ și un scalar $\alpha \in \mathbb{R}$, **înmulțirea scalară** se face componentă cu componentă:

$$
\alpha \cdot (x_1, x_2, \ldots, x_n) = (\alpha \cdot x_1, \alpha \cdot x_2, \ldots, \alpha \cdot x_n).
$$

Astfel, înmulțirea cu un scalar transformă fiecare componentă a vectorului inițial, iar rezultatul este tot un vector din $\mathbb{R}^n$.

## Particularitățile Spațiului $\mathbb{R}^n$

### 1. Dimensiunea Spațiului

Dimensiunea spațiului $\mathbb{R}^n$ este $n$. Aceasta înseamnă că orice vector din $\mathbb{R}^n$ poate fi descris unic ca o combinație liniară de $n$ vectori dintr-o bază a acestui spațiu. O bază standard a lui $\mathbb{R}^n$ este formată din vectorii:

$$
\mathbf{e}_1 = (1, 0, 0, \ldots, 0), \quad \mathbf{e}_2 = (0, 1, 0, \ldots, 0), \quad \ldots, \quad \mathbf{e}_n = (0, 0, \ldots, 1).
$$

Acești vectori formează baza canonică a spațiului $\mathbb{R}^n$, iar orice vector $x = (x_1, x_2, \ldots, x_n)$ din $\mathbb{R}^n$ poate fi scris astfel:

$$
x = x_1 \mathbf{e}_1 + x_2 \mathbf{e}_2 + \ldots + x_n \mathbf{e}_n.
$$

### 2. Normă și Distanță

În spațiul $\mathbb{R}^n$, se poate defini o **normă** (lungime) a unui vector. Norma standard (sau norma euclidiană) a unui vector $x = (x_1, x_2, \ldots, x_n)$ este:

$$
||x|| = \sqrt{x_1^2 + x_2^2 + \ldots + x_n^2}.
$$

Această normă induce o noțiune de **distanță** între doi vectori $x$ și $y$ din $\mathbb{R}^n$, definită astfel:

$$
d(x, y) = ||x - y|| = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \ldots + (x_n - y_n)^2}.
$$

### 3. Subspații Vectoriale

Orice **subspațiu** vectorial al spațiului $\mathbb{R}^n$ este o mulțime de vectori din $\mathbb{R}^n$ care respectă toate axiomele unui spațiu vectorial. Exemple comune de subspații includ:

- **Linia dreaptă** prin origine în $\mathbb{R}^2$, care este un subspațiu de dimensiune 1.
- **Planul** prin origine în $\mathbb{R}^3$, care este un subspațiu de dimensiune 2.

### 4. Aplicațiile Spațiului $\mathbb{R}^n$

Spațiul vectorial $\mathbb{R}^n$ este esențial în multe domenii ale matematicii și științei, inclusiv:

- **Geometria Euclidiană**: Reprezentarea punctelor, liniilor și suprafețelor în spații de dimensiuni 2 și 3.
- **Fizică**: Reprezentarea vectorilor de forțe, viteze și poziții în spațiul tridimensional.
- **Analiză Numerică**: Modelarea și soluționarea ecuațiilor cu mai multe variabile.

---

Spațiul vectorial $\mathbb{R}^n$ este unul dintre cele mai fundamentale și bine studiate exemple de spațiu vectorial, datorită legăturilor sale directe cu geometria și aplicațiile practice. Acesta este un cadru esențial pentru a înțelege conceptele de bază din algebră liniară și matematică aplicată.
