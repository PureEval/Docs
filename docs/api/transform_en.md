# Transform {#transform-api}

## compose() {#compose}

Performs function composition from right to left (the output of the function on the right becomes the input to the function on the left).

-   **Type**

\[
((b\to a),(c \to b),\ldots,(o\to p),((u,v,\ldots,n)\to o))\to ((u,v,\ldots,n)\to a)
\]

-   **Details**

Takes several functions as arguments. The return value is a function with the same number of arguments as the last argument, which is the result of the function composition from right to left of all the functions in the arguments.

Obviously, except for the last argument, which may be a multi-argument function, all other arguments should be unary functions.

-   **Example**

```js
const div_and_add = compose(add(1), mul(0.5));

div_and_add(229026); //114514
```

## pipe() {#pipe}

Performs function composition from left to right (the output of the function on the left becomes the input to the function on the right).

-   **Type**

\[
(((u,v,\ldots,n)\to o),(o\to p),\ldots,(c \to b),(b\to a))\to ((u,v,\ldots,n)\to a)
\]

-   **Details**

Takes several functions as arguments. The return value is a function with the same number of arguments as the first argument, which is the result of the function composition from left to right of all the functions in the arguments.

Obviously, except for the first argument, which may be a multi-argument function, all other arguments should be unary functions.

-   **Example**

```js
const div_and_add = pipe(mul(0.5), add(1));

div_and_add(229026); //114514
```

## call() {#call}

Executes an existing function.

-   **Type**

\[
((a,b,\ldots,n)\to x)\to [a,b,\ldots,n]\to x
\]

-   **Details**

The first argument is the function to be executed. The second argument represents the parameters for the function to be executed, passed as an array.

-   **Example**

```js
const foo = (a, b) => a + b;

call(foo, ['114', '514']); //"114514"
```

## andThen() {#andThen}

Adds a function after a Promise, equivalent to `Promise.then`.

-   **Type**

\[
(resolve,reject)\to a|e\to \text{Promise}\ a\to a|e
\]

-   **Details**

The first argument is a function, and the second argument passes in the Promise object to be operated on.

-   **Example**

```js
const fetch = () =>
	new Promise((resolve, reject) => {
		//...do sth.
	});

await pipe(fetch, andThen(toUpper));
```

## tryCatch() {#tryCatch}

Function wrapper for error detection.

-   **Type**

\[
f\to (e\to *)\to f
\]

-   **Details**

The first argument passes in a function `tryer`, and the second argument passes in a function `reject`. The return value is the curried wrapper of the `tryer` function.

`tryCatch` essentially creates a wrapper for `tryer`, returning the normal output of `tryer` when no error occurs. Otherwise, it will pass both the error and the arguments given to `tryer` to `reject`.

-   **Example**

```js
const foo = tryCatch(div(1), always('hello'));
foo(1); //1
foo(0); //hello/INF
```