<template>
  <aside v-if="showAside">
    <div>
      <img src="../../images/icons/arrow.svg" alt="Arrow icon." />
      <span>{{ scrollMessage }}</span>
      <img src="../../images/icons/arrow-end.svg" alt="Arrow end icon." />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    scrollMessage: {
      type: String,
      default: 'Scroll Down'
    },
    showAside: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>