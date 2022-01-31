const initialState = {
  visible: false,
  componentData: null,
  componentName: null
}

export default {
  state: {
    ...initialState
  },
  mutations: {
    SET_MODAL_ATTRS (state, { componentData, componentName }) {
      console.log('from mutation', componentData, componentName)
      state.visible = true
      state.componentData = componentData
      state.componentName = componentName
    },
    RESET_MODAL (state) {
      state = { ...initialState }
    }
  },
  actions: {
    setModal ({ commit }, { componentData, componentName }) {
      console.log(componentData, componentName)
      commit('SET_MODAL_ATTRS', { componentData, componentName })
    },
    closeModal ({ commit }) {
      commit('RESET_MODAL')
    }
  }
}
