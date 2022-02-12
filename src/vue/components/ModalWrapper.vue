<template>

  <div v-if="visible"
    class="modal-wrapper"
    :class="`${componentName}-wrapper`"
    @click.self="closeModal"
    >
    <div class="modal">
      <button
          class="close"
          @click="closeModal"
        >
        <close />
      </button>
      <h3>{{ modalTitle }}</h3>
      <component
        :is="componentName"
        v-bind="componentData"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Close from './svgs/close.vue'

export default {
  components: { Close },
  computed: mapState({
    visible: state => state.modalStore.visible,
    componentData: state => state.modalStore.componentData,
    componentName: state => state.modalStore.componentName,
    modalTitle: state => state.modalStore.modalTitle
  }),
  methods: {
    ...mapActions(['closeModal'])
  }
}
</script>
