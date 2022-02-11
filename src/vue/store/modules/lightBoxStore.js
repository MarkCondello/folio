
export default {
  state: {
    visible: false,
    slides: null
  },
  mutations: {
    SET_LIGHTBOX_SLIDES (state, { componentData }) {
      state.visible = true
      state.slides = componentData
    },
    RESET_LIGHTBOX (state) {
      state.visible = false
      state.slides = null
    }
  },
  actions: {
    setLightBox ({ commit }, { componentData }) {
      // console.log(componentData)
      commit('SET_LIGHTBOX_SLIDES', { componentData })
    },
    closeLightBox ({ commit }) {
      commit('RESET_LIGHTBOX')
    }
  }
}
