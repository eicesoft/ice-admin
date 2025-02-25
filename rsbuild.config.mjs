import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginSass } from '@rsbuild/plugin-sass'
import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/rspack'
import IconsResolver from 'unplugin-icons/resolver'
import TurboConsole from 'unplugin-turbo-console/rspack';

export default defineConfig({
  dev: {
    // lazyCompilation: true,
  },
  html: {
    template: './index.html',
  },
  server: {
    compress: true,
  },
  source: {
    transformImport: [
      {
        libraryName: 'lodash',
        customName: 'lodash/{{ member }}',
      },
    ],
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
          dts: './src/auto-imports.d.ts',
        }),
        Components({
          dirs: ['src/components', 'src/layouts/components'],
          resolvers: [
            IconsResolver({}),
            ElementPlusResolver({
              importStyle: 'sass',
            }),
          ],
          dts: './src/components.d.ts',
        }),
        Icons({
          compiler: 'vue3',
          autoInstall: true,
        }),
        /*TurboConsole({
        }),*/
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
