<template>
  <header>
    <nav>
      <h1>
  <!-- <img alt="Vue logo" src="../images/logos/vue.png"> -->
      </h1>
      <ul>
        <li><button>Work</button></li>
        <li><button>About</button></li>
        <li><button class="button -hollow sml">Contact</button></li>
      </ul>
    </nav>
  </header>
  <section class="intro bg-primary">
    <button class="button">Generic button</button>
  </section>
 </template>

<script>
export default {
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
