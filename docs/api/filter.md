# Filter {#filter-api}

## filter() {#filter}

Filters elements in a list based on a condition.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to [a]
$$

-   **Details**

The first argument is a test function, and the second argument is a list.

The return value is a list containing all the elements for which the test function returns `true`.

-   **Example**

```js
filter((v) => v == 1)([1, 1, 4, 5, 1, 4]); //[1, 1, 1]
```

## reject() {#reject}

Filters elements in a list that do not meet a certain condition.

-   **Type**

$$
(a \to \text{Bool}) \to [a] \to [a]
$$

-   **Details**

The first argument is a test function, and the second argument is a list.

The return value is a list containing all the elements for which the test function returns `false`.

-   **Example**

```js
reject((v) => v == 1)([1, 1, 4, 5, 1, 4]); //[4, 5, 4]
```

## shield() {#shield}

Removes specified elements from a list.

-   **Type**

$$
[a] \to [a] \to [a]
$$

-   **Details**

The first argument is a list of elements to be removed (shield list), and the second argument is the list to be processed.

The return value is the list after removing the elements present in the shield list.

-   **Example**

```js
shield([1])([1, 1, 4, 5, 1, 4]); //[4, 5, 4]
```

## choose() {#choose}

Selects specified elements from a list.

-   **Type**

$$
[a] \to [a] \to [a]
$$

-   **Details**

The first argument is a list of elements to be included (allow list), and the second argument is the list to be processed.

The return value is the intersection list of the list to be processed and the allow list.

-   **Example**

```js
choose([1])([1, 1, 4, 5, 1, 4]); //[1, 1, 1]
```
