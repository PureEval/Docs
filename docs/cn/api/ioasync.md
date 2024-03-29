# IOAsync {#IO-api}

IO 是一个用来控制流程、隔离副作用的单子。

IOAsync 是它的异步版本，支持对 Promise 的包装。

此处是一个 IOAsync 单子使用的总例。

```js
const getUserInfo = IOAsync(async () => {
	const name = await fetchNameFromDatabase();
	const age = await fetchAgeFromDatabase();
	return { name, age };
});

const greetUser = (userInfo) => `Hello, ${userInfo.name}! You are ${userInfo.age} years old.`;

getUserInfo.map(greetUser).run().then(console.log).catch(console.error);
```

## IOAsync {#IO}

IOAsync 的构造函数，用来进行 IOAsync 的常规构造，传入的函数必须返回一个 Promise 对象。

-   **Type**

$$async()\to a\to IOAsync\ a$$

-   **Example**

```js
IOAsync(async () => 1); //IOAsync 1
```

## IOAsync.map() {#iomap}

对 IOAsync 中的值进行映射。

-   **Type**

$$IOAsync\ a\to (a\to b)\to IOAsync\ b$$

-   **Example**

```js
IO(async () => 1).map(add(1)); //IOAsync 2
```

## IOAsync.chain() {#iochain}

在当前 IOAsync 任务后拼接新的 IOAsync 任务。

-   **Type**

$$IOAsync a\to (a\to IOAsync\ b)\to IOAsync\ b$$

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

## IOAsync.handle(Algebraic Effects) {#iohandle}

handle 方法是一个代数效应(Algebraic Effects)的实现。

采用该方法可以挂载 perform 函数的内容到 IOAsync 上，进而在 effect 中通过 perform 函数执行。

-   **Type**

$$IOAsync\ a\to *\to IOAsync\ a$$

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

## IOAsync.run() {#iorun}

一个 IOAsync 单子在没有执行 run 方法之前都是不会执行的。

run 方法用来执行一个 IOAsync 单子。

::: warning
这个操作是 Unsafe 的。
:::

-   **Type**

$$IOAsync\ a\to Promise\ a$$

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
