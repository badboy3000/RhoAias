const templates = {
  img: {
    type: 'img',
    url: '',
    width: 0,
    height: 0,
    mime: '',
    text: ''
  },
  txt: {
    type: 'txt',
    text: ''
  }
}

const state = () => ({
  resource: null,
  selectedIndex: -1,
  sections: [templates.txt]
})

const mutations = {
  SWITCH_SECTION (state, { index }) {
    state.selectedIndex = index
  },
  APPEND_SECTION (state, { type, index }) {
    const temp = templates[type]
    const template = {}
    Object.keys(temp).forEach(key => {
      template[key] = temp[key]
    })
    const targetIndex = index + 1
    state.sections.splice(targetIndex, 0, template)
  },
  UPDATE_SECTION_TEXT (state, { value }) {
    state.sections[state.selectedIndex].text = value
  },
  UPDATE_SECTION_IMAGE (state, { url, width, height, size, mime }) {
    state.sections[state.selectedIndex].url = url
    state.sections[state.selectedIndex].width = width
    state.sections[state.selectedIndex].height = height
    state.sections[state.selectedIndex].mime = mime
    state.sections[state.selectedIndex].size = size
  },
  DELETE_SECTION (state, { index }) {
    state.sections.splice(index, 1)
    state.selectedIndex = -1
  },
  SORT_SECTION (state, { index }) {
    state.sections.splice(index - 1, 1, ...state.sections.splice(index, 1, state.sections[index - 1]))
  },
  INIT_SECTION (state, data) {
    state.sections = data['content']
    state.resource = data
  }
}

const actions = {
  async getData ({ commit }, { api, id }) {
    const data = await api.edit({ id })
    commit('INIT_SECTION', data)
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