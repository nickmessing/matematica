# Produs Scalar în $\mathbb{R}^n$ {#produs-scalar}

## Definiție

Pentru vectorii $\mathbf{a} = (a_1, a_2, \dotsc, a_n)$ și $\mathbf{b} = (b_1, b_2, \dotsc, b_n)$ din spațiul vectorial $\mathbb{R}^n$, **produsul scalar** (sau **produsul interior canonic**) al lui $\mathbf{a}$ și $\mathbf{b}$ este definit prin:

$$
\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^n a_i b_i = a_1 b_1 + a_2 b_2 + \dotsb + a_n b_n.
$$

Produsul scalar asociază fiecărei perechi de vectori din $\mathbb{R}^n$ un număr real.

## Notație

Produsul scalar al vectorilor $\mathbf{a}$ și $\mathbf{b}$ se mai notează și $\langle \mathbf{a}, \mathbf{b} \rangle$.

## Proprietăți

Produsul scalar are următoarele proprietăți fundamentale:

1. **Comutativitate:**

   $$
   \mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}.
   $$

2. **Distributivitate față de adunare:**

   $$
   \mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}.
   $$

3. **Asociativitate față de multiplicarea cu scalar:**

   $$
   (\alpha \mathbf{a}) \cdot \mathbf{b} = \alpha (\mathbf{a} \cdot \mathbf{b}), \quad \forall \alpha \in \mathbb{R}.
   $$

4. **Positivitate:**

   $$
   \mathbf{a} \cdot \mathbf{a} \geq 0, \quad \text{și} \quad \mathbf{a} \cdot \mathbf{a} = 0 \iff \mathbf{a} = \mathbf{0}.
   $$

## Normă și unghiul dintre vectori

- **Norma (lungimea) unui vector** $\mathbf{a}$ este:

  $$
  \|\mathbf{a}\| = \sqrt{\mathbf{a} \cdot \mathbf{a}} = \sqrt{a_1^2 + a_2^2 + \dotsb + a_n^2}.
  $$

- **Formula cosinusului:**

  Dacă $\theta$ este unghiul dintre vectorii $\mathbf{a}$ și $\mathbf{b}$, atunci:

  $$
  \mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \theta.
  $$

## Exemplu de calcul

Calculați produsul scalar al vectorilor $\mathbf{a} = (1, 3, -2)$ și $\mathbf{b} = (4, -1, 5)$ în $\mathbb{R}^3$.

### Soluție

Aplicăm definiția produsului scalar:

$$
\begin{align*}
\mathbf{a} \cdot \mathbf{b} &= a_1 b_1 + a_2 b_2 + a_3 b_3 \\
&= (1)(4) + (3)(-1) + (-2)(5) \\
&= 4 - 3 - 10 \\
&= -9.
\end{align*}
$$

**Rezultat:** $\mathbf{a} \cdot \mathbf{b} = -9$.

## Interpretare geometrică

### Ortogonalitate:

Doi vectori $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$ sunt **ortogonali** (perpendiculari) dacă și numai dacă produsul lor scalar este zero:

$$
\mathbf{a} \cdot \mathbf{b} = 0 \iff \mathbf{a} \perp \mathbf{b}.
$$

## Alte proprietăți

- **Inegalitatea lui Cauchy-Schwarz:**

  $$
  |\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\| \|\mathbf{b}\|.
  $$

- **Inegalitatea triunghiului:**

  $$
  \|\mathbf{a} + \mathbf{b}\| \leq \|\mathbf{a}\| + \|\mathbf{b}\|.
  $$
