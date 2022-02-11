<template>
  <div
    class="light-box-wrapper"
    @click.self="closeLightBox"
    v-if="slides && visible"
    >
      <div class="light-box">
        <button class="close" @click="closeLightBox">X</button>
        <figure>
          <!-- convert to inlie styles and transition the width height vals -->
          <img :src="slides[activeSlideIndex].url"
          :width="slides[activeSlideIndex].width"
          :height="slides[activeSlideIndex].height" />
        </figure>
        <footer>
          <p v-html="slides[activeSlideIndex].title" />
          <small>Image {{ activeSlideIndex + 1 }} of {{ slides.length }}</small>
        </footer>
      </div>
      <nav>
        <button class="prev" @click="prevSlide"> prev </button>
        <button class="next" @click="nextSlide"> next </button>
      </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  data () {
    return {
      activeSlideIndex: 0
    }
  },
  mounted () {
    console.log('MOUNTED LIGHTBOX')
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
