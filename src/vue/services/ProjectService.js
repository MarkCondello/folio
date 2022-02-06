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
      firstFeature {
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
          firstSectionTitle
          firstSectionExampleUrl
          firstSectionContent
          firstSectionImage {
            url
            title
            description
          }
          firstSectionCodeExample
          firstSectionScreencaptureUrl
        }
      }
      secondFeature {
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
          firstSectionTitle
          firstSectionExampleUrl
          firstSectionContent
          firstSectionImage {
            url
            title
            description
          }
          firstSectionCodeExample
          firstSectionScreencaptureUrl
        }
      }
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
  }
}
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types/content-type/get-a-single-content-type/console
// /spaces/{space_id}/environments/{environment_id}/content_types/{content_type_id}?access_token={access_token}
