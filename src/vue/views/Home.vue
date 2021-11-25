<template>
  <section class="bg-d-gray">
    <div class="flex -column justify-between h-100">
      <p class="intro">Hi, I'm Mark Condello <span></span> open to work opportunities</p>
      <article>
        <h1>A Melbourne based FE Developer,</h1>
        <div class="flex-cols">
          <h2 class="lg-6 h3">Specialising in interface development & design, with a focus on intuitive user experiences.</h2>
        </div>
        <div class="flex-cols">
          <button class="lg-3 button">view my work</button>
        </div>
      </article>
      <h3 class="h4 plug">I set the gears in motion...</h3>
    </div>
    <aside-line scroll-message="slide..." />
  </section>
</template>
<script>
import AsideLine from '../sections/asideLine.vue'
export default {
  components: { AsideLine }
}
</script>
