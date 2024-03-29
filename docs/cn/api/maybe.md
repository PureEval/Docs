# Maybe(Monad) {#maybe-api}

此处阅读到的 Maybe 可能与其他函数式语言（如 Haskell）中的 Data Maybe 并不相同。PureEval 中的 Maybe 是一个 Data Maybe 与 Class Monad 的融合。

## Maybe {#maybe}

Maybe 类型内包含一个不确定的值。

如果一个确定的值在 Maybe 中执行发生错误，该 Maybe 也会变为 Nothing。

`undefined` 与 `null` 值都将被认为 [Nothing](#Noting)。

-   **Type**

$$Data\ Maybe\ a=Just\ a\ |\ Nothing$$

## Maybe.of() {#of}

将一个值提升为 $Maybe$ 类型。

-   **Type**

$$a\to Maybe\ a$$

-   **Example**

```js
Maybe.of(1); //Just 1
Maybe.of(null); //Nothing
```

## Maybe.is() {#is}

判断一个值是否为 $Maybe$ 类型。

-   **Type**

$$*\to Bool$$

-   **Example**

```js
Maybe.is(Just(1)); //true
Maybe.is(Nothing); //true
```

## Maybe.isNothing() {#isnothing}

判断该 $Maybe$ 是否为 $Nothing$。

-   **Type**

$$\overline{Maybe\ a}\to Bool$$

-   **Example**

```js
Just(1).isNothing(); //false
Just(null).isNothing(); //true
```

## Maybe.map() {#map}

将 Maybe 中的值经过函数处理映射为新的值，并构造新的 Maybe 来保存。

-   **Type**

$$\overline{Maybe\ a}\to (a\to b)\to Maybe\ b$$

-   **Example**

```js
Just(1).map(add(114513)); //Just 114514
```

## Maybe.fold() {#fold}

将函数应用到 $Maybe\ a$ 中的 $a$。

传入两个单元函数参数，分别代表 $Maybe\ a$ 为 $Nothing$ 与 $Maybe$ 不为 $Nothing$ 的处理情况。

当匹配到 $Maybe\ a$ 时，对应函数将会应用到 $a$ 上，其函数值将作为返回值。

-   **Type**

$$\overline{Maybe\ a}\to (Nothing\to b)\to (a\to b)\to b$$

-   **Example**

```js
Just('The body next door').fold(() => 'Nothing', id); //"The body next door"
```

## Maybe.chain() {#chain}

在 Maybe 后链接一个返回 Maybe 类型的函数，可作为链式调用。

传入一个返回 Maybe 类型的函数，返回值为链接后的 Maybe 对象。

-   **Type**

$$\overline{Maybe\ a}\to (a\to Maybe\ b)\to Maybe\ b$$

-   **Example**

```js
const getUser = (id) => {
	if (id === 1) {
		return Just({ id: 1, name: 'Alice' });
	} else {
		return Nothing;
	}
};

const getAddress = (user) => {
	if (user.name === 'Alice') {
		return Just({ street: '123 Main St', city: 'Anytown' });
	} else {
		return Nothing;
	}
};

const getCity = (address) => {
	if (address.street === '123 Main St') {
		return Just(address.city);
	} else {
		return Nothing;
	}
};

const city = Just(1)
	.chain(getUser)
	.chain(getAddress)
	.chain(getCity)
	.fold(
		() => 'Unknown',
		(city) => city
	);

console.log(city); // 'Anytown'
```

## Just() {#just}

$Maybe$ 类型的构造函数。

实际同 [Maybe.of](#of)。

-   **Type**

$$a\to Maybe\ a$$

-   **Example**

```js
Just(1); //Just 1
```

## Nothing {#nothing}

$Maybe$ 类型的构造函数。
