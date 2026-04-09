import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'
import astroExpressiveCode from 'astro-expressive-code'

export default defineConfig({
  output: 'static',
  build: {
    assets: '_assets',
  },
  site: 'https://thewhiteh4t.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString()
        return item
      },
    }),
    react(),
    markdoc({ ignoreIndentation: true }),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    astroExpressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        codeFontFamily: 'var(--font-firamono)',
        codeBackground: 'var(--color-surface-card)',
        uiFontFamily: 'var(--font-inter)',
        frames: {
          terminalTitlebarBackground: 'var(--color-surface-card)',
          terminalBackground: 'var(--color-surface-card)',
          editorTabBarBackground: 'var(--color-surface-card)',
          editorActiveTabBackground: 'var(--color-primary)',
          editorActiveTabIndicatorTopColor: 'var(--color-on-primary)',
          editorActiveTabForeground: 'var(--color-on-primary)',
        },
      },
    }),
  ],

  image: {
    domains: ['res.cloudinary.com'],
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
