<template>
  <article>
    <figure :style="`background-image: url(${project[projectFeatureName].introImage.url})`"></figure>
    <div>
      <p v-html="project[projectFeatureName].intro"></p>
      <router-link :to="{
        name: 'project-feature-show',
        params: {
          projectSlug: project.slug,
          projectFeatureName
        }
        }">
          <!-- featureSlug: project[projectFeatureName].slug, -->
        <web-link />
        <h4>See details here..</h4>
      </router-link>
    </div>
  </article>
</template>

<script>
import webLink from '../components/svgs/webLink.vue'

export default {
  components: { webLink },
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
