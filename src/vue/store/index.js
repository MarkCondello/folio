import { createStore as vuexCreateStore } from 'vuex'
import projectStore from './modules/projectStore.js'
import modalStore from './modules/modalStore.js'
import lightBoxStore from './modules/lightBoxStore.js'

const storeConfig = {
  modules: {
    projectStore,
    modalStore,
    lightBoxStore
  }
}
// below is setup for using Vue test utils
const defaultOverrides = {
  state: () => {
    return {}
  }
}

function makeState (initialState, overrideState) {
  return {
    ...(typeof initialState === 'function' ? initialState() : initialState), // can be a function or object
    ...overrideState()
  }
}

export function createStore (storeOverrides = defaultOverrides) {
  return vuexCreateStore({ // createStore from vuex
    ...storeConfig,
    ...storeOverrides,
    ...{ state: makeState(storeConfig.state, storeOverrides.state) }
  })
}

export default createStore()
