# Math API {#math-api}

## odd() {#odd}

Checks if an integer is odd.

-   **Type**

$$
\text{Int} \to \text{Bool}
$$

-   **Details**

Takes an integer as an argument; returns `true` if the integer is odd, otherwise returns `false`.

-   **Example**

```js
odd(114514); // false
```

## even() {#even}

Checks if an integer is even.

-   **Type**

$$
\text{Int} \to \text{Bool}
$$

-   **Details**

Takes an integer as an argument; returns `true` if the integer is even, otherwise returns `false`.

-   **Example**

```js
even(114514); // true
```

## add() {#add}

Calculates the sum of two numbers.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $a + b$.

-   **Example**

```js
add(1, 114513); // 114514
add(1)(114513); // 114514
```

## minus() {#minus}

Calculates the difference between two numbers.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $a - b$.

-   **Example**

```js
minus(114515, 1); // 114514
minus(114515)(1); // 114514
```

## mul() {#mul}

Calculates the product of two numbers.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $a \times b$.

-   **Example**

```js
mul(57257, 2); // 114514
mul(57257)(2); // 114514
```

## div() {#div}

Calculates the quotient of two numbers.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $a / b$.

-   **Example**

```js
div(229030, 2); // 114514
div(229030)(2); // 114514
```

## divr() {#divr}

Calculates the reversed quotient of two numbers.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $b / a$.

-   **Example**

```js
divr(2, 229030); // 114514
divr(2)(229030); // 114514
```

## mod() {#mod}

Calculates the remainder of integer division.

-   **Type**

$$
\text{Int} \to \text{Int} \to \text{Int}
$$

-   **Details**

Takes two integers $a, b$ as arguments; returns $a \mod b$.

For modulo operation instead of remainder, use [rema()](#rema).

-   **Example**

```js
mod(114514, 1); // 0
mod(114514)(1); // 0
```

## rema() {#rema}

Calculates the modulo of integer division.

-   **Type**

$$
\text{Int} \to \text{Int} \to \text{Int}
$$

-   **Details**

Takes two integers $a, b$ as arguments; returns $a \mod b$.

For remainder operation instead of modulo, use [mod()](#mod).

-   **Example**

```js
rema(114514, 1); // 0
rema(114514)(1); // 0
```

## power() {#power}

Calculates the power of a number.

-   **Type**

$$
\text{Number} \to \text{Number} \to \text{Number}
$$

-   **Details**

Takes two numbers $a, b$ as arguments; returns $a^b$.

-   **Example**

```js
power(114514, 1); // 114514
power(2)(3); // 8
```

## negate() {#negate}

Negates a number.

-   **Type**

$$
\text{Number} \to \text{Number}
$$

-   **Details**

Takes a number as an argument; returns its negation.

-   **Example**

```js
negate(-114514); // 114514
```

## upper() {#upper}

Generates a descending comparator for use with the [sort()](#sort) function.

-   **Type**

$$
\text{Ord} \  a \Rightarrow () \to ((a, a) \to \text{Int})
$$

-   **Details**

Returns a descending comparator for use with the `sort` function.

-   **Example**

```js
sort(upper(), [3, 2, 1]); // [3, 2, 1]
```

## under() {#under}

Generates an ascending comparator for use with the [sort()](#sort) function.

-   **Type**

$$
\text{Ord} \  a \Rightarrow () \to ((a, a) \to \text{Int})
$$

-   **Details**

Returns an ascending comparator for use with the `sort` function.

-   **Example**

```js
sort(under(), [3, 2, 1]); // [1, 2, 3]
```

## sort() {#sort}

Sorts an array based on a specific rule.

-   **Type**

$$
\text{Ord} \  a \Rightarrow [a] \to ((a, a) \to \text{Int}) \to [a]
$$

-   **Details**

Takes a rule function as the first argument and an array to be sorted as the second argument; returns a sorted array.

The rule function follows the same protocol as `Array.prototype.sort`.

-   **Example**

```js
sort(under(), [3, 2, 1]); // [1, 2, 3]
```

## median() {#median}

Calculates the median of an array of numbers.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns its median.

-   **Example**

```js
median([1, 2, 3, 4, 5, 6]); // 3.5
```

## sum() {#sum}

Calculates the sum of an array of numbers.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns the sum of all elements.

-   **Example**

```js
sum([1, 2, 3, 4, 5, 6]); // 21
```

## average() {#average}

Calculates the average of an array of numbers.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns the average of all elements.

-   **Example**

```js
average([1, 2, 3, 4, 5, 6]); // 3.5
```

## prod() {#prod}

Calculates the product of an array of numbers.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns the product of all elements.

-   **Example**

```js
prod([1, 2, 3, 4, 5, 6]); // 720
```

## max() {#max}

Finds the maximum number in an array.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns the maximum number in the array.

-   **Example**

```js
max([1, 1, 4, 5, 1, 4]); // 5
```

## min() {#min}

Finds the minimum number in an array.

-   **Type**

$$
[Number] \to Number
$$

-   **Details**

Takes an array of numbers as an argument; returns the minimum number in the array.

-   **Example**

```js
min([1, 1, 4, 5, 1, 4]); // 1
```

## dec() {#dec}

Decrements a number.

-   **Type**

$$
\text{Number} \to \text{Number}
$$

-   **Details**

Takes a number as an argument; returns the decremented value.

-   **Example**

```js
dec(114515); // 114514
```

## inc() {#inc}

Increments a number.

-   **Type**

$$
\text{Number} \to \text{Number}
$$

-   **Details**

Takes a number as an argument; returns the incremented value.

-   **Example**

```js
inc(114513); // 114514
```
