<template>
  <frame-panel
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <div class="md-9 lg-9 med-pl-2">
          <h1>{{projectFeature.title}}</h1>
                        <web-link />

          <div class="flex-cols">
            <!-- <h2 class="h3 lg-9">{{ project.intro }}</h2> -->
          </div>
        </div>
       </div>
    </template>
  </frame-panel>
  <!--  <frame-panel
    scroll-message="Related Project Features"
    :show-plug="false"
    v-if="slides.length"
    class="justify-center"
  >
    <template v-slot:article>
      <section class="slides">
        <article>
          <figure :style="`background-image: url(${slides[selectedSlideIndex].image})`"></figure>
          <div>
            <header>
              <h3 class="h2">What I did</h3>
              <p v-html="slides[selectedSlideIndex].text"></p>
            </header>
            <router-link :to="{
              name: 'project-feature-show',
              params: {
                slug: project.slug,
                featureSlug: slides[selectedSlideIndex].slug,
                contentTypeId: slides[selectedSlideIndex].contentTypeId
              }
              }">
              <web-link />
              <h4>See details here..</h4>
            </router-link>
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
  </frame-panel> -->
</template>
<script>
import FramePanel from '../components/FramePanel.vue'
import webLink from '../components/svgs/webLink.vue'
import { mapState } from 'vuex'
export default {
  components: { FramePanel, webLink },
  data () {
    return {
      slides: [],
      selectedSlideIndex: 0
    }
  },
  computed: mapState({
    project: state => state.project,
    projectFeature: state => state.projectFeature
  }),
  mounted () {
    const slideNames = ['first', 'second', 'third', 'fourth', 'fifth']
    slideNames.forEach(item => {
      const slide = this.project[item + 'SlideRef']
      if (slide && slide.introImage && slide.introImage.url && slide.introText && slide.slug) {
        this.slides.push({
          contentTypeId: slide.sys.id,
          text: slide.introText,
          image: slide.introImage.url,
          slug: slide.slug
        })
      }
    })
  }
}
</script>
