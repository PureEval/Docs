# Curry {#curry-api}

## curry() {#curry}

将一个函数变为柯里化函数

- **Type**

$$((a,b,...,n)\rightarrow x)\rightarrow a\rightarrow b\rightarrow ... \rightarrow n\rightarrow x$$

- **Details**

传入一个非柯里化函数作为参数，返回值为对应的柯里化后的函数。

柯里化后的函数一次传入一个参数或多个参数，如果没有达到原函数所需要接收的参数的量，则会返回一个函数继续接受接下来的参数。

显然的，非柯里化的函数必须要有与需求相符合的 `length` 属性以表明其参数数量。

柯里化后的函数中有两个特殊属性：

$$Curried \ \begin{cases}len \ \leftarrow \\ origin \ \leftarrow \end{cases}$$

> `len` is the number of arguments required for this function

> `origin` is this function after inverse Coriolisation

- **Example**

```js
const foo = (a, b, c) => a + b + c;

curry(foo)(1)(2, 3);//6
```

## uncurry() {#uncurry}

逆柯里化一个函数，[curry](#curry) 的逆操作。

- **Type**

$$(a\rightarrow b\rightarrow ... \rightarrow n\rightarrow x)\rightarrow (a,b,...,n)\rightarrow x$$

- **Details**

传入一个经过 [curry](#curry) 柯里化后的函数作为参数，返回值为对应函数的逆柯里化函数。

- **Example**

```js
const foo = (a, b, c) => a + b + c;

uncurry(curry(foo)(1));//(b, c) -> a + b + c
```