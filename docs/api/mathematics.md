# Math {#math-api}

## odd() {#odd}

判断整数是否为奇数。

-   **Type**

$$Int\rightarrow Bool$$

-   **Details**

传入一个整数作为参数，若该整数为奇数，则返回 `true`，否则返回 `false`。

-   **Example**

```js
odd(114514); //false
```

## even() {#even}

判断整数是否为偶数。

-   **Type**

$$Int\rightarrow Bool$$

-   **Details**

传入一个整数作为参数，若该整数为偶数，则返回 `true`，否则返回 `false`。

-   **Example**

```js
odd(114514); //true
```

## add() {#add}

计算两数的加和。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a+b$。

-   **Example**

```js
add(1, 114513); //114514
add(1)(114513); //114514
```

## minus() {#minus}

计算两数的差。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a-b$。

-   **Example**

```js
minus(114515, 1); //114514
minus(114515)(1); //114514
```

## mul() {#mul}

计算两数的积。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a*b$。

-   **Example**

```js
mul(57257, 2); //114514
mul(57257)(2); //114514
```

## div() {#div}

计算两数的商。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a/b$。

-   **Example**

```js
div(229030, 2); //114514
div(229030)(2); //114514
```

## divr() {#divr}

计算两数的商。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $b/a$。

-   **Example**

```js
div(2, 229030); //114514
div(2)(229030); //114514
```

## mod() {#mod}

计算整数取余的结果。

-   **Type**

$$Int\rightarrow Int\rightarrow Int$$

-   **Details**

传入两个整数作为参数（记为 $a,b$），则结果为 $a\%b$。

如果你希望计算取模而非取余，应使用 [rema](#rema)。

-   **Example**

```js
mod(114514, 1); //0
mod(114514)(1); //0
```

## rema() {#rema}

计算整数取模的结果。

-   **Type**

$$Int\rightarrow Int\rightarrow Int$$

-   **Details**

传入两个整数作为参数（记为 $a,b$），则结果为 $a \ mod\ b$。

如果你希望计算取余而非取模，应使用 [mod](#mod)。

-   **Example**

```js
rema(114514, 1); //0
rema(114514)(1); //0
```

## power() {#power}

计算数的幂次。

-   **Type**

$$Number\rightarrow Number\rightarrow Number$$

-   **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a^b$。

-   **Example**

```js
pow(114514, 1); //114514
pow(2)(3); //8
```

## negate() {#negate}

将数字取反。

-   **Type**

$$Number\rightarrow Number$$

-   **Details**

传入一个数字，返回其相反数。

-   **Example**

```js
negate(-114514); //114514
```

## upper() {#upper}

生成适用于 [sort](#sort) 函数的降序比较器。

-   **Type**

$$Ord \ a \Rightarrow ()\rightarrow ((a,a)\rightarrow Int)$$

-   **Details**

返回值为一个适用于 sort 函数的降序比较器。

-   **Example**

```js
sort(upper(), [3, 2, 1]); //[3, 2, 1]
```

## under() {#under}

生成适用于 [sort](#sort) 函数的升序比较器。

-   **Type**

$$Ord \ a \Rightarrow ()\rightarrow ((a,a)\rightarrow Int)$$

-   **Details**

返回值为一个适用于 sort 函数的升序比较器。

-   **Example**

```js
sort(under(), [3, 2, 1]); //[1, 2, 3]
```

## sort() {#sort}

将数组按照一定规则排序。

-   **Type**

$$Ord \ a \Rightarrow [a] \rightarrow ((a,a)\rightarrow Int) \rightarrow [a]$$

-   **Details**

第一个参数传入一个规则函数，第二个参数传入一个待排序的数组，返回值为排序后的数组。

规则函数可以填写 [\_](/api/bind.html#_) 来代表采取默认规则。

规则函数与 `Array.prototype.sort` 所使用的规则函数相同。

-   **Example**

```js
sort(under(), [3, 2, 1]); //[1, 2, 3]
```

## median() {#median}

求数字数组的中位数。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其中位数。

-   **Example**

```js
median([1, 2, 3, 4, 5, 6]); //3.5
```

## sum() {#sum}

求数字数组的总和。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其所有元素总和。

-   **Example**

```js
sum([1, 2, 3, 4, 5, 6]); //21
```

## average() {#average}

求数字数组的平均值。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其所有元素的平均值。

-   **Example**

```js
average([1, 2, 3, 4, 5, 6]); //3.5
```

## prod() {#prod}

求数字数组的连乘积。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其所有元素的连乘积。

-   **Example**

```js
prod([1, 2, 3, 4, 5, 6]); //720
```

## max() {#max}

求数字数组的中的最大值。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其所有元素中的最大值。

-   **Example**

```js
max([1, 1, 4, 5, 1, 4]); //5
```

## min() {#min}

求数字数组的中的最小值。

-   **Type**

$$[Number]\rightarrow Number$$

-   **Details**

传入一个数字类型的数组，返回值为其所有元素中的最小值。

-   **Example**

```js
min([1, 1, 4, 5, 1, 4]); //1
```

## dec() {#dec}

计算数字自减的值。

-   **Type**

$$Number\rightarrow Number$$

-   **Details**

传入一个数字类型的变量，返回其自减的结果。

-   **Example**

```js
dec(114515); //114514
```

## inc() {#inc}

计算数字自增的值。

-   **Type**

$$Number\rightarrow Number$$

-   **Details**

传入一个数字类型的变量，返回其自增的结果。

-   **Example**

```js
inc(114513); //114514
```
