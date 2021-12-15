const projectsQry = `{
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
}`

const projectQry = (contentTypeId) => `{
  {
    project (id:contentTypeId) {
      client
      domain
    }
  }
}`
// Here are our options to use with fetch,
// convert this to a function with a content type id param
function fetchOptions () {
  return {
    spaceID: 'b26b3xfjy4l5',
    accessToken: 'Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s',
    endpoint: 'https://graphql.contentful.com/content/v1/spaces/b26b3xfjy4l5',
    method: 'POST',
    headers: {
      Authorization: 'Bearer Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ projectsQry })
  }
}
// Let's fetch the data - check out the browser console!
export default {
  getProjects () {
    // console.log(fetchOptions(projectsQry))
    return fetch(fetchOptions().endpoint, fetchOptions())
      .then(response => response.json())
  },
  getProject (contentTypeId) {
    console.log({ contentTypeId }, fetchOptions(projectQry(contentTypeId)))
    return fetch(fetchOptions().endpoint, fetchOptions(projectQry(contentTypeId)))
      .then(response => response.json())
  }
}
// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types/content-type/get-a-single-content-type/console
// /spaces/{space_id}/environments/{environment_id}/content_types/{content_type_id}?access_token={access_token}
