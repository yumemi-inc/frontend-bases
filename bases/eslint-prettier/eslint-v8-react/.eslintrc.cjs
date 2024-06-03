/**
 * プロジェクトルートに `.editorconfig` があれば、その設定が優先される。
 * また、未指定時のデフォルト値は、以下のドキュメントに記載されている。
 * {@link https://prettier.io/docs/en/options}
 *
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: "./",
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
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
  },
};

module.exports = config;
