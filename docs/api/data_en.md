# Data {#data-api}

::: warning
The content in this section is experimental. Current performance may not be suitable for regular code production, and the APIs in this section may be removed or changed at any time.
:::

This section provides an imperfect method for defining abstract data structures.

## Data() {#data}

Constructs an abstract data structure.

-   **Details**

Takes a set of constructor functions and returns an algebraic data structure composed of these constructors.

-   **Example**

##### Example 1

```js
const Maybe = Data('Just a', 'Nothing');
```

At this point, the definition of the Maybe object is as follows:

```
Maybe
    - binder // Object for binding to an external environment
    - function bindShow(show) => show // Function for setting how the Data is displayed
    - function from(data) => boolean // Function to determine whether it's of type Maybe
    - function Just(a) => (Just a) // Actual constructor function
    - Nothing => Nothing // Actual constructor function
```

For Just/Nothing, their structures are:

```
Just
    - function is(data) => boolean // Function to determine whether it's of type Just

(Just a)
    - a = a
    - args = [a]

Nothing
    - function is(data) => boolean // Function to determine whether it's of type Nothing
```

You can use it like this:

```js
const foo = Maybe.Just(1);

foo.a; // 1

Maybe.Just.is(foo); // true
```

##### Example 2

You can also introduce multiple constructor arguments to complete more complex algebraic data structures:

```js
const Round = Data('Round x y r');

// Square Round x y r => Number
const Square = (round) => 3.14 * round.r ** 2;

Square(Round.Round(1, 1, 5)); //78.5
```

##### Example 3

If you are using Node.js, or your environment has the concept of global variables, you can directly bind Data to the environment:

Each algebraic data type's `binder` property provides a collection of quantities that can be safely bound to the global scope. These will only include the constructors for each type.

```js
Object.assign(global, Data('Round x y r').binder);

// Square Round x y r => Number
const Square = (round) => 3.14 * round.r ** 2;

Square(Round(1, 1, 5)); //78.5
```

##### Example 4

You can use `bindShow` to define a `show` method for your algebraic data types to convert between algebraic types and basic types.

Note: The `show` method will return the type name of that type before it is bound by `bindShow`.

```js
const Nat = Data('Succ m', 'Zero');

Nat.bindShow(match(
    [Zero.is, 0],
    [Succ.is, ({ m }) => m.show() + 1]
));

Nat.Succ(Nat.Succ(Nat.Zero)).show(); //2
```