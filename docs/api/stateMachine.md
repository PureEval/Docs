# StateMachine {#statemachine-api}

## higherPipe() {#higherPipe}

进行高维度的从左向右的函数组合。

-   **Type**

请注意：该类型不唯一，视偏移数组而定。

$$[(a \rightarrow a),...,(a \rightarrow a)]\rightarrow [Int]\rightarrow (a\rightarrow a)$$

-   **Details**

第一个参数传入一个函数数组，第二个参数传入以数字构成的偏移数组，两个数组长度应等长。

接下来将会从左到右进行函数组合，上一个函数的结果作为下一个函数的输入，但是要注意的是，偏移数组中对应位置的数字数值将代表该函数将会被反复迭代几次，若为 0 则该函数不执行。

返回值为按上述规则组合后的新函数，参数个数为偏移数组中从左到右第一个数值不为 0 的值所对应的函数的参数个数。

-   **Example**

```js
higherPipe([add(1), mul(2)], [5, 1])(1); //12
```

## higherComp() {#higherCompose}

进行高维度的从右向左的函数组合。

-   **Type**

请注意：该类型不唯一，视偏移数组而定。

$$[(a \rightarrow a),...,(a \rightarrow a)]\rightarrow [Int]\rightarrow (a\rightarrow a)$$

-   **Details**

第一个参数传入一个函数数组，第二个参数传入以数字构成的偏移数组，两个数组长度应等长。

接下来将会从右到左进行函数组合，上一个函数的结果作为下一个函数的输入，但是要注意的是，偏移数组中对应位置的数字数值将代表该函数将会被反复迭代几次，若为 0 则该函数不执行。

返回值为按上述规则组合后的新函数，参数个数为偏移数组中从右到左第一个数值不为 0 的值所对应的函数的参数个数。

-   **Example**

```js
higherComp([mul(2), add(1)], [1, 5])(1); //12
```

## coalgebra() {#coalgebra}

::: warning
尽管该函数为一个纯函数，但其返回值并非一个纯函数(Pure Function)，这意味着它可能对于相同的参数具有不同的返回值。
:::

生成一个支持无限迭代的函数。

-   **Type**

$$a\rightarrow (a\rightarrow a)\rightarrow (()\rightarrow a)$$

-   **Details**

第一个参数设定一个 seed，第二个参数传入一个单元函数。

返回值为一个函数，其每次被调用时候将会返回单元函数以 seed 为参数的函数值并将 seed 更新为该函数值。

-   **Example**

```js
const foo = coalgebra(1, add(1));

foo(); //2
foo(); //3
```

## stateMachine() {#stateMachine}

::: warning
尽管该函数为一个纯函数，但其返回值并非一个纯函数(Pure Function)，这意味着它可能对于相同的参数具有不同的返回值。
:::

生成一个通过偏移量偏移状态的函数状态机。

-   **Type**

请注意：该类型不唯一，视偏移数组而定。

$$a\rightarrow [(a\rightarrow b),...,(c\rightarrow d)]\rightarrow ([Int]\rightarrow d)$$

-   **Details**

第一个参数设定一个 seed，第二个参数传入一个函数数组。

返回值为一个接收偏移数组为参数的状态机，偏移数组与单元函数数组应等长。

对于每一次传入的偏移数组，会对原函数数组以[高维管道](#higherPipe)方式组合，最终返回组合后函以 seed 作为参数的函数值并将 seed 的值更新为该函数值。

-   **Example**

```js
const foo = stateMachine(1, [add(1), mul(2), div(3)]);

foo([0, 2, 0]); //4
foo([2, 0, 1]); //2
```
