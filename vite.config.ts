import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
        port: 3080
    },
    preview: {
        host: true,
        port: 8080,
        strictPort: true
    }
})
