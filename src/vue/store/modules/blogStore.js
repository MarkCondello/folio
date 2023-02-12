import { apolloClient } from '../../services/Apollo'
import gql from 'graphql-tag'

export default {
  state: {
    blogs: [],
    blog: {}
  },
  mutations: {
    SET_BLOGS (state, data) {
      state.blogs = data
    },
    SET_BLOG (state, blog) {
      state.blog = blog
    }
  },
  actions: {
    async fetchBlogs ({ commit }) {
      const { data } = await apolloClient.query({
        query: gql`
        {
          blogCollection {
            items {
              sys {
                firstPublishedAt
                id
              }
              title
              slug
              publishedDate
              featuredImage {
                url
                title
                width
                height
                description
              }
              content {
                  json
                  links {
                  entries {
                    inline {
                      sys {
                        id
                      }
                    }
                  }
                }
              }
              abstract
              contentfulMetadata {
                tags {
                    id
                    name
                }
              }
            }
          }
        }`
      })
      commit('SET_BLOGS', data.blogCollection.items)
    },
    async fetchProject ({ dispatch, commit, getters }, params) {
      // console.log('fetchProject action test123', { params })
      const blog = getters.getBlogBySlug(params.blogSlug)
      commit('SET_BLOG', blog)
    }
  },
  getters: {
    getBlogBySlug: state => slug => {
      return state.blogs.find(blog => blog.slug === slug)
    }
  }
}
