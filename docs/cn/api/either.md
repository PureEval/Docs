# Either {#either-api}

Either 是一个用来安全实现处理错误的流程的函子，分为右值(Right)与左值(Left)。

此处是一个 Either 函子使用的总例。

```js
function parseJSON(str) {
	try {
		const result = JSON.parse(str);
		return Right(result);
	} catch (e) {
		return Left(e.message);
	}
}

parseJSON('{sfdas').map(JSON.stringify).fold(console.error, console.log);
```

## Right/Left{#right-left}

Right 代表可以被接受的值，其中的值将会被 Either 链一直传递并参与映射。
Left 代表发生错误的值，其中的值会被 Either 链只读传递。

在 Right 执行过程中如果产生错误，该 Right 值会变为 Left。

-   **Type**

$$a\to Either\ a$$

-   **Example**

```js
Right(1); //Right 1
Left(1); //Left 1
```

## Either.map() {#map}

将 Right/Left 中的值进行映射。

-   **Type**

$$Either\ a\to (a\to b)\to Either\ b$$

-   **Example**

```js
Right(1).map(add(1)); //Right 2
Left(1).map(add(1)); //Left 1
```

## Either.fold() {#fold}

将 Either 中的值进行映射并折叠出值。

传入一个 reject 函数与一个 resolve 函数，对于 Right 只会执行 resolve，而对于 Left 只会执行 reject。

-   **Type**

$$Either\ a\to(e\to a)\to(b\to\  c)\to c$$

-   **Example**

```js
Right(1).map(add(1)).fold(console.error, id); //2
Light(1).map(add(1)).fold(console.error, id); //err: 1
```

## Either.chain() {#chain}

向 Either 链后添加新的 Either 任务。

-   **Type**

$$Either\ a\to(a\to Either \ b)\to Either \ b$$

-   **Example**

```js
const getUserById = (id) => {
	//...do sth.
	const user = { id: 1, name: 'Alice' };
	return Right(user);
};

const getUserPosts = (user) => {
	//...do sth.
	const posts = [{ title: 'Post 1' }, { title: 'Post 2' }];
	return Right(posts);
};

const getPostsByUserId = (id) => getUserById(id).chain(getUserPosts);

getPostsByUserId(1).fold(
	(error) => console.error(error),
	(posts) => console.log(posts)
);
```
