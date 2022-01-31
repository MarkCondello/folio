<template>
  <article :style="{color: 'black', border: '1px solid black'}">
    <pre class='code-block'><code>{{demoCode}}</code></pre>
  </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      demoCode: null
    }
  },
  mounted () {
    this.demoCode = this.getProjectFeatureCodeExample(this.componentData.keyReference)
  },
  computed: {
    ...mapState({
      projectFeature: state => state.projectStore.projectFeature,
      componentData: state => state.modalStore.componentData
    }),
    ...mapGetters(['getProjectFeatureCodeExample'])
  }
}
</script>
