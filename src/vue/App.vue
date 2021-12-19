<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home', hash: '#intro' }"><gears /></router-link>
       <ul>
        <li><router-link :to="{ name: 'Home', hash: '#projects'}">Work</router-link></li>
        <li><router-link :to="{ name: 'Home', hash: '#about'}">About</router-link></li>
        <li><router-link class="button -hollow sml" :to="{ name: 'Home', hash: '#contact'}">Contact</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>
<script>

import gears from './components/svgs/gears.vue'
export default {
  components: { gears },
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
