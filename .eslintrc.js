module.exports = {
  root: true,
  extends: [],
  parser: "@typescript-eslint/parser",

  plugins: [
    "import",
    "simple-import-sort",
    "@react-native-community",
    "eslint-plugin-react",
  ],
  rules: {
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  env: {
    es6: true, // enable ES2015 features.
    browser: true, // enable use of global browser variables like `windows`.
    node: true, // enable use of global node variables like `process`.
  },
  parserOptions: {
    parser: "babel-eslint",
    project: "./tsconfig.eslint.json", // Specify where to find the root tsconfig file of your project.
    ecmaVersion: 2021, // ECMAScript version supported in the project.
    sourceType: "module", // set to `module` because we ue ECMAScript modules.
    ecmaFeatures: {
      jsx: true, // enable jsx for React.
    },
  },
  settings: {
    react: {
      version: "detect", // auto-detect React version from package.json.
    },
  },
};
