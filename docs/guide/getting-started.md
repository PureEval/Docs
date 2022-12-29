# Getting Started

This section will guide you through the use of PureEval.

## For CommonJS

Add PureEval as dependencies for your project.

### Using NPM

```sh
$ npm i pureeval
# or use any package manager you like, such as yarn, etc.
```

Then reference it in your code as follows.

```javascript
const pureEval = require("pureeval")
console.log(pureEval.add(1)(114513)); //114514
```

### Get from GitHub Release

Get the build version from [GitHub Releases](https://github.com/PureEval/PureEval/releases), extract `PureEval.common.min.js` and `require` it in your code like below.

```javascript
const pureEval = require("PureEval.common.min.js")
console.log(pureEval.add(1)(114513)); //114514
```

## For ESM

Get the build version from [GitHub Releases](https://github.com/PureEval/PureEval/releases), extract `PureEval.es.min.js` and `import` it in your code like below.

```javascript
import * as pureEval from 'PureEval.es.min.js'
console.log(pureEval.add(1)(114513)); //114514
```

## What's next?

By now, you can check the API reference documentation to use PureEval.