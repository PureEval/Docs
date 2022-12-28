# Logic {#logic-api}

## either() {#either}

计算逻辑或运算的结果。

- **Type**

$$Bool \rightarrow Bool \rightarrow Bool$$

- **Details**

传入两个布尔类型的参数（记为 $a,b$），则结果为 $a \vee b$。

- **Example**

```js
either(true, false);//true

either(false)(false);//false
```

## both() {#both}

计算逻辑与运算的结果。

- **Type**

$$Bool \rightarrow Bool \rightarrow Bool$$

- **Details**

传入两个布尔类型的参数（记为 $a,b$），则结果为 $a \land b$。

- **Example**

```js
either(true, false);//false

either(true)(true);//true
```

## gt() {#gt}

计算 < 运算的结果。

- **Type**

$$Ord \ a \Rightarrow a \rightarrow a \rightarrow Bool$$

- **Details**

传入两个数字类型的参数（记为 $a,b$），则结果为 $a<b$。

- **Example**

```js
gt(2, 3);//true

gt(3)(3);//false
```

## gte() {#gte}

计算 <= 运算的结果。

- **Type**

$$Ord \ a \Rightarrow a \rightarrow a \rightarrow Bool$$

- **Details**

传入两个数字类型的参数（记为 $a,b$），则结果为 $a<=b$。

- **Example**

```js
gte(2, 3);//true

gte(3)(3);//true
```

## lt() {#lt}

计算 > 运算的结果。

- **Type**

$$Ord \ a \Rightarrow a \rightarrow a \rightarrow Bool$$

- **Details**

传入两个数字类型的参数（记为 $a,b$），则结果为 $a>b$。

- **Example**

```js
lt(2, 3);//false

lt(3)(3);//false
```

## lte() {#lte}

计算 >= 运算的结果。

- **Type**

$$Ord \ a \Rightarrow a \rightarrow a \rightarrow Bool$$

- **Details**

传入两个数字类型的参数（记为 $a,b$），则结果为 $a>=b$。

- **Example**

```js
lte(2, 3);//false

lte(3)(3);//true
```

## equal() {#equal}

计算 == 运算的结果。

- **Type**

$$Ord \ a \Rightarrow a \rightarrow a \rightarrow Bool$$

- **Details**

传入两个数字类型的参数（记为 $a,b$），则结果为 $a==b$。

- **Example**

```js
equal(1, 1);//true

equal(5)(1);//false
```


## when() {#when}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (()\rightarrow b) \rightarrow a \rightarrow a|b $$

- **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将原样返回传入的参数。

显然，$a$ 函数必须为一个单元函数，而 $b$ 函数不接收参数。

如果你希望 $b$ 函数与 $a$ 函数接受相同的参数，请参见 [when_v](#when_v)。

- **Example**

```js
const foo = when(v => v == 114515, () => "homo!");

when(114514);//"homo!";
```

## when_v() {#when_v}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (a\rightarrow b) \rightarrow a \rightarrow a|b $$

- **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将原样返回传入的参数。

特别的，传入 $b$ 函数的参数将与传入 $a$ 函数的参数相同。

显然，$a,b$ 函数均为单元函数。

如果你希望 $b$ 不接受参数，请参见 [when](#when)。

- **Example**

```js
const foo = when_v(v => v == "is you!", v => "homo"+v);

when("is you!");//"homo is you!";
```

## unless() {#unless}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (()\rightarrow b) \rightarrow a \rightarrow a|b $$

- **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `false`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `true`，则将原样返回传入的参数。

显然，$a$ 函数必须为一个单元函数，而 $b$ 函数不接收参数。

如果你希望 $b$ 函数与 $a$ 函数接受相同的参数，请参见 [unless_v](#unless_v)。

- **Example**

```js
const foo = when(v => !(v == 114515), () => "homo!");

when(114514);//"homo!";
```

## unless_v() {#unless_v}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (a\rightarrow b) \rightarrow a \rightarrow a|b $$

- **Details**

初始传入两个函数类型的参数（记为 $a,b$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `false`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `true`，则将原样返回传入的参数。

特别的，传入 $b$ 函数的参数将与传入 $a$ 函数的参数相同。

显然，$a,b$ 函数均为单元函数。

如果你希望 $b$ 不接受参数，请参见 [unless_v](#unless_v)。

- **Example**

```js
const foo = when_v(v => !(v == "is you!"), v => "homo"+v);

when("is you!");//"homo is you!";
```

## ifElse() {#ifElse}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (()\rightarrow b) \rightarrow (()\rightarrow c) \rightarrow b|c $$

- **Details**

初始传入三个函数类型的参数（记为 $a,b,c$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将执行 $c$ 函数并返回其返回值。

显然，$a$ 函数必须为一个单元函数，而 $b,c$ 函数不接收参数。

如果你希望 $b,c$ 函数与 $a$ 函数接受相同的参数，请参见 [ifElse_v](#ifElse_v)。

- **Example**

```js
const foo = ifElse(v => v == 114515, () => "homo!",() => "not homo!");

when(114513);//"not homo!";
```

## ifElse_v() {#ifElse_v}

构造一个参数符合条件后执行一定操作的函数。

- **Type**

$$(a \rightarrow Bool) \rightarrow (()\rightarrow b) \rightarrow (()\rightarrow c) \rightarrow b|c $$

- **Details**

初始传入三个函数类型的参数（记为 $a,b,c$），返回值为传入一个参数的函数。

该函数的行为是：将参数传给 $a$ 函数，若 $a$ 函数返回值为 `true`，则将执行 $b$ 函数并返回其返回值；相反，如果 $a$ 函数的返回值为 `false`，则将执行 $c$ 函数并返回其返回值。

特别的，传入 $b,c$ 函数的参数将与传入 $a$ 函数的参数相同。

显然，$a,b,c$ 函数均为单元函数。

如果你希望 $b,c$ 不接受参数，请参见 [ifElse](#ifElse)。

- **Example**

```js
const foo = when_v(v => v == "is you!", v => "homo" + v, v => "homo" + v);

when("not you!");//"homo not you!";
```