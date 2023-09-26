## Task {#task-api}

Task can safely handle asynchronous operations and can be considered as the asynchronous version of the Either functor.

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

### Task {#task}

The constructor function for Task, used for regular Task construction.

- **Type**

\[
(reject \to e, resolve \to a) \to Task\ (a|e)
\]

- **Example**

```js
Task((reject, resolve) => {
	//...do sth.
	resolve(114514);
}); //Task actually 114514
```

### Task.map() {#taskmap}

Maps over the value inside the Task.

- **Type**

\[
Task\ (a|e) \to (a \to b) \to Task\ (b|e)
\]

- **Example**

```js
Task((reject, resolve) => {
	//...do sth.
	resolve(114513);
}).map(add(1)); //Task actually 114514
```

### Task.chain() {#taskchain}

Chains a new Task operation after the current Task.

- **Type**

\[
Task\ (a|e) \to (a \to Task(b|e)) \to Task\ (b|e)
\]

- **Example**

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

### Task.fold() {#taskfold}

Extracts the value from the Task by applying two handling functions; the first one for the `reject` case and the second one for the `resolve` case.

- **Type**

\[
Task\ (a|e) \to (e \to b) \to (a \to c) \to a|c
\]

- **Example**

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
