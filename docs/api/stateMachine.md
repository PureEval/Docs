## StateMachine {#statemachine-api}

### higherPipe() {#higherPipe}

Performs high-dimensional function composition from left to right.

- **Type**

Note: The type is not unique and depends on the offset array.

\[
[(a \to a), \ldots, (a \to a)] \to [Int] \to (a \to a)
\]

- **Details**

The first argument takes an array of functions, and the second argument takes an array of offsets. Both arrays should be of the same length.

The function will compose from left to right, using the result of the previous function as the input for the next function. The numbers in the corresponding positions of the offset array will dictate how many times the function will be iteratively applied. If it is 0, the function will not be executed.

The return value will be the new function composed according to the above rules, and the number of parameters will be based on the first non-zero value in the offset array from left to right.

- **Example**

```js
higherPipe([add(1), mul(2)], [5, 1])(1); //12
```

### higherComp() {#higherComp}

Performs high-dimensional function composition from right to left.

- **Type**

Note: The type is not unique and depends on the offset array.

\[
[(a \to a), \ldots, (a \to a)] \to [Int] \to (a \to a)
\]

- **Details**

Similar to `higherPipe()`, but the composition is from right to left.

The return value is the new function composed according to the above rules, and the number of parameters will be based on the first non-zero value in the offset array from right to left.

- **Example**

```js
higherComp([mul(2), add(1)], [1, 5])(1); //12
```

### coalgebra() {#coalgebra}

::: warning
Although this function is a pure function, its return value is not a pure function, meaning it may have different return values for the same parameters.
:::

Generates a function that supports infinite iteration.

- **Type**

\[
a \to (a \to a) \to (() \to a)
\]

- **Details**

The first argument sets a seed, and the second argument takes a unary function.

The return value is a function that, when called, will return the function value of the unary function with the seed as the parameter and update the seed to this function value.

- **Example**

```js
const foo = coalgebra(1, add(1));

foo(); //2
foo(); //3
```

### stateMachine() {#stateMachine}

::: warning
Although this function is a pure function, its return value is not a pure function (Pure Function), meaning it may have different return values for the same parameters.
:::

Generates a state machine function that shifts states through an offset.

- **Type**

Note: The type is not unique and depends on the offset array.

\[
a \to [(a \to b), \ldots, (c \to d)] \to ([Int] \to d)
\]

- **Details**

The first argument sets a seed, and the second argument takes an array of functions.

The return value is a state machine that takes an offset array as its argument. The offset array and the function array should be of the same length.

For each input offset array, the original function array will be composed in a [higher-dimensional pipeline](#higherPipe) manner. The final return value will be the function value of the composed function with the seed as the parameter, and the seed value will be updated to this function value.

- **Example**

```js
const foo = stateMachine(1, [add(1), mul(2), div(3)]);

foo([0, 2, 0]); //4
foo([2, 0, 1]); //2
```
