import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/sc-button/ScButton.ts',
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
})
