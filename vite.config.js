import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://portdavea.github.io/hooBankApp/", 
  plugins: [react()]
})
