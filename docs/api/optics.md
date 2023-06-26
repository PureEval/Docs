# Optics {#optics-api}

如果您希望了解光学组件的概念，可以参考[arxiv 2001.07488v3](https://arxiv.org/pdf/2001.07488v3.pdf);

## Lens {#Lens}

光学组件透镜。

## Lens.of() {#of}

构造一个透镜。

-   **Type**

$$(s\rightarrow a)\rightarrow(s\rightarrow a\rightarrow s)\rightarrow Len \ s \ a$$

-   **Details**

第一个参数传入一个 getter 方法，第二个参数传入一个 setter 方法。

返回值为一个透镜。

-   **Example**

```js
Lens.of((s) => s.a, assoc('a'));
```

## Lens.bind() {#bind}

直接将元素绑定在透镜。

-   **Type**

##### Overload 1

$$String|Int\rightarrow Lens$$

##### Overload 2

$$[String|Int]\rightarrow Lens$$

-   **Details**

##### Overload 1

传入一个元素的索引，返回一个绑定到该元素的透镜。

##### Overload 1

传入一个元素的属性路径，返回一个绑定到该元素的透镜。

```js
Lens.bind('a');
Lens.bind(['a', 'b']);
```

## view {#view}

返回一个数据结构中透镜聚焦的部分。

-   **Type**

$$Len\rightarrow a\rightarrow b$$

-   **Details**

第一个参数传入一个透镜，第二个参数传入对应的数据结构。

返回值为该数据结构中透镜聚焦的部分。

-   **Example**

```js
const lens = Lens.bind('a');
view(lens, { a: 1 }); //1
```

## set {#set}

对一个数据结构中透镜聚焦的部分的值进行设置。

-   **Type**

$$Len\rightarrow a \rightarrow b\rightarrow c$$

-   **Details**

第一个参数传入一个透镜，第二个参数传入需要设置为的目标值，第三个参数传入对应的数据结构。

返回值为该数据结构被设置完成的结果

-   **Example**

```js
const lens = Lens.bind('a');
set(lens, 2, { a: 1 }); //{ a: 2 }
```

## over {#over}

对一个数据结构中透镜聚焦的部分的应用函数。

-   **Type**

$$Len\rightarrow (a\rightarrow b) \rightarrow Data \ a\rightarrow Data \ b$$

-   **Details**

第一个参数传入一个透镜，第二个参数传入要应用的函数，第三个参数传入对应的数据结构。

返回值为该数据结构应用函数后的结果。

-   **Example**

```js
const lens = Lens.bind('a');
over(lens, add(1), { a: 1 }); //{ a: 2 }
```
