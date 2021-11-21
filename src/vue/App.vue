<template>
<button class="button">Generic button</button>
  <img alt="Vue logo" src="../images/logos/vue.png">
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
