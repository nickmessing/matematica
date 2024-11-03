# Matrice de Tranziție {#matrice-de-tranzitie}

## Definiție

O **matrice de tranziție** (sau **matrice de schimbare de bază**) este o [matrice](/algebra-liniara/matrice/matrice.md#definitie) care exprimă coordonatele unui vector în raport cu o [bază](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#baza) în funcție de coordonatele aceluiași vector în raport cu o altă bază. În contextul [spațiilor vectoriale](/algebra-liniara/spatii-vectoriale/definitii-exemple/spatii-vectoriale-peste-r.md#definitia-spatiului-vectorial-peste), matricea de tranziție reprezintă transformarea de la o bază la alta.

Fie $V$ un spațiu vectorial finit-dimensional peste $\mathbb{R}$, și fie $B = \{ \mathbf{v}_1, \mathbf{v}_2, \dotsc, \mathbf{v}_n \}$ și $B' = \{ \mathbf{v}'_1, \mathbf{v}'_2, \dotsc, \mathbf{v}'_n \}$ două baze ale lui $V$. Matricea de tranziție de la baza $B'$ la baza $B$ este matricea $P$ de ordin $n \times n$ ale cărei coloane sunt coordonatele vectorilor $\mathbf{v}'_j$ exprimați în baza $B$:

