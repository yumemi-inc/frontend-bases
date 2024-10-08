# Next.js 向けの ESLint v8 & Prettier の基本設定例

## 概要

eslint-plugin-react が 2024/06/12時点では v9 に対応していないため、ESLint v8 の Legacy Config で利用できるものを用意しました。

## 構造

```txt
src/ ... 検証対象のファイルを配置しているディレクトリ
.eslintrc.cjs ... ESLint の config ファイル。※  `.eslintrc` は `.mjs` に対応していないため `.cjs` で定義
.prettierrc.mjs ... Pretteir の config ファイル。ESM として定義していることを明示的に示すために `.mjs` としています。
package.json ... 依存パッケージ
tsconfig.json ... `src` 内の Browser での動作を対象としたコード向けの tsconfig
tsconfig.node.json ... Node.js を利用した開発ツール群の config ファイルや、スクリプト向けの tsconfig
```

### ESLint

`eslint` と、`typescript-eslint` が推奨する設定を中心に、以下の設定をしています。

- `eslint-plugin-import` と `eslint-plugin-simple-import-sort` を利用して、`import` と `export` の順序矯正
- `@typescript-eslint/consistent-type-imports` と `import/consistent-type-specifier-style` ルールを用いて、 型 の imoprt を `import type` で行うように矯正
- `eslint-plugin-tailwindcss` による、`className` の順序の矯正

### Prettier

[Prettier は EditorConfig の設定サポートしいる](https://prettier.io/docs/en/configuration.html#editorconfig)ため、その他の設定はデフォルトのままにしています。

## 登録している npm-scripts

| 名称   | 概要                                                  |
| ------ | ----------------------------------------------------- |
| check  | `tsc`, `eslint`, `prettier` を並列に実行する          |
| format | `eslint --fix` を `prettier --write` を直列に実行する |
