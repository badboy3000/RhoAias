import './style.scss'

const timeout = (duration = 0) => new Promise((resolve) => {
  setTimeout(resolve, duration)
})

const fadeTimeout = 300

export default class {
  start (args) {
    const opts = args || {}
    const time = opts.time || 1500
    const tip = opts.tip || '加载中'
    const type = opts.type || 'loading'
    const auto = type === 'loading' ? opts.auto !== undefined || opts.time !== undefined : !(opts.auto !== undefined && !opts.auto)

    let toast = document.getElementById('toast-container')
    if (toast) {
      toast.innerHTML = this.template(tip, type)
    } else {
      toast = document.createElement('div')
      toast.id = 'toast-container'
      toast.innerHTML = this.template(tip, type)
      document.body.style.overflow = 'hidden'
      document.body.appendChild(toast)
    }

    setTimeout(() => {
      toast.querySelector('.loading').classList.add('show')
    }, fadeTimeout)

    if (auto) {
      return timeout(time).then(() => this.stop())
    }
  }

  stop () {
    const toast = document.getElementById('toast-container')
    if (toast) {
      toast.querySelector('.loading').classList.add('show')

      setTimeout(() => {
        toast.parentNode.removeChild(toast)
      }, fadeTimeout)
      document.body.removeAttribute('style')
    }
  }

  template (tip, type) {
    return `<div class="loading"><div class="toast-icon-${type}"></div><span class="tip">${tip}</span></div>`
  }
}
