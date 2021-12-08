<template>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <div class="lg-3">
          <img :src="project.clientLogo.url" :alt="project.clientLogo.title" />
        </div>
        <div class="lg-9">
          <h1>{{ project.title }}</h1>
          <div class="flex-cols">
            <h2 class="h3 lg-9">{{ project.intro }}</h2>
          </div>
        </div>
       </div>
       <div class="lg-12">
        <div class="flex-cols">
          <div class="lg-3"></div>
          <button class="lg-3 button">view project goals</button>
        </div>
       </div>
    </template>
    <!-- <template v-slot:plug>I set the gears in motion...</template> -->
  </frame-panel>
  <bottom-line-show :project-link='{ link: project.domain, imgAlt: project.title, imgAlt: project.clientLogo.description, imgSrc: project.clientLogo.url }' />

</template>

<script>
import FramePanel from '../components/FramePanel.vue'
import bottomLineShow from '../sections/bottomLineProjectShow.vue'
import { mapState } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow },
  computed: mapState({
    project: state => state.project
  })
}
</script>
