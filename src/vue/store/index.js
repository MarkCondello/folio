import { createStore as vuexCreateStore } from 'vuex'
import ProjectService from '../services/ProjectService.js'

const storeConfig = {
  state: {
    projects: []
  },
  mutations: {
    SET_PROJECTS (state, data) {
      state.projects = data
      // console.log('state', state.projects)
    }
  },
  actions: {
    fetchProjects ({ commit }) {
      return ProjectService.getProjects()
        .then(data => {
          // console.log({ data })
          commit('SET_PROJECTS', data.data.projectCollection.items)
        })
        .catch(err => {
          throw err
        })
    }
  },
  getters: {}
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
