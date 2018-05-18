module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  rules: {
    quotes: [2, "single"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 120
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "no-console": 0,
    "no-use-before-define": ["error", { functions: false, classes: true }]
  },
  env: {
    browser: true,
    node: true
  }
};
