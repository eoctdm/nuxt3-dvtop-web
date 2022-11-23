<template>
  <div>
    <header class="app-header app-flex app-justify-center">
      <div class="app-width app-flex app-align-center app-justify-between">
        <div class="app-flex app-align-center app-title">
          <div><img src="/resource/img/nuxt-logo.png"></div>
          <h1>{{homepage.title}}</h1>
        </div>
        <div>
          <NuxtLink :to="homepage.github.href" :external="true" 
              target="_blank" rel="nofollow" class="app-color-white">
            <span v-html="homepage.github.title"></span>
          </NuxtLink>
        </div>
      </div>
    </header>
    <div class="app-flex app-justify-center">
      <div class="app-width app-description app-text-center">
        <div class="app-text-bigger app-text-lighter">{{homepage.summary}}</div>
        <div class="app-text-bigger app-text-lighter app-margin-top-small">{{homepage.description}}</div>
        <div class="app-margin-top-big">
          <NuxtLink :to="homepage.demo.href" :external="true" 
              class="app-button app-bgcolor-green app-color-white app-text-normal">
            <span v-html="homepage.demo.title"></span>
          </NuxtLink>
          <NuxtLink :to="homepage.download.href" :external="true" 
              class="app-button app-bgcolor-grey app-text-normal app-margin-left-big">
            <span v-html="homepage.download.title"></span>
          </NuxtLink>
        </div>
        <div class="app-flex app-justify-center" style="padding: 5px 0;">
          <div class="app-flex app-color-grey app-margin-top-small">
            <div v-html="last.nuxt3.title"></div>
            <div style="padding: 0 10px;">|</div>
            <div v-html="last.chinese.title"></div>
          </div>
        </div>
        <div class="app-flex app-justify-center app-align-center">
            <div><img class="app-qrcode" src="/resource/img/qrcode.jpg"></div>
            <div style="margin-left: 10px;width: 350px;text-align: left;text-indent: 2em;">
              微信扫码关注“Nuxt”微信订阅号，获取Nuxt3中文开发教程，手把手教您使用Nuxt3框架开发混合渲染、服务端渲染或客户端渲染的应用程序。
            </div>
        </div>
      </div>
    </div>
    <div class="app-flex app-justify-center">
      <div class="app-width app-flex app-flex-wrap">
        <div v-for="(item,index) in homepage.features" :key="index" class="app-features">
          <div class="app-text-big">{{item.name}}</div>
          <div class="app-color-grey">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="app-flex app-justify-center" v-if="history&&history.length>0">
      <div class="app-width">
        <div style="padding: 5px 0;">有个{{history.length}}历史版本供浏览：</div>
        <div v-for="(item,index) in history" :key="index"
            class="app-flex" style="padding: 5px 0;">
          <div style="padding-right: 5px;">{{index+1}}.</div>
          <NuxtLink :to="item.nuxt3.href" :external="true" 
              target="_blank" rel="nofollow">
            <span v-html="item.nuxt3.title"></span>
          </NuxtLink>
          <div style="padding: 0 10px;">➜</div>
          <NuxtLink :to="item.chinese.href" :external="true">
            <span v-html="item.chinese.title"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <footer class="app-footer app-flex app-justify-center">
      <NuxtLink :to="homepage.beian.href" :external="true" 
          target="_blank" rel="nofollow" class="app-text-small app-color-grey">
        <span v-html="homepage.beian.title"></span>
      </NuxtLink>
      <div class="app-text-small app-color-grey app-margin-left-big">{{homepage.copyright}}</div>
    </footer>
  </div>
</template>
<script setup>
import homepage from '~/assets/data/homepage.js';
const last = computed(()=>homepage.releases[0]);
const history = computed(()=>homepage.releases.slice(1));
</script>
