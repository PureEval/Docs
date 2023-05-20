# Object {#object-api}

## prop() {#prop}

取出 $Object$ 中的一个属性。

- **Type**

##### Overload 1

$$String|Int\rightarrow Object \ a \rightarrow a$$

##### Overload 2

$$[String|Int]\rightarrow Object \ a \rightarrow a$$

- **Details**

##### Overload 1

传入一个属性名，再传入一个对象，取出对象中对应属性名的元素。

##### Overload 2

传入一个属性路径，再传入一个对象，取出对象中对应属性路径的元素。

- **Example**

```javascript
//Overload 1
prop("homo", { homo: 114514 }); //114514
//Overload 2
prop(["inside", "homo"], { inside: { homo: 114514 } }); //114514
```

## assoc() {#assoc}

修改 $Object$ 中的一个属性。

- **Type**

##### Overload 1

$$String|Int\rightarrow b\rightarrow Object \ a \rightarrow Object \ b$$

##### Overload 2

$$[String|Int]\rightarrow b\rightarrow Object \ a \rightarrow Object \ b$$

- **Details**

请注意：该函数不会改变原 $Object$。

##### Overload 1

传入一个属性名和目标值，再传入一个对象，将对象中属性名对应的值改为目标值并返回。

##### Overload 2

传入一个属性路径和目标值，再传入一个对象，将对象中对应属性路径的元素改为目标值并返回。

- **Example**

```javascript
//Overload 1
assoc("homo", "yeah", { homo: 114514 }); //{ "homo": "yeah" }
//Overload 2
assoc(["inside", "homo"], "yeah", { inside: { homo: 114514 } }); //{ "inside": { "homo": "yeah" } }
```

## modify() {#modify}

将一个函数应用于 $Object$。

- **Type**

##### Overload 1

$$String|Int\rightarrow (a\rightarrow b)\rightarrow Object \ a \rightarrow Object\ b$$

##### Overload 2

$$[String|Int]\rightarrow (a\rightarrow b)\rightarrow Object \ a \rightarrow Object\ b$$

- **Details**

请注意：该函数会改变原 $Object$。

##### Overload 1

传入一个属性名和一个函数 $f$，再传入一个对象，将对象中属性名对应的元素 $v$ 改为 $f v$ 并返回。

##### Overload 2

传入一个属性路径和一个函数 $f$，再传入一个对象，将对象中对应属性路径的元素 $v$ 改为 $f v$ 并返回。

- **Example**

```javascript
//Overload 1
modify("homo", (v) => "yeah", { homo: 114514 }); //{ "homo": "yeah" }
//Overload 2
modify(["inside", "homo"], (v) => "yeah", { inside: { homo: 114514 } }); //{ "inside": { "homo": "yeah" } }
```

## dissoc() {#dissoc}

删除 $Object$ 中的一个属性。

- **Type**

##### Overload 1

$$String|Int\rightarrow Object \ a \rightarrow Object$$

##### Overload 2

$$[String|Int]\rightarrow Object \ a \rightarrow Object$$

- **Details**

请注意：该函数不会改变原 $Object$。

##### Overload 1

传入一个属性名和目标值，再传入一个对象，将对象中属性名对应的元素删除并返回。

##### Overload 2

传入一个属性路径和目标值，再传入一个对象，将对象中对应属性路径的元素删除并返回。

- **Example**

```javascript
//Overload 1
dissoc("homo", { homo: 114514 }); //{}
//Overload 2
dissoc(["inside", "homo"], { inside: { homo: 114514 } }); //{ "inside": {} }
```

## deepClone() {#deepClone}

深复制一个对象。

- **Type**

$$Object \ a\rightarrow Object$$

- **Details**

传入一个 $Object$，返回其深复制的结果。

- **Example**

```javascript
deepClone({ a: 1, b: 2, c: 3 }); //{ a: 1, b: 2, c: 3 }
```

## keys() {#keys}

取出 Object 内的所有键。

- **Type**

$$Object \ [key:a]\rightarrow [key]$$

- **Details**

传入一个 $Object$，返回一个其所有键组成的列表。

- **Example**

```javascript
keys({ a: 1, b: 2, c: 3 }); //['a', 'b', 'c']
```

## valuesIn() {#valuesIn}

取出 Object 内的所有值。

- **Type**

$$Object \ [key:a]\rightarrow [a]$$

- **Details**

传入一个 $Object$，返回一个其所有值组成的列表。

- **Example**

```javascript
valuesIn({ a: 1, b: 2, c: 3 }); //[1, 2, 3]
```

## makePair() {#makePair}

将一个元组数组转换为对象。

- **Type**

$$[[a,b]]\rightarrow Object \ a:b$$

- **Details**

传入一个元素形如 $[a,b]$ 的元组数组，返回一个每个键值形如 ${a:b}$ 的 $Object$。

- **Example**

```javascript
makePair([
  ["c", "m"],
  ["a", "e"],
  ["i", "o"],
]); //{ c: "m", a: "e", i: "o" }
```

## construct() {#construct}

将一个 class 的构造函数柯里化。

- **Type**

<img class="constructFlowImage" :src="constructFlowImage()" style="margin: 0 auto;">

- **Details**

传入一个 class，返回一个柯里化后的构造函数。

- **Example**

```javascript
class foo {
  constructor(a, b, c) {
    //do something...
  }
}
construct(foo)(1)(2)(3);
```

## has() {#has}

判断 $Object$ 中是否有某属性。

- **Type**

$$String|Int\rightarrow Object\rightarrow Bool$$

- **Details**

第一个参数传入一个属性名，接下来传入一个对象，若对象中有属性名对应的元素，则返回 `true`，否则返回 `false`。

- **Example**

```javascript
has("homo")({ homo: 1 }); //true
```

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const constructFlowImage = function () {
    if (isDark.value) {
        return "/images/api/pureeval.ist.drawio-pi-dark.svg"
    } else {
        return "/images/api/pureeval.ist.drawio-pi-light.svg"
    }
}
</script>
