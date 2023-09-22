# Iterate {#iterate-api}

## iterate() {#iterate}

Iterates over a function with all possible combinations of arguments.

-   **Type**

$$
(a,b,...,n) \to x \to a|[a] \to b|[b] \to \ldots \to n|[n] \to [x]
$$

-   **Details**

The first argument is a function, followed by arguments equal to the number of parameters of the function.

For each parameter in the function, if a normal value is passed, it indicates that there is only one possible value for that parameter. If a list is passed, all the values in the list will be considered as possibilities for that parameter.

The function will run all possible combinations of arguments and return the results as an array.

-   **Example**

```js
const foo = (a, b) => [a, b];
iterate(foo, [1, 2], [6, 7]);
//[[1, 6], [2, 6], [1, 7], [2, 7]]
```

## map() {#map}

Maps an array to a new array according to a rule.

-   **Type**

$$
(a \to b) \to [a] \to [b]
$$

-   **Details**

The first argument is a function, and the second is a list.

The return value is a new list obtained by mapping the original list through the function.

-   **Example**

```js
map(add(1))([1, 2, 3]); //[2, 3, 4]
```

## flatMap() {#flatMap}

Maps an array to a new array according to a rule and flattens the result.

-   **Type**

$$
(a \to [b]) \to [a] \to [b]
$$

-   **Details**

The first argument is a function, and the second is a list.

The return value is a new list obtained by mapping the original list through the function.

Unlike [map](#map), the function should return a list, and `flatMap` will automatically concatenate these lists into a single list.

-   **Example**

```js
flatMap((v) => [v, v])([1, 2, 3]); //[1, 1, 2, 2, 3, 3]
```

## forEach() {#forEach}

Iterates over an array.

-   **Type**

$$
(a \to *) \to [a]
$$

-   **Details**

The first argument is a function, and the second is a list.

The function will iterate over each item in the list, performing the action specified by the passed-in function.

-   **Example**

```js
const list = [];
forEach((v) => list.push(v), [1, 2, 3]);
//list : [1, 2, 3]
```

## reduce() {#reduce}

Reduces an array to a single value according to a rule.

-   **Type**

$$
(a, b, c) \to a \to a
$$

-   **Details**

The first argument is a ternary function (or lower), where the first parameter represents the accumulator, the second represents the current value, and the third represents its position in the list.

The next arguments are an initial value and a list. The return value is the result after reducing the list according to the rule.

You can use the placeholder [\_](/api/placeholder.html#_) to indicate that the default initial value should be used.

-   **Example**

```js
reduce((a, b) => a + b, 0, [1, 2, 3]); //6
reduce((a, b) => a + b, _, [1, 2, 3]); //6
```

## fold() {#fold}

Iteratively applies a function.

-   **Type**

$$
(a \to a) \to \text{Int} \to a \to a
$$

-   **Details**

The first argument is a function, the second is the number of iterations, and the third is the initial value.

The final return value is the result of the last iteration of the function.

-   **Example**

```js
fold((v) => v + 1, 5, 0); //5
```

## scan() {#scan}

Iteratively applies a function and records the state at each step.

-   **Type**

$$
(a \to a) \to \text{Int} \to a \to [a]
$$

-   **Details**

The first argument is the initial value, the second is a function, and the third is the number of iterations.

The final return value is a list of the results of each iteration.

-   **Example**

```js
scan(add(1))(5)(1); //[2, 3, 4, 5, 6]
```
