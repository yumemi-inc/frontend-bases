/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  /**
   * 新たに config を追加する場合は、`next/core-web-vitals` よりも前に追加する。
   */
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // tailwindcss を利用しないプロジェクトでは、以下は削除する
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
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
