<template>
  <frame-panel
    :intro-part-one="project.title"
    :intro-part-two="projectFeature.title"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <a class="md-6 lg-5" :href="projectFeature.firstSectionExampleUrl" target="_blank">
          <figure class="bg-contain-center w-100 h-100"
          :style="`background-image: url(${projectFeature.firstSectionImage ? projectFeature.firstSectionImage.url : projectFeature.introImage.url})`"></figure>
        </a>
        <div class="md-6 lg-7 med-pl-4">
          <Markdown :source="projectFeature.firstSectionContent" />
        </div>
       </div>
    </template>
    <template v-slot:extra-content>
      <section style="display: flex; gap: 1rem;">
        <button v-if="projectFeature.firstSectionCodeExample"
          class="button -hollow"
          @click="handleViewCode('firstSectionCodeExample')">Code Example</button>
        <button v-if="projectFeature.firstSectionScreencaptureUrl"
          class="button -hollow"
          @click="handleScreencapture(projectFeature.firstSectionScreencaptureUrl, `${projectFeature.firstSectionTitle} screencapture`)"
        >Screencapture</button>
      </section>
    </template>
  </frame-panel>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <pre class='code-block'>
        <code>{{projectFeature.firstSectionCodeExample}}</code>
      </pre>

      <!-- <Markdown :source="projectFeature.firstSectionContent" /> -->
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

import { mapState, mapActions } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow, Markdown, webLink },
  data () {
    return {
      slides: [],
      selectedSlideIndex: 0
    }
  },
  computed: mapState({
    project: state => state.projectStore.project,
    projectFeature: state => state.projectStore.projectFeature
  }),
  methods: {
    ...mapActions(['setModal']),
    handleViewCode (reference) {
      this.setModal({
        componentName: 'CodeExample',
        componentData: { keyReference: reference },
        modalTitle: 'Code example'
      })
    },
    handleScreencapture (src, title) {
      this.setModal({
        componentName: 'ScreencaptureExample',
        componentData: { videoSrc: src },
        modalTitle: title
      })
    }
  }
}
</script>
