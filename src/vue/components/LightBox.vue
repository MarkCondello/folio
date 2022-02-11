<template>
  <div
    class="light-box-wrapper"
    @click.self="closeLightBox"
    v-if="slides && visible"
    >
      <div class="light-box">
        <button class="close" @click="closeLightBox">X</button>
        <nav>
          <button class="prev" @click="prevSlide"> prev </button>
          <button class="next" @click="nextSlide"> next </button>
        </nav>
        <footer>
          <p v-html="slides[0].title" />
          <small>Image {{ activeSlideIndex + 1 }} of {{ slides.length }}</small>
        </footer>
      </div>
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
    ...mapActions(['closeLightBox'])
  }
}
</script>
