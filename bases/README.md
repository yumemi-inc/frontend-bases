# bases

## 説明

このディレクトリには、ツール群とユースケースで構造化したコンフィグを配置する。

## 構成


```txt
bases/
  [tools]/
    [use-case]/
      tests/
      package.json
      README.md
```

### `bases/[tools]/`

利用するツール群毎に分類を行う。  
`[tools]` は、利用するリンターやフォーマッターの名称、複数ある場合は `-` で区切る形で定義する。

### `bases/[tools]/[use-case]/`

ユースケース毎のコンフィグを配置する。
`[use-case]` は、ユースケースに合わせた名称を半角英数と `-` で記載する。

### `bases/[tools]/[use-case]/tests/`

利用するツールのコンフィグを検証するためのコードを配置する。

### `bases/[tools]/[use-case]/package.json`

依存するツール、プラグインを指定する

### `bases/[tools][use-case]/README.md`

このユーケースにおけるコンフィグの説明を記載する。
