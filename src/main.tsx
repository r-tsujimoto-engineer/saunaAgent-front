// 潜在的な問題を早期に発見
// レガシーなAPIの使用
// 安全でないライフサイクルの使用
import { StrictMode } from "react";
//より効率的なレンダリングを実現する並行レンダリング機能を有効
import { createRoot } from "react-dom/client";
//メインのアプリケーションコンポーネント
import App from "./App";
//ブラウザの履歴管理を提供するコンポーネント
//アプリケーション全体にルーティング機能を提供
import { BrowserRouter } from "react-router-dom";

// アプリケーションのルートコンポーネントをレンダリング
// DOMへのマウント処理
// <BrowserRouter>を使用することで、ブラウザの戻る／進むボタンの正常な操作
// url直接入力によるページアクセス、ページ全体をリロードすることなく、コンポーネントの切り替えが可能
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);