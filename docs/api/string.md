# String {#string-api}

## rexMatch() {#rexMatch}

正则匹配字符串。

- **Type**

$$RegExp \rightarrow String \rightarrow [String|null]$$

- **Details**

第一个参数传入需匹配的正则表达式，第二个参数传入待匹配串。

如果匹配成功，将返回匹配结果（具体格式与 `String.prototype.match` 相同）；否则将返回 `null`。

- **Example**

```js
rexMatch(/([a-z]m)/g, 'homomomo');//[ 'om', 'om', 'om' ]
```

## rexReplace() {#rexReplace}

替换字符串的子串或正则匹配到的值。

- **Type**

$$RegExp|String \rightarrow String \rightarrow String \rightarrow String$$

- **Details**

第一个参数传入需匹配的正则表达式或字串，第二个参数传入替换串目标串，第三个参数传入待替换串。

最终将返回的结果中待替换串将被全部替换为替换目标串。

- **Example**

```js
rexReplace("homo", "nimo", 'homomomo');//nimomomo
```

## rexText() {#rexTest}

检测字符串是否匹配给定的正则表达式。

- **Type**

$$RegExp \rightarrow String \rightarrow Bool$$

- **Details**

第一个参数传入正则表达式，第二个参数传入待匹配串。

如果匹配成功将返回 `true`，否则返回 `false`。

- **Example**

```js
rexTest(/^h/,"homo");//true
```

## split() {#split}

分割字符串。

- **Type**

$$RexExp|String \rightarrow Char \rightarrow [String]$$

- **Details**

第一个参数传入一个分割串，第二个参数传入一个字符串作为待分割串。

返回值为分割得到的结果数组。

- **Example**

```js
split("1", "ho1mo");//["ho","mo"];
split("1")("ho1mo");//["ho","mo"];
```

## toLower() {#toLower}

将字符串转为小写。

- **Type**

$$String \rightarrow String$$

- **Details**

传入一个仅含有字母的字符串，返回值为将全部大写字母转换为小写字母的原字符串。

- **Example**

```js
toLower("ABCD");//"abcd"
```

## toUpper() {#toUpper}

将字符串转为大写。

- **Type**

$$String \rightarrow String$$

- **Details**

传入一个仅含有字母的字符串，返回值为将全部小写字母转换为大写字母的原字符串。

- **Example**

```js
toUpper("abcd");//"ABCD"
```

## trim() {#trim}

删除字符串首、尾两端的空白字符。

- **Type**

$$String \rightarrow String$$

- **Details**

传入一个字符串，返回值为其删除首尾空白字符的结果。

- **Example**

```js
trim(" homo ");//"homo"
```

## words() {#words}

将一个字符串按单词分割。

- **Type**

$$String \rightarrow [String]$$

- **Details**

传入一个字符串，返回值为其按单词分割得到的结果数组。

- **Example**

```js
words("the boy next door");//['the', 'boy', 'next', 'door']
```
