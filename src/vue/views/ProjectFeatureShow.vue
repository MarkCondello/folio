<template>

  <frame-panel
    :intro-part-one="project.title"
    :intro-part-two="projectFeature.title"
    scroll-message="scroll down"
    v-for="(feature, index) in projectFeature.featureDetailsCollection.items"
    :key="index"
    :showAside="projectFeature.featureDetailsCollection.items.length > index + 1"
  >
    <h2>Inside Frame panel loop </h2>
    <template v-slot:article>
      <div class="flex-cols">
        <button class="md-6 lg-5 feature-light-show-trigger"
          v-if="feature.slideShowCollection && feature.slideShowCollection.items.length"
          @click="handleSlideshow(feature.slideShowCollection.items)"
          >
          <figure class="bg-contain-center w-100 h-100"
          :style="`min-height: 200px; background-image: url(${feature.slideShowCollection.items[0].url})`">
            <search />
          </figure>
        </button>
        <a
          v-else
          class="md-6 lg-5"
          :href="feature.exampleUrl"
          target="_blank"
        >
          <figure class="bg-contain-center w-100 h-100"
          :style="`min-height: 200px; background-image: url(${projectFeature.introImage.url})`"></figure>
        </a>
        <div class="md-6 lg-7 med-pl-4">
          <Markdown :source="feature.content" />
        </div>
       </div>
    </template>
    <template v-slot:extra-content>
      <section style="display: flex; gap: 1rem; justify-content: center;">
        <button v-if="feature.screencaptureUrl"
          class="button -hollow"
          @click="handleScreencapture(feature.screencaptureUrl, `${feature.title} screencapture`)"
        >
        <camera />
        Screencapture</button>
        <button v-if="feature.codeExample"
          class="button -hollow"
          @click="handleViewCode(feature.codeExample)"
        >
        <cog-hollow styles="fill:transparent; stroke: currentColor;" />
        Code Example</button>
        <a class="button -hollow" :href="feature.exampleUrl" target="_blank">
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
    handleSlideshow (items) {
      this.setLightBox({
        componentData: items
      })
    }
  }
}
</script>
