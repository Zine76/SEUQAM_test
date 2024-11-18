import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default {
  build: {
    rollupOptions: {
      external: ['/src/main.tsx']
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
