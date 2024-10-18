# Metoda Gauss de Eliminare

## Introducere

**Metoda Gauss**, sau **eliminarea Gauss**, este o tehnică algoritmică folosită pentru a rezolva [sisteme de ecuații liniare](/algebra/operatii-si-proprietati-in-spatii-vectoriale#sisteme-de-ecuații-liniare), a calcula [rangul unei matrice](/algebra/operatii-si-proprietati-in-spatii-vectoriale#rangul-unei-matrice-și-dependența-liniară) și a determina inversa unei matrice (dacă există). Această metodă transformă sistemul de ecuații într-unul echivalent, dar mai simplu de rezolvat, prin aducerea matricei asociate într-o **formă treaptă** sau **formă treaptă redusă** (forma esalonată).

## Pașii Metodei Gauss

1. **Formarea Matricei Extinse**:

   Se formează **matricea extinsă** a sistemului de ecuații liniare, care include coeficienții variabilelor și termenii liberi.

2. **Triangularea Matricei (Forma Treaptă)**:

   Prin **operații elementare pe linii** (inter-schimbare de linii, înmulțirea unei linii cu un scalar nenul, adunarea unui multiplu al unei linii la alta), matricea este transformată într-o formă treaptă superior triunghiulară.

3. **Forma Treaptă Redusă (Opțional)**:

   Se continuă procesul pentru a obține forma treaptă redusă, unde fiecare pivot este 1, iar elementele de deasupra pivotului sunt zero.

4. **Rezolvarea Sistemului**:

   Se rezolvă sistemul prin **[substituție inversă](/algebra/metoda-gauss.md#exemplu-1-sistem-de-ecuatii-liniare)**, începând de la ultima ecuație și urcând spre prima.

## Exemple

### Exemplu 1: Sistem de Ecuații Liniare

Să considerăm sistemul:

$$
\begin{cases}
2x + y - z = 1 \\
-3x - y + 2z = -4 \\
-2x + y + 2z = -3 \\
\end{cases}
$$

**Pasul 1: Formarea Matricei Extinse**

$$
\left[
\begin{array}{ccc|c}
2 & 1 & -1 & 1 \\
-3 & -1 & 2 & -4 \\
-2 & 1 & 2 & -3 \\
\end{array}
\right]
$$

**Pasul 2: Triangularea Matricei**

- **Prima Linie ($L_1$) este pivot.**

- Eliminăm elementele de sub pivotul $a_{11}$.

  - **Pentru Linia 2 ($L_2$):**

    $$L_2 \leftarrow L_2 + \dfrac{3}{2} L_1$$

  - **Pentru Linia 3 ($L_3$):**

    $$L_3 \leftarrow L_3 + L_1$$

- **Rezultatul:**

$$
\left[
\begin{array}{ccc|c}
2 & 1 & -1 & 1 \\
0 & 0.5 & 0.5 & -2.5 \\
0 & 2 & 1 & -2 \\
\end{array}
\right]
$$

- **Linia 2 ($L_2$) este pivot pe poziția $a_{22}$.**

- Eliminăm elementele de sub pivotul $a_{22}$.

  - **Pentru Linia 3 ($L_3$):**

    $$L_3 \leftarrow L_3 - 4L_2$$

- **Rezultatul:**

$$
\left[
\begin{array}{ccc|c}
2 & 1 & -1 & 1 \\
0 & 0.5 & 0.5 & -2.5 \\
0 & 0 & -1 & 8 \\
\end{array}
\right]
$$

**Pasul 3: Substituție Inversă**

- Din ultima ecuație:

  $$-1 \cdot z = 8 \implies z = -8$$

- Din a doua ecuație:

  $$0.5 \cdot y + 0.5 \cdot (-8) = -2.5 \implies y = 2$$

- Din prima ecuație:

  $$2x + 1 \cdot 2 -1 \cdot (-8) = 1 \implies x = -5$$

**Soluția Sistemului:**

$$
x = -5, \quad y = 2, \quad z = -8
$$

## Aplicații ale Metodei Gauss

- **Determinarea Rangului unei Matrice**: Prin aducerea matricei la forma treaptă, numărul de pivoturi nenule indică [rangul matricei](/algebra/operatii-si-proprietati-in-spatii-vectoriale#rangul-unei-matrice-și-dependența-liniară).

- **Calculul Inversei unei Matrice**: Se aplică metoda Gauss-Jordan pe matricea augmentată cu matricea identitate.

- **Sisteme Compatibile Indeterminate**: Dacă sistemul are mai puține ecuații decât necunoscute, metoda Gauss poate fi folosită pentru a găsi soluțiile generale.

## Avantaje și Limitări

- **Avantaje**:

  - Sistematică și algoritmică, ușor de implementat în programe de calcul.
  - Eficientă pentru sisteme de ecuații mari.

- **Limitări**:

  - Necesită pivotare pentru a evita divizarea la zero sau pentru a minimiza erorile numerice.
  - Poate fi costisitoare computațional pentru sisteme extrem de mari fără optimizări.

## Concluzie

Metoda Gauss este un instrument fundamental în algebră liniară, esențial pentru rezolvarea sistemelor liniare și pentru înțelegerea structurii matricelor. Cunoașterea și aplicarea corectă a acestei metode sunt cruciale pentru matematicieni, ingineri și oameni de știință în general.

## Legături Externe

- [Wikipedia - Eliminarea Gauss](https://en.wikipedia.org/wiki/Gaussian_elimination)
- [Khan Academy - Metoda Gauss](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces)
