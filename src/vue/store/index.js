import { createStore as vuexCreateStore } from 'vuex'
import ProjectService from '../services/ProjectService.js'

const storeConfig = {
  state: {
    projects: [],
    project: {}
  },
  mutations: {
    SET_PROJECTS (state, data) {
      state.projects = data
      // console.log('state', state.projects)
    },
    SET_PROJECT (state, project) {
      state.project = project
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
    fetchProject ({ commit, getters }, params) {
      const item = getters.getProjectBySlug(params.slug) // what happens if the slug can not be found??
      if (item) {
        localStorage.setItem('contentTypeId', params.contentTypeId)
        ProjectService.getProject(params.contentTypeId)
          .then(data => {
            console.log({ data })
            commit('SET_PROJECT', data.data.project)
          })
      } else {
        ProjectService.getProject(localStorage.getItem('contentTypeId'))
          .then(data => {
            console.log({ data })
            // const project = data.data.projectCollection.items.filter(item => item.sys.id === localStorage.getItem('contentTypeId'))[0]
            commit('SET_PROJECT', data.data.project)
          })
        // Not an ideal solution, should query the endpoint instead. replicate issue by refreshing on show
        // setTimeout(() => {
        //   console.log('project item not found, ', localStorage.getItem('projectSlug'))
        //   item = getters.getProjectBySlug(localStorage.getItem('projectSlug'))
        //   commit('SET_PROJECT', item)
        // }, 1500)
      }
    }
  },
  getters: {
    getProjectBySlug: state => slug => {
      console.log('reached getter', { projects: state.projects, slug })
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
