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
    fetchProject ({ state, commit, getters }, params) {
      console.log('reached fetchProject action', { params })
      if (state.project && state.project.slug === params.slug && !params.getFromLocalStorage) {
        console.log('state project is set and has the same slug', state.project)
      } else {
        const item = getters.getProjectBySlug(params.slug) // what happens if the slug can not be found??
        if (item) {
          localStorage.setItem('projectContentTypeId', params.contentTypeId) // set the contentTypeId to localStorage so we can retrieve
          return ProjectService.getProject(params.contentTypeId)
            .then(data => {
              console.log({ item, data })
              commit('SET_PROJECT', data.data.project)
            })
            .catch(err => {
              console.log('Error retrieving project', err)
            })
        } else if (localStorage.getItem('projectContentTypeId')) {
          console.log({ item }, 'project item is not set..', 'projectContentTypeId', localStorage.getItem('projectContentTypeId'))
          return ProjectService.getProject(localStorage.getItem('projectContentTypeId'))
            .then(data => {
              console.log({ data })
              commit('SET_PROJECT', data.data.project)
            })
        } else { // local storage is not set
          console.log('Reached local storage for project not set, params.slug:', params.slug)
          // ToDo: Should I use a timeout here to retrieve the resource???
        }
      }
    },
    fetchFeature ({ commit, state, dispatch }, params) {
      // console.log('getContentId', localStorage.getItem('projectFeatureContentTypeId'), '!== undefined', localStorage.getItem('projectFeatureContentTypeId') !== undefined)
      if (state.projectFeature.slug === undefined && localStorage.getItem('projectFeatureContentTypeId')) {
        console.log('reached local storage query for feature')
        return ProjectService.getProjectFeature(localStorage.getItem('projectFeatureContentTypeId'))
          .then(async (data) => {
            await dispatch('fetchProject', { getFromLocalStorage: true })
            commit('SET_PROJECT_FEATURE', data.data.feature)
          })
          .catch(err => {
            console.log('Error retrieving project feature', err)
          })
      } else {
        console.log('Reached standard query for feature')
        return ProjectService.getProjectFeature(params.contentTypeId)
          .then(data => {
            localStorage.setItem('projectFeatureContentTypeId', params.contentTypeId) // set the project feature Id to localStorage so we can retrieve
            commit('SET_PROJECT_FEATURE', data.data.feature)
          })
          .catch(err => {
            console.log('Error retrieving project feature', err)
          })
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
