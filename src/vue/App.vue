<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }"><gears /></router-link>
       <ul>
        <li><button>{{ frameNumber }}</button></li>
        <li><button>Work</button></li>
        <li><button>About</button></li>
        <li><button class="button -hollow sml">Contact</button></li>
      </ul>
    </nav>
  </header>
  <router-view />
  <!-- <img src="../images/logos/ame.svg"/> -->
  <!-- <bottom-line /> -->
</template>
<script>

import gears from './components/svgs/gears.vue'
// import bottomLine from './sections/bottomLine.vue'
// import _ from 'lodash'

export default {
  components: { gears },
  name: 'App',
  data () {
    return {
      scrollDir: null,
      frameNumber: 0,
      lastScrollTop: 0
    }
  },
  created () {
    this.$store.dispatch('fetchProjects')
    window.addEventListener('scroll', this.handleScroll, false)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  methods: {
    handleScroll (ev) {
      // console.log('Reached handleScroll', ev)
      // const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // const prevFrameVal = this.frameNumber
      // const docHeight = document.body.clientHeight
      // if (scrollTop > this.lastScrollTop) { // downscroll code
      //   // window.scroll({ top: (prevFrameVal + 1) * docHeight, left: 0, behaviour: 'smooth' })
      //   document.documentElement.scrollTop = document.body.scrollTop = (prevFrameVal + 1) * docHeight
      //   const runInc = _.debounce(() => {
      //     if (prevFrameVal === this.frameNumber) {
      //       this.frameNumber += 1
      //     }
      //   }, 500)
      //   runInc()
      // } else { // upscroll code
      //   // window.scroll({ top: (prevFrameVal - 1) * docHeight, left: 0, behaviour: 'smooth' })
      //   document.documentElement.scrollTop = document.body.scrollTop = (prevFrameVal - 1) * docHeight
      //   const runDec = _.debounce(() => {
      //     if (prevFrameVal === this.frameNumber && this.frameNumber > 0) {
      //       this.frameNumber -= 1
      //     }
      //   }, 500)
      //   runDec()
      // }
      // this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling
      // // check the scroll dir https://stackoverflow.com/questions/31223341/detecting-scroll-direction
      // // need a way to know how many frames are in this parent component
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
