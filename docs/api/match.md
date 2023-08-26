# Match {#match-api}

## match() {#match}

进行模式匹配。

-   **Details**

传入若干组数组一一对应每条规则，每个数组中有两个元素，这里记为 checker 与 executer。

match 将会返回一个函数，该函数接收一定数量的参数，并根据每条规则按顺序匹配第一个符合条件的 checker，执行对应的 executer 并返回结果。

对于每个 checker 的详细检测规则如下：

|                                     checker 类型                                      | 模式匹配参数个数<sup>[2]</sup> |                                         匹配规则                                         |
| :-----------------------------------------------------------------------------------: | :----------------------------: | :--------------------------------------------------------------------------------------: |
| 基本量字面值(number/string/object/array<sup>[1]</sup>/[maybe](/api/maybe.html#maybe)) |               1                |               将会比较参数与字面值是否相等<sup>[3]</sup>来判断是否匹配成功               |
|                                    function(sync)                                     |              任意              |          将匹配值全部传给该函数，根据函数返回的 true/false 信息判断是否匹配成功          |
|                                         array                                         |           Array 长度           | Array 中可包含前两种匹配方式，将会对每个值采取单独的匹配方式，若都匹配成功则认为匹配成功 |
|                     [otherwise](/api/placeholder.html#otherwise)                      |              任意              |                  采用该方式的匹配总是成功的，用于处理分类为“其他”的情况                  |

对于每个 executer 的执行规则如下：

| executer 类型 |                    执行规则                    |                                                             备注                                                              |
| :-----------: | :--------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
|    字面值     |          匹配成功后将直接返回该字面值          |                                                               /                                                               |
|   function    | 将匹配值全部传给该函数，并返回该函数的执行结果 | 虽然该函数没有像 checker 那样标注必须为同步函数，但如果是一个返回 Promise 的函数，我们会原样返回一个 Promise 而不对其进行处理 |

备注：

[1] : 因为 match 的设计依赖于 array 来进行分类，所以当您想编写匹配一个 array 字面量的逻辑时，请为其多套一层数组（可见下文例子）。

[2] : 此列只作标识作用，实际通过 match 返回的函数的 length 属性的值为 0。

[3] : match 对于 number/string 的相等规则与 [equalStrict](/api/logic.html#equalstrict) 相同；对于 object/array 的相等规则与 [deepEqual](/api/logic.html#deepequal) 相同；对于 maybe 的相等规则为 按 [equalStrict](/api/logic.html#equalstrict) 规则比对 fold 后的值。

-   **Example**

##### Example 1

```js
const sort = match(
	[[[]], []],
	[
		_,
		([x, ...xs]) => [
			...sort(filter(lte(x), xs)),
			x,
			...sort(filter(gt(x), xs))
		]
	]
);

const fib = match(
    [1, 1],
    [2, 2],
    [_, (v) => fib(v - 1) + fib(v - 2)]
);
```

##### Example 2

```js
// Data Nat = Succ Nat | Zero
const Nat = Data('Succ m', 'Zero');
Object.assign(global, Nat.binder);

// instance Show Nat
Nat.bindShow(match(
    [Zero.is, 0],
    [Succ.is, ({ m }) => m.show() + 1]
));

// add :: Nat -> Nat -> Nat
// add n Zero = n
// add n (Succ m) = Succ (add n m)
const add = match(
	[[_, eqData(Zero)], (n, _) => n],
	[[_, eqData(Succ(_))], (n, { m }) => Succ(add(n, m))]
);

add(Succ(Succ(Zero)), Succ(Zero)).show(); //3
```
