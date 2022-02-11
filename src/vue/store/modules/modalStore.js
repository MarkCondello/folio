
export default {
  state: {
    visible: false,
    componentData: null,
    componentName: null,
    modalTitle: ''
  },
  mutations: {
    SET_MODAL_ATTRS (state, { componentData, componentName, modalTitle }) {
      state.visible = true
      state.componentData = componentData
      state.componentName = componentName
      state.modalTitle = modalTitle
    },
    RESET_MODAL (state) {
      state.visible = false
      state.componentData = null
      state.componentName = null
      state.modalTitle = ''
    }
  },
  actions: {
    setModal ({ commit }, { componentData, componentName, modalTitle }) {
      console.log(componentData, componentName)
      commit('SET_MODAL_ATTRS', { componentData, componentName, modalTitle })
    },
    closeModal ({ commit }) {
      commit('RESET_MODAL')
    }
  }
}
