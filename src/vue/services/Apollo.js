import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/b26b3xfjy4l5',
  headers: {
    Authorization: 'Bearer Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s',
    'Content-Type': 'application/json'
  }
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})
