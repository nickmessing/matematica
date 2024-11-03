# Definiții {#definitii}

Un **șir de numere reale** este o funcție $x: S \rightarrow \mathbb{R}$, unde $S \subseteq \mathbb{N}$.

Pentru orice $n \in \mathbb{S}$, elementul $x(n)$ se numește **termenul de rangul $n$** al șirului $x$, notat $x_n = x(n) \in \mathbb{R}$.

Deci șirul $x$ se notează $(x_n)_{n \in S}$.

E clar că mulțimea funcțiilor $\mathbb{R}^\mathbb{N}$ a șirurilor este un [spațiu vectorial](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste) în raport cu [operațiile obișnuite](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#operatii) definite punctual.

## Șir mărginit {#sir-marginit}

- Un șir $(x_n)_{n \in S}$ se numește **mărginit superior** dacă $\exists M \in \mathbb{R}$ astfel încât $x_n \leq M$ pentru $\forall n \in S$.
- Un șir $(x_n)_{n \in S}$ se numește **mărginit inferior** dacă $\exists M \in \mathbb{R}$ astfel încât $x_n \geq M$ pentru $\forall n \in S$.
- Un șir $(x_n)_{n \in S}$ se numește **mărginit** dacă este mărginit superior și mărginit inferior.

## Monotonie {#monotonie}

- Un șir $(x_n)_{n \in S}$ se numește **monoton crescător** dacă $x_n \leq x_{n+1}$ pentru $\forall n \in S$.

## Convergență {#convergenta}

Un șir $(x_n)_{n \in S}$ se numește **convergent** dacă există un număr real $l$ astfel încât pentru orice $\varepsilon \in \mathbb{R} > 0$ există un rang $n_\varepsilon \in \mathbb{N}$ astfel încât $|x_n - l| \leq \varepsilon$ oricare ar fi $n \geq n_\varepsilon$. În acest caz, numărul $l$ se numește **limita șirului** și se notează $\lim\limits_{n \to \infty} x_n = l$.

Adică un șir $(x_n)_{n \in S}$ este convergent dacă $\lim\limits_{n \to \infty} x_n$ are sens și are valoare finită.

### Exemplu

Fie $x_n = \frac{1}{n}$, pentru orice $n \geq 1$. Atunci $\lim\limits_{n \to \infty} \frac{1}{n} = 0$.

Fixăm $1 > \varepsilon > 0$, deci $\frac{1}{\varepsilon} > 1$. Punem $n_\varepsilon = \lfloor \frac{1}{\varepsilon} \rfloor + 1 = \lceil \frac{1}{\varepsilon} \rceil$.

Rezultă că pentru orice $n \geq n_\varepsilon$ avem $|\frac{1}{n} - 0| = \frac{1}{n} < \varepsilon$ deoarece $\frac{1}{n} \leq \frac{1}{n_\varepsilon} < \varepsilon$.
