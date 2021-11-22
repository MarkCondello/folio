<template>
  <header>
    <nav>
      <!-- <a href="/"> -->
      <router-link :to="{ name: 'Home' }">
        <gears />
      </router-link>
      <!-- </a> -->
      <ul>
        <li><button>Work</button></li>
        <li><button>About</button></li>
        <li><button class="button -hollow sml">Contact</button></li>
      </ul>
    </nav>
  </header>
  <router-view />
  <footer>
    <section>
      <nav>
        <ul>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
        </ul>
      </nav>
    </section>
  </footer>
</template>

<script>
import gears from './components/svgs/gears.vue'
import linkedIn from './components/svgs/linkedIn.vue'
export default {
  components: { gears, linkedIn },
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
