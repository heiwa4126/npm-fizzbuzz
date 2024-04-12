# npm-fizzbuzz (@heiwa4126/fizzbuzz)

npm パッケージの練習。最初は CommonJS のみで始める。

[Fizz Buzz](https://ja.wikipedia.org/wiki/Fizz_Buzz)のジェネレーター。

## インストール

```sh
npm install @heiwa4126/fizzbuzz
```

CLI として `heiwa4126-fizzbuzz` がインストールされる。

## 使用例

```javascript
const { fizzbuzz } = require("@heiwa4126/fizzbuzz");

for (const i of fizzbuzz(15)) {
  console.log(i);
}
```

output:

```text
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

または

```sh
npx @heiwa4126/fizzbuzz 15
# or
heiwa4126-fizzbuzz 15
```

## 開発メモ

ソースには run-scripts に

- `npm test` - [tape](https://www.npmjs.com/package/tape) によるテスト
- `npm run lint` - [biome](https://www.npmjs.com/package/@biomejs/biome) による lint
- `npm run fix` - biome による [安全な修正(Safe fixes)](https://biomejs.dev/ja/linter/#%E5%AE%89%E5%85%A8%E3%81%AA%E4%BF%AE%E6%AD%A3safe-fixes)
- `npm run lint:package` - [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint) による package.json の lint

が書いてあります。

また数字のみの git タグ(例:"v1.0.0")をつけて、
GitHub の main ブランチに push すると
GitHub Packages が生成される
GitHub Actions が書いてあります
([release-package.yml](.github/workflows/release-package.yml))。

GitHub Packages については
[GitHub Packages のクイックスタート - GitHub Docs](https://docs.github.com/ja/packages/quickstart)
を参照してください。
