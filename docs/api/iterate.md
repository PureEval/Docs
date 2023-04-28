# Iterate {#iterate-api}

## iterate() {#iterate}

对函数进行迭代。

- **Type**

$$(a,b,...,n)\rightarrow x\rightarrow a|[a]\rightarrow b|[b]\rightarrow ...\rightarrow n|[n]\rightarrow [x]$$

- **Details**

第一个参数传入一个函数，接下来传入的参数个数等于该函数的参数个数。

接下来的每个参数对应原函数中对应位置的参数，若为正常的值，则表示此参数仅有一种可能；若为列表，则列表中的值均会被作为该参数的可能。

该函数将会依次运行所有可能的参数组合并获得结果，作为一个数组返回。

- **Example**

```js
const foo = (a, b) => [a, b];
iterate(foo, [1, 2], [6, 7]);
//[[1, 6], [2, 6], [1, 7], [2, 7]]
```

## map() {#map}

对数组按规则映射出新数组。

- **Type**

$$(a\rightarrow b)\rightarrow [a]\rightarrow [b]$$

- **Details**

第一个参数传入一个函数，第二个参数传入一个列表。

返回值为原列表经过函数映射出的新列表。

- **Example**

```js
map(add(1))([1, 2, 3]); //[2, 3, 4]
```

## flatMap() {#flatMap}

对数组按规则映射出新数组。

- **Type**

$$(a\rightarrow [b])\rightarrow [a]\rightarrow [b]$$

- **Details**

第一个参数传入一个函数，第二个参数传入一个列表。

返回值为原列表经过函数映射出的新列表。

本函数与 [map](#map) 不同的地方是参数函数的返回值应是一个列表，而本函数会将其自动合并为一个列表。

- **Example**

```js
flatMap((v) => [v, v])([1, 2, 3]); //[1, 1, 2, 2, 3, 3]
```

## forEach() {#forEach}

遍历数组。

- **Type**

$$(a\rightarrow *)\rightarrow [a]$$

- **Details**

第一个参数传入一个函数，第二个参数传入一个列表。

接下来将会遍历列表，对每一项执行传入的函数。

- **Example**

```js
const list = [];
forEach((v) => list.push(v), [1, 2, 3]);
//list : [1, 2, 3]
```

## reduce() {#reduce}

按规则折叠数组为一个值。

- **Type**

$$(a,b,c)\rightarrow a \rightarrow a$$

- **Details**

第一个参数传入一个三元（或更低）函数，该函数的第一个函数代表叠加值，第二个参数代表当前值，第三个参数代表其在列表中的位置。

接下来的参数传入一个初始值和一个列表，返回值为按规则折叠列表后的结果。

- **Example**

```js
reduce((a, b) => a + b, 0, [1, 2, 3]); //6
```

## fold() {#fold}

反复迭代函数。

- **Type**

$$(a\rightarrow a)\rightarrow Int\rightarrow a\rightarrow a$$

- **Details**

第一个参数传入一个函数，第二个参数传入迭代次数，第三个参数传入初始值。

最终返回值为最后一次迭代函数的返回值。

- **Example**

```js
fold((v) => v + 1, 5, 0); //5
```

## scan() {#scan}

反复迭代函数。

- **Type**

$$(a\rightarrow a)\rightarrow Int\rightarrow a\rightarrow [a]$$

- **Details**

第一个参数传入一个初始值，第二个参数传入一个函数，第三个参数传入迭代次数。

最终返回值为每次迭代结果构成的列表。

- **Example**

```js
scan(1)(add(1))(5); //[2, 3, 4, 5, 6]
```
