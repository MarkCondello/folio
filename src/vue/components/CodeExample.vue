<template>
  <article>
    <pre class='code-block'>
      <code>{{keyReference}}</code>
    </pre>
  </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: {
    keyReference: {
      type: String
    }
  },
  data () {
    return {
      demoCode: null
    }
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
