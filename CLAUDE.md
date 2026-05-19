# CLAUDE.md — Task Board Project

## プロジェクト概要

タスク管理ボードアプリケーション。

---

## Git 運用ルール

### 基本方針

**コードを変更するたびに、必ずコミットしてGitHubへプッシュすること。**

### 手順

1. 変更をステージングする
   ```
   git add <変更ファイル>
   ```
2. コミットメッセージを作成してコミットする（英語で簡潔に）
   ```
   git commit -m "feat: add task creation form"
   ```
3. GitHubへプッシュする
   ```
   git push origin main
   ```

### コミットのタイミング

- 機能の追加・変更が完了したとき
- バグを修正したとき
- リファクタリングを行ったとき
- 設定ファイルを変更したとき

半端な状態（ビルドエラーや明らかな不整合がある状態）ではコミットしない。

### コミットメッセージの形式

```
<type>: <概要>
```

| type | 用途 |
|------|------|
| `feat` | 新機能の追加 |
| `fix` | バグ修正 |
| `refactor` | リファクタリング |
| `style` | フォーマット・スタイル変更 |
| `docs` | ドキュメント変更 |
| `chore` | ビルド設定・依存関係の変更 |

### ブランチ戦略

- `main` — 常にデプロイ可能な状態を維持する
- 大きな機能追加はフィーチャーブランチで作業し、完成後に `main` へマージする

---

## コーディング規約

- コメントは原則書かない。WHYが自明でない場合のみ最小限に留める
- 不要なエラーハンドリングや抽象化を追加しない
- ファイルを新規作成するより既存ファイルを編集することを優先する

---

## デプロイ先

- **本番URL**: https://dnakauchi.github.io/task-board/
- **デプロイ方式**: `main` ブランチへのプッシュで GitHub Actions が自動ビルド＆デプロイ
- **設定ファイル**: `.github/workflows/deploy.yml`

---

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| UIライブラリ | React 18 |
| ビルドツール | Vite 5 |
| スタイリング | CSS Modules なし / グローバルCSS（BEM命名） |
| 状態管理 | React `useState` （外部ライブラリなし） |
| 永続化 | `localStorage` |
| デプロイ | GitHub Pages + GitHub Actions |

---

## コンポーネント設計

### 命名規約

- ファイル名・コンポーネント名ともに **PascalCase**（例: `TaskItem.jsx`）
- CSS クラス名は **BEM** に準じた命名（例: `task-item__text`, `task-item--completed`）

### コンポーネント構成

```
src/
├── App.jsx                   # ルートコンポーネント。状態管理とlocalStorage連携
└── components/
    ├── TaskInput.jsx         # テキスト入力と追加ボタン
    ├── TaskList.jsx          # タスク一覧。空状態の表示も担当
    └── TaskItem.jsx          # 個別タスク。チェックボックス・テキスト・削除ボタン
```

### データ構造

```js
// tasks: Task[]
{
  id: string,        // crypto.randomUUID()
  text: string,
  completed: boolean
}
```

---

## 開発環境

- OS: Windows 11
- Shell: PowerShell / Bash
- ローカル開発サーバー: `npm run dev` → http://localhost:5173
