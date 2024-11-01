import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// import commonjs from '@rollup/plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // commonjs(),
    nodePolyfills(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    })
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
