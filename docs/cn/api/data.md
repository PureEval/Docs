# Data {#data-api}

<!--@include: ./Experimental.md-->

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

```
Maybe
    - binder //用于绑定到外部环境的对象
    - function bindShow(show) => show //设置 Data 展示方式的函数
    - function from(data) => boolean //用以判断是否为 Maybe 类型的函数
    - function Just(a) => (Just a) // 实际的构造函数
    - Nothing => Nothing // 实际的构造函数
```

对于 Just/Nothing，其构造为：

```
Just
    - function is(data) => boolean //用以判断是否为 Just 类型的函数

(Just a)
    - a = a
    - args = [a]

Nothing
    - function is(data) => boolean //用以判断是否为 Nothing 类型的函数
```

你可以这样使用他：

```js
const foo = Maybe.Just(1);

foo.a; // 1

Maybe.Just.is(foo); // true
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

每个代数数据类型的 binder 属性提供了可以安全绑定到全局的量的对象集合，他们只会包含每个类型的构造函数。

```js
Object.assign(global, Data('Round x y r').binder);

// Square Round x y r => Number
const Square = (round) => 3.14 * round.r ** 2;

Square(Round(1, 1, 5)); //78.5
```

##### Example 4

您可以使用 bindShow 为您的代数数据类型定义 show 方法来将代数类型与基本类型转换。

请注意：show 方法在未经过 bindShow 绑定前将返回该类型的类型名称。

```js
const Nat = Data('Succ m', 'Zero');

Nat.bindShow(match(
    [Zero.is, 0],
    [Succ.is, ({ m }) => m.show() + 1]
));

Nat.Succ(Nat.Succ(Nat.Zero)).show(); //2
```
