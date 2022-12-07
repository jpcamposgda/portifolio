import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    
    template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    
   
  ],
  server: { 
    host: '0.0.0.0'
  } ,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
