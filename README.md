# テスト対策

鉄人専用のテスト対策アプリ（暗記カード＋4択の模擬テスト）。ビルドなしの静的サイト＋Vercelの関数1つ。

- `data.js` … 科目・テスト日・カード。新しいテストが決まったらClaudeがここを更新する
- `app.js` / `style.css` / `index.html` … 画面
- `api/sync.js` … スマホとPCで記録を共有するためのAPI。Vercelのプロジェクトに **Upstash for Redis（Storage）** をつなぐと動く（`KV_REST_API_URL` と `KV_REST_API_TOKEN` が自動で入る）。つないでいないときは端末の中（localStorage）だけで記録する
- `sw.js` / `manifest.webmanifest` … ホーム画面に追加してアプリとして使うため

記録は「同期コード」ごとに保存される。スマホの「同期」画面のコードをPCで入れると同じ記録になる。
