# Logic {#logic-api}

## either() {#either}

Computes the result of the logical OR operation.

-   **Type**

$$
\text{Bool} \to \text{Bool} \to \text{Bool}
$$

-   **Details**

Takes two boolean parameters $a, b$ and returns $a \lor b$.

-   **Example**

```js
either(true, false); // true

either(false)(false); // false
```

## both() {#both}

Computes the result of the logical AND operation.

-   **Type**

$$
\text{Bool} \to \text{Bool} \to \text{Bool}
$$

-   **Details**

Takes two boolean parameters $a, b$ and returns $a \land b$.

-   **Example**

```js
both(true, false); // false

both(true)(true); // true
```

## not() {#not}

Computes the result of the NOT operation.

-   **Type**

$$
\text{Bool} \to \text{Bool}
$$

-   **Details**

Takes one boolean parameter $a$ and returns $\lnot a$.

-   **Example**

```js
not(false); // true
```

## lt() {#lt}

Computes the result of the $<$ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a < b$.

-   **Example**

```js
lt(2, 3); // true

lt(3)(3); // false
```

## lte() {#lte}

Computes the result of the $ \leq $ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a \leq b$.

-   **Example**

```js
lte(2, 3); // true

lte(3)(3); // true
```

## gt() {#gt}

Computes the result of the $>$ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a > b$.

-   **Example**

```js
gt(2, 3); // false

gt(3)(3); // false
```

## gte() {#gte}

Computes the result of the $\geq$ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a \geq b$.

-   **Example**

```js
gte(2, 3); // false

gte(3)(3); // true
```

## equal() {#equal}

Computes the result of the $==$ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a == b$.

-   **Example**

```js
equal(1, 1); // true

equal(5)(1); // false
```

## equalStrict() {#equalstrict}

Computes the result of the $===$ operation.

-   **Type**

$$
\text{Ord} \ a \Rightarrow a \to a \to \text{Bool}
$$

-   **Details**

Takes two comparable parameters $a, b$ and returns $a === b$.

-   **Example**

```js
equalStrict(1, 1); // true

equalStrict(5)(1); // false
```

## deepEqual() {#deepequal}

Compares whether two values (which can be arrays, objects, or general values) are equal.

-   **Type**

$$
* \to * \to \text{Bool}
$$

-   **Details**

Takes two values and returns whether they are deeply equal or not.

-   **Example**

```js
deepEqual([1, 2, 3], [4, 5, 6]); // false
deepEqual({ a: 1 }, { a: 1 }); // true
```

## when() {#when}

Constructs a function that performs a certain operation when a condition is met.

-   **Type**

$$
(a \to \text{Bool}) \to (a \to b) \to a \to a|b
$$

-   **Details**

Initially takes two function-type parameters $a, b$, and returns a function that takes a single argument. If the argument satisfies $a$, it will execute $b$ and return its result; otherwise, it will return the original argument.

-   **Example**

```js
const foo = when(
    (v) => v == ' is you!',
    (v) => 'homo' + v
);
foo(' is you!'); // "homo is you!"
```

## unless() {#unless}

Constructs a function that performs a certain operation when a condition is not met.

-   **Type**

$$
(a \to \text{Bool}) \to (a \to b) \to a \to a|b
$$

-   **Details**

Initially takes two function-type parameters $a, b$, and returns a function that takes a single argument. If the argument does not satisfy $a$, it will execute $b$ and return its result; otherwise, it will return the original argument.

-   **Example**

```js
const foo = unless(
    (v) => !(v == ' is you!'),
    (v) => 'homo' + v
);
foo(' is you!'); // "homo is you!"
```

## ifElse() {#ifElse}

Constructs a function that performs a certain operation based on a condition.

-   **Type**

$$
(a \to \text{Bool}) \to (() \to b) \to (() \to c) \to b|c
$$

-   **Details**

Initially takes three function-type parameters $a, b, c$, and returns a function that takes a single argument. If the argument satisfies $a$, it will execute $b$ and return its result; otherwise, it will execute $c$ and return its result.

-   **Example**

```js
const foo = ifElse(
    (v) => v == ' is you!',
    (v) => 'homo' + v,
    (v) => 'homo' + v
);
foo(' not you!'); // "homo not you!"
```

## id() {#id}

Returns the passed-in argument.

-   **

Type**

$$
a \to a
$$

-   **Details**

Takes an argument and returns it directly.

-   **Example**

```js
id(114514); // 114514
```

## always() {#always}

Constructs a function that returns a constant value.

-   **Type**

$$
a \to () \to a
$$

-   **Details**

Takes a constant value and returns a function that, when invoked, returns this constant value.

-   **Example**

```js
always(114514)(); // 114514
```

## eqType() {#eqType}

Determines if the types of two values are equal.

-   **Type**

$$
* \to * \to \text{Boolean}
$$

-   **Details**

Takes two values and returns whether their types are equal.

-   **Example**

```js
eqType(1, 1); // true
eqType(1, '1'); // false
```

## eqData() {#eqData}

Compares whether two abstract data structures are equal.

-   **Type**

$$
\text{Data} \to a \to b \to \text{Boolean}
$$

-   **Details**

Takes two objects constructed by the Data API. The function can determine whether these two objects are from the same abstract data structure and are equal.

-   **Example**

```js
const foo = Data('A a b c');
eqData(foo.A(1, 1, 2), foo.A(1, 1, 2)); // true
```
