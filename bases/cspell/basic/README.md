# Web フロントエンド向け cspell の基本設定例

ソフトウェア業界と、Web フロントエンドで利用する言語に関連する CSpell の辞書を import した設定例です。

## 構成

```txt
package.json ... 依存するパッケージを記述
cspell.jsonc ... JSONC で記述した CSpell の設定
custom_dict.txt ... 案件毎に利用する単語を記載するための辞書
tests/ ... 検証ファイル
```

## 利用しているパッケージ

|名称|概要|
|---|---|
|`cspell`| スペルチェックを CLI で実行するために追加 |
|`@cspell/dict-css`| CSS 向けの辞書と設定 |
|`@cspell/dict-html`| HTML 向けの辞書と設定 |
|`@cspell/dict-typescript`| TypeScript と JavaScript 向けの辞書と設定 |
|`@cspell/dict-node`| Node.js 向けの辞書と設定 |
|`@cspell/dict-npm`| NPM 向けの辞書と設定 |
|`@cspell/dict-software-terms`| ソフトウェア業界向けの辞書と設定 |
|`@cspell/dict-fullstack`| サーバーサイドとフロントエンド向けの辞書と設定 |
|`@cspell/dict-en-gb`| イギリス英語向けの辞書定 |
|`@cspell/dict-en_us`| アメリカ英語向けの辞書定 |

## 登録しているコマンド

|名称|概要|
|---|---|
|spellcheck|`cspell .` を実行し、プロジェクトないのスペルミスを見つける|

## 参考

- [CSpell のドキュメント](https://cspell.org/)
- [CSpell の辞書一覧](https://github.com/streetsidesoftware/cspell-dicts)
- CSpell の活用例・紹介記事
  - https://qiita.com/Kenta_Kobayashi/items/fcefbc8dc27626a10b83


