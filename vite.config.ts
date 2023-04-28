import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    outDir: './dist'
  },
  server: {
    proxy: {
      '/lite-api': {
        target: 'http://172.16.0.11:8890',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lite-api/, '')
      }
    }
  }
})
