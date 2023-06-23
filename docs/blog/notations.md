---
title: Document Notations
Author: CAIMEO
excerpt: 文档使用的符号约定
image: /blog/art1.png
---

# API Document Notations

PureEval 文档使用了很多非 JavaScript 常用的记号，用来表示参数据类型和函数。该标准与 Haskell 相似，但也有一些 JavaScript 的特性。

## Data Types

JavaScript 常见的数据类型将标记如下：

|    Data Types    | Notations |
| :--------------: | :-------: |
|  Number (数字)   | $Number$  |
| Boolean (布尔值) |  $Bool$   |
|  Integer (整数)  |   $Int$   |
| String (字符串)  | $String$  |
|  Object (对象)   | $Object$  |
|   Array (数组)   |  $Array$  |
|   Any (任意值)   |    $*$    |
|    Void (空)     |   $()$    |

其他自建类型也使用类似的斜体标记，如 $Either$ 和 $Maybe$ 等。

### Sum Type

采用 $|$ 分隔两个类型表示和类型，如：

$$
String | Int
$$

### Product

采用 $,$ 分隔两个类型表示积类型，如：

$$
(String, Int)
$$

## Function

### 函数签名

函数签名采用箭头连接各个类型，以斜体表示，比如函数 `add`：

$$
Number \to Number \to Number
$$

最后一个箭头后面的类型即为返回值的类型，其余类型都为参数的类型。

### 泛型

对于多态函数，采用小写字母表示一种类型，如 `always` 签名中 $a$ 表示该参数可以是任意类型:

$$
a \to () \to a
$$

### 类型类

部分函数的类型可以是多种但不是 $*$ ，采用泛型约束标记，如函数 `equal`：

$$
Ord \ a \Rightarrow a \to a \to Bool
$$

$Ord$ 是一个类型类，$Ord \ a$ 表示类型 $a$ 必须能够使用 `==` 操作。常见的类型类还有 $Iterable$ ，表示可以迭代的类型。

## Components

PureEval 文档对于一个函数的介绍包括以下几个部分：

-   function_name(): 函数的名称，为二级标题
-   summary : 函数功能概括，为正文内容
-   signature : 函数签名， **Type** 关键字之后的公式区域
-   description : 函数功能详细介绍， **Details** 关键字之后的正文
-   example : 使用例， **Example** 关键字之后的代码块

其他关键要素：

-   正文中出现的函数名称和代码均用 `行内代码代码块` 表示
-   正文中出现的类型、数据结构用 $LaTeX$ 斜体表示
