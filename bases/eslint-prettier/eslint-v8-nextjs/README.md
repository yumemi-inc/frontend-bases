# Next.js 向けの ESlint v8 & Prettier の基本設定例

## 概要

最新の ESLint は、Flat Config を利用する v9 になっていますが、
Next.js と `eslint-config-next` では、Flat Config と v9 への対応ができておらず、
ESLint v8 を前提とした設定を行う必要があります。

そのため、この例では ESLint v8 かつ Legacy Config の前提で、
フォーマッターには Prettier を利用する形で基本的な設定を行いました。

## 構造

```txt
app/ ... `next lint` を実行するために、必要だったため、こちらに検証用のコードを配置しています
.eslintrc.cjs ... ESLint 向けの設定です
.prettierrc.cjs ... Prettier 向けの設定です
next-env.d.ts ... `next lint` 実行時に生成されたものです
package.json ... 必要なパッケージを定義しています
tsconfig.json ... `pnpm create next-app` 実行時に生成されたものと同じものになります
```

## 設定内容について

### ESLint

`pnpm create next app` で生成される `.eslintrc.json` で指定されている `next/core-web-vitals` では、
以下の設定が利用されるようになっており、そのままで、React のコードを実装するためのサポートはできていますが、
JavaScript や、TypeScript の言語機能にフォーカスした設定がされていないため、
`eslint` と、`typescript-eslint` が推奨する設定を追加しています。

他、以下の設定を追加しています。

- `eslint-plugin-import` と `eslint-plugin-simple-import-sort` を利用して、`import` と `export` の順序矯正
- `@typescript-eslint/consistent-type-imports` と `import/consistent-type-specifier-style` ルールを用いて、 型 の imoprt を `import type` で行うように矯正
- `eslint-plugin-tailwindcss` による、`className` の順序の矯正

> [!NOTE]
>
> 通常、ESLint の plugin や config に依存するパッケージは、明示的にプロジェクトの package.json の `devDependencies` 等に記述する必要がありますが、
> `eslint-config-next` では [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) を[利用し](https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js#L52)、`eslint-config-next` が依存している以下のパッケージを明示的にインストールせずに利用できるようしています。
>
> - [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next)
> - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
> - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
> - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
> - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
> - [eslint-import-resolver-node](https://www.npmjs.com/package/eslint-import-resolver-node)
> - [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)

### Prettier

[Prettier は EditorConfig の設定サポートしいる](https://prettier.io/docs/en/configuration.html#editorconfig)ため、その他の設定はデフォルトのままにしています。

## 登録している npm-scripts

| 名称   | 概要                                                  |
| ------ | ----------------------------------------------------- |
| check  | `tsc`, `eslint`, `prettier` を並列に実行する          |
| format | `eslint --fix` を `prettier --write` を直列に実行する |

## 参考

- [Next.js の ESLint](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)
- [`typescript-eslint` の Legacy ESLint Setup](https://typescript-eslint.io/getting-started/legacy-eslint-setup)
- [`eslint-config-next` の実装](https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js)
