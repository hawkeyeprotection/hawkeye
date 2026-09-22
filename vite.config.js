import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site is published at https://hawkeyeprotection.github.io/hawkeye/, so every
// built asset URL has to carry that prefix. Override with VITE_BASE when serving
// from a domain root instead.
const base = process.env.VITE_BASE ?? '/hawkeye/'

// GitHub Pages has no rewrite rules, so a client-routed path like /hawkeye/about
// is a 404 on hard load. Pages serves 404.html for those, and an exact copy of
// index.html there boots the SPA, which then resolves the route.
function githubPagesSpaFallback() {
  let outDir

  return {
    name: 'github-pages-spa-fallback',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), githubPagesSpaFallback()],
  server: {
    allowedHosts: true,
  },
})
