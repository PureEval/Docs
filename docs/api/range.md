# Range {#range-api}

## Overview

The Range API is designed to easily create a range of numbers or characters given the left and right endpoints. This is particularly useful when you need to generate sequences for various purposes such as iteration, data generation, or mathematical calculations.

## range() {#range}

Creates a range given the left and right endpoints.

- **Type**
$$
\text{Number|Char} \to \text{Number|Char} \to [\text{Number|Char}]
$$

- **Details**

Takes two arguments, either numbers or characters \( a, b \), and returns an array representing the closed interval \([a, b]\) in mathematical terms.

- **Example**

```js
range(1, 5); // [1, 2, 3, 4, 5]
range('a', 'c'); // ['a', 'b', 'c']
```
