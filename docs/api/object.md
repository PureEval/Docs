# Object {#object-api}

## prop() {#prop}

Fetches a property from an object.

- **Type**

##### Overload 1
$$
\text{String|Int} \to \text{Object } a \to a
$$

##### Overload 2
$$
[String|Int] \to \text{Object } a \to a
$$

- **Details**

Fetches a property or a nested property using either a single property name or an array representing a path.

- **Example**

```js
// Overload 1
prop('homo', { homo: 114514 }); // 114514
// Overload 2
prop(['inside', 'homo'], { inside: { homo: 114514 } }); // 114514
```

## assoc() {#assoc}

Modifies a property in an object without mutating the original object.

- **Type**

##### Overload 1
$$
\text{String|Int} \to b \to \text{Object } a \to \text{Object } b
$$

##### Overload 2
$$
[String|Int] \to b \to \text{Object } a \to \text{Object } b
$$

- **Details**

Associates a new value to a property or a nested property in the object, returning a new object.

- **Example**

```js
// Overload 1
assoc('homo', 'yeah', { homo: 114514 }); // { "homo": "yeah" }
// Overload 2
assoc(['inside', 'homo'], 'yeah', { inside: { homo: 114514 } }); // { "inside": { "homo": "yeah" } }
```

## modify() {#modify}

Applies a function to a property in an object.

- **Type**

##### Overload 1
$$
\text{String|Int} \to (a \to b) \to \text{Object } a \to \text{Object } b
$$

##### Overload 2
$$
[String|Int] \to (a \to b) \to \text{Object } a \to \text{Object } b
$$

- **Details**

Modifies a property or a nested property in an object by applying a function to it.

- **Example**

```js
// Overload 1
modify('homo', (v) => 'yeah', { homo: 114514 }); // { "homo": "yeah" }
// Overload 2
modify(['inside', 'homo'], (v) => 'yeah', { inside: { homo: 114514 } }); // { "inside": { "homo": "yeah" } }
```

## dissoc() {#dissoc}

Removes a property from an object.

- **Type**

##### Overload 1
$$
\text{String|Int} \to \text{Object } a \to \text{Object } *
$$

##### Overload 2
$$
[String|Int] \to \text{Object } a \to \text{Object } *
$$

- **Details**

Deletes a property or a nested property from an object and returns the modified object.

- **Example**

```js
// Overload 1
dissoc('homo', { homo: 114514 }); // {}
// Overload 2
dissoc(['inside', 'homo'], { inside: { homo: 114514 } }); // { "inside": {} }
```

## deepClone() {#deepClone}

Creates a deep clone of an object.

- **Type**

$$
\text{Object} \to \text{Object}
$$

- **Details**

Returns a deep clone of the given object.

- **Example**

```js
deepClone({ a: 1, b: 2, c: 3 }); // { a: 1, b: 2, c: 3 }
```

## keys() {#keys}

Fetches all the keys of an object.

- **Type**

$$
\text{Object} \to [String]
$$

- **Details**

Returns an array of all the keys of the given object.

- **Example**

```js
keys({ a: 1, b: 2, c: 3 }); // ['a', 'b', 'c']
```

## values() {#values}

Fetches all the values of an object.

- **Type**

$$
\text{Object} \to [*]
$$

- **Details**

Returns an array of all the values of the given object.

- **Example**

```js
values

({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
```

## makePair() {#makePair}

Converts an array of tuples into an object.

- **Type**

$$
[(a, b)] \to \text{Object } b
$$

- **Details**

Transforms an array of tuples into an object where the first element of each tuple is a key, and the second element is the corresponding value.

- **Example**

```js
makePair([
  ['c', 'm'],
  ['a', 'e'],
  ['i', 'o']
]); // { c: "m", a: "e", i: "o" }
```

## construct() {#construct}

Curries a class constructor.

- **Type**

<img class="constructFlowImage" :src="constructFlowImage()" style="margin: 0 auto;">

- **Details**

Accepts a class and returns a curried constructor function.

- **Example**

```js
class foo {
  constructor(a, b, c) {
    //do something...
  }
}
construct(foo)(1)(2)(3);
```

## has() {#has}

Checks if a property exists in an object.

- **Type**

$$
\text{String|Int} \to \text{Object} \to \text{Bool}
$$

- **Details**

Checks if a property exists in an object and returns `true` if it does, otherwise returns `false`.

- **Example**

```js
has('homo')({ homo: 1 }); // true
```

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const constructFlowImage = function () {
    if (isDark.value) {
        return "/images/api/pureeval.ist.drawio-pi-dark.svg"
    } else {
        return "/images/api/pureeval.ist.drawio-pi-light.svg"
    }
}
</script>
