# Bind {#bind-api}

## _ {#_}

它只是一个占位符。

## bind() {#bind}

将函数的某些参数提前绑定。

- **Type**

$$(a\rightarrow b \rightarrow c \rightarrow ...\rightarrow x)\rightarrow a \rightarrow b \rightarrow \bar{c} \rightarrow ... \rightarrow c \rightarrow x$$

- **Details**

第一个参数传入一个函数，接下来传入的参数个数与该函数参数数量相同。

对于接下来的每个参数，若传入的是一个确定的值，则将直接绑定在原函数上；若传入的是占位符 [\_](#_)，则表明该位置仍然需要传入参数。

返回值即为对原函数按上述参数绑定值后的新函数。

- **Example**

```js
const foo = (a, b, c) => a + b + c;
bind(foo, 1, _, 3)(4); //8
```
