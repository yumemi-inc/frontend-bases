/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  /**
   * 新たに config を追加する場合は、`next/core-web-vitals` よりも前に追加する。
   */
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    // @next/eslint-plugin-import 内部で `plugins` に指定されている eslint-plugin-import と conflict しないように eslint-plugin-import 関連の config は後に指定
    "plugin:import/recommended",
    "plugin:import/typescript",
    // tailwindcss を利用しないプロジェクトでは、以下は削除する
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
  plugins: ["@typescript-eslint", "simple-import-sort"],
  root: true,
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
