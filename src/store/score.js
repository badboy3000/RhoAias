import Api from '~/api/scoreApi'

const state = () => ({
  show: null
})

const mutations = {
  SOCIAL_TOGGLE(state, { key, value, user }) {
    state.show[`${key}ed`.replace('ee', 'e')] = value
    if (value) {
      state.show[`${key}_users`].total++
      state.show[`${key}_users`].list.unshift(user)
    } else {
      state.show[`${key}_users`].total--
      state.show[`${key}_users`].list.forEach((item, index) => {
        if (item.id === user.id) {
          state.show[`${key}_users`].list.splice(index, 1)
        }
      })
    }
  },
  SET_SHOW(state, data) {
    state.show = data
  },
  FOLLOW_BANGUMI(state, result) {
    state.show.bangumi.followed = result
  },
  LIKE_SCORE(state, result) {
    state.show.liked = result
    state.show.like_count = result
      ? state.show.like_count + 1
      : state.show.like_count - 1
  }
}

const actions = {
  async getShow({ commit }, { ctx, id }) {
    const api = new Api(ctx)
    const data = await api.show({ id })
    commit('SET_SHOW', data)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
