<template>
  <frame-panel
    v-for="(feature, index) in projectFeature.featureDetailsCollection.items"
    :intro-part-one="index === 0 ? project.title : null"
    :intro-part-two="index === 0 ? projectFeature.title : null"
    scroll-message="scroll down"
    :key="index"
    :showAside="projectFeature.featureDetailsCollection.items.length > index + 1"

    :intro-part-one-link="{ name: 'project-show', params: { projectSlug: project.slug }}"
  >
    <template v-slot:article>
        <!-- reverse class is not included yet -->
      <div class="flex-cols" :class="{ reverse: index % 2 === 1}">
        <div v-if="index % 2 === 1" class="md-6 lg-7 med-pr-4">
          <Markdown :source="feature.content" />
        </div>
        <button class="md-6 lg-5 feature-light-show-trigger"
          @click="handleSlideshow(feature.slideShowCollection.items)"
          >
          <figure class="bg-contain-center w-100 h-100">
            <span>
              <search />
            </span>
            <img class="sml-my-3" style="width:100%; object-fit: contain;" :src="feature.slideShowCollection.items[0].url" :alt="feature.slideShowCollection.items[0].title" />
          </figure>
        </button>
        <div v-if="index % 2 === 0" class="md-6 lg-7 med-pl-4">
          <Markdown :source="feature.content" />
        </div>
       </div>
    </template>
    <template v-slot:extra-content>
      <section class="sml-mt-3" style="display: flex; gap: 1rem; justify-content: center;">
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
        <a v-if="feature.exampleUrl" class="button -hollow" :href="feature.exampleUrl" target="_blank">
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
