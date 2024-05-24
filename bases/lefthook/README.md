# lefthook

1. パッケージをインストール

```bash
npm i -D lefthook
yarn i -D lefthook
pnpm i -D lefthook
bun i -D lefthook
```

## setting

1. ymlファイルの追加

プロジェクトルートにymlファイルを配置してください

yml内の<files>は対象のディレクトリを指定してください（ex. `./src`, `{staged_files}`）

- [biome](./biome/lefthook.yml): biomeを使う場合
- [prettier + eslint](./eslint-prettier/lefthook.yml): eslint + prettierを使う場合


2. git hookに反映

```bash
npx lefthook install
bunx lefthook install
```
