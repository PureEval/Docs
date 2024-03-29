# Logic {#logic-api}

## either() {#either}

计算逻辑或运算的结果。

-   **Type**

$$Bool \to Bool \to Bool$$

-   **Details**

传入两个布尔类型的参数（记为 $a,b$），则结果为 $a \vee b$。

-   **Example**

```js
either(true, false); //true

either(false)(false); //false
```

## both() {#both}

计算逻辑与运算的结果。

-   **Type**

$$Bool \to Bool \to Bool$$

-   **Details**

传入两个布尔类型的参数（记为 $a,b$），则结果为 $a \land b$。

-   **Example**

```js
either(true, false); //false

either(true)(true); //true
```

## not() {#not}

计算非运算的结果。

-   **Type**

$$Bool \to Bool$$

-   **Details**

传入一个布尔类型的参数（记为 $a$），则结果为 $!a$。

-   **Example**

```js
not(false); //true
```

## lt() {#lt}

计算 < 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a<b$。

-   **Example**

```js
lt(2, 3); //true

lt(3)(3); //false
```

## lte() {#lte}

计算 <= 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a<=b$。

-   **Example**

```js
lte(2, 3); //true

lte(3)(3); //true
```

## gt() {#gt}

计算 > 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a>b$。

-   **Example**

```js
gt(2, 3); //false

gt(3)(3); //false
```

## gte() {#gte}

计算 >= 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a>=b$。

-   **Example**

```js
gte(2, 3); //false

gte(3)(3); //true
```

## equal() {#equal}

计算 == 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a==b$。

-   **Example**

```js
equal(1, 1); //true

equal(5)(1); //false
```

## equalStrict() {#equalstrict}

计算 === 运算的结果。

-   **Type**

$$Ord \ a \Rightarrow a \to a \to Bool$$

-   **Details**

传入两个可比较类型的参数（记为 $a,b$），则结果为 $a===b$。

-   **Example**

```js
equalStrict(1, 1); //true

equalStrict(5)(1); //false
```

## deepEqual() {#deepequal}

比较两个值（可以是数组、对象、或者一般的值）是否相等。

可以采用占位符 [\_](/api/placeholder.html#_) 来统配匹配。

需要注意的是，如果传入的是一般值，比较规则将与 [equalStrict](#equalStrict) 同。

-   **Type**

$$* \to * \to Bool$$

-   **Details**

传入两个值。

-   **Example**

```js
deepEqual([1, 2, 3], [4, 5, 6]); //false
deepEqual({ a: 1 }, { a: 1 }); //true
deepEqual({ a: _, b: [_, 1, 2, 3] }, { a: 1, b: [1, 1, 2, 3] }); //true
```

## when() {#when}

构造一个参数符合条件后执行一定操作的函数。

-   **Type**

$$(a \to Bool) \to (a\to b) \to a \to a|b $$

-   **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将原样返回传入的参数。

特别的，传入 $b$ 函数的参数将与传入 $a$ 函数的参数相同，$b$ 函数可以不接受参数。

显然，$a,b$ 函数均为单元函数。

-   **Example**

```js
const foo = when(
	(v) => v == ' is you!',
	(v) => 'homo' + v
);

foo(' is you!'); //"homo is you!";
```

## unless() {#unless}

构造一个参数符合条件后执行一定操作的函数。

-   **Type**

$$(a \to Bool) \to (a\to b) \to a \to a|b $$

-   **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `false`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `true`，则将原样返回传入的参数。

特别的，传入 $b$ 函数的参数将与传入 $a$ 函数的参数相同，$b$ 函数可以不接受参数。

显然，$a,b$ 函数均为单元函数。

-   **Example**

```js
const foo = unless(
	(v) => !(v == ' is you!'),
	(v) => 'homo' + v
);

foo(' is you!'); //"homo is you!";
```

## ifElse() {#ifElse}

构造一个参数符合条件后执行一定操作的函数。

-   **Type**

$$(a \to Bool) \to (()\to b) \to (()\to c) \to b|c $$

-   **Details**

初始传入三个函数类型的参数（记为 $a,b,c$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将执行 $c$ 函数并返回其返回值。

特别的，传入 $b,c$ 函数的参数将与传入 $a$ 函数的参数相同，$b,c$ 函数可以不接受参数。

显然，$a,b,c$ 函数均为单元函数。

-   **Example**

```js
const foo = ifElse(
	(v) => v == ' is you!',
	(v) => 'homo' + v,
	(v) => 'homo' + v
);

foo(' not you!'); //"homo not you!";
```

## id() {#id}

返回与传入的参数。

-   **Type**

$$a \to a$$

-   **Details**

传入一个参数，并直接返回它。

-   **Example**

```js
id(114514); //114514
```

## always() {#always}

构造一个返回常量的函数。

-   **Type**

$$a \to () \to a$$

-   **Details**

传入一个参数作为常量，返回值为一个函数值为该常量的函数。

-   **Example**

```js
always(114514)(); //114514
```

## eqType() {#eqType}

判断两个值的类型是否相等。

-   **Type**

$*\to *\to Boolen$

-   **Details**

传入两个值，返回结果为两值的类型是否相等。

-   **Example**

```js
eqType(1, 1); //true
eqType(1, '1'); //true
```

## eqData() {#eqData}

比较两个抽象数据结构是否相等。

-   **Type**

$$Data\to a\to b\to Boolen$$

-   **Details**

然后传入两个由 [Data](/api/data.html#data) 构造的对象，该函数可以判断这两个对象是否来自该抽象数据结构并且相等。

第一个参数的对应值可以传入 [\_](/api/placeholder.html#_) 以表示对该参数任意匹配。

-   **Example**

```js
const foo = Data('A a b c');
eqData(foo.A(1, 1, 2), foo.A(1, 1, 2)); //true
eqData(foo.A(1, 1, { r: _ }), foo.A(1, 1, { r: 1 })); //true
```
