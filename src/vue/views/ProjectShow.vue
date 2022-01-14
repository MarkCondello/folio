<template>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
    bg-class="bg-primary"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <div class="xs-1 md-3 lg-3">
          <img class="w-100" :src="project.clientLogo.url" :alt="project.clientLogo.title" />
        </div>
        <div class="md-9 lg-9 med-pl-2">
          <h1>{{ project.title }}</h1>
          <div class="flex-cols">
            <h2 class="h3 lg-9">{{ project.intro }}</h2>
          </div>
        </div>
       </div>
       <div class="lg-12">
        <div class="flex-cols">
          <div class="lg-3"></div>
            <router-link class="lg-3 button med-ml-2" :to="{ name: 'project-show', hash: '#goals'}">view project goals</router-link>
        </div>
       </div>
    </template>
  </frame-panel>
  <frame-panel
    scroll-message="Project Goals"
    :show-plug="false"
    bg-class="bg-primary"
  >
    <template v-slot:article>
      <div id="goals">
        <h3 class="h1">Project Goals</h3>
        <div class="flex-cols justify-between pt-1 pb-2">
          <div class="lg-6">
            <h4 class="h3" v-html="project.firstProjectGoal"></h4>
          </div>
          <div class="lg-6">
            <div class="mx-2 pb-14" :style="`background-position: center; background-size: cover; background-image: url(${project.firstProjectGoalImage.url})`" ></div>
          </div>
        </div>
        <div class="flex-cols justify-between" v-if="project.secondProjectGoalImage && project.secondProjectGoal">
          <div class="lg-6 pb-10" :style="`background-position: center; background-size: cover; background-image: url(${project.secondProjectGoalImage.url})`">
          </div>
          <div class="lg-6">
            <p class="mx-2 pt-1">{{ project.secondProjectGoal }}</p>
          </div>
        </div>
      </div>
    </template>
  </frame-panel>
  <frame-panel
    scroll-message="What I did"
    :show-plug="false"
    class="justify-center"
  >
    <template v-slot:article>
      <section class="project-features">
        <h3 class="h2">What I did</h3>
        <ProjectFeature
         :project="project"
          projectFeatureName="firstFeatureRef"
         />
        <ProjectFeature
          class="reversed"
          :project="project"
          projectFeatureName="secondFeatureRef"
        />
      </section>
    </template>
  </frame-panel>
    <frame-panel
    scroll-message="What I did"
    :show-plug="false"
    class="justify-center"
  >
    <template v-slot:article>
      <section class="project-features">
        <h3 class="h2">What I did</h3>
        <ProjectFeature
          :project="project"
          projectFeatureName="firstFeatureRef"
          />
        <ProjectFeature
          class="reversed"
          :project="project"
          projectFeatureName="secondFeatureRef"
        />
      </section>
    </template>
  </frame-panel>
  <bottom-line-show
    :project-link='{ link: project.domain, imgAlt: project.title, imgSrc: project.clientLogo.url }'
    :agency-and-release='{ agency: project.agency, launchDate: project.launchDate, agencyLink: project.agencyLink }'
  />
</template>

<script>
import FramePanel from '../components/FramePanel.vue'
import bottomLineShow from '../sections/bottomLineProjectShow.vue'
import ProjectFeature from '../sections/projectFeature.vue'

import { mapState } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow, ProjectFeature },
  computed: mapState({
    project: state => state.project
  })
}
</script>
