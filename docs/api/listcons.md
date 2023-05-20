# List {#listc-api}

::: warning
本节内容为实验性内容，当前的性能可能不适用于正常的代码生产，本节的 API 随时可能被移除或更改。
:::

本节的 List 特指大部分函数式编程语言中基于 Cons 方法定义的 List，而非本库中另一节所定义的基于 Array 的 List。

不可否认的，这是一个在逻辑上完美的 Cons List，充分利用了 JavaScript 语言提供的 yield 语法。它支持很多嵌套的 Lazy 操作或者无限列表，由于 Cons List 的性质，我们在很短时间内就完成了它。但目前无法存放太多的元素，这是它在实验性内容中的原因。

## L.lazy() {#lazy}

基于任何可迭代对象生成一个 List。

- **Type**

$$Iterable\ a \rightarrow List\ a$$

- **Details**

传入一个可迭代对象，该对象将会被转化为 Cons List。

- **Example**

```js
L.lazy([1, 1, 4, 5, 1, 4]); //List [1, 1, 4, 5, 1, 4]
```

## L.seq() {#seq}

把 List 转回 Array。

- **Type**

$$List\ a \rightarrow Array\ a$$

- **Details**

传入一个列表，该函数可以将其转换回数组。

- **Example**

```js
L.seq(L.lazy([1, 1, 4, 5, 1, 4])); // [1, 1, 4, 5, 1, 4]
```

## L.head() {#head}

获取一个 List 的首项。

- **Type**

$$x:[x]\rightarrow x$$

- **Details**

传入一个列表，该函数可以返回其首项。

- **Example**

```js
L.head(L.lazy([1, 1, 4, 5, 1, 4])); // 1
```

## L.isEmpty() {#isempty}

判断一个 List 是否为空。

- **Type**

$$List \rightarrow Bool$$

- **Details**

传入一个列表，该函数判断列表是否为空。

- **Example**

```js
L.isEmpty(L.lazy([])); // true
```

## L.iter() {#iter}

为一个 List 生成一个可迭代对象。

- **Type**

$$List\ a \rightarrow Iterable\ a$$

- **Details**

传入一个列表，返回该列表所对应的可迭代对象。

- **Example**

```js
const myList = L.lazy([1, 2, 3, 4, 5]);
for (const x of L.iter(myList)) console.log(x); //1 2 3 4 5
```

## L.range() {#range}

按照范围和步长生成一个列表。

- **Type**

$$Number \rightarrow Number \rightarrow Number \rightarrow List\ Number$$

- **Details**

传入三个参数，分别为区间起始，区间结束，步长。最终返回一个结果为 $\{x\ |\ l\le x\le r \ 且 x=l+kr,k\in \mathbb{N^+}\}$。

- **Example**

```js
L.range(1, 5, 1); // List [1, 2, 3, 4, 5]
```

## L.tail() {#tail}

去除列表的第一个元素。

- **Type**

$$x:[x] \rightarrow [x]$$

- **Details**

传入一个列表，本函数可以去除该列表的第一个元素。

- **Example**

```js
L.tail(L.lazy(1, 2, 3, 4, 5)); // List [2, 3, 4, 5]
```

## L.iterate() {#iterate}

返回一个无限迭代的列表。

- **Type**

$$(x \rightarrow x) \rightarrow x \rightarrow [x]$$

- **Details**

传入一个函数和一个初值，返回一个无限列表，为该函数从首项一直迭代的结果。

- **Example**

```js
L.iterate((x) => x * 2, 1); // List [2, 4, 8, 16, 32...]
```

## L.map() {#map}

对列表进行映射。

- **Type**

$$(x \rightarrow y) \rightarrow [x] \rightarrow [y]$$

- **Details**

传入一个映射函数和一个列表，列表将会全部被映射函数映射。

- **Example**

```js
L.map(
  (x) => x + 1,
  L.iterate((x) => x * 2, 1)
); // List [3, 5, 9, 17, 33...]
```

## L.flatMap() {#flatMap}

对列表进行映射。

- **Type**

$$(x \rightarrow [y]) \rightarrow [x] \rightarrow [y]$$

- **Details**

传入一个映射函数和一个列表，列表将会全部被映射函数映射。

