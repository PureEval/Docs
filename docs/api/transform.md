# Transform {#transform-api}

## compose() {#compose}

从右向左执行函数组合（右侧函数的输出作为左侧函数的输入）。

-   **Type**

$$((b\to a),(c \to b),...,(o\to p),((u,v,...,n)\to o))\to ((u,v,...,n)\to a)$$

-   **Details**

传入若干个函数作为参数，返回值为一个参数数量同最后一个参数的函数，为参数中所有函数从右向左函数组合的结果。

显然的，除了最后一个参数允许为多参函数外，其他参数应均为单元函数。

-   **Example**

```js
const div_and_add = compose(add(1), mul(0.5));

div_and_add(229026); //114514
```

## pipe() {#pipe}

从左向右执行函数组合（左侧函数的输出作为右侧函数的输入）。

-   **Type**

$$(((u,v,...,n)\to o),(o\to p),...,(c \to b),(b\to a))\to ((u,v,...,n)\to a)$$

-   **Details**

传入若干个函数作为参数，返回值为一个参数数量同第一个参数的函数，为参数中所有从左向右函数组合的结果。

显然的，除了第一个参数允许为多参函数外，其他参数应均为单元函数。

-   **Example**

```js
const div_and_add = pipe(mul(0.5), add(1));

div_and_add(229026); //114514
```

## call() {#call}

执行一个已有的函数。

-   **Type**

$$((a,b,...,n)\to x)\to [a,b,...,n]\to x$$

-   **Details**

第一个参数为需要执行的函数，第二个参数通过数组的方式表示传入需执行函数的参数。

-   **Example**

```js
const foo = (a, b) => a + b;

call(foo, ['114', '514']); //"114514"
```

## then() {#then}

在 Promise 后添加函数，等同于 Promise.then。

-   **Type**

$$(resolve,reject)\to a|e\to Promise\ a\to a|e$$

-   **Details**

第一个参数为函数，第二个参数传入需要操作的 Promise 对象。

-   **Example**

```js
const fetch = () =>
	new Promise((resolve, reject) => {
		//...do sth.
	});

await pipe(fetch, then(toUpper));
```

## tryCatch() {#tryCatch}

用于错误检测的函数包装。

-   **Type**

$$f\to (e\to *)\to f$$

-   **Details**

第一个参数传入一个函数 tryer，第二个参数传入一个函数 reject，返回值是柯里化后包装的 tryer 函数。

tryCatch 等于给 tryer 创建了一个 wrapper，在不出现错误时正常返回 tryer 的返回值，否则会将错误和传入 tryer 的参数一并传递给 reject。

-   **Example**

```js
const foo = tryCatch(div(1), always('hello'));
foo(1); //1
foo(0); //hello/INF
```
