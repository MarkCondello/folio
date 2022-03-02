<template>
  <header>
    <nav>
      <router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#intro' }"><gears /></router-link>
      <button @click="showNavPanel = true">
        <hamburger />
      </button>
      <ul :class="{'active' : showNavPanel}"><!-- active class is only for small down -->
        <button @click="showNavPanel = false">
          <close />
        </button>
        <li v-if="projects.length"><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#projects'}">Work</router-link></li>
        <li><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#about'}">About</router-link></li>
        <li><router-link @click="showNavPanel = false" class="button -hollow sml" :to="{ name: 'Home', hash: '#contact'}">Contact</router-link></li>
        <bottom-line />
      </ul>
    </nav>
  </header>
  <router-view />
  <light-box />
  <modal-wrapper />
</template>
<script>

import gears from './components/svgs/gears.vue'
import hamburger from './components/svgs/hamburger.vue'
import close from './components/svgs/close.vue'
import bottomLine from './sections/bottomLine.vue'
import ModalWrapper from './components/ModalWrapper.vue'
import LightBox from './components/LightBox.vue'
export default {
  components: { gears, hamburger, close, bottomLine, ModalWrapper, LightBox },
  name: 'App',
  data () {
    return {
      showNavPanel: false
    }
  },
  created () {
    this.$store.dispatch('fetchProjects')
  },
  computed: {
    projects () {
      return this.$store.state.projectStore.projects
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
