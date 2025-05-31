import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },

  /**
   * adding an alias for the src directory to simplify imports
   * so they aren't so messy wth paths like ../../ and instead
   * can use @/ for src.
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  /**
   * enabling the mixins.scss and variables.scss files to be used globally
   * without needing to import it in every component file.
   */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_mixins.scss" as *;
          @use "@/styles/_variables.scss" as *;
        `,
      },
    },
  },
});
