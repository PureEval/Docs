# Filter {#filter-api}

## filter() {#filter}

从列表中筛选符合条件的元素。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个检验函数，第二个参数传入一个列表。

返回值为一个列表，为所有作为参数可使检验函数函数值为 `true` 的元素。

- **Example**

```js
filter((v) => v == 1)([1, 1, 4, 5, 1, 4]); //[1, 1, 1]
```

## reject() {#reject}

从列表中筛选不符合条件的元素。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个检验函数，第二个参数传入一个列表。

返回值为一个列表，为所有作为参数可使检验函数函数值为 `false` 的元素。

- **Example**

```js
reject((v) => v == 1)([1, 1, 4, 5, 1, 4]); //[4, 5, 4]
```

## shied() {#shied}

从列表中删除指定的元素列表中的元素。

- **Type**

$$[a]\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个屏蔽列表，第二个参数传入一个待处理列表。

返回值为待处理列表中删除屏蔽列表中元素后的结果。

- **Example**

```js
shied([1])([1, 1, 4, 5, 1, 4]); //[4, 5, 4]
```

## choose() {#choose}

从列表中选定指定的元素列表中的元素。

- **Type**

$$[a]\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个允许通入列表，第二个参数传入一个待处理列表。

返回值为待处理列表与允许通入列表的交集列表。

- **Example**

```js
choose([1])([1, 1, 4, 5, 1, 4]); //[1, 1, 1]
```
