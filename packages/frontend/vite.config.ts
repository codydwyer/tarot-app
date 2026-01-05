import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@graphql': path.resolve(__dirname, './src/graphql'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@setup': path.resolve(__dirname, './src/setup'),
      '@layout': path.resolve(__dirname, './src/layout'),
    },
  },
  plugins: [react()],
})
