import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        allowedHosts: ['.ngrok-free.dev'], // Cho phép tất cả domain ngrok
        port: 5173,
    },
})
