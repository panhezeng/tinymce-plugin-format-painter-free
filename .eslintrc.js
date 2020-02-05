module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error"
  },
  parser: "babel-eslint",
  parserOptions: {},
  globals: {
    tinymce: "readonly"
  }
};
