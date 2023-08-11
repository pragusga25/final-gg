import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import million from 'million/compiler';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [million.vite({ auto: true }),tsconfigPaths(), react()],
  plugins: [tsconfigPaths(), react()],
});
