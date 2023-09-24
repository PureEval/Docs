# IOAsync {#IOAsync-api}

IOAsync is an asynchronous version of the IO monad used for controlling flow and isolating side effects. It supports wrapping around Promises.

Here is a general example of using the IOAsync monad:

```js
const getUserInfo = IOAsync(async () => {
	const name = await fetchNameFromDatabase();
	const age = await fetchAgeFromDatabase();
	return { name, age };
});

const greetUser = (userInfo) => `Hello, ${userInfo.name}! You are ${userInfo.age} years old.`;

getUserInfo.map(greetUser).run().then(console.log).catch(console.error);
```

## IOAsync {#IOAsync}

The constructor function for IOAsync, used for standard IOAsync construction. The function passed in must return a Promise object.

-   **Type**

$$
\text{async}() \to a \to IOAsync\ a
$$

-   **Example**

```js
IOAsync(async () => 1); //IOAsync 1
```

## IOAsync.map() {#IOAsync-map}

Maps the value inside IOAsync.

-   **Type**

$$
IOAsync\ a \to (a \to b) \to IOAsync\ b
$$

-   **Example**

```js
IOAsync(async () => 1).map(add(1)); //IOAsync 2
```

## IOAsync.chain() {#IOAsync-chain}

Chains a new IOAsync task after the current one.

-   **Type**

$$
IOAsync\ a \to (a \to IOAsync\ b) \to IOAsync\ b
$$

-   **Example**

```js
import { readFile, writeFile } from 'fs';

const myReadFile = (filename) =>
	IOAsync(
		() =>
			new Promise((resolve, reject) => {
				readFile(filename, 'utf8', (err, data) => {
					if (err) reject(err);
					else resolve(data);
				});
			})
	);

const writeFile = (filename, data) =>
	IOAsync(
		() =>
			new Promise((resolve, reject) => {
				writeFile(filename, data, 'utf8', (err) => {
					if (err) reject(err);
					else resolve();
				});
			})
	);

const program = myReadFile('input.txt')
	.map((data) => data.toString().toUpperCase())
	.chain((data) => writeFile('output.txt', data));

program.run();
```

## IOAsync.handle(Algebraic Effects) {#IOAsync-handle}

The `handle` method is an implementation of Algebraic Effects.

This method allows the content of the `perform` function to be attached to IOAsync, allowing the `perform` function to be executed within the effect.

-   **Type**

$$
IOAsync\ a \to * \to IOAsync\ a
$$

-   **Example**

```js
//calc 1*x + 2*y + 3*z
function fooAsync(x, y, z) {
	return IOAsync(async (perform) => {
		const a = 1 * (await perform('x'));
		const b = 2 * (await perform('y'));
		const c = 3 * (await perform('z'));
		return a + b + c;
	})
		.handle(match('x', x, 'y', y, 'z', z))
		.run();
}

console.log(await fooAsync(1, 2, 3)); //14
```

## IOAsync.run() {#IOAsync-run}

An IOAsync monad will not execute until the `run` method is called.

The `run` method is used to execute an IOAsync monad.

::: warning
This operation is Unsafe.
:::

-   **Type**

$$
IOAsync\ a \to \text{Promise}\ a
$$

-   **Example**

```js
import { readFile, writeFile } from 'fs';

const myReadFile = (filename) =>
	IOAsync(
		() =>
			new Promise((resolve, reject) => {
				readFile(filename, 'utf8', (err, data) => {
					if (err) reject(err);
					else resolve(data);
				});
			})
	);

const writeFile = (filename, data) =>
	IOAsync(
		() =>
			new Promise((resolve, reject) => {
				writeFile(filename, data, 'utf8', (err) => {
					if (err) reject(err);
					else resolve();
				});
			})
	);

const program = myReadFile('input.txt')
	.map((data) => data.toString().toUpperCase())
	.chain((data) => writeFile('output.txt', data));

program.run();
```
