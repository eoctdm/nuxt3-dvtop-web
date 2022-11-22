// https://nuxt.com/docs/api/configuration/nuxt-config
import headConfig from "./assets/data/homepage.js"
export default defineNuxtConfig({
  css: [
    '~/assets/css/app.scss'
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: headConfig.title,
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'content-type', content: 'text/html;charset=utf-8' },
        { name: 'keywords', content:  headConfig.keywords},
        { name: 'description', content:  headConfig.description},
        { ['http-equiv']: 'x-ua-compatible', content: 'ie=edge,chrome=1' },
        { property: 'og:title', content: headConfig.title },
        { property: 'og:keywords', content: headConfig.keywords },
        { property: 'og:description', content: headConfig.description },
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon'}
      ],
      script: [
        //放在script最前，为异步加载；?号后更换为您申请的KEY。
        { src: 'https://hm.baidu.com/hm.js?f6f1fef5f3a52df081128b261a04438c' }
      ],
    }
  },
})
