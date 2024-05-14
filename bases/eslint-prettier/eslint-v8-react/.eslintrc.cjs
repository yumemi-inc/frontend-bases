/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  /**
   * 新たに config を追加する場合は、`prettier` よりも前に追加する。
   */
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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
    'import', "@typescript-eslint", "react", "react-hooks", "jsx-a11y"
  ],
  settings: {
    "import/extensions": ['.js', '.jsx', '.ts', '.tsx'],
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    // import の順序を `["builtin", "external", "parent", "sibling", "index"]` の順序で並び替える
    "import/order": "error",
  },
};
