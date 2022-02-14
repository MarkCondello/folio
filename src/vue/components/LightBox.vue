<template>
<!-- ToDo: Would be nicer with a transition -->
  <div
    class="light-box-wrapper"
    @click.self="closeLightBox"
    v-if="slides && visible"
    >
      <div class="light-box">
        <button
          class="close"
          @click="closeLightBox"
        >
          <close />
        </button>
        <figure>
          <!-- ToDo: Would be nicer with a transition -->
          <img
            v-for="(slide, id) in slides"
            v-show="id === activeSlideIndex"
            :key="slide.sys.id"
            :src="slide.url"
            :width="slides.width"
            :height="slides.height"
          />
        </figure>
        <footer>
          <p v-html="slides[activeSlideIndex].title" />
          <small>Image {{ activeSlideIndex + 1 }} of {{ slides.length }}</small>
        </footer>
      </div>
      <nav>
        <button class="prev" @click="prevSlide">
          <chev-square-left/>
         </button>
        <button class="next" @click="nextSlide">
          <chev-square-right/>
        </button>
      </nav>
  </div>
</template>

<script>
import ChevSquareLeft from './svgs/chevSquareLeft.vue'
import ChevSquareRight from './svgs/chevSquareRight.vue'
import Close from './svgs/close.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: { ChevSquareLeft, ChevSquareRight, Close },
  data () {
    return {
      activeSlideIndex: 0
    }
  },
  computed: mapState({
    visible: state => state.lightBoxStore.visible,
    slides: state => state.lightBoxStore.slides
  }),
  methods: {
    ...mapActions(['closeLightBox']),
    prevSlide () {
      if (this.activeSlideIndex === 0) {
        this.activeSlideIndex = this.slides.length - 1
      } else {
        this.activeSlideIndex -= 1
      }
    },
    nextSlide () {
      if (this.activeSlideIndex === this.slides.length - 1) {
        this.activeSlideIndex = 0
      } else {
        this.activeSlideIndex += 1
      }
    }
  }
}
</script>
