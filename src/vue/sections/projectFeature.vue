<template>
  <article>
    <router-link :to="{
      name: 'project-feature-show',
      params: {
        projectSlug: project.slug,
        projectFeatureSlug: projectFeature.slug
      }
    }">
      <figure :style="`background-image: url(${projectFeature.introImage.url})`"></figure>
    </router-link>
    <div>
      <router-link :to="{
        name: 'project-feature-show',
        params: {
          projectSlug: project.slug,
          projectFeatureSlug: projectFeature.slug
        }
      }">
        <h3 v-html="projectFeature.title" />
      </router-link>
      <p v-html="projectFeature.intro" />
      <router-link
        class="button"
        :to="{
          name: 'project-feature-show',
          params: {
            projectSlug: project.slug,
            projectFeatureSlug: projectFeature.slug
          }
        }"
      >
        <h4>See details here</h4>
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
    projectFeature: {
      type: Object,
      required: true
    }
  }
}
</script>
