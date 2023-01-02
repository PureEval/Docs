# PureEval Documentation

## Contributing

This documentation or site is built with [VitePress](https://github.com/vuejs/vitepress), and some of its features are borrowed from [vue/docs](https://github.com/vuejs/docs).

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run docs:dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.

Like many projects, commits should conform to the following format.

```git
doc: [changes]
```

As an example, when you are making additions or changes to the API documentation, the format should look like following format.

```git
doc: [add/update/improve] [API name] api documentation
doc: add object api documentation
doc: update optics api documentation
```
