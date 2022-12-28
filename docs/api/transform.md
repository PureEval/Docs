# Transform {#transform-api}

## compose() {#compose}

从右向左执行函数组合（右侧函数的输出作为左侧函数的输入）。

- **Type**

$$((b\rightarrow a),(c \rightarrow b),...,(o\rightarrow p),((u,v,...,n)\rightarrow o))\rightarrow ((u,v,...,n)\rightarrow a)$$

- **Details**

传入若干个函数作为参数，返回值为一个参数数量同最后一个参数的函数，为参数中所有函数从右向左函数组合的结果。

显然的，除了最后一个参数允许为多参函数外，其他参数应均为单元函数。

- **Example**

```js
const div_and_add = compose(add(1), div(2));

div_and_add(229026);//114514
```

## pipe() {#pipe}

从左向右执行函数组合（左侧函数的输出作为右侧函数的输入）。

- **Type**

$$(((u,v,...,n)\rightarrow o),(o\rightarrow p),...,(c \rightarrow b),(b\rightarrow a))\rightarrow ((u,v,...,n)\rightarrow a)$$

- **Details**

传入若干个函数作为参数，返回值为一个参数数量同第一个参数的函数，为参数中所有从左向右函数组合的结果。

显然的，除了第一个参数允许为多参函数外，其他参数应均为单元函数。

- **Example**

```js
const div_and_add = pipe(div(2), add(1));

div_and_add(229026);//114514
```

## call() {#call}

执行一个已有的函数。

- **Type**


$$((a,b,...,n)\rightarrow x)\rightarrow [a,b,...,n]\rightarrow x$$

- **Details**

第一个参数为需要执行的函数，第二个参数通过数组的方式表示传入需执行函数的参数。

- **Example**

```js
const foo = (a, b) => a + b;

call(foo, ['114', '514']);//114514
```