// このファイルは、 `next lint` を実行際に
// `app/` ディレクトリが必要だったため作成したダミーファイルかつ、
// Linter & Formatter の検証ファイルをかねています。

// import の順序を検証
import path from "node:path";

import { ChildA } from "#/app/components/ChildA";
import { ChildB } from "#/app/components/ChildB";
import { GrandChildA } from "#/app/components/components/GrandChildA";

import { App } from "./App";

export const main = () => console.log("hello");

// export の順序を検証
export { App } from "./App";
export type { ChildAProps } from "#/app/components/ChildA";
export { ChildA, MemoizedChildA } from "#/app/components/ChildA";
export type { ChildBProps } from "#/app/components/ChildB";
export { ChildB, MemoizedChildB } from "#/app/components/ChildB";
export type { GrandChildAProps } from "#/app/components/components/GrandChildA";
export {
  GrandChildA,
  MemoizedGrandChildA,
} from "#/app/components/components/GrandChildA";

console.log(App, ChildA, ChildB, GrandChildA, path);
