# Either {#either-api}

`Either` is a functor used for safely implementing error-handling flows, consisting of a Right value and a Left value.

Here's an example demonstrating the use of the `Either` functor:

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

## Right/Left {#right-left}

`Right` represents an acceptable value, and its value will be propagated through the `Either` chain and participate in mapping.  
`Left` represents an erroneous value, and its value will be passed through the `Either` chain in a read-only manner.

If an error occurs during the execution of `Right`, the `Right` value will turn into `Left`.

-   **Type**

$$
a \to Either\ a
$$

-   **Example**

```js
Right(1); // Right 1
Left(1); // Left 1
```

## Either.map() {#map}

Maps the values inside `Right` or `Left`.

-   **Type**

$$
Either\ a \to (a \to b) \to Either\ b
$$

-   **Example**

```js
Right(1).map(add(1)); // Right 2
Left(1).map(add(1)); // Left 1
```

## Either.fold() {#fold}

Maps and folds the values inside `Either`.

Pass in a `reject` function and a `resolve` function. For `Right`, only `resolve` will be executed, and for `Left`, only `reject` will be executed.

-   **Type**

$$
Either\ a \to (e \to a) \to (b \to c) \to c
$$

-   **Example**

```js
Right(1).map(add(1)).fold(console.error, id); // 2
Left(1).map(add(1)).fold(console.error, id); // err: 1
```

## Either.chain() {#chain}

Adds a new `Either` task to the end of the `Either` chain.

-   **Type**

$$
Either\ a \to (a \to Either\ b) \to Either\ b
$$

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
