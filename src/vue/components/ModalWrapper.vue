<template>
  <div v-if="visible"
    class="modal-wrapper"
    @click.stop="closeModal"
    >
    <div class="modal">
      <h1 :style="{color: 'black',}">Modal Wrapper</h1>
      <component
        :is="componentName"
        v-bind="componentData"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    visible: state => state.modalStore.visible,
    componentData: state => state.modalStore.componentData,
    componentName: state => state.modalStore.componentName
  }),
  methods: {
    ...mapActions(['closeModal'])
  }
}
</script>
