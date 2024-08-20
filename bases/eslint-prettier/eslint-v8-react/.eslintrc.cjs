const tsconfigNode = require("./tsconfig.node.json");

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    /**
     * typescript-eslint の型情報を利用するルールを使用する場合に必要
     * {@link https://typescript-eslint.io/packages/parser#project}
     */
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    // `eslint-plugin-import` よりも、広範囲かつ望ましいソートが可能な
    // `eslint-plugin-simple-import-sort` で勧められている設定を指定
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    // `import` と `import type` を分ける
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],

    // `import type` を同一パスの `import` の上に配置する
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

    // `tsconfig.json` の `compilerOptions.jsx` で `react-jsx` を指定している場合は無効にする必要があるため
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    // `tsconfig.node.json` の対象ファイル向けの設定
    {
      files: tsconfigNode.include,
      parserOptions: { project: "./tsconfig.node.json" },
    },

    // `.eslintrc.cjs` など、CommonJS の記法を利用するファイルむけの設定
    {
      files: ["**/*.cjs"],
      extends: ["plugin:n/recommended"],
      parserOptions: {
        ecmaVersion: 2022,
      },
      rules: {
        // `require` の利用を有効にする
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

module.exports = config;
