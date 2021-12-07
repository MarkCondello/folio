<template>
  <frame-panel
    intro-part-one="Hi, I'm Mark Condello"
    intro-part-two="open to work opportunities"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <h1>Project Show</h1>
      <div class="flex-cols">
        <h2 class="lg-6 h3">Specialising in interface development & design, with a focus on intuitive user experiences.</h2>
      </div>
      <div class="flex-cols">
        <button class="lg-3 button">view my work</button>
      </div>
    </template>
    <!-- <template v-slot:plug>I set the gears in motion...</template> -->
  </frame-panel>
</template>

<script>
import FramePanel from '../components/FramePanel.vue'
export default {
  components: { FramePanel },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
