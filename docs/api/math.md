# Math {#math-api}

## odd() {#odd}

判断整数是否为奇数。

- **Type**

$$Int\rightarrow Bool$$

- **Details**

传入一个整数作为参数，若该整数为奇数，则返回 `true`，否则返回 `false`。

- **Example**

```js
odd(114514);//false
```

## even() {#even}

判断整数是否为偶数。

- **Type**

$$Int\rightarrow Bool$$

- **Details**

传入一个整数作为参数，若该整数为偶数，则返回 `true`，否则返回 `false`。

- **Example**

```js
odd(114514);//true
```

## add() {#add}

计算两数的加和。

- **Type**

$Number\rightarrow Number\rightarrow Number$$

- **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a+b$。

- **Example**

```js
add(1, 114513);//114514
add(1)(114513);//114514
```

## minus() {#minus}

计算两数的差。

- **Type**

$Number\rightarrow Number\rightarrow Number$$

- **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a-b$。

- **Example**

```js
minus(114515, 1);//114514
minus(114515)(1);//114514
```

## mul() {#mul}

计算两数的积。

- **Type**

$Number\rightarrow Number\rightarrow Number$$

- **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a*b$。

- **Example**

```js
mul(57257, 2);//114514
mul(57257)(2);//114514
```

## div() {#div}

计算两数的商。

- **Type**

$Number\rightarrow Number\rightarrow Number$$

- **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a/b$。

- **Example**

```js
div(229030, 2);//114514
div(229030)(2);//114514
```

## mod() {#mod}

计算整数取余的结果。

- **Type**

$Int\rightarrow Int\rightarrow Int$$

- **Details**

传入两个整数作为参数（记为 $a,b$），则结果为 $a\%b$。

如果你希望计算取模而非取余，应使用 [rema](#rema)。

- **Example**

```js
mod(114514, 1);//0
mod(114514)(1);//0
```

## rema() {#rema}

计算整数取模的结果。

- **Type**

$Int\rightarrow Int\rightarrow Int$$

- **Details**

传入两个整数作为参数（记为 $a,b$），则结果为 $a \ mod\ b$。

如果你希望计算取余而非取模，应使用 [mod](#mod)。

- **Example**

```js
rema(114514, 1);//0
rema(114514)(1);//0
```

## power() {#power}

计算数的幂次。

- **Type**

$Number\rightarrow Number\rightarrow Number$$

- **Details**

传入两个数字作为参数（记为 $a,b$），则结果为 $a^b$。

- **Example**

```js
pow(114514, 1);//114514
pow(2)(3);//8
```