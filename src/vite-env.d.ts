/// <reference types="vite/client" />

// 声明文件扩充
declare module '*.vue' {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>
  export default component
}