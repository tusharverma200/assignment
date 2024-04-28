import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-swipeable-views': 'react-swipeable-views/dist/index.js', // specify alias if necessary
    },
  },
})
