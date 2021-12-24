<template>
  <header>
    <nav>
      <router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#intro' }"><gears /></router-link>
      <button @click="showNavPanel = true">
        <hamburger />
      </button>
      <ul :class="{'active' : showNavPanel}"><!-- actoive class is only for small down -->
        <button @click="showNavPanel = false">
          <close />
        </button>
        <li><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#projects'}">Work</router-link></li>
        <li><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#about'}">About</router-link></li>
        <li><router-link @click="showNavPanel = false" class="button -hollow sml" :to="{ name: 'Home', hash: '#contact'}">Contact</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>
<script>

import gears from './components/svgs/gears.vue'
import hamburger from './components/svgs/hamburger.vue'
import close from './components/svgs/close.vue'
export default {
  components: { gears, hamburger, close },
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
      return this.$store.state.projects
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
