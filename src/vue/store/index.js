import { createStore as vuexCreateStore } from 'vuex'
import ProjectService from '../services/ProjectService.js'

const storeConfig = {
  state: {
    projects: [],
    project: {},
    projectFeature: {}
  },
  mutations: {
    SET_PROJECTS (state, data) {
      state.projects = data
    },
    SET_PROJECT (state, project) {
      state.project = project
    },
    SET_PROJECT_FEATURE (state, projectFeature) {
      state.projectFeature = projectFeature
    }
  },
  actions: {
    fetchProjects ({ commit }) {
      return ProjectService.getProjects()
        .then(data => {
          commit('SET_PROJECTS', data.data.projectCollection.items)
        })
        .catch(err => {
          throw err
        })
    },
    async fetchProject ({ dispatch, commit, getters }, params) {
      let project = getters.getProjectBySlug(params.projectSlug)
      if (project) {
        commit('SET_PROJECT', project)
      } else {
        // console.log('reached else in fetchProject')
        await dispatch('fetchProjects')
        project = getters.getProjectBySlug(params.projectSlug)
        commit('SET_PROJECT', project)
      }
    },
    async fetchFeature ({ commit, dispatch, getters, state }, params) {
      let feature = state.project[params.projectFeatureName]
      if (feature) {
        // console.log('reached fetchFeature action', { params })
        commit('SET_PROJECT_FEATURE', feature)
      } else {
        // console.log('reached else in fetchFeature')
        await dispatch('fetchProjects')
        const project = await getters.getProjectBySlug(params.projectSlug)
        await commit('SET_PROJECT', project)
        feature = state.project[params.projectFeatureName]
        // console.log({ project: state.project, feature })
        commit('SET_PROJECT_FEATURE', feature)
      }
    }
  },
  getters: {
    getProjectBySlug: state => slug => {
      return state.projects.find(project => project.slug === slug)
    }
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
