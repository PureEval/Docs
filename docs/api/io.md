# IO(Monad) {#IO-api}

IO 是一个用来控制流程、隔离副作用的单子。

## Example - IO

此处是一个 IO 单子使用的总例。

```js
import { readFileSync } from 'fs';

const myReadFileSync = (path) => IO.of(() => fs.readFileSync(path, 'utf8'));

const print = (message) => IO.of(() => console.log(message));

const program = myReadFileSync('./example.txt').chain((content) => print(content));

program.run();
```

## IO {#IO}

IO 的构造函数，用来进行 IO 的常规构造，传入的值必须是一个函数。

-   **Type**

$$()\to a\to IO\ a$$

-   **Example**

```js
IO(() => 1); //IO 1
```

## IO.map() {#iomap}

对 IO 中的值进行映射。

-   **Type**

$$IO\ a\to (a\to b)\to IO\ b$$

-   **Example**

```js
IO(() => 1).map(add(1)); //IO 2
```

## IO.chain() {#iochain}

在当前 IO 任务后拼接新的 IO 任务。

-   **Type**

$$IO a\to (a\to IO\ b)\to IO\ b$$

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

## IO.run() {#iorun}

一个 IO 单子在没有执行 run 方法之前都是不会执行的。

run 方法用来执行一个 IO 单子。

::: warning
这个操作是 Unsafe 的。
:::

-   **Type**

$$IO\ a\to a$$

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
