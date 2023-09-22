# List {#list-api}

## zipWith() {#zipWith}

Applies a binary function to corresponding elements of two lists and returns a new list.

-   **Type**

$$
((a \to b) \to c) \to [a] \to [b] \to [c]
$$

-   **Details**

The first parameter is a binary function $ f $, followed by two lists of equal length $ a, b $.

Returns a new list $ c $ of the same length as the input lists, where $ c_i = f(a_i, b_i) $.

-   **Example**

```js
const f = (a, b) => a + b;
zipWith(f, [1, 2, 3], [4, 5, 6]); //[5, 7, 9]
```

## zip() {#zip}

Pairs elements from two lists into a new list of tuples.

-   **Type**

$$
[a] \to [b] \to [[a, b]]
$$

-   **Details**

Takes two lists $ a, b $ of equal length.

Returns a new list $ c $ of the same length as the input lists, where $ c_i = [a_i, b_i] $.

This is equivalent to `zipWith((a, b) => [a, b])`.

-   **Example**

```js
zip([1, 2, 3], [4, 5, 6]); //[[1, 4], [2, 5], [3, 6]]
```

## join() {#join}

Joins elements in a list into a string, separated by a given delimiter.

-   **Type**

$$
\text{String} \to [a] \to \text{String}
$$

-   **Details**

The first parameter is a string that serves as the delimiter. The second parameter is a list. The function returns a string that joins all the elements in the list, separated by the delimiter.

-   **Example**

```js
join('|', [1, 2, 3]); //"1|2|3"
```

## slice() {#slice}

Slices a section of a list.

-   **Type**

$$
\text{Int} \to \text{Int} \to [a] \to [a]
$$

-   **Details**

Takes two integers representing the start and end indices, and returns a new list containing elements within the specified range.

-   **Example**

```js
slice(0, 3, [1, 2, 3, 4]); //[1, 2, 3]
```

## take() {#take}

Takes the first $ n $ elements from a list.

-   **Type**

$$
\text{Int} \to [a] \to [a]
$$

-   **Details**

Takes an integer $ n $ and a list as parameters. Returns a new list containing the first $ n $ elements from the given list.

-   **Example**

```js
take(3, [1, 2, 3, 4]); //[1, 2, 3]
```

## takeWhile() {#takeWhile}

Takes elements from the beginning of a list as long as they satisfy a given predicate.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to [a]
$$

-   **Details**

The first parameter is a predicate function $ f $, and the second parameter is a list. Elements are taken from the beginning of the list as long as they satisfy $ f $.

-   **Example**

```js
takeWhile((v) => v < 3, [1, 1, 4, 5, 1, 4]); //[1, 1]
```

## drop() {#drop}

Drops the first $ n $ elements from a list.

-   **Type**

$$
\text{Int} \to [a] \to [a]
$$

-   **Details**

Takes an integer $ n $ and a list as parameters. Returns a new list with the first $ n $ elements removed.

-   **Example**

```js
drop(3, [1, 2, 3, 4]); //[4]
```

## dropWhile() {#dropWhile}

Drops elements from the beginning of a list as long as they satisfy a given predicate.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to [a]
$$

-   **Details**

The first parameter is a predicate function $ f $, and the second parameter is a list. Elements are dropped from the beginning of the list as long as they satisfy $ f $.

-   **Example**

```js
dropWhile((v) => v < 3, [1, 4, 5, 1, 4]); //[4, 5, 1, 4]
```

## every() {#every}

Checks if all elements in a list satisfy a given predicate.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to \text{Bool}
$$

-   **Details**

Takes a predicate function $ f $ and a list as parameters. Returns `true` if all elements in the list satisfy $ f $, and `false` otherwise.

-   **Example**

```js
every((v) => v < 3, [1, 1, 4, 5, 1, 4]); //false
```

## some() {#some}

Checks if any element in a list satisfies a given predicate.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to \text{Bool}
$$

-   **Details**

Takes a predicate function $ f $ and a list as parameters. Returns `true` if any element in the list satisfies $ f $, and `false` otherwise.

-   **Example**

```js
some((v) => v < 3, [1, 4, 5, 1, 4]); //true
```

## concat() {#concat}

Concatenates two lists.

-   **Type**

$$
[*] \to [*] \to [*]
$$

-   **Details**

Takes two lists and returns a new list that is a concatenation of the two.

-   **Example**

```js
concat([1, 2, 3], [4, 5, 6]); //[1, 2, 3, 4, 5, 6]
```

## concatr() {#concatr}

Concatenates two lists in reverse order.

-   **Type**

$$
[*] \to [*] \to [*]
$$

-   **Details**

Takes two lists and returns a new list that is a reverse concatenation of the two.

-   **Example**

```js
concatr([1, 2, 3], [4, 5, 6]); //[4, 5, 6

, 1, 2, 3]
```

## head() {#head}

Returns the first element of a list.

-   **Type**

$$
[a] \to a
$$

-   **Details**

Takes a list and returns its first element.

-   **Example**

```js
head([1, 2, 3]); //1
```

## tail() {#tail}

Returns the last element of a list.

-   **Type**

$$
[a] \to a
$$

-   **Details**

Takes a list and returns its last element.

-   **Example**

```js
tail([1, 2, 3]); //3
```

## dropHead() {#dropHead}

Drops the first element of a list.

-   **Type**

$$
[a] \to [a]
$$

-   **Details**

Takes a list and returns a new list with the first element removed.

-   **Example**

```js
dropHead([1, 2, 3]); //[2, 3]
```

## dropTail() {#dropTail}

Drops the last element of a list.

-   **Type**

$$
[a] \to [a]
$$

-   **Details**

Takes a list and returns a new list with the last element removed.

-   **Example**

```js
dropTail([1, 2, 3]); //[1, 2]
```

## includes() {#includes}

Checks if a given element is present in a list.

-   **Type**

$$
a \to [a] \to \text{Bool}
$$

-   **Details**

Takes an element and a list, and returns `true` if the element is present in the list, and `false` otherwise.

-   **Example**

```js
includes(4, [1, 2, 3, 4]); //true
```

## reverse() {#reverse}

Reverses a list.

-   **Type**

$$
[a] \to [a]
$$

-   **Details**

Takes a list and returns a new list with the elements in reverse order.

-   **Example**

```js
reverse([1, 2, 3]); //[3, 2, 1]
```

## countWith() {#countWith}

Counts the number of elements in a list that satisfy a given predicate.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to \text{Number}
$$

-   **Details**

Takes a predicate function $ f $ and a list, and returns the number of elements that satisfy $ f $.

-   **Example**

```js
countWith((v) => v === 5, [1, 2, 3, 4, 5, 5, 5]); //3
```

## count() {#count}

Counts the occurrences of a specific element in a list.

-   **Type**

$$
a \to [a] \to \text{Number}
$$

-   **Details**

Takes an element and a list, and returns the number of occurrences of that element in the list.

-   **Example**

```js
count(5, [1, 2, 3, 4, 5, 5, 5]); //3
```

## pairList() {#pairList}

Pairs the first element with the rest of the elements in the list.

-   **Type**

$$
[a, \ldots a] \to [a, [\ldots a]]
$$

-   **Details**

Takes a list and returns a pair consisting of its first element and the rest of the elements.

-   **Example**

```js
const [x, xs] = pairList([1, 2, 3, 4, 5]); // x=1, xs=[2, 3, 4, 5]
```
