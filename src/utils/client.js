import Vue from 'vue'
import scrollToY from '~/assets/js/scrollToY'
import Backdrop from '~/assets/js/Backdrop'
import captcha from '~/assets/js/captcha'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/Toast'

Vue.use({
  install (Vue, options) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$scrollToY = scrollToY

    Vue.prototype.$channel = new Vue()

    Vue.prototype.$backdrop = new Backdrop()

    Vue.prototype.$toast = new Toast()

    Vue.prototype.$captcha = captcha

    Vue.prototype.$eventManager = (function () {
      class Manager {
        constructor () {
          this.id = 0
          this.listeners = {}
        }

        add (ele, evt, handler, capture = false) {
          const events = typeof evt === 'string' ? [evt] : evt
          const result = []
          events.forEach(e => {
            const id = this.id++
            ele.addEventListener(e, handler, capture)
            this.listeners[id] = {
              element: ele,
              event: e,
              handler,
              capture
            }
            result.push(id)
          })
          return result
        }

        del (id) {
          id.forEach(item => {
            if (this.listeners[item]) {
              const h = this.listeners[item]
              h.element.removeEventListener(h.event, h.handler, h.capture)
              Reflect.deleteProperty(this.listeners, item)
            }
          })
        }
      }
      return new Manager()
    }())

    Vue.prototype.$checkInView = (dom, scale = 1) => {
      const rect = dom.getBoundingClientRect()
      return (rect.top < window.innerHeight * scale && rect.bottom > 0) && (rect.left < window.innerWidth * scale && rect.right > 0)
    }
  }
})
