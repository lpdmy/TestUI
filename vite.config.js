import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Tải tất cả các biến môi trường từ file .env
  // eslint-disable-next-line no-undef
  // const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react()
    ],
    // server: {
    //   proxy: {
    //     '/api': {
    //       // Sử dụng đối tượng `env` để truy cập biến môi trường đã tải
    //       target: env.VITE_API_URL,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  };
});