<template>
  <article>
    <iframe
      :src="videoSrc"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      videoSrc: this.$attrs.videoSrc
    }
  },
  computed: {
    ...mapState({
      projectFeature: state => state.projectStore.projectFeature,
      componentData: state => state.modalStore.componentData
    })
  }
}
</script>
