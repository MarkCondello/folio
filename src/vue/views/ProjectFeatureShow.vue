<template>
  <frame-panel
    intro-part-one="project.client"
    intro-part-two="project.stack"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <div class="flex-cols">
        <div class="md-9 lg-9 med-pl-2">
          <h1>Project Feature Show</h1>
          <div class="flex-cols">
            <!-- <h2 class="h3 lg-9">{{ project.intro }}</h2> -->
          </div>
        </div>
       </div>
    </template>
  </frame-panel>
</template>
<script>
import FramePanel from '../components/FramePanel.vue'

export default {
  components: { FramePanel }
}
</script>
