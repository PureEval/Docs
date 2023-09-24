# MaybeAsync {#maybeasync-api}

此处阅读到的 Maybe 可能与其他函数式语言（如 Haskell）中的 Data Maybe 并不相同。PureEval 中的 Maybe 是一个 Data Maybe 与 Class Monad 的融合。

这里与 Maybe 一节不同的地方是，MaybeAsync 提供了一个支持异步的 Monad。

## MaybeAsync {#maybeasync}

MaybeAsync 类型内包含一个不确定的 Promise 值。

`undefined` 与 `null` 值都将被认为 [NothingAsync](#Noting)。

-   **Type**

$$Data\ Maybe\ a=Just\ a\ |\ Nothing$$

## MaybeAsync.of() {#of}

将一个 Promise 提升为 $MaybeAsync$ 类型。

-   **Type**

$$Promise\ a\to Maybe\ a$$

-   **Example**

```js
const foo = new Promise((res, rej) => {
	res('Hello, World!');
});
const task = MaybeAsync.of(foo);
```

## MaybeAsync.is() {#is}

判断一个值是否为 $MaybeAsync$ 类型。

-   **Type**

$$*\to Bool$$

-   **Example**

```js
MaybeAsync.is(JustAsync(new Promise((res) => res(1)))); //true
MaybeAsync.is(NothingAsync); //true
```

## MaybeAsync.isNothing() {#isnothing}

判断该 $Maybe$ 是否为 $Nothing$。

-   **Type**

$$\overline{MaybeAsync\ a}\to Bool$$

-   **Example**

```js
JustAsync(1).isNothing(); //false
JustAsync(null).isNothing(); //true
```

## MaybeAsync.map() {#map}

将 MaybeAsync 中的值经过函数处理映射为新的值，并构造新的 MaybeAsync 来保存。

-   **Type**

$$\overline{MaybeAsync\ a}\to (a\to b)\to MaybeAsync\ b$$

-   **Example**

```js
JustAsync(new Promise((res) => res('Hello, World!'))).map(toLowerCase); // MaybeAsync "hello, world!"
```

## MaybeAsync.fold() {#fold}

::: warning
请注意：由于异步的特点，该函数的返回值是一个 Promise 类型的值，如有需要，请使用 await 等语句获取其值。
:::

将函数应用到 $MaybeAsync\ a$ 中的 $a$。

传入两个单元函数参数，分别代表 $Maybe\ a$ 为 $Nothing$ 与 $Maybe$ 不为 $Nothing$ 的处理情况。

当匹配到 $MaybeAsync\ a$ 时，对应函数将会应用到 $a$ 上，其函数值将作为返回值。

-   **Type**

$$\overline{MaybeAsync\ a}\to (Nothing\to b)\to (a\to b)\to Promise\ b$$

-   **Example**

```js
await JustAsync(new Promise((res) => res('Hello, World!'))).fold(() => 'fuck', id); //"Hello, World!"
await JustAsync(new Promise((res) => res(null))).fold(() => 'fuck', id); //"fuck"
```

## MaybeAsync.chain() {#chain}

在 MaybeAsync 后链接一个返回 MaybeAsync 类型的函数，可作为链式调用。

传入一个返回 MaybeAsync 类型的函数，返回值为链接后的 MaybeAsync 对象。

-   **Type**

$$\overline{MaybeAsync\ a}\to (a\to MaybeAsync\ b)\to MaybeAsync\ b$$

-   **Example**

```js
const getUserById = async (id) => {
  // some async operation to fetch user by id
};

const getUserEmail = async (user) => {
  // some async operation to fetch user email
};

const sendEmail = async (email) => {
  // some async operation to send email
};

const sendEmailToUserById = (id) =>
  MaybeAsync.of(getUserById(id))
    .chain((user) => (user ? JustAsync(user) : NothingAsync))
    .chain(getUserEmail)
    .chain(sendEmail);

sendEmailToUserById(123);
```

## JustAsync() {#just}

$Maybe$ 类型的构造函数。

实际同 [MaybeAsync.of](#of)。

-   **Type**

$$a\to MaybeAsync\ a$$

-   **Example**

```js
JustAsync(1); //Just 1
```

## NothingAsync {#nothing}

$Maybe$ 类型的构造函数。
