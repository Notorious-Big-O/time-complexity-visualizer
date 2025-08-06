import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

//make sure to install Vitest
//npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

export default defineConfig({
  plugins: [react()],
  test: {
    // allow `describe`, `it`, `expect` globally
    globals: true,
    // make sure to install jsdom for npm i -D jsdom
    // we can also just use happy-dom but we might use jsdom later for canvas           
    environment: 'jsdom',    
    //tell vitest to discover and run them as a test
    include: ['src/**/*.{test,spec}.{js,jsx}','algo-snippets/**/*.{test,spec}.{js,jsx}'], 
  },
});
