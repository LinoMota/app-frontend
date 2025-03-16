import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'import.meta.env.VITE_BACKEND_API': JSON.stringify(process.env.VITE_BACKEND_API || ''),
  //   'import.meta.env.VITE_BACKEND_API_KEY': JSON.stringify(process.env.VITE_BACKEND_API_KEY || 'MyApp'),
  // }
})
