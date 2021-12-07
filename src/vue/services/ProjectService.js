const query = `{
  projectCollection {
    items {
      sys {
        firstPublishedAt
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
      featuredImage  {
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
      firstProjectGoalImage  {
        url
        title
        width
        height
        description
      }
      secondProjectGoal {
        json
      }
      secondProjectGoalImage  {
        url
        title
        width
        height
        description
      }
      firstSlideText
      firstSlideLink
      firstSlideImage  {
        url
        title
        width
        height
        description
      }
    }
  }
}`
// Here are our options to use with fetch
const fetchOptions = {
  spaceID: 'b26b3xfjy4l5',
  accessToken: 'Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s',
  endpoint: 'https://graphql.contentful.com/content/v1/spaces/b26b3xfjy4l5',
  method: 'POST',
  headers: {
    Authorization: 'Bearer Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
}
// Let's fetch the data - check out the browser console!
export default {
  getProjects () {
    return fetch(fetchOptions.endpoint, fetchOptions)
      .then(response => response.json())
  }
}
