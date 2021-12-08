<template>
  <footer>
    <nav>
      <a v-if="projectLink" :href="projectLink.link" class="project-link" target="_blank">
        <web-link/>
        <span>{{ formattedLink(projectLink.link) }}</span>
        <img :src="projectLink.imgSrc" :alt="projectLink.imgAlt" width="40" />
      </a>
    </nav>
  </footer>
</template>
<script>
import webLink from '../components/svgs/webLink.vue'

export default {
  name: 'Bottom Line Project Show',
  components: { webLink },
  props: {
    projectLink: {
      type: Object,
      required: true
    }
  },
  methods: {
    formattedLink (link) {
      if (link) {
        const linkBody = link.split('//')[1]
        if (linkBody.slice(-1) === '/') {
          return linkBody.slice(0, -1)
        }
        return linkBody
      }
    }
  }
}
</script>
