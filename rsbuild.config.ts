import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginSass } from '@rsbuild/plugin-sass'
import AutoImport from 'unplugin-auto-import/webpack'
import Components from 'unplugin-vue-components/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/webpack'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  dev: {
    // lazyCompilation: true,
  },
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  performance: {
    removeConsole: true,
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
  output: {
    polyfill: 'usage',
    minify: true,
    sourceMap: {
      js: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
    },
  },
  tools: {
    bundlerChain: (chain, { env }) => {
      if (env === 'development') {
        chain.devtool('eval-cheap-module-source-map')
      }
    },
    rspack: {
      plugins: [
        AutoImport({
          imports: ['vue', 'vue-router', 'pinia'],
          resolvers: [
            ElementPlusResolver({ importStyle: 'sass' }),
            IconsResolver({
              prefix: 'Icon',
            }),
          ],
        }),
        Components({
          dirs: ['src/components', 'src/layouts/components'],
          resolvers: [
            IconsResolver({}),
            ElementPlusResolver({
              importStyle: 'sass',
            }),
          ],
        }),
        Icons({
          autoInstall: true,
        }),
      ],
      resolve: {
        alias: {
          '@': './src',
        },
      },
    },
  },
  plugins: [
    pluginVue(),
    pluginSass({
      sassLoaderOptions(config) {
        config.api = 'modern-compiler'
        config.additionalData = `@use "@/assets/vars.scss" as *;`
      },
    }),
  ],
})
