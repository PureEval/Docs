# Task {#task-api}

Task 可以安全的处理异步操作，可以被认为是异步版本的 Either 函子。

```js
import { readFile } from 'fs';

function myReadFile(fileName) {
	return Task((reject, resolve) => {
		readFile(fileName, (err, data) => {
			if (err) reject(err);
			else resolve(data.toString());
		});
	});
}

myReadFile('test.js').map(trim).map(toUpper).fold(console.error, console.log);
```

## Task {#task}

Task 的构造函数，用来进行 Task 的常规构造。

-   **Type**

$$(reject\to e, resolve\to a)\to Task\ (a|e)$$

-   **Example**

```js
Task((reject, resolve) => {
	//...do sth.
	resolve(114514);
}); //Task actually 114514
```

## Task.map() {#taskmap}

对 Task 中的值进行映射。

-   **Type**

$$Task\ (a|e)\to(a\to b)\to Task\ (b|e)$$

-   **Example**

```js
Task((reject, resolve) => {
	//...do sth.
	resolve(114513);
}).map(add(1)); //Task actually 114514
```

## Task.chain() {#taskchain}

在当前 Task 任务后拼接新的 Task 任务。

-   **Type**

$$Task\ (a|e)\to(a\to Task(b|e))\to Task\ (b|e)$$

-   **Example**

```js
const fetchData = (url) =>
	Task((reject, resolve) => {
		//fetch...
	});

const processData = (data) =>
	Task((reject, resolve) => {
		//process..
	});

const combinedTask = fetchData('https://example.com/data').chain(processData);

combinedTask.fold(
	(error) => console.error(error),
	(result) => console.log(result)
);
```

## Task.fold() {#taskfold}

将 Task 中的值映射取出，需要传入两个处理函数，第一个针对 reject 的情况，第二个针对 resolve 的情况。

-   **Type**

$$Task\ (a|e)\to(e\to b)\to(a\to c)\to a|c$$

-   **Example**

```js
const fetchData = (url) =>
	Task((reject, resolve) => {
		//fetch...
	});

const processData = (data) =>
	Task((reject, resolve) => {
		//process..
	});

const combinedTask = fetchData('https://example.com/data').chain(processData);

combinedTask.fold(
	(error) => console.error(error),
	(result) => console.log(result)
);
```
