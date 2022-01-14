<template>
  <article>
    <figure :style="`background-image: url(${projectFeature.introImage.url})`"></figure>
    <div>
      <p v-html="projectFeature.intro"></p>
      <router-link :to="{
        name: 'project-feature-show',
        params: {
          slug: project.slug,
          featureSlug: projectFeature.slug,
          contentTypeId: projectFeature.sys.id
        }
        }">
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
    projectFeature: {
      type: Object,
      required: true
    }
  }
}
</script>
