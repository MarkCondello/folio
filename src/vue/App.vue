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
        <li><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#projects'}">Work</router-link></li>
        <li><router-link @click="showNavPanel = false" :to="{ name: 'Home', hash: '#about'}">About</router-link></li>
        <li><router-link @click="showNavPanel = false" class="button -hollow sml" :to="{ name: 'Home', hash: '#contact'}">Contact</router-link></li>
        <bottom-line />
      </ul>
    </nav>
  </header>
  <router-view />
</template>
<script>

import gears from './components/svgs/gears.vue'
import hamburger from './components/svgs/hamburger.vue'
import close from './components/svgs/close.vue'
import bottomLine from './sections/bottomLine.vue'
export default {
  components: { gears, hamburger, close, bottomLine },
  name: 'App',
  data () {
    return {
      showNavPanel: false
    }
  },
  created () {
    console.log('created life-cycle reached where we fetch projects')
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
