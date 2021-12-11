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
    intro-part-one=""
    intro-part-two=""
    :show-intro="false"
    scroll-message="Project Goals"
    :show-plug="false"
  >
    <template v-slot:article>
      <div>
        <h3 class="h1">Project Goals</h3>
        <div class="flex-cols justify-between pt-1 pb-2">
          <div class="lg-6">
            <h4 class="h3">{{ project.firstProjectGoal }}</h4>
          </div>
          <div class="lg-6">
            <div class="mx-2 pb-14" :style="`background-position: center; background-size: cover; background-image: url(${project.firstProjectGoalImage.url})`" ></div>
          </div>
        </div>
          <div class="flex-cols justify-between">
            <div class="lg-6 pb-10" :style="`background-position: center; background-size: cover; background-image: url(${project.firstProjectGoalImage.url})`">
            </div>
            <div class="lg-6">
              <p class="mx-2 pt-1">{{ project.firstProjectGoal }}</p>
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
