const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const Sentry = require('@sentry/node')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const isDev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (isDev) {
    app.use(
      require('koa-logger')((str, args) => {
        if (/(\/_nuxt\/|__webpack_hmr|favicon.ico)/.test(args[2])) {
          return
        }
        args[0] = `[${new Date().toLocaleString()}]${args[0]}`
        console.log(...args) // eslint-disable-line no-console
      })
    )
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    Sentry.init({
      dsn: 'https://7cb38ebf76534f1ca3936edfc7adad65@sentry.io/1300424'
    })
  }

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    ctx.set('X-XSS-Protection', '1; mode=block')
    ctx.set('X-Content-Type-Options', 'nosniff')
    ctx.set('Cache-Control', 'max-age=0, private, no-siteapp, no-transform')
    ctx.set('X-Frame-Options', 'DENY')
    ctx.set(
      'Content-Security-Policy',
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' *.calibur.tv hm.baidu.com *.geetest.com zz.bdstatic.com push.zhanzhang.baidu.com res2.wx.qq.com qzonestyle.gtimg.cn;`
    )

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(e => {
          const code = e.statusCode || 0
          if (code === 302 && e.url) {
            ctx.redirect(e.url)
            return
          }
          if (
            !isDev &&
            e.message &&
            !/^Request failed with status code/.test(e.message) &&
            !/timeout of/.test(e.message)
          ) {
            Sentry.withScope(scope => {
              scope.setTag('request-url', ctx.req.url)
              Sentry.captureException(e)
            })
          }
          if (code !== 404) {
            console.error(e) // eslint-disable-line no-console
          }
          reject(e)
        })
      })
    })
  })

  isDev ? app.listen(port) : app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
