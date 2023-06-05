# Data {#data-api}

::: warning
本节内容为实验性内容，当前的性能可能不适用于正常的代码生产，本节的 API 随时可能被移除或更改。
:::

本节提供了并不完美的定义抽象数据结构的方法。

## Data() {#data}

构造一个抽象数据结构。

-   **Details**

传入一组构造函数，返回这些构造函数所组成的代数数据结构。

-   **Example**

##### Example 1

```js
const Maybe = Data('Just a', 'Nothing');
```

此时 Maybe 对象的定义如下：

```js
Maybe
    -is // 用以判断某个值是否为某个构造函数所构造的
        --function Just(x) => bool
        --function Nothing(x) =>  bool
    -function Just(a) => Just a // 实际的构造函数
    -Nothing => Nothing // 实际的构造函数
```

你可以这样使用他：

```js
const foo = Maybe.Just(1);

foo.a; // 1

Maybe.is.Just(foo); // true
```

##### Example 2

你还可以引入多个构造参数来完成更复杂的代数数据结构：

```js
const Round = Data('Round x y r');

// Square Round x y r => Number
const Square = (round) => 3.14 * round.r ** 2;

Square(Round.Round(1, 1, 5)); //78.5
```

##### Example 3

如果您使用 Node.js 或者您的 env 有全局变量这一概念，您可以直接把 Data 绑定到环境中：

```js
//Node.js v16.15.0
Object.assign(global, Data('Round x y r'));

// Square Round x y r => Number
const Square = (round) => 3.14 * round.r ** 2;

Square(Round(1, 1, 5)); //78.5
```
