import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações de build para performance
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        // Chunking estratégico para cache eficiente
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot'],
          utils: ['clsx', 'tailwind-merge', 'lucide-react']
        },
        // Nomes de arquivo com hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Compressão de assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    // Otimização de dependências
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    // Configurações do servidor de desenvolvimento
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    open: false,
    cors: true
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    open: false,
    cors: true
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-helmet-async',
      'web-vitals',
      'lucide-react'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  // CSS otimizado
  css: {
    devSourcemap: false
  },
  // Configurações de performance
  esbuild: {
    target: 'es2015',
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
})

