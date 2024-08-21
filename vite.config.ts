import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    hmr: {
      protocol: "wss",
      clientPort: 443,
      path: "hmr/",
    },
  },
})
