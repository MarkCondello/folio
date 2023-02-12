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
        {
          projectCollection(limit: 5) {
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
              featuresCollection(limit: 4) {
                items {
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
                  featureDetailsCollection(limit: 6) {
                    items {
                      title
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
      `
      })
      commit('SET_PROJECTS', data.projectCollection.items)
    },
    async fetchProject ({ dispatch, commit, getters }, params) {
      const project = getters.getProjectBySlug(params.projectSlug)
      commit('SET_PROJECT', project)
    },
    async fetchFeature ({ commit, dispatch, getters, state }, params) {
      const feature = getters.getProjectFeatureBySlug(params.projectFeatureSlug)
      commit('SET_PROJECT_FEATURE', feature)
    }
  },
  getters: {
    getProjectBySlug: state => slug => {
      return state.projects.find(project => project.slug === slug)
    },
    getProjectFeatureBySlug: state => slug => {
      return state.project.featuresCollection.items.find(feature => feature.slug === slug)
    },
    getProjectFeatureCodeExample: state => key => {
      return state.projectFeature[key]
    }
  }
}
