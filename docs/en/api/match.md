# Match {#match-api}

## match() {#match}

Performs pattern matching.

-   **Details**

Takes several pairs of arrays corresponding to each rule; each array contains two elements, referred to here as `checker` and `executer`.

`match` will return a function that accepts a certain number of arguments. It will then sequentially evaluate each `checker` and, upon the first successful match, execute the corresponding `executer` and return its result.

Detailed matching rules for each `checker` are as follows:

|                   `checker` Type                   | Number of Matching Parameters<sup>[2]</sup> |                                     Matching Rule                                      |
| :------------------------------------------------: | :-----------------------------------------: | :------------------------------------------------------------------------------------: |
| Basic Literal Values (number/string/object/array<sup>[1]</sup>/[maybe](/api/maybe.html#maybe)) |                    1                     | Compares the argument with the literal value for equality<sup>[3]</sup> to determine match success |
|               Function (synchronous)               |                   Any                    | Passes all matching values to the function and determines match success based on the function's `true/false` return value |
|                       Array                        |              Length of Array              | The array can contain the first two types of matchers. Each value is matched individually. All must succeed for the array to match. |
| [otherwise](/api/placeholder.html#otherwise)       |                   Any                    | Always succeeds when used, suitable for handling "other" cases |

Execution rules for each `executer` are as follows:

| `executer` Type |                      Execution Rule                       |                                                     Note                                                      |
| :-------------: | :--------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
|    Literal      | Immediately returns this literal value when match succeeds |                                                                                                               |
|    Function     | Passes all matching values to the function and returns the function's result | Although the function is not explicitly marked as synchronous like `checker`, if it returns a Promise, the Promise will be returned as-is |

Notes:

[1]: Because `match`'s design relies on arrays for classification, when you want to match an array literal, you should nest it inside another array (see examples below).

[2]: This column is for identification purposes only; the actual `length` property value of the function returned by `match` will be 0.

[3]: `match` uses the same equality rules for numbers/strings as [equalStrict](/api/logic.html#equalstrict), for objects/arrays as [deepEqual](/api/logic.html#deepequal), and for `maybe` as comparing the folded values using [equalStrict](/api/logic.html#equalstrict).

-   **Example**

##### Example 1

```js
const sort = match(
	[[[]], []],
	[
		_,
		([x, ...xs]) => [
			...sort(filter(lte(x), xs)),
			x,
			...sort(filter(gt(x), xs))
		]
	]
);

const fib = match(
    [1, 1],
    [2, 2],
    [_, (v) => fib(v - 1) + fib(v - 2)]
);
```

##### Example 2

```js
// Data Nat = Succ Nat | Zero
const Nat = Data('Succ m', 'Zero');
Object.assign(global, Nat.binder);

// instance Show Nat
Nat.bindShow(match(
    [Zero.is, 0],
    [Succ.is, ({ m }) => m.show() + 1]
));

// add :: Nat -> Nat -> Nat
// add n Zero = n
// add n (Succ m) = Succ (add n m)
const add = match(
	[[_, eqData(Zero)], (n, _) => n],
	[[_, eqData(Succ(_))], (n, { m }) => Succ(add(n, m))]
);

add(Succ(Succ(Zero)), Succ(Zero)).show(); //3
```
