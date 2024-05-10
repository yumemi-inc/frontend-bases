/**
 * プロジェクトルートに `.editorconfig` があれば、その設定が優先される。
 * また、未指定時のデフォルト値は、以下のドキュメントに記載されている。
 * {@link https://prettier.io/docs/en/options}
 *
 * @type {import("prettier").Config}
 */
module.exports = {
  /**
   * tailwindcss を利用しないプロジェクトでは、以下は削除する
   */
  plugins: ["prettier-plugin-tailwindcss"],
};
