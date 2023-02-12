import { createStore as vuexCreateStore } from 'vuex'
import projectStore from './modules/projectStore.js'
import blogStore from './modules/blogStore.js'
import modalStore from './modules/modalStore.js'
import lightBoxStore from './modules/lightBoxStore.js'
// https://www.digitalocean.com/community/tutorials/vuejs-vuex-persist-state
import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const storeConfig = {
  modules: {
    projectStore,
    blogStore,
    modalStore,
    lightBoxStore
  }
}

// below is setup for using Vue test utils
const defaultOverrides = {
  state: () => {
    return {}
  },
  plugins: [vuexLocalStorage.plugin]
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
