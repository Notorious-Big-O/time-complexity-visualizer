import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    // allow `describe`, `it`, `expect` globally
    globals: true,
    // we can also just use happy-dom but we might use jsdom later for canvas           
    environment: 'jsdom',    
    //tell vitest to discover and run them as a test
    include: ['src/**/*.{test,spec}.{js,jsx}','algo-snippets/**/*.{test,spec}.{js,jsx}'], 
  },
});
