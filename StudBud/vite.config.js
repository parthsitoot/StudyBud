import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  build: {
    target: 'es2019',
    outDir: resolve(__dirname, 'static/frontend'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'frontend/src/main.jsx'),
      formats: ['es'],
      fileName: () => 'app.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'app.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  publicDir: false,
});
