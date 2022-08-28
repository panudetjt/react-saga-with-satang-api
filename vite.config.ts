import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './assets'),
      'components': path.resolve(__dirname, './src/components'),
      'routes': path.resolve(__dirname, './src/routes'),
      'sagas': path.resolve(__dirname, './src/sagas'),
      'services': path.resolve(__dirname, './src/services'),
      'configs': path.resolve(__dirname, './src/configs'),
    },
  },
  plugins: [react()]
})
