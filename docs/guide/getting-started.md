# Getting Started

This section will guide you through the use of PureEval.

### Using NPM

```sh
//For CommonJs
$ npm i pureeval
//For ESM
$ npm i pureeval-es
# or use any package manager you like, such as yarn, etc.
```

Then we go as follows.

#### For CommonJs

```js
const P = require('pureeval');
console.log(P.add(1)(114513)); //114514
```

#### For ESM

```js
import * as P from 'pureeval-es';
console.log(P.add(1)(114513)); //114514
```

### Get from GitHub Release

#### For CommonJS

Get the build version from [GitHub Releases](https://github.com/PureEval/PureEval/releases), extract `PureEval.common.js` or `PureEval.common.min.js` and `require` it in your code like below.

```js
const P = require('PureEval.common.min.js');
console.log(P.add(1)(114513)); //114514
```

#### For ESM

Get the build version from [GitHub Releases](https://github.com/PureEval/PureEval/releases), extract `PureEval.es.js` or `PureEval.es.min.js` and `import` it in your code like below.

```js
import * as P from 'PureEval.es.min.js';
console.log(P.add(1)(114513)); //114514
```

## What's next?

By now, [API Reference Documentation](https://pureeval.org/api/) is ready for use PureEval. (Do forget to read the [Notations](/blog/notations) )
