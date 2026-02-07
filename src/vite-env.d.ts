/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIFF_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.jpeg' {
  const value: string;
}
