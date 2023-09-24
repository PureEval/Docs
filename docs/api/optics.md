# Optics {#optics-api}

## Overview

The Optics API focuses on providing "lenses" which allow you to focus on specific parts of a data structure. Lenses are composable and can be used to get, set, or modify data within a structure. For a comprehensive understanding of the optics concept, you can refer to [arxiv 2001.07488v3](https://arxiv.org/pdf/2001.07488v3.pdf).

## Lens {#Lens}

Optical components for focusing on specific parts of data structures.

## Lens.of() {#of}

Constructs a lens.

- **Type**
$$
(s \to a) \to (s \to a \to s) \to \text{Lens } s \ a
$$

- **Details**

The first argument is a getter function, and the second argument is a setter function. The function returns a lens that can be used to get, set, or modify a specific part of a data structure.

- **Example**

```js
Lens.of((s) => s.a, assoc('a'));
```

## Lens.bind() {#bind}

Binds an element directly to a lens.

- **Type**

##### Overload 1
$$
\text{String|Int} \to \text{Lens}
$$

##### Overload 2
$$
[String|Int] \to \text{Lens}
$$

- **Details**

Creates a lens that focuses on the specified element or path within a data structure.

- **Example**

```js
Lens.bind('a');
Lens.bind(['a', 'b']);
```

## view {#view}

Returns the part of a data structure that a lens is focused on.

- **Type**
$$
\text{Lens} \to a \to b
$$

- **Details**

Takes a lens and a data structure as arguments and returns the part of the data structure that the lens is focused on.

- **Example**

```js
const lens = Lens.bind('a');
view(lens, { a: 1 }); // 1
```

## set {#set}

Sets the value of the part of a data structure that a lens is focused on.

- **Type**
$$
\text{Lens} \to a \to b \to c
$$

- **Details**

Takes a lens, a value to set, and a data structure as arguments. It returns a new data structure with the value set at the focus of the lens.

- **Example**

```js
const lens = Lens.bind('a');
set(lens, 2, { a: 1 }); // { a: 2 }
```

## over {#over}

Applies a function to the part of a data structure that a lens is focused on.

- **Type**
$$
\text{Lens} \to (a \to b) \to \text{Data } a \to \text{Data } b
$$

- **Details**

Takes a lens, a function to apply, and a data structure as arguments. It returns a new data structure where the function has been applied to the focus of the lens.

- **Example**

```js
const lens = Lens.bind('a');
over(lens, add(1), { a: 1 }); // { a: 2 }
```
