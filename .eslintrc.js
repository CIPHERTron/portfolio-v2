/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "sznm/react",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
  ],
  rules: {
    "no-param-reassign": 0
  }
};
