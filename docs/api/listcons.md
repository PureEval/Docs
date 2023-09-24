# List (Cons-based) {#listc-api}

::: warning
This section contains experimental features. The current performance may not be suitable for regular code production, and the APIs in this section may be removed or changed at any time.
:::

The List in this section specifically refers to the Cons List commonly defined in most functional programming languages, as opposed to the Array-based List defined in another section of this library.

Undeniably, this is a logically perfect Cons List, making full use of the `yield` syntax provided by the JavaScript language. It supports many nested Lazy operations or infinite lists. Due to the nature of the Cons List, we completed it in a very short time. However, it currently cannot hold too many elements, which is why it is in the experimental section.

## L.lazy() {#lazy}

Generates a List based on any iterable object.

-   **Type**

$$
\text{Iterable} \ a \Rightarrow \ a \to \text{List}\ a
$$

-   **Details**

Takes an iterable object as an argument and transforms it into a Cons List.

-   **Example**

```js
L.lazy([1, 1, 4, 5, 1, 4]); //List [1, 1, 4, 5, 1, 4]
```

## L.seq() {#seq}

Converts a List back into an Array.

-   **Type**

$$
\text{List}\ a \to \text{Array}\ a
$$

-   **Details**

Takes a list as an argument and transforms it back into an array.

-   **Example**

```js
L.seq(L.lazy([1, 1, 4, 5, 1, 4])); // [1, 1, 4, 5, 1, 4]
```

## L.head() {#head}

Gets the first element of a List.

-   **Type**

$$
[x]\to x
$$

-   **Details**

Takes a list as an argument and returns its first element.

-   **Example**

```js
L.head(L.lazy([1, 1, 4, 5, 1, 4])); // 1
```

## L.isEmpty() {#isempty}

Determines whether a List is empty.

-   **Type**

$$
\text{List} \to \text{Bool}
$$

-   **Details**

Takes a list as an argument and determines whether it is empty.

-   **Example**

```js
L.isEmpty(L.lazy([])); // true
```

## L.iter() {#iter}

Generates an iterable object for a List.

-   **Type**

$$
\text{Iterable} \ a \Rightarrow \text{List}\ a \to \ a
$$

-   **Details**

Takes a list as an argument and returns an iterable object that corresponds to that list.

-   **Example**

```js
const myList = L.lazy([1, 2, 3, 4, 5]);
for (const x of L.iter(myList)) console.log(x); //1 2 3 4 5
```

## L.range() {#range}

Generates a list based on a range and an iterator function.

-   **Type**

$$
\text{Number} \to \text{Number} \to (\text{Number}\to \text{Number}) \to \text{List}\ \text{Number}
$$

-   **Details**

Takes three arguments: the start of the range, the end of the range, and an iterator function. Returns a list that starts from the beginning of the range and iterates to the end of the range based on the iterator function.

-   **Example**

```js
L.range(1, 5, add(1)); // List [1, 2, 3, 4, 5]
```

## L.tail() {#tail}

Removes the first element from a List.

-   **Type**

$$
x:[x] \to [x]
$$

-   **Details**

Takes a list as an argument and removes its first element.

-   **Example**

```js
L.tail(L.lazy(1, 2, 3, 4, 5)); // List [2, 3, 4, 5]
```

## L.iterate() {#iterate}

Returns an infinitely iterating list.

-   **Type**

$$
(x \to x) \to x \to [x]
$$

-   **Details**

Takes a function and an initial value as arguments and returns an infinite list that iteratively applies the function to the initial value.

-   **Example**

```js
L.iterate((x) => x * 2, 1); // List [2, 4, 8, 16, 32...]
```

## L.map() {#map}

Maps over a list.

-   **Type**

$$
(x \to y) \to [x] \to [y]
$$

-   **Details**

Takes a mapping function and a list as arguments, and the entire list will be mapped by the mapping function.

-   **Example**

```js
L.map(
	(x) => x + 1,
	L.iterate((x) => x * 2, 1)
); // List [3, 5, 9, 17, 33...]
```

## L.flatMap() {#flatMap}

Maps over a list.

-   **Type**

$$
(x \to [y]) \to [x] \to [y]
$$

-   **Details**

Takes a mapping function and a list as arguments, and the entire list will be mapped by the mapping function.

