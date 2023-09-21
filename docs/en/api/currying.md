# Currying {#curry-api}

Note: Unless otherwise stated, all multi-argument functions in PureEval are curried.

## curry() {#curry}

Turns a function into a curried function.

-   **Type**

$$
((a, b, \ldots, n) \to x) \to a \to b \to \ldots \to n \to x
$$

-   **Details**

Takes a non-curried function as an argument and returns the corresponding curried function.

The curried function accepts one or more arguments at a time. If the number of provided arguments has not yet reached the required number for the original function, it returns another function that continues to accept the remaining arguments.

It is evident that the non-curried function must have a `length` property that accurately reflects the number of its parameters.

-   **Example**

```js
const foo = (a, b, c) => a + b + c;

curry(foo)(1)(2, 3); //6
```

## uncurry() {#uncurry}

Uncurries a function, the inverse operation of [curry](#curry).

-   **Type**

$$
(a \to b \to \ldots \to n \to x) \to (a, b, \ldots, n) \to x
$$

-   **Details**

Takes a function that has been curried via [curry](#curry) as an argument and returns the corresponding uncurried function.

-   **Example**

```js
const foo = (a, b, c) => a + b + c;

uncurry(curry(foo)(1)); //(b, c) -> a + b + c
```
