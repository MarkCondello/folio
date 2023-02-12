import { apolloClient } from '../../services/Apollo'
import gql from 'graphql-tag'

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
    async fetchProjects ({ commit }) {
      const { data } = await apolloClient.query({
        query: gql`
        query {
          projectCollection(limit: 6) {
            items {
              sys {
                firstPublishedAt
                id
              }
              client
              clientLogo {
                url
                title
                width
                height
                description
              }
              agency
              agencyLink
              launchDate
              stack
              domain
              featuredImage {
                url
                title
                width
                height
                description
              }
              title
              slug
              abstract
              intro
              firstProjectGoal
              firstProjectGoalImage {
                url
                title
                width
                height
                description
              }
              secondProjectGoal
              secondProjectGoalImage {
                url
                title
                width
                height
                description
              }
              featuresCollection (limit: 4) {
                items {
                  ... on Feature {
                    sys {
                      firstPublishedAt
                      id
                    }
                    title
                    slug
                    introImage {
                      url
                      title
                      description
                    }
                    intro
                    featureDetailsCollection (limit:6) {
                      items {
                        ... on FeatureDetails {
                          title,
                          content
                          exampleUrl
                          screencaptureUrl
                          codeExample
                          slideShowCollection(limit: 10) {
                            items {
                              sys {
                                id
                              }
                              description
                              height
                              title
                              url
                              width
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      })

      // console.log('Reached fetchPrjects', data)
      commit('SET_PROJECTS', data.projectCollection.items)
    },
    async fetchProject ({ dispatch, commit, getters }, params) {
      // console.log('fetchProject action test123', { params })
      const project = getters.getProjectBySlug(params.projectSlug)
      commit('SET_PROJECT', project)

      // if (project) {
      //   commit('SET_PROJECT', project)
      // } else {
      //   await dispatch('fetchProjects')
      //   project = getters.getProjectBySlug(params.projectSlug)
      //   commit('SET_PROJECT', project)
      // }
    },
    async fetchFeature ({ commit, dispatch, getters, state }, params) {
      const feature = getters.getProjectFeatureBySlug(params.projectFeatureSlug)
      commit('SET_PROJECT_FEATURE', feature)

      // let feature = null
      // if (state.project && state.project.featuresCollection) {
      //   feature = getters.getProjectFeatureBySlug(params.projectFeatureSlug)
      //   // console.log('fetchFeature: ', { feature })
      // }
      // if (feature != null) {
      //   // console.log('feature is set')
      //   commit('SET_PROJECT_FEATURE', feature)
      // } else {
      //   await dispatch('fetchProjects')
      //   const project = await getters.getProjectBySlug(params.projectSlug)
      //   // console.log('Reached else', { project })
      //   await commit('SET_PROJECT', project)
      //   feature = await getters.getProjectFeatureBySlug(params.projectFeatureSlug)
      //   commit('SET_PROJECT_FEATURE', feature)
      // }
    }
  },
  getters: {
    getProjectBySlug: state => slug => {
      return state.projects.find(project => project.slug === slug)
    },
    getProjectFeatureBySlug: state => slug => {
      // console.log('state.project.featuresCollection', state.project.featuresCollection)
      return state.project.featuresCollection.items.find(feature => feature.slug === slug)
    },
    getProjectFeatureCodeExample: state => key => {
      // console.log('reached getProjectFeatureCodeExample', key)
      return state.projectFeature[key]
    }
  }
}
