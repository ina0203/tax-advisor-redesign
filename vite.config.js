import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // 또는 @vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위해 리포지토리 이름을 base 경로로 설정합니다.
  base: '/tax-advisor-redesign/', 
})
