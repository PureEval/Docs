// eslint-disable no-undef
export const env = {
  browser: true,
  es2021: true,
};

export const extends = ["eslint:recommended", "plugin:vue/vue3-recommended"];

export const parserOptions = {
  ecmaVersion: "latest",
  parser: "@typescript-eslint/parser",
  sourceType: "module",
};

export const plugins = [
  "vue",
  "@typescript-eslint",
];
