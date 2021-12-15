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

let queryProject = (contentTypeId) => `
{
  project (id:"${contentTypeId}") {
    client
    clientLogo {
      url
      title
      width
      height
      description
    }
    domain
    title
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
    secondSlideText
    secondSlideLink
    secondSlideImage  {
      url
      title
      width
      height
      description
    }
  }
}
`
// Here are our options to use with fetch,
// convert this to a function with a content type id param
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
// Let's fetch the data - check out the browser console!
export default {
  getProjects () {
    // console.log(fetchOptions())
    return fetch(fetchOptions().endpoint, fetchOptions(queryProjects))
      .then(response => response.json())
  },
  getProject (contentTypeId) {
    queryProject = queryProject(contentTypeId)
    console.log({ contentTypeId, queryProject })
    return fetch(fetchOptions().endpoint, fetchOptions(queryProject))
      .then(response => response.json())
  }
}
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types/content-type/get-a-single-content-type/console
// /spaces/{space_id}/environments/{environment_id}/content_types/{content_type_id}?access_token={access_token}
