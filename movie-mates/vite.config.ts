import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // This should match with your deployment script
    // ... other options
  },
  plugins: [react(), svgr()],
})
