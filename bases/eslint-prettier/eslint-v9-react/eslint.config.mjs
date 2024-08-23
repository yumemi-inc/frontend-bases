/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable n/no-unpublished-import */
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginImportX from "eslint-plugin-import-x";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNode from "eslint-plugin-n";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tsEslint from "typescript-eslint";

import tsconfigNode from "./tsconfig.node.json" with { type: "json" };

export default tsEslint.config(
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // eslint-plugin-react の設定
  {
    settings: {
      react: {
        version: "detect",
        defaultVersion: "18",
      },
    },
  },

  pluginJs.configs.recommended,

  // ConfigArray なので spread で展開
  ...tsEslint.configs.recommendedTypeChecked,

  pluginReact.configs.flat.recommended,

  // jsx a11y
  pluginJsxA11y.flatConfigs.recommended,

  // tailwind
  ...pluginTailwind.configs["flat/recommended"],

  // eslint-plugin-react-hooks
  {
    plugins: { "react-hooks": pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // `import` 関連の設定
  // `eslint-plugin-import` は v9 未対応なため、`eslint-plugin-import-x` を利用している
  {
    settings: {
      "import-x/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import-x/resolver": {
        typescript: true,
      },
    },
    plugins: {
      "import-x": pluginImportX,
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      ...pluginImportX.configs.typescript.rules,
      // `eslint-plugin-import` よりも、広範囲かつ望ましいソートが可能な
      // `eslint-plugin-simple-import-sort` で勧められている設定を指定
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import-x/first": "error",
      // NOTE: "import/newline-after-import" は ESLint v9 に未対応
      // "import/newline-after-import": "error",
      "import-x/no-duplicates": "error",

      // `import type` を同一パスの `import` の上に配置する
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],

      // `import` と `import type` を分ける
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],

      // `tsconfig.json` の `compilerOptions.jsx` で `react-jsx` を指定している場合は無効にする必要があるため
      "react/react-in-jsx-scope": "off",
    },
  },

  // Node.js 向けの設定
  {
    // TypeScript の設定と合わせるため、対象ファイルは `tsconfig.node.json` で管理する
    files: tsconfigNode.include,
    languageOptions: {
      parserOptions: {
        projectService: true,
        project: "./tsconfig.node.json",
      },
    },
    plugins: { n: pluginNode },
    rules: pluginNode.configs["flat/recommended-script"].rules,
  },

  // cjs 向けの設定
  {
    files: ["**/*.cjs"],
    rules: {
      // `require` の利用を有効にする
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  // NOTE: flat config の一番最後に追加する必要がある。
  eslintConfigPrettier,
);
