<template>
<!-- Refactor into css file -->
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
    bg-class="bg-primary"
  >
    <template v-slot:article>
      <div class="flex-cols justify-end">
        <div class="sm-6 md-9 lg-10 med-pl-2">
          <h1>{{ project.title }}</h1>
        </div>
      </div>
      <div class="flex-cols">
        <div class="sml-my-2 md-3 lg-2 flex align-center justify-center">
          <img width="120" :src="project.clientLogo.url" :alt="project.clientLogo.title" />
        </div>
        <div class="sml-my-1 md-9 lg-10 med-pl-2">
          <div class="flex-cols">
            <h2 class="h3 lg-9">{{ project.intro }}</h2>
          </div>
        </div>
      </div>
      <div class="flex-cols justify-end">
        <div class="xs-2 sm-6 md-9 lg-10 med-pl-2">
          <router-link class="xs-2 sm-4 md-4 lg-3 button" :to="{ name: 'project-show', hash: '#goals'}">
             view project goals</router-link>
        </div>
      </div>
    </template>
  </frame-panel>
  <!-- Refactor into css file -->

  <frame-panel
    scroll-message="Project Goals"
    :show-plug="false"
    bg-class="bg-primary"
    class="project-goals"
  >
    <template v-slot:article>
      <div id="goals">
        <h3 class="h1" style="margin: 0;">Project Goals</h3>
        <div class="flex-cols justify-center align-center pt-1 pb-2">
          <div class="lg-6">
            <h4 class="h3 med-mx-2" v-html="project.firstProjectGoal"></h4>
          </div>
          <div class="lg-4">
            <img class="sml-mt-2" :src="project.firstProjectGoalImage.url" style="height: 30vh; object-fit: contain; width: 100%;"/>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:extra-content>
      <div class="flex-cols align-center" v-if="project.secondProjectGoalImage && project.secondProjectGoal">
       <div class="lg-4">
        <img class="hide-med-down" :src="project.secondProjectGoalImage.url" style="height: 30vh; object-fit: contain; width: 100%;"/>
       </div>
        <div class="lg-6">
          <pre class="med-mx-2 my-0" v-html="project.secondProjectGoal"></pre>
        </div>
      </div>
    </template>
  </frame-panel>
  <frame-panel
    scroll-message="What I did"
    :showAside="project.featuresCollection.items.length > 2"
    :show-plug="false"
    class="justify-center"
    id="features"
    v-if="project.featuresCollection.items.length"
  >
    <template v-slot:article>
      <section class="project-features">
        <h3 class="h2">What I did</h3>
         <ProjectFeature
         :project="project"
          :projectFeature="project.featuresCollection.items[0]"
         />
        <ProjectFeature
          class="reversed"
          :project="project"
          :projectFeature="project.featuresCollection.items[1]"
        />
      </section>
    </template>
  </frame-panel>
<!-- <frame-panel
    scroll-message="What I did"
    :showAside="false"
    :show-plug="false"
    class="justify-center"
    v-if="project.featuresCollection.items.length > 2 && project.featuresCollection.items.length < 4"
  >
    <template v-slot:article>
      <section class="project-features">
        <h3 class="h2">What I did</h3>
        <ProjectFeature
         :project="project"
          projectFeatureName="project.featuresCollection.items[2]"
         />
        <ProjectFeature
          class="reversed"
          :project="project"
          projectFeatureName="project.featuresCollection.items[3]"
        />
      </section>
    </template>
  </frame-panel> -->
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
  components: {
    FramePanel,
    bottomLineShow,
    ProjectFeature
  },
  computed: mapState({
    project: state => state.projectStore.project
  })
}
</script>
