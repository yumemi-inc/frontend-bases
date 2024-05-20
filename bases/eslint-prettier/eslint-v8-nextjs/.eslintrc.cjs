/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  /**
   * 新たに config を追加する場合は、`next/core-web-vitals` よりも前に追加する。
   */
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    // import の順序を `["builtin", "external", "parent", "sibling", "index"]` の順序で並び替える
    "import/order": "error",
    // eslint-plugin-import の import/order では1つの import 宣言の中の変数名などはソートしてくれないので、ESLint 本体の sort-imports を使う
    // see: https://github.com/import-js/eslint-plugin-import/issues/1732#issuecomment-616246894
    "sort-imports": ["error", {
      'ignoreDeclarationSort': true,
    }],
  },
};
