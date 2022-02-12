<template>
  <frame-panel
    :intro-part-one="project.title"
    :intro-part-two="projectFeature.title"
    scroll-message="scroll down"
    :showAside="projectFeature.secondSectionContent"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <button class="md-6 lg-5 feature-light-show-trigger"
          v-if="projectFeature.firstSectionSlideShowCollection.items.length"
          @click="handleSlideshow"
          >
          <figure class="bg-contain-center w-100 h-100"
          :style="`min-height: 200px; background-image: url(${projectFeature.firstSectionSlideShowCollection.items[0].url})`">
            <search />
          </figure>
        </button>
        <a
          v-else
          class="md-6 lg-5"
          :href="projectFeature.firstSectionExampleUrl"
          target="_blank"
        >
          <figure class="bg-contain-center w-100 h-100"
          :style="`min-height: 200px; background-image: url(${projectFeature.introImage.url})`"></figure>
        </a>
        <div class="md-6 lg-7 med-pl-4">
          <Markdown :source="projectFeature.firstSectionContent" />
        </div>
       </div>
    </template>
    <template v-slot:extra-content>
      <section style="display: flex; gap: 1rem; justify-content: center;">
        <button v-if="projectFeature.firstSectionScreencaptureUrl"
          class="button -hollow"
          @click="handleScreencapture(projectFeature.firstSectionScreencaptureUrl, `${projectFeature.firstSectionTitle} screencapture`)"
        >
        <camera />
        Screencapture</button>
        <button v-if="projectFeature.firstSectionCodeExample"
          class="button -hollow"
          @click="handleViewCode('firstSectionCodeExample')"
        >
        <cog-hollow styles="fill:transparent; stroke: currentColor;" />
        Code Example</button>
        <a class="button -hollow" :href="projectFeature.firstSectionExampleUrl" target="_blank">
          <web-link/>
          Live Demo
        </a>
      </section>
    </template>
  </frame-panel>
  <frame-panel
  v-if="projectFeature.secondSectionContent"
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    :showAside="false"
    scroll-message=""
  >
    <template v-slot:article>
      <div class="flex-cols">
        <a class="md-6 lg-5" :href="projectFeature.firstSectionExampleUrl" target="_blank">
          <figure class="bg-contain-center w-100 h-100"
          :style="`padding-top: 230px; background-image: url(${projectFeature.secondSectionImage ? projectFeature.secondSectionImage.url : projectFeature.introImage.url})`"></figure>
        </a>
        <div class="md-6 lg-7 med-pl-4">
          <Markdown :source="projectFeature.secondSectionContent" />
        </div>
       </div>
    </template>
    <template v-slot:extra-content v-if="projectFeature.secondSectionExampleUrl">
      <section style="display: flex; gap: 1rem; justify-content: center;">
        <a class="button -hollow" :href="projectFeature.secondSectionExampleUrl" target="_blank">
          <web-link/>
          Live Demo
        </a>
      </section>
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
import CogHollow from '../components/svgs/cogHollow.vue'
import Camera from '../components/svgs/camera.vue'
import Search from '../components/svgs/search.vue'
import Markdown from 'vue3-markdown-it'

import { mapState, mapActions } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow, Markdown, webLink, CogHollow, Camera, Search },
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
    ...mapActions(['setModal', 'setLightBox']),
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
    },
    handleSlideshow () {
      this.setLightBox({
        componentData: this.projectFeature.firstSectionSlideShowCollection.items
      })
    }
  }
}
</script>
