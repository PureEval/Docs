# Task {#task-api}

Task 可以安全的处理异步操作，可以被认为是异步版本的 Either 函子。

## Example - Task

此处是一个 Task 函子使用的总例。

```js
import { readFile } from "fs";

function myReadFile(fileName) {
  return new Task((reject, resolve) => {
    readFile(fileName, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
}

myReadFile("test.js").map(trim).map(toUpper).fold(console.error, console.log);
```

## Task {#task}

### construct() {#taskconstuct}

Task 的构造函数，用来进行 Task 的常规构造。

- **Type**

$$(reject\rightarrow e, resolve\rightarrow a)\rightarrow Task\ (a|e)$$

- **Example**

```js
new Task((reject, resolve) => {
  //...do sth.
  resolve(114514);
}); //Task actually 114514
```

### Task.of() {#taskof}

将一个值转换为 Task 函子。

- **Type**

$$a\rightarrow Task\ a$$

- **Example**

```js
Task.of(1); //Task actually 1
```

### map() {#taskmap}

对 Task 中的值进行映射。

- **Type**

$$Task\ (a|e)\rightarrow(a\rightarrow b)\rightarrow Task\ (b|e)$$

- **Example**

```js
new Task((reject, resolve) => {
  //...do sth.
  resolve(114513);
}).map(add(1)); //Task actually 114514
```

### chain() {#taskchain}

在当前 Task 任务后拼接新的 Task 任务。

- **Type**

$$Task\ (a|e)\rightarrow(a\rightarrow Task(b|e))\rightarrow Task\ (b|e)$$

- **Example**

```js
const fetchData = (url) =>
  new Task((reject, resolve) => {
    //fetch...
  });

const processData = (data) =>
  new Task((reject, resolve) => {
    //process..
  });

const combinedTask = fetchData("https://example.com/data").chain(processData);

combinedTask.fold(
  (error) => console.error(error),
  (result) => console.log(result)
);
```

### fold() {#taskfold}

将 Task 中的值映射取出，需要传入两个处理函数，第一个针对 reject 的情况，第二个针对 resolve 的情况。

- **Type**

$$Task\ (a|e)\rightarrow(e\rightarrow b)\rightarrow(a\rightarrow c)\rightarrow a|c$$

- **Example**

```js
const fetchData = (url) =>
  new Task((reject, resolve) => {
    //fetch...
  });

const processData = (data) =>
  new Task((reject, resolve) => {
    //process..
  });

const combinedTask = fetchData("https://example.com/data").chain(processData);

combinedTask.fold(
  (error) => console.error(error),
  (result) => console.log(result)
);
```
