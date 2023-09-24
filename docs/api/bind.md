# Bind {#bind-api}

## bind() {#bind}

Pre-binds some arguments to a function.

-   **Type**

$$
(a \to b \to c \to \ldots \to x) \to a \to b \to \bar{c} \to \ldots \to c \to x
$$

-   **Details**

The first argument is a function, followed by a number of arguments that should not exceed the number of parameters of the original function.

For each argument, if a definite value is passed, it will be directly bound to the original function; if a placeholder [\_](/api/placeholder.html#_) is passed, it indicates that a value is still needed for that position.

The return value is a new function with the original function's arguments bound as described.

-   **Example**

```js
const foo = (a, b, c) => a + b + c;
bind(foo, 1, _, 3)(4); //8
```