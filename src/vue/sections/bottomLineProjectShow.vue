<template>
  <footer class="project-show">
    <nav>
      <a :href="projectLink.link" class="project-link" target="_blank">
        <web-link/>
        <span>{{ formattedLink(projectLink.link) }}</span>
        <img :src="projectLink.imgSrc" :alt="projectLink.imgAlt" width="40" />
      </a>
    </nav>
     <nav>
        <p class="intro">Agency: <a :href="agencyAndRelease.agencyLink" target="_blank">{{ agencyAndRelease.agency }}</a>
        <span></span>Release: {{ formattedDate(agencyAndRelease.launchDate) }}</p>
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
    },
    agencyAndRelease: {
      type: Object,
      required: true
    }
  },
  methods: {
    formattedDate (date) {
      if (date) {
        const dateObj = new Date(date)
        console.log({ dateObj })
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[dateObj.getMonth()] + ' ' + dateObj.getFullYear()
      }
    },
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
