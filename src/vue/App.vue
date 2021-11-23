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
  <footer>
    <section>
      <nav>
        <ul>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
          <li><a href="#" target="_blank"><linkedIn/></a></li>
        </ul>
        <button><!-- Needs to be hidden on last frame of page -->
          <chevs-down />
        </button>
        <a href="#" class="project-link">
          <web-link/>
          <span>asiamarketentry.com</span>
          <img src="/src/images/logos/ame.svg" alt="Asia Market Entry logo."/>
        </a>
        <p v-if="false" class="intro">Agency: <a href="#" target="_blank">DcodeGroup</a> <span></span> Release: August 2021</p>
       </nav>
    </section>
  </footer>
</template>

<script>
import gears from './components/svgs/gears.vue'
import linkedIn from './components/svgs/linkedIn.vue'
import webLink from './components/svgs/webLink.vue'
import chevsDown from './components/svgs/chevsDown.vue'

export default {
  components: { gears, linkedIn, chevsDown, webLink },
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
