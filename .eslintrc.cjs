module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-comments"],
  extends: [
    // "next",
    "prettier",
    // "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:deprecation/recommended",
  ],
  rules: {
    // eslint-comments, because people abuse eslint-disable lol
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-restricted-disable": ["error"],

    "max-len": "off", // handled by prettier

    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
      },
    ],

    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",

    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {},
      },
    ],

    "unicorn/no-array-for-each": "warn",
    "unicorn/no-null": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          env: true,
          src: true,
          props: true,
        },
      },
    ],

    // debug console.log's often get accidentally left in
    // by disallowing them, we prevent random logs from appearing
    // other console methods are allowed because devs are lazy
    // and generally just press tab.
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "debug", "trace", "info", "fatal"],
      },
    ],
    "no-unused-vars": "off", // handled by typescript-eslint
    "deprecation/deprecation": "warn", // warn about deprecated methods
  },
  overrides: [
    {
      // disable some rules in test files because jest requires casting
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "unicorn/prevent-abbreviations": ["warn"],
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    //   "*.d.ts",
    //   "types.ts",
    //   "*.js",
    //   "**/jests/**",
    ".eslintrc.js",
    ".eslintrc.cjs",
    "node_modules/**",
    "dist/**",
    "jest.config.ts",
    "jest.setup.ts",
    "tsup.config.ts",
    "coverage/**",
    "coverage-ts/**",
  ],
};
