# Range {#range-api}

## range() {#range}

给定左右端点构造一个范围。

-   **Type**

$$Number|Char \to Number|Char \to [Number|Char]$$

-   **Details**

传入两个数字或字符类型的参数（记为 $a,b$），则结果为数学意义上的闭区间 $[a,b]$。

-   **Example**

```js
range(1, 5); //[1, 2, 3, 4, 5]
range('a')('c'); //['a', 'b', 'c']
```
