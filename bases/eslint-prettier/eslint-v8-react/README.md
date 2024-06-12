# Next.js 向けの ESLint v8 & Prettier の基本設定例

## 概要

eslint-plugin-react 2024/06/12時点では v9 に対応していないため、ESLint v8 の Legacy Config で利用できるものを用意しました。
Prettier については、`.editorconfig` の設定を優先し、利用するプロジェクトで必要な箇所を書き換える想定をしています。

## 構造

```txt
src/ ... 検証対象のファイルを配置しているディレクトリ
.eslintrc.cjs ... ESLint の config ファイル。package の type を `module` にしているが、ESLint v8 は `.mjs` に対応していないため
.prettierrc.mjs ... Pretteir の config ファイル。ESM として定義していることを明示的に示すために `.mjs` としています。
package.json ... 依存パッケージ
tsconfig.json ... `src` 内の Browser での動作を対象としたコード向けの tsconfig
tsconfig.node.json ... Node.js を利用した開発ツール群の config ファイルや、スクリプト向けの tsconfig
```





