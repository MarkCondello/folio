import ProjectService from '../../services/ProjectService.js'

export default {
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
        await dispatch('fetchProjects')
        project = getters.getProjectBySlug(params.projectSlug)
        commit('SET_PROJECT', project)
      }
    },
    async fetchFeature ({ commit, dispatch, getters, state }, params) {
      let feature = null
      if (state.project && state.project.featuresCollection) {
        feature = getters.getProjectFeatureBySlug(params.projectFeatureSlug)
        // console.log('fetchFeature: ', { feature })
      }
      if (feature != null) {
        // console.log('feature is set')
        commit('SET_PROJECT_FEATURE', feature)
      } else {
        await dispatch('fetchProjects')
        const project = await getters.getProjectBySlug(params.projectSlug)
        // console.log('Reached else', { project })
        await commit('SET_PROJECT', project)
        feature = await getters.getProjectFeatureBySlug(params.projectFeatureSlug)
        commit('SET_PROJECT_FEATURE', feature)
      }
    }
  },
  getters: {
    getProjectBySlug: state => slug => {
      return state.projects.find(project => project.slug === slug)
    },
    getProjectFeatureBySlug: state => slug => {
      console.log('state.project.featuresCollection', state.project.featuresCollection)
      return state.project.featuresCollection.items.find(feature => feature.slug === slug)
    },
    getProjectFeatureCodeExample: state => key => {
      console.log('reached getProjectFeatureCodeExample', key)
      return state.projectFeature[key]
    }
  }
}
