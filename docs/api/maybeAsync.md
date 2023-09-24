# MaybeAsync {#maybeasync-api}

The `MaybeAsync` type in PureEval extends the `Maybe` type to support asynchronous operations. Like `Maybe`, it's a fusion of `Data Maybe` and `Class Monad` but with asynchronous capabilities.

## MaybeAsync {#maybeasync}

The `MaybeAsync` type encapsulates a value that may be an indeterminate `Promise`.

Both `undefined` and `null` are considered as [NothingAsync](#nothing).

- **Type**

$$
\text{Data Maybe } a = \text{Just } a \,|\, \text{Nothing}
$$

## MaybeAsync.of() {#of}

Lifts a `Promise` into a `MaybeAsync` type.

- **Type**

$$
\text{Promise } a \to \text{Maybe } a
$$

- **Example**

```js
const foo = new Promise((res, rej) => {
  res('Hello, World!');
});
const task = MaybeAsync.of(foo);
```

## MaybeAsync.is() {#is}

Determines whether a value is of type `MaybeAsync`.

- **Type**

$$
* \to \text{Bool}
$$

- **Example**

```js
MaybeAsync.is(JustAsync(new Promise((res) => res(1)))); // true
MaybeAsync.is(NothingAsync); // true
```

## MaybeAsync.isNothing() {#isnothing}

Determines if the `MaybeAsync` is `Nothing`.

- **Type**

$$
\overline{\text{MaybeAsync } a} \to \text{Bool}
$$

- **Example**

```js
JustAsync(1).isNothing(); // false
JustAsync(null).isNothing(); // true
```

## MaybeAsync.map() {#map}

Maps the value inside `MaybeAsync` through a function, constructing a new `MaybeAsync` to hold the result.

- **Type**

$$
\overline{\text{MaybeAsync } a} \to (a \to b) \to \text{MaybeAsync } b
$$

- **Example**

```js
JustAsync(new Promise((res) => res('Hello, World!'))).map(toLowerCase); // MaybeAsync "hello, world!"
```

## MaybeAsync.fold() {#fold}

::: warning
Note: Due to the asynchronous nature, the return value is a `Promise`. Use `await` to resolve it.
:::

Applies a function to the value within `MaybeAsync a`.

- **Type**

$$
\overline{\text{MaybeAsync } a} \to (\text{Nothing} \to b) \to (a \to b) \to \text{Promise } b
$$

- **Example**

```js
await JustAsync(new Promise((res) => res('Hello, World!'))).fold(() => 'fuck', id); // "Hello, World!"
await JustAsync(new Promise((res) => res(null))).fold(() => 'fuck', id); // "fuck"
```

## MaybeAsync.chain() {#chain}

Chains a function that returns a `MaybeAsync` type, allowing for method chaining.

- **Type**

$$
\overline{\text{MaybeAsync } a} \to (a \to \text{MaybeAsync } b) \to \text{MaybeAsync } b
$$

- **Example**

```js
// Demonstrative example with asynchronous operations
// [...]
sendEmailToUserById(123);
```

## JustAsync() {#just}

Constructor function for the `MaybeAsync` type.

Equivalent to [MaybeAsync.of](#of).

- **Type**

$$
a \to \text{MaybeAsync } a
$$

- **Example**

```js
JustAsync(1); // Just 1
```

## NothingAsync {#nothing}

Constructor for the `MaybeAsync` type, representing the absence of a value.