本函数与 [map](#map) 不同的地方是参数函数的返回值应是一个列表，而本函数会将其自动合并为一个列表。

- **Example**

```js
L.flatMap(
  (x) => L.lazy([x + 1, 1]),
  L.iterate((x) => x * 2, 1)
); // List [3, 1, 5, 1, 9, 1, 17, 1, 33...]
```

## L.concat() {#concat}

拼接两个列表。

- **Type**

$$[x] \rightarrow [x] \rightarrow [x]$$

- **Details**

传入两个列表，本函数将会将其拼接成一个列表。

- **Example**

```js
L.concat(L.lazy([1, 2, 3]), L.lazy([4, 5, 6]));
// List [1, 2, 3, 4, 5, 6]
```

## L.take() {#take}

取出列表前指定个数的元素。

- **Type**

$$[x] \rightarrow Number \rightarrow [x]$$

- **Details**

传入一个正整数 ${n} 和一个列表，返回的列表为原列表的前 ${n} 项所构成的列表。

- **Example**

```js
L.take(2, L.lazy([1, 2, 3])); // List [1, 2]
```

## L.drop() {#drop}

抛弃列表前指定个数的元素。

- **Type**

$$[x] \rightarrow Number \rightarrow [x]$$

- **Details**

传入一个正整数 ${n} 和一个列表，返回的列表为原列表的去除前 ${n} 项后所构成的列表。

- **Example**

```js
L.drop(2, L.lazy([1, 2, 3])); // List [3]
```

## L.repeat() {#repeat}

生成一个值永远为常量的无限列表。

- **Type**

$$x \rightarrow [x]$$

- **Details**

传入一个值，返回值为值永远为该值的无限列表。

- **Example**

```js
L.repeat("Screeps is a amazing game.");
//List ["Screeps is a amazing game.", "Screeps is a amazing game."...]
```

## L.filter() {#filter}

从列表中按规则筛选元素。

- **Type**

$$(x \rightarrow Bool) \rightarrow [x] \rightarrow [x]$$

- **Details**

传入一个筛选规则和一个列表，返回包含筛选通过的元素的列表。

- **Example**

```js
L.filter(lte(3), L.lazy([1, 2, 3, 4, 5])); // List [1, 2, 3]
```

## L.reject() {#reject}

从列表中按规则反向筛选元素。

- **Type**

$$(x \rightarrow Bool) \rightarrow [x] \rightarrow [x]$$

- **Details**

传入一个筛选规则和一个列表，返回包含筛选不通过的元素的列表。

- **Example**

```js
L.filter(lte(3), L.lazy([1, 2, 3, 4, 5])); // List [4, 5]
```

## L.forEach() {#forEach}

将函数应用于列表的每一元素。

- **Type**

$$(x \rightarrow void) \rightarrow [x] \rightarrow void$$

- **Details**

传入一个函数和一个列表，列表中的所有值将会依次应用该函数。

- **Example**

```js
L.forEach((v) => console.log(v), L.lazy([1, 2, 3]));
// 1 2 3 (ignore enter)
```

## L.takeWhile() {#takeWhile}

按规则从头开始从列表取元素直到不满足规则。

- **Type**

$$(x \rightarrow Bool) \rightarrow [x] \rightarrow [x]$$

- **Details**

传入一个规则函数和一个列表，返回值为按规则从列表首个元素开始取符合规则的元素，直到遇到第一个不满足规则的元素为止的元素组成的列表。

- **Example**

```js
L.takeWhile(includes("a"), L.lazy(["ab", "ac", "bb"]));
// List ["ab", "ac"]
```

## L.dropWhile() {#dropWhile}

按规则从头开始从列表抛弃直到不满足规则。

- **Type**

$$(x \rightarrow Bool) \rightarrow [x] \rightarrow [x]$$

- **Details**

传入一个规则函数和一个列表，返回值为按规则从列表首个元素开始抛弃符合规则的元素，直到遇到第一个不满足规则的元素为止的剩余元素组成的列表。

- **Example**

```js
L.takeWhile(includes("a"), L.lazy(["ab", "ac", "bb"]));
// List ["bb"]
```

## L.zipWith() {#zipWith}

将两个列表对位处理后生成新列表。

- **Type**

$$(a \rightarrow b \rightarrow c)\rightarrow [a]\rightarrow [b]\rightarrow [c]$$

- **Details**

第一个函数传入一个二元函数 $f$，接下来传入两个等长的列表（记为 $a,b$）。

返回一个长度与传入的列表长度相同结果列表 $c$，满足 $c_i = f \ a \ b$。

- **Example**

```js
L.zipWith((a, b) => a + b, L.lazy([1, 2, 3]), L.lazy([1, 2, 3]));
// List [2, 4, 6]
```

## L.shield() {#shield}

删除列表中的某值。

- **Type**

$$a\rightarrow [a] \rightarrow [a]$$

- **Details**

第一个参数传入需要屏蔽的值，再传入一个列表，返回值为该列表中删除屏蔽值后的列表。

- **Example**

```js
L.shield(1, L.Lazy([1, 1, 4, 5, 1, 4]));
// List [4, 5, 4]
```

## L.choose() {#choose}

删除列表中的某值。

- **Type**

$$a\rightarrow [a] \rightarrow [a]$$

- **Details**

第一个参数传入需要选择的值，再传入一个列表，返回值为该列表中选择该值后的列表。

- **Example**

```js
L.choose(1, L.Lazy([1, 1, 4, 5, 1, 4]));
// List [1, 1, 1]
```