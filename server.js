const env = process.env.NODE_ENV
const isDev = env === 'development'
const isProd = env === 'production'
const host = isProd ? '0.0.0.0' : '127.0.0.1'
const port = process.env.PORT || 3001
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const Koa = require('koa')
const LRU = require('lru-cache')
const Route = require('koa-router')

const app = new Koa()
const router = new Route()
const microCache = LRU({
  max: 100,
  maxAge: isDev ? 0 : 1000 * 60 * 15
})
const cacheHTML = (status) => {
  const hit = microCache.get(`render-html-${status}`)
  let html
  if (hit) {
    html = hit
  } else {
    html = fs.readFileSync(resolve(`./src/templates/${status}.template.html`), 'utf-8')
    microCache.set(`render-html-${status}`, html)
  }
  return html
}

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const templatePath = resolve('./src/templates/200.template.html')
const template = cacheHTML(200)

let renderer

if (isDev) {
  app.use(require('koa-logger')())
  require('./build/setup-dev-server')(app, templatePath, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
} else {
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')

  renderer = createRenderer(bundle, { template, clientManifest })
}

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    cache: microCache,
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

router.get('*', async ctx => {
  let req = ctx.req
  ctx.status = 200
  ctx.type = 'html'

  if (!renderer) {
    ctx.status = 503
    ctx.body = cacheHTML(503)
    return
  }

  let context = {
    url: req.url,
    ctx: ctx.request
  }

  try {
    ctx.body = await renderer.renderToString(context)
  } catch (e) {
    const code = e.code || 500
    ctx.status = code
    console.error(e)
    ctx.body = cacheHTML(code)
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
