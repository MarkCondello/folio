<template>
  <section ref="frame">
    <span
      v-if="bgImgSrc"
      :class="bgClass"
      :style="`background-image: url(${ bgImgSrc });`"
    >
    </span>
    <div class="flex -column justify-between h-100" v-bind="$attrs">
      <p v-if="introPartOne && introPartTwo" class="intro">{{ introPartOne }}<span></span>{{ introPartTwo }}</p>
      <article>
        <slot name="article"></slot>
      </article>
      <slot name="extra-content"></slot>
<!-- Not sure about this plug section ??? -->
      <div>
        <slot name="plug"></slot>
      </div>
      <footer v-if="projectLink || agencyAndRelease">
        <nav>
          <a v-if="projectLink && !agencyAndRelease" :href="projectLink.link" class="project-link" target="_blank">
            <web-link/>
            <span>{{ formattedLink(projectLink.link) }}</span>
            <img :src="projectLink.imgSrc" :alt="projectLink.imgAlt" width="40" />
          </a>
          <p v-if="agencyAndRelease && !projectLink" class="intro">Agency: <a :href="agencyAndRelease.agencyLink" target="_blank">{{ agencyAndRelease.agency }}</a>
          <span></span>Release: {{ formattedDate(agencyAndRelease.launchDate) }}</p>
        </nav>
      </footer>
    </div>
    <aside-line :scroll-message="scrollMessage" :show-aside="showAside"/>
  </section>
</template>
<script>
import AsideLine from '../sections/asideLine.vue'
import webLink from '../components/svgs/webLink.vue'

export default {
  components: { AsideLine, webLink },
  props: {
    bgClass: {
      type: String,
      default: 'bg-d-gray'
    },
    bgImgSrc: {
      type: String,
      default: null
    },
    introPartOne: {
      type: String,
      required: false
    },
    introPartTwo: {
      type: String,
      required: false
    },
    scrollMessage: {
      type: String,
      required: false
    },
    showAside: {
      type: Boolean,
      default: true
    },
    projectLink: {
      type: Object,
      required: false
    },
    agencyAndRelease: {
      type: Object,
      required: false
    },
    showPlug: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    formattedDate (date) {
      if (date) {
        const dateObj = new Date(date)
        // console.log({ dateObj })
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
