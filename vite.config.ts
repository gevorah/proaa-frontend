import react from '@vitejs/plugin-react'
import { polyfillNode } from 'esbuild-plugin-polyfill-node'
import path from 'path'
import rollupPolyfillNode from 'rollup-plugin-polyfill-node'
import tsconfigPaths from 'vite-tsconfig-paths'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts']
  },

  optimizeDeps: {
    esbuildOptions: {
      inject: ['node_modules/setimmediate/setImmediate.js'],
      define: {
        global: 'globalThis'
      },
      plugins: [polyfillNode({})]
    }
  },
  build: {
    rollupOptions: {
      plugins: [rollupPolyfillNode()]
    }
  }
}
