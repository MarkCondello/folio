<template>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
    :bgImgSrc="projectFeature.introImage.url"
    bgClass="bg-tint"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <div class="md-9 lg-9 med-pl-2">
          <h1>{{projectFeature.title}}</h1>
          <div class="flex-cols">
            <h2 class="h3 lg-9">{{ projectFeature.intro }}</h2>
          </div>
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
