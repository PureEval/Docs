# List {#list-api}

## zipWith() {#zipWith}

将两个列表对位处理后构成新的列表。

- **Type**

$$((a\rightarrow b)\rightarrow c)\rightarrow [a]\rightarrow [b]\rightarrow [c]$$

- **Details**

第一个参数传入一个二元函数 $f$，接下来传入两个等长的列表（记为 $a,b$）。

返回一个长度与传入的列表相同的结果列表 $c$，满足 $c_i=f \ a_i \  b_i$。

- **Example**

```js
const f = (a, b) => a + b;
zipWith(f, [1, 2, 3], [4, 5, 6]); //[5, 7, 9]
```

## zip() {#zip}

将两个列表对位组合后生成新的列表。

- **Type**

$$[a]\rightarrow [b]\rightarrow [[a,b]]$$

- **Details**

传入两个长度相等的列表（记为 $a,b$ ）。

返回一个长度与传入列表相同的结果列表 $c$，满足 $c_i=[a_i,b_i]$。

该函数与 `zipWith((a,b)=>[a,b])` 等价。

- **Example**

```js
zip([1, 2, 3], [4, 5, 6]); //[[1, 4], [2, 5], [3, 6]]
```

## join() {#join}

将列表中全部元素通过分隔符连接成一个字符串。

- **Type**

$$String\rightarrow [a]\rightarrow String$$

- **Details**

第一个参数传入一个字符串代表分隔符，第二个参数传入一个列表，返回值为最终连接的字符串。

- **Example**

```js
join("|", [1, 2, 3]); //"1|2|3"
join("|")([1, 2, 3]); //"1|2|3"
```

## slice() {#slice}

截取列表的一部分区间。

- **Type**

$$Int\rightarrow Int\rightarrow [a]\rightarrow [a]$$

- **Details**

前两个参数传入两个整数代表开始截取的位置和结束截取的位置，返回值为截取到的区间。

- **Example**

```js
slice(0, 3, "homo"); //'hom'
```

## take() {#take}

从列表头开始截取元素。

- **Type**

$$Int\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个整数 $n$，接下来传入一个列表，返回值为该列表的前 $n$ 个元素。

- **Example**

```js
take(3, "the boy next door"); //"the"
```

## takeWhile() {#takeWhile}

从列表头开始按规则截取元素。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow [a]$$

- **Details**

第一个参数传入一个函数 $f$ ，第二个参数传入一个列表。

接下来从头开始截取元素加入结果列表，若某元素作为 $f$ 的参数的函数值不为 `true`，则停止截取。

返回值为按规则截取的新列表。

- **Example**

```js
takeWhile((v) => v < 3, [1, 1, 4, 5, 1, 4]); //[1, 1]
```

## drop() {#drop}

从列表头开始删除元素。

- **Type**

$$Int\rightarrow [a]\rightarrow [a]$$

- **Details**

注意：该函数不会改变参数。

第一个参数传入一个整数 $n$，接下来传入一个列表，返回值为该列表去除前 $n$ 个元素后的结果。

- **Example**

```js
drop(3, "homo"); //"o"
```

## dropWhile() {#dropWhile}

从列表头开始按规则删除元素。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow [a]$$

- **Details**

注意：该函数不会改变参数。

第一个参数传入一个函数 $f$ ，第二个参数传入一个列表。

接下来从头开始删除列表中的元素，若某元素作为 $f$ 的参数的函数值不为 `true`，则停止删除。

返回值为按规则删除元素后的新列表。

- **Example**

```js
dropWhile((v) => v < 3, [4, 5, 1, 4]); //[4, 5, 1, 4]
```

## allCheck() {#allCheck}

检查一个列表，其必须完全满足需求。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow Bool$$

- **Details**

第一个参数传入一个判断函数，第二个参数传入一个列表。

如果列表中的所有元素都满足：作为判断函数的参数时函数值为 `true`，则返回 `true`，否则返回 `fasle`。

- **Example**

```js
allCheck((v) => v < 3, [1, 1, 4, 5, 1, 4]); //false
```

## anyCheck() {#anyCheck}

检查一个列表，其有任意一个元素满足需求即可。

- **Type**

$$(a\rightarrow Bool)\rightarrow [a]\rightarrow Bool$$

- **Details**

第一个参数传入一个判断函数，第二个参数传入一个列表。

如果列表中的任意一个元素满足：作为判断函数的参数时函数值为 `true`，则返回 `true`，否则返回 `fasle`。

- **Example**

```js
anyCheck((v) => v < 3, [1, 1, 4, 5, 1, 4]); //true
```

## concat() {#concat}

拼接两个列表。

- **Type**

$$[*]\rightarrow [*]\rightarrow [*]$$

- **Details**

传入两个列表，返回其拼接后的结果。

- **Example**

```js
concat([1, 2, 3], [1, 2, 3]); //[1, 2, 3, 4, 5, 6]
```

## head() {#head}

取出列表的首项。

- **Type**

$$[a]\rightarrow a$$

- **Details**

传入一个列表，返回其首项。

- **Example**

```js
head([1, 2, 3]); //1
```

## tail() {#tail}

取出列表的尾项。

- **Type**

$$[a]\rightarrow a$$

- **Details**

传入一个列表，返回其尾项。

- **Example**

```js
tail([1, 2, 3]); //3
```

## dropHead() {#dropHead}

返回列表删除首项后的结果。

- **Type**

$$[a]\rightarrow [a]$$

- **Details**

传入一个列表，返回列表删除首项后的结果。

- **Example**

```js
dropHead([1, 2, 3]); //[2, 3]
```

## dropTail() {#dropTail}

返回列表删除尾项后的结果。

- **Type**

$$[a]\rightarrow [a]$$

- **Details**

传入一个列表，返回列表删除尾项后的结果。

- **Example**

```js
dropTail([1, 2, 3]); //[1, 2]
```

## reverse() {#reverse}

翻转列表。

- **Type**

$$[a]\rightarrow [a]$$

- **Details**

传入一个列表，返回其翻转后的结果。

- **Example**

```js
reverse([1, 2, 3]); //[3, 2, 1]
```
