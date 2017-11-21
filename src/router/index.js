import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'head',
  attribute: 'data-n-head',
  ssrAttribute: 'data-n-head-ssr',
  tagIDKeyName: 'hid'
})

export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: () => import('layout/default'),
        children: [
          {
            path: '',
            name: 'homepage',
            component: () => import('view/index')
          },
          {
            path: 'bangumi/news',
            name: 'bangumi-news',
            component: () => import('view/bangumi/news')
          }
        ]
      }
    ]
  })
}
