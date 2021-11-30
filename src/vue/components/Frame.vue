<template>
  <section ref="frame"
    :class="bgClass"
    :style="`background-image: url(${ bgImgSrc });`">
    <div class="flex -column justify-between h-100">
      <p v-if="introPartOne && introPartTwo" class="intro">{{ introPartOne }}<span></span>{{ introPartTwo }}</p>
      <article>
        <slot name="article"></slot>
      </article>
      <h3 class="h4 plug">
        <slot name="plug"></slot>
      </h3>
    </div>
    <aside-line :scroll-message="scrollMessage" :show-aside="showAside"/>
  </section>
  <bottom-line />
</template>
<script>
import AsideLine from '../sections/asideLine.vue'
import bottomLine from '../sections/bottomLine.vue'

export default {
  components: { AsideLine, bottomLine },
  props: {
    bgClass: {
      type: String,
      default: 'bg-d-gray'
    },
    bgImgSrc: {
      type: String,
      default: null,
      required: false
    },
    introPartOne: {
      type: String
    },
    introPartTwo: {
      type: String
    },
    scrollMessage: {
      type: String
    },
    showAside: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      frameRect: null
    }
  },
  mounted () {
    this.frameRect = this.$refs.frame.getBoundingClientRect()
    this.$refs.frame.addEventListener('scroll', function (e) {
      console.log('scrolling')
    })
    // setInterval(() => {
    //   console.log({ frameRectY: Math.floor(this.frameRect.y), wInnerH: window.innerHeight, docClientHeight: document.documentElement.clientHeight })
    // }, 2000)
  }
}
</script>
