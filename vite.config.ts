import { defineConfig } from 'vite'

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
})
