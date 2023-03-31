import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/sc-hero/sc-hero.ts',
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },
  },
})
