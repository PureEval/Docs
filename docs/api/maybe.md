# Maybe (Monad) {#maybe-api}

The `Maybe` type in PureEval may differ from the `Data Maybe` found in other functional languages like Haskell. In PureEval, `Maybe` is a fusion of `Data Maybe` and `Class Monad`.

## Maybe {#maybe}

The `Maybe` type encapsulates a value that may be indeterminate.

If an operation on a specific value within `Maybe` fails, it turns into `Nothing`.

Both `undefined` and `null` are considered as [Nothing](#nothing).

-   **Type**

$$
\text{Data Maybe } a = \text{Just } a \,|\, \text{Nothing}
$$

## Maybe.of() {#of}

Lifts a value into a `Maybe` type.

-   **Type**

$$
a \to \text{Maybe } a
$$

-   **Example**

```js
Maybe.of(1); // Just 1
Maybe.of(null); // Nothing
```

## Maybe.is() {#is}

Determines whether a value is of type `Maybe`.

-   **Type**

$$
* \to \text{Bool}
$$

-   **Example**

```js
Maybe.is(Just(1)); // true
Maybe.is(Nothing); // true
```

## Maybe.isNothing() {#isnothing}

Determines if the `Maybe` is `Nothing`.

-   **Type**

$$
\overline{\text{Maybe } a} \to \text{Bool}
$$

-   **Example**

```js
Just(1).isNothing(); // false
Just(null).isNothing(); // true
```

## Maybe.map() {#map}

Maps the value inside `Maybe` through a function, constructing a new `Maybe` to hold the result.

-   **Type**

$$
\overline{\text{Maybe } a} \to (a \to b) \to \text{Maybe } b
$$

-   **Example**

```js
Just(1).map(add(114513)); // Just 114514
```

## Maybe.fold() {#fold}

Applies a function to the value within `Maybe a`.

Takes two unary function parameters for handling cases when `Maybe a` is `Nothing` and when it is not.

-   **Type**

$$
\overline{\text{Maybe } a} \to (\text{Nothing} \to b) \to (a \to b) \to b
$$

-   **Example**

```js
Just('The body next door').fold(() => 'Nothing', id); // "The body next door"
```

## Maybe.chain() {#chain}

Chains a function that returns a `Maybe` type, allowing for method chaining.

-   **Type**

$$
\overline{\text{Maybe } a} \to (a \to \text{Maybe } b) \to \text{Maybe } b
$$

-   **Example**

```js
// Example demonstrating method chaining using Maybe
// [...]
console.log(city); // 'Anytown'
```

## Just() {#just}

Constructor function for the `Maybe` type.

Equivalent to [Maybe.of](#of).

-   **Type**

$$
a \to \text{Maybe } a
$$

-   **Example**

```js
Just(1); // Just 1
```

## Nothing {#nothing}

Constructor for the `Maybe` type representing the absence of a value.
