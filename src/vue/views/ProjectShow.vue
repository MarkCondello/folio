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
  <frame-panel
    scroll-message="What I did"
    :show-plug="false"
    v-if="slides.length"
    class="justify-center"
  >
    <template v-slot:article>
      <section class="slides">
        <article>
          <figure :style="`background-image: url(${slides[selectedSlideIndex].image})`"></figure>
          <!-- click to open lightbox ?? -->
          <div>
            <header>
              <h3 class="h2">What I did</h3>
              <p v-html="slides[selectedSlideIndex].text"></p>
            </header>
            <a :href="slides[selectedSlideIndex].link" target="_blank">
              <web-link />
              <h4>See details here</h4>
            </a>
          </div>
        </article>
        <footer>
          <button v-for="(slide, index) in slides" 
          :style="`background-image: url(${slide.image})`" 
          :key="index"
          @click="selectedSlideIndex = index"
          >
          </button>
        </footer>
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
import webLink from '../components/svgs/webLink.vue'

import { mapState } from 'vuex'
export default {
  components: { FramePanel, bottomLineShow, webLink },
  data () {
    return {
      slides: [],
      selectedSlideIndex: 0
    }
  },
  computed: mapState({
    project: state => state.project
  }),
  mounted () {
    const slideNames = ['first', 'second', 'third', 'fourth', 'fifth']
    slideNames.forEach(slide => {
      if (this.project[slide + 'SlideText'] && this.project[slide + 'SlideImage'] && this.project[slide + 'SlideLink']) {
        this.slides.push({
          text: this.project[slide + 'SlideText'],
          image: this.project[slide + 'SlideImage'].url,
          link: this.project[slide + 'SlideLink']
        })
      }
    });
  }
}
</script>
