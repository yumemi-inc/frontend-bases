/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  /**
   * 新たに config を追加する場合は、`next/core-web-vitals` よりも前に追加する。
   */
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // tailwindcss を利用しないプロジェクトでは、以下は削除する
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /**
     * typescript-eslint の型情報を利用するルールを使用する場合に必要
     * {@link https://typescript-eslint.io/packages/parser#project}
     */
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // import の順序を `["builtin", "external", "parent", "sibling", "index"]` の順序で並び替える
    'import/order': 'error',
  },
};

module.exports = config;