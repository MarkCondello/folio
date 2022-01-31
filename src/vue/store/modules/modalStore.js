
export default {
  state: {
    visible: false,
    componentData: null,
    componentName: null
  },
  mutations: {
    SET_MODAL_ATTRS (state, { componentData, componentName }) {
      // console.log('from mutation', componentData, componentName)
      state.visible = true
      state.componentData = componentData
      state.componentName = componentName
    },
    RESET_MODAL (state) {
      state.visible = false
      state.componentData = null
      state.componentName = null
    }
  },
  actions: {
    setModal ({ commit }, { componentData, componentName }) {
      console.log(componentData, componentName)
      commit('SET_MODAL_ATTRS', { componentData, componentName })
    },
    closeModal ({ commit }) {
      console.log('reached action close modal')
      commit('RESET_MODAL')
    }
  }
}
