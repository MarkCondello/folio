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
  </frame-panel>
    <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="Project Goals"
  >
    <template v-slot:article>
      <div>
        <h3>Project Goals</h3>
        <div class="flex-cols justify-between">
          <div class="lg-6">
            <h4>{{ project.firstProjectGoal }}</h4>
          </div>
          <div class="lg-5" :style="`background-image: url(${project.firstProjectGoalImage.url})`" >
          </div>
        </div>
          <div class="flex-cols justify-between">
          <div class="lg-6" :style="`background-image: url(${project.firstProjectGoalImage.url})`">
          </div>
          <div class="lg-5">
            <h5>{{ project.firstProjectGoal }}</h5>
          </div>
        </div>
      </div>
    </template>
  </frame-panel>
  <bottom-line-show 
     :project-link='{ link: project.domain, imgAlt: project.title, imgAlt: project.clientLogo.description, imgSrc: project.clientLogo.url }' 
    :agency-and-release='{ agency: project.agency, launchDate: project.launchDate, agencyLink: project.agencyLink }'
  />

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