The difference between this function and [map](#map) is that the return value of the argument function should be a list, and this function will automatically flatten it into a single list.

-   **Example**

```js
L.flatMap(
	(x) => L.lazy([x + 1, 1]),
	L.iterate((x) => x * 2, 1)
); // List [3, 1, 5, 1, 9, 1, 17, 1, 33...]
```

## L.concat() {#concat}

Concatenates two lists.

-   **Type**

$$
[x] \to [x] \to [x]
$$

-   **Details**

Takes two lists as arguments and concatenates them into a single list.

-   **Example**

```js
L.concat(L.lazy([1, 2, 3]), L.lazy([4, 5, 6]));
// List [1, 2, 3, 4, 5, 6]
```

## L.take() {#take}

Takes the first $n$ elements from a List.

-   **Type**

$$
[x] \to \text{Number} \to [x]
$$

-   **Details**

Takes a positive integer $n$ and a list as arguments and returns a list containing the first $n$ elements of the given list.

-   **Example**

```js


L.take(2, L.lazy([1, 2, 3])); // List [1, 2]
```

## L.drop() {#drop}

Drops the first $n$ elements from a List.

-   **Type**

$$
[x] \to \text{Number} \to [x]
$$

-   **Details**

Takes a positive integer $n$ and a list as arguments and returns a list containing all but the first $n$ elements of the given list.

-   **Example**

```js
L.drop(2, L.lazy([1, 2, 3])); // List [3]
```

## L.repeat() {#repeat}

Generates an infinite list of constant values.

-   **Type**

$$
x \to [x]
$$

-   **Details**

Takes a value as an argument and returns an infinite list containing that value.

-   **Example**

```js
L.repeat('Screeps is a amazing game.');
//List ["Screeps is a amazing game.", "Screeps is a amazing game."...]
```

## L.filter() {#filter}

Filters elements from a list based on a rule.

-   **Type**

$$
(x \to \text{Bool}) \to [x] \to [x]
$$

-   **Details**

Takes a filtering rule and a list as arguments and returns a list containing the elements that pass the filtering rule.

-   **Example**

```js
L.filter(lte(3), L.lazy([1, 2, 3, 4, 5])); // List [1, 2, 3]
```

## L.reject() {#reject}

Filters elements from a list based on a rule in reverse.

-   **Type**

$$
(x \to \text{Bool}) \to [x] \to [x]
$$

-   **Details**

Takes a filtering rule and a list as arguments and returns a list containing the elements that do not pass the filtering rule.

-   **Example**

```js
L.reject(lte(3), L.lazy([1, 2, 3, 4, 5])); // List [4, 5]
```

## L.forEach() {#forEach}

Applies a function to each element in a list.

-   **Type**

$$
(x \to \text{void}) \to [x] \to \text{void}
$$

-   **Details**

Takes a function and a list as arguments. Each element in the list will be applied to the function.

-   **Example**

```js
L.forEach((v) => console.log(v), L.lazy([1, 2, 3]));
// 1 2 3 (ignore enter)
```

## L.takeWhile() {#takeWhile}

Takes elements from the beginning of the list based on a rule until the rule is not satisfied.

-   **Type**

$$
(x \to \text{Bool}) \to [x] \to [x]
$$

-   **Details**

Takes a rule function and a list as arguments. Returns a list containing the elements taken from the beginning of the list based on the rule until an element is encountered that does not satisfy the rule.

-   **Example**

```js
L.takeWhile(includes('a'), L.lazy(['ab', 'ac', 'bb']));
// List ["ab", "ac"]
```

## L.dropWhile() {#dropWhile}

Drops elements from the beginning of the list based on a rule until the rule is not satisfied.

-   **Type**

$$
(x \to \text{Bool}) \to [x] \to [x]
$$

-   **Details**

Takes a rule function and a list as arguments. Returns a list containing the remaining elements after dropping the elements from the beginning of the list based on the rule until an element is encountered that does not satisfy the rule.

-   **Example**

```js
L.dropWhile(includes('a'), L.lazy(['ab', 'ac', 'bb']));
// List ["bb"]
```

## L.zipWith() {#zipWith}

Generates a new list by element-wise processing of two lists.

-   **Type**

$$
(a \to b \to c)\to [a]\to [b]\to [c]
$$

-   **Details**

Takes a binary function $f$ as the first argument, followed by two lists of the same length ($a, b$).

Returns a new list $c$ of the same length as the input lists, where $c_i = f(a_i, b_i)$.

-   **Example**

```js
L.zipWith((a, b) => a + b, L.lazy([1, 2, 3]), L.lazy([1, 2, 3]));
// List [2, 4, 6]
```

## L.shield() {#shield}

Removes a specific value from a list.

-   **Type**

$$
a\to [a] \to [a]
$$

-   **Details**

Takes a value to shield as the first argument, followed by a list. Returns a list without the shielded value.

-   **Example**

```js
L.shield(1, L.lazy([1, 1, 4, 5, 1, 4]));
// List [4, 5, 4]
```

## L.choose() {#choose}

Chooses a specific value from a list.

-   **Type**

$$
a\to [a] \to [a]
$$

-   **Details**

Takes a value to choose as the first argument, followed by a list. Returns a list containing only the chosen value.

-   **Example**

```js
L.choose(1, L.lazy([1, 1, 4, 5, 1, 4]));
// List [1, 1, 1]
```
