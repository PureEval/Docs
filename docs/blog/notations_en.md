---
title: Document Notations
Author: CAIMEO
excerpt: Notation conventions in the documentation
image: /blog/art1.png
---

# API Document Notations

The PureEval documentation uses several notations that are not commonly used in JavaScript to represent parameter types and functions. This standard is similar to Haskell but also incorporates some JavaScript features.

## Data Types

Common JavaScript data types are represented as follows:

|    Data Types    | Notations |
| :--------------: | :-------: |
|  Number           | $Number$  |
| Boolean           |  $Bool$   |
|  Integer           |   $Int$   |
| String             | $String$  |
|  Object             | $Object$  |
|   Array               |  $Array$  |
|   List (elements of type $a$) | $[a]$ | 
|   Any (all types)   |    $*$    |
| Unknown (some unknown type) | lowercase italic letters |
|    Void               |   $()$    |

- Unless specified otherwise, we will use $[a]$ to denote an array.
- Other user-defined types are also represented using similar italicized notation, such as $Either$ and $Maybe$.

### Sum Type

The "|" symbol is used to represent a sum type, for example:

$$
String | Int
$$

### Product

The "," symbol is used to represent a product type, for example:

$$
(String, Int)
$$

## Function

### Function Signature

Function signatures connect various types using arrows and are represented in italicized form. For example, the function `add`:

$$
Number \to Number \to Number
$$

The type after the last arrow represents the return type, while the preceding types represent the parameter types.

### Generics

For polymorphic functions, lowercase letters are used to represent a generic type. For example, in the signature of `always`, $a$ represents a parameter that can be of any type:

$$
a \to () \to a
$$

### Type Classes

Some functions have multiple possible types but not $*$. These are represented using generic constraints. For example, the function `equal`:

$$
Ord \ a \Rightarrow a \to a \to Bool
$$

$Ord$ is a type class, where $Ord \ a$ indicates that type $a$ must support the `==` operation. Other common type classes include $Iterable$, which represents types that can be iterated over.

## Components

The PureEval documentation for a function includes the following sections:

-   function_name(): The name of the function, presented as a second-level heading.
-   summary: A brief description of the function's functionality, provided in the main content.
-   signature: The function signature, located within the formula area after the **Type** keyword.
-   description: A detailed explanation of the function's functionality, following the **Details** keyword.
-   example: Usage examples, presented in a code block after the **Example** keyword.

Other important elements:

-   Function names and code mentioned in the content are represented as `inline code blocks`.
-   Types and data structures mentioned in the content are represented in italicized LaTeX format.
