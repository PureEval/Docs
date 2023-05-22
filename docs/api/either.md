# Either {#either-api}

Either 是一个用来安全实现处理错误的流程的函子，分为右值(Right)与左值(Left)。

## Example - Either

此处是一个 Either 函子使用的总例。

```js
function parseJSON(str) {
  try {
    const result = JSON.parse(str);
    return Right.of(result);
  } catch (e) {
    return Left.of(e.message);
  }
}

parseJSON("{sfdas").map(JSON.stringify).fold(console.error, console.log);
```

## Right {#right}

Right 代表可以被接受的值，其中的值将会被 Either 链一直传递。

- **Type**

$$Data\ Either\ a\ =\ Right\ a\ |\ Left\ a$$

### Right.of() {#rightof}

将一个值转换为 Right 类型的 Either 函子。

- **Type**

$$a\rightarrow Right\ a$$

- **Example**

```js
Right.of(1); //Right 1
```

### Right.map() {#rightmap}

将 Right 中的值进行映射。

- **Type**

$$Right\ a\rightarrow (a\rightarrow b)\rightarrow Right\ b$$

- **Example**

```js
Right.of(1).map(add(1)); //Right 2
```

### Right.fold {#rightfold}

将 Right 中的值进行映射并折叠出值。

传入一个 reject 函数与一个 resolve 函数，对于 Right 只会执行 resolve。

- **Type**

$$(e\rightarrow a)\rightarrow(b\rightarrow c)\rightarrow c$$

- **Example**

```js
Right.of(1).map(add(1)).fold(console.error, id); //2
```

## Left {#left}

Left 代表发生错误的值，一旦遇到了 Left 值，整个 Either 链将护送其至结束。

- **Type**

$$Data\ Either\ a\ =\ Right\ a\ |\ Left\ a$$

### Left.of() {#leftof}

将一个值转换为 Left 类型的 Either 函子。

- **Type**

$$a\rightarrow Left\ a$$

- **Example**

```js
Left.of(1); //Left 1
```

### Left.map() {#leftmap}

将 Left 中的值进行映射。

但是由于 Left 的性质，实际上返回值还是该 Left 本身。

- **Type**

$$Left\ a\rightarrow (a\rightarrow b)\rightarrow Left a$$

- **Example**

```js
Left.of(1).map(add(1)); //Left 1
```

### Left.fold {#leftfold}

将 Right 中的值进行映射并折叠出值。

传入一个 reject 函数与一个 resolve 函数，对于 Right 只会执行 reject。

- **Type**

$$(e\rightarrow a)\rightarrow(b\rightarrow c)\rightarrow c$$

- **Example**

```js
Left.of(1).map(add(1)).fold(id, console.log); //1
```