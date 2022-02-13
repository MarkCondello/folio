<template>
  <article>
    <router-link :to="{
      name: 'project-feature-show',
      params: {
        projectSlug: project.slug,
        projectFeatureName
      }
    }">
      <figure :style="`background-image: url(${project[projectFeatureName].introImage.url})`"></figure>
    </router-link>
    <div>
      <router-link :to="{
        name: 'project-feature-show',
        params: {
          projectSlug: project.slug,
          projectFeatureName
        }
      }">
        <h3 v-html="project[projectFeatureName].title" />
      </router-link>
      <p v-html="project[projectFeatureName].intro" />
      <router-link
        class="button"
        :to="{
          name: 'project-feature-show',
          params: {
            projectSlug: project.slug,
            projectFeatureName
          }
        }"
      >
        <h4>See details here..</h4>
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    projectFeatureName: {
      type: String,
      required: true
    }
  }
}
</script>
