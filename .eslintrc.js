module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"]
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "error"
  },
};
