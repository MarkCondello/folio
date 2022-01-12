// import gql from 'graphql-tag'
// ToDo: May have to remove the above and graphql deps if I can't get fragment to work

const queryProjects = `{
  projectCollection {
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
    }
  }
}`
// ToDo: Could not get this fragment to work.
// const featureFragment = gql`
//   fragment featureFields on Feature {
//     sys {
//       firstPublishedAt
//       id
//     }
//     title
//     slug
//     introImage {
//       url
//       title
//       description
//     }
//     introText
//   }`
function queryProject (contentTypeId) {
  return `
  {
    project (id:"${contentTypeId}") {
      slug
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
      title
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
      secondProjectGoalImage  {
        url
        title
        width
        height
        description
      }
      firstSlideRef {
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
          introText
        }
      }
      secondSlideRef {
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
          introText
        }
      }
    }
  }`
}
function queryFeature (contentTypeId) {
  return `{
    feature (id:"${contentTypeId}") {
      title
      introImage {
        url
        title
        description
      }
      introText
    }
  }`
}
const fetchOptions = (query) => {
  return {
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
}
export default {
  getProjects () {
    return fetch(fetchOptions().endpoint, fetchOptions(queryProjects))
      .then(response => response.json())
  },
  getProject (contentTypeId) {
    const querySingleProject = queryProject(contentTypeId)
    return fetch(fetchOptions().endpoint, fetchOptions(querySingleProject))
      .then(response => response.json())
  },
  // Not sure if I should have another route and request for single project features???
  getProjectFeature (contentTypeId) {
    const queryProjectFeature = queryFeature(contentTypeId)
    return fetch(fetchOptions().endpoint, fetchOptions(queryProjectFeature))
      .then(response => response.json())
  }
}
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types/content-type/get-a-single-content-type/console
// /spaces/{space_id}/environments/{environment_id}/content_types/{content_type_id}?access_token={access_token}
