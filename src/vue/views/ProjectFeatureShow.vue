<template>
  <frame-panel
    :intro-part-one="project.title"
    :intro-part-two="projectFeature.title"
    scroll-message="scroll down"
  >
    <!-- bgClass="bg-tint" -->
    <template v-slot:article>
      <div class="flex-cols">
        <div class="md-6 lg-5">
          <figure class="bg-contain-center w-100 h-100"
          :style="`background-image: url(${projectFeature.introImage.url})`"></figure>
          <button class="button -hollow">View Code Here</button>
        </div>
        <div class="md-6 lg-7 med-pl-2">
          <Markdown :source="projectFeature.firstSectionContent" />
        </div>
       </div>
    </template>
  </frame-panel>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <pre class='code-block'>
        <!-- <code v-html="projectFeature.firstSectionCodeExample" /> -->
      </pre>
      <Markdown :source="projectFeature.firstSectionContent" />
      <web-link />
    </template>
  </frame-panel>
  <bottom-line-show
    :project-link='{ link: project.domain, imgAlt: project.title, imgSrc: project.clientLogo.url }'
    :back-to-project='{ project }'
  />
</template>
<script>
import FramePanel from '../components/FramePanel.vue'
import webLink from '../components/svgs/webLink.vue'
import bottomLineShow from '../sections/bottomLineProjectShow.vue'

import Markdown from 'vue3-markdown-it'

import { mapState } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow, Markdown, webLink },
  data () {
    return {
      slides: [],
      selectedSlideIndex: 0
    }
  },
  computed: mapState({
    project: state => state.project,
    projectFeature: state => state.projectFeature
  })

}
</script>
