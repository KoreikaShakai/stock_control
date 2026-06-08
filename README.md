#

プロジェクト名 -ストックコントロール

#

概要 -　昨今の世界情勢のニュースで日用品の取り回しに混乱している状況

        -簡単に日用品の管理ができるようにする

#

メイン画面のデモ画像

#

機能・特徴

    -トランプの最新発言を見ながら備蓄を考えられる

#

技術スタック

    -フロントエンド:React 19, VITE ,CSS
    -バックエンド:Node.js, Express, knex, PostgreSQL, AWS
    -インフラ:ーー

#

インストール・セットアップ
-Node.js 24以上
-npm 11以上

    -1 .git clone  git@github.com:KoreikaShakai/stock_control.git
    -2 cd stock_control
    -3 npm install
    -4 npm run dev
    -5 cd front
    -6 npm install
    -7 npm run dev
    -8 psql CREATE DATABASE stock_control
    -9 データベースのセットアップ　npm run migrate
    -10 サンプルデータの挿入　npm run seed

#

使用方法

    -1. アカウント作成:トップページからサインアップページへ行き「ユーザー登録」
    -2. 登録した情報でログイン
    -3. メイン画面で表示したい管理したい日用品を追加ボタンを押して撮影する
    -4. 更新ボタンを押すと、登録からの経過日数がリセットされる
    -5. 削除ボタンを押すと、リストから削除される

#

デプロイ

    -renderサイト. https://stock-control-7z2n.onrender.com/

#

ディレクトリ構成

├── data_of_trump
│ ├── trump_posts_001.json
│ └── trump_posts_002.json
├── front
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── public
│ │ ├── favicon.svg
│ │ └── icons.svg
│ ├── README.md
│ ├── src
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── assets
│ │ │ ├── hero.png
│ │ │ ├── react.svg
│ │ │ └── vite.svg
│ │ ├── components
│ │ │ ├── CameraModal.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── News.jsx
│ │ │ ├── Signup.jsx
│ │ │ └── StockList.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ │ └── Roots.jsx
│ └── vite.config.js
├── getTruth.js
├── knex_migrations
│ ├── 20260603071435_create_stock_table.js
│ └── 20260603071458_create_news_table.js
├── knex_seeds
│ ├── 001_stock_data.js
│ └── 002_news_data.js
├── knex.js
├── knexfile.js
├── package-lock.json
├── package.json
├── README.md
├── server.js
├── util
│ └── index.js
└── view
├── trump_posts.json
├── views_knex.js
└── views.js
