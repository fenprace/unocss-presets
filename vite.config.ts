import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,

    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },

    rollupOptions: {
      external: ['unocss'],
      output: {
        entryFileNames: '[name].[format].js',
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