$$
P_{B' \rightarrow B} = \begin{pmatrix}
\, [\mathbf{v}'_1]_B & [\mathbf{v}'_2]_B & \dotsb & [\mathbf{v}'_n]_B \,
\end{pmatrix},
$$

unde $[\mathbf{v}'_j]_B$ reprezintă vectorul de coordonate al lui $\mathbf{v}'_j$ în baza $B$.

## Explicație

Matricea de tranziție permite transformarea coordonatelor unui vector de la baza $B'$ la baza $B$. Dacă $[\mathbf{x}]_{B'}$ sunt coordonatele vectorului $\mathbf{x}$ în baza $B'$, iar $[\mathbf{x}]_B$ sunt coordonatele sale în baza $B$, atunci relația dintre aceste coordonate este dată de:

$$
[\mathbf{x}]_B = P_{B' \rightarrow B} \, [\mathbf{x}]_{B'}.
$$

În mod similar, matricea inversă $P^{-1}$ este matricea de tranziție de la baza $B$ la baza $B'$, și satisface relația:

$$
[\mathbf{x}]_{B'} = P_{B' \rightarrow B}^{-1} \, [\mathbf{x}]_B.
$$

sau

$$
P_{B \rightarrow B'} = P_{B' \rightarrow B}^{-1}.
$$

## Exemplu

Fie $V = \mathbb{R}^2$, și considerăm bazele cu vectori care nu au componente nule:

- **Baza $B$**: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
- **Baza $B'$**: $\mathbf{v}'_1 = \begin{pmatrix} 5 \\ 6 \end{pmatrix}, \quad \mathbf{v}'_2 = \begin{pmatrix} 7 \\ 8 \end{pmatrix}$.

### Pasul 1: Exprimarea vectorilor din $B'$ în baza $B$

Dorim să exprimăm vectorii $\mathbf{v}'_1$ și $\mathbf{v}'_2$ ca combinații liniare ale vectorilor din baza $B$. Adică, găsim scalarii $a_j$ și $b_j$ astfel încât:

$$
\mathbf{v}'_j = a_j \mathbf{v}_1 + b_j \mathbf{v}_2, \quad \text{pentru } j = 1, 2.
$$

#### Pentru $\mathbf{v}'_1$:

##### Avem Ecuația:

$$
a_1 \mathbf{v}_1 + b_1 \mathbf{v}_2 = \mathbf{v}'_1
\Leftrightarrow
a_1 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + b_1 \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}
\Leftrightarrow
\begin{cases}
a_1 \cdot 1 + b_1 \cdot 3 = 5 \\
a_1 \cdot 2 + b_1 \cdot 4 = 6 \\
\end{cases}
$$

##### Rezolvăm:

1. $a_1 + 3b_1 = 5$
2. $2a_1 + 4b_1 = 6$

Multiplicăm ecuația (1) cu 2:

$2a_1 + 6b_1 = 10$

Scădem ecuația (2) din aceasta:

$(2a_1 + 6b_1) - (2a_1 + 4b_1) = 10 - 6$

$2b_1 = 4 \implies b_1 = 2$

Substituim $b_1$ în ecuația (1):

$a_1 + 3 \cdot 2 = 5 \implies a_1 + 6 = 5 \implies a_1 = -1$

#### Pentru $\mathbf{v}'_2$:

##### Avem ecuația:

$$
a_2 \mathbf{v}_1 + b_2 \mathbf{v}_2 = \mathbf{v}'_2
\Leftrightarrow
a_2 \begin{pmatrix} 1 \\ 2 \end{pmatrix} + b_2 \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 7 \\ 8 \end{pmatrix}
\Leftrightarrow
\begin{cases}
a_2 \cdot 1 + b_2 \cdot 3 = 7 \\
a_2 \cdot 2 + b_2 \cdot 4 = 8 \\
\end{cases}
$$

Rezolvăm sistemul:

1. $a_2 + 3b_2 = 7$
2. $2a_2 + 4b_2 = 8$

Multiplicăm ecuația (1) cu 2:

$2a_2 + 6b_2 = 14$

Scădem ecuația (2) din aceasta:

$(2a_2 + 6b_2) - (2a_2 + 4b_2) = 14 - 8$

$2b_2 = 6 \implies b_2 = 3$

Substituim $b_2$ în ecuația (1):

$a_2 + 3 \cdot 3 = 7 \implies a_2 + 9 = 7 \implies a_2 = -2$

### Pasul 2: Construirea matricei de tranziție $P_{B' \rightarrow B}$

Matricea de tranziție de la baza $B'$ la baza $B$ este:

$$
P_{B' \rightarrow B} = \begin{pmatrix}
a_1 & a_2 \\
b_1 & b_2 \\
\end{pmatrix} = \begin{pmatrix}
-1 & -2 \\
2 & 3 \\
\end{pmatrix}.
$$

### Pasul 3: Transformarea coordonatelor unui vector

Fie vectorul $\mathbf{x} \in V$ cu coordonatele în baza $B'$:

$$
[\mathbf{x}]_{B'} = \begin{pmatrix} \alpha \\ \beta \end{pmatrix}.
$$

Dorim să găsim coordonatele $[\mathbf{x}]_B$ în baza $B$:

$$
[\mathbf{x}]_B = P_{B' \rightarrow B} \, [\mathbf{x}]_{B'} = \begin{pmatrix}
-1 & -2 \\
2 & 3 \\
\end{pmatrix} \begin{pmatrix}
\alpha \\
\beta \\
\end{pmatrix} = \begin{pmatrix}
-1 \cdot \alpha - 2 \cdot \beta \\
2 \cdot \alpha + 3 \cdot \beta \\
\end{pmatrix}.
$$

### Exemplu numeric

Să considerăm $[\mathbf{x}]_{B'} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Calculăm $[\mathbf{x}]_B$:

$$
[\mathbf{x}]_B = \begin{pmatrix}
-1 & -2 \\
2 & 3 \\
\end{pmatrix} \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
-1 - 2 = -3 \\
2 + 3 = 5 \\
\end{pmatrix}.
$$

Deci coordonatele vectorului $\mathbf{x}$ în baza $B$ sunt $[\mathbf{x}]_B = \begin{pmatrix} -3 \\ 5 \end{pmatrix}$.

### Verificare

Calculăm vectorul $\mathbf{x}$ în $V$:

1. Exprimăm $[\mathbf{x}]_{B'}$ în [baza canonică](/algebra-liniara/spatii-vectoriale/definitii-exemple/definitii.md#baza-canonica):

$$
\mathbf{x} = \alpha \mathbf{v}'_1 + \beta \mathbf{v}'_2 = 1 \cdot \begin{pmatrix} 5 \\ 6 \end{pmatrix} + 1 \cdot \begin{pmatrix} 7 \\ 8 \end{pmatrix} = \begin{pmatrix} 5 + 7 \\ 6 + 8 \end{pmatrix} = \begin{pmatrix} 12 \\ 14 \end{pmatrix}.
$$

2. Verificăm dacă $\mathbf{x}$ are coordonatele $(-3, 5)$ în baza $B$:

$$
\mathbf{x} = \gamma \mathbf{v}_1 + \delta \mathbf{v}_2 = (-3) \cdot \begin{pmatrix} 1 \\ 2 \end{pmatrix} + 5 \cdot \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} -3 + 15 \\ -6 + 20 \end{pmatrix} = \begin{pmatrix} 12 \\ 14 \end{pmatrix}.
$$

Am obținut același vector $\mathbf{x}$, deci transformarea este corectă.

## Observații

- Matricea de tranziție $P_{B' \rightarrow B}$ este **inversabilă**, deoarece schimbarea de bază este un isomorfism liniar.
- Matricea inversă $P_{B' \rightarrow B}^{-1}$ este matricea de tranziție de la baza $B$ la baza $B'$.
- Dacă cunoaștem matricea de tranziție $P_{B' \rightarrow B}$, putem transforma orice vector sau orice operator liniar între cele două baze.
