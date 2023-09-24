# IO (Monad) {#IO-api}

IO is a monad used for controlling flow and isolating side effects.

Here is a general example of using the IO monad:

```js
import { readFileSync } from 'fs';

const myReadFileSync = (path) => IO(() => fs.readFileSync(path, 'utf8'));

const print = (message) => IO(() => console.log(message));

const program = myReadFileSync('./example.txt').chain((content) => print(content));

program.run();
```

## IO {#IO}

The IO constructor function, used for standard IO construction. The value passed in must be a function.

-   **Type**

$$
() \to a \to IO\ a
$$

-   **Example**

```js
IO(() => 1); //IO 1
```

## IO.map() {#iomap}

Maps the value inside IO.

-   **Type**

$$
IO\ a \to (a \to b) \to IO\ b
$$

-   **Example**

```js
IO(() => 1).map(add(1)); //IO 2
```

## IO.chain() {#iochain}

Chains a new IO task after the current one.

-   **Type**

$$
IO\ a \to (a \to IO\ b) \to IO\ b
$$

-   **Example**

```js
const readFile = (filename) => IO(() => fs.readFileSync(filename, 'utf-8'));

const parseJSON = (str) => IO(() => JSON.parse(str));

const getProp = (prop) => (obj) => IO(() => obj[prop]);

const example = readFile('example.json')
	.chain(parseJSON)
	.chain(getProp('data'))
	.map((data) => data.toUpperCase())
	.run();

console.log(example);
```

## IO.handle(Algebraic Effects) {#iohandle}

The `handle` method is an implementation of Algebraic Effects.

This method allows the content of the `perform` function to be attached to IO, allowing the `perform` function to be executed within the effect.

-   **Type**

$$
IO\ a \to (* \to *) \to IO\ a
$$

-   **Example**

```js
//calc 1*x + 2*y + 3*z
function foo(x, y, z) {
	return IO((perform) => {
		const a = 1 * perform('x');
		const b = 2 * perform('y');
		const c = 3 * perform('z');
		return a + b + c;
	})
		.handle(match('x', x, 'y', y, 'z', z))
		.run();
}

console.log(foo(1, 2, 3)); //14
```

## IO.run() {#iorun}

An IO monad will not execute until the `run` method is called.

The `run` method is used to execute an IO monad.

::: warning
This operation is Unsafe.
:::

-   **Type**

$$
IO\ a \to a
$$

-   **Example**

```js
const readFile = (filename) => IO(() => fs.readFileSync(filename, 'utf-8'));

const parseJSON = (str) => IO(() => JSON.parse(str));

const getProp = (prop) => (obj) => IO(() => obj[prop]);

const example = readFile('example.json')
	.chain(parseJSON)
	.chain(getProp('data'))
	.map((data) => data.toUpperCase())
	.run();

console.log(example);
```
