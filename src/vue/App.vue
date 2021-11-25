<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }"><gears /></router-link>
       <ul>
        <li><button>Work</button></li>
        <li><button>About</button></li>
        <li><button class="button -hollow sml">Contact</button></li>
      </ul>
    </nav>
  </header>
  <router-view />
  <!-- <img src="../images/logos/ame.svg"/> -->
  <bottom-line />
</template>

<script>

import gears from './components/svgs/gears.vue'
import bottomLine from './sections/bottomLine.vue'

export default {
  components: { gears, bottomLine },
  name: 'App',
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
