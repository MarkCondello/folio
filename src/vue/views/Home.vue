<template>
  <frame
    intro-part-one="Hi, I'm Mark Condello"
    intro-part-two="open to work opportunities"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <h1>A Melbourne based FE Developer,</h1>
      <div class="flex-cols">
        <h2 class="lg-6 h3">Specialising in interface development & design, with a focus on intuitive user experiences.</h2>
      </div>
      <div class="flex-cols">
        <button class="lg-3 button">view my work</button>
      </div>
    </template>
    <template v-slot:plug>I set the gears in motion...</template>
  </frame>
  <frame
    bg-class="bg-primary"
    bg-img-src="https://media.istockphoto.com/photos/white-truck-in-motion-uk-street-picture-id1284419710?b=1&k=20&m=1284419710&s=170667a&w=0&h=i8HrBjT5uYqG1tvQnAFENs__ZmGQl3eD_TZPPO-HulA="
    intro-part-one="Best Rated Transport"
    intro-part-two="Laravel, jQuery, Vue, Foundation, SCSS"
    scroll-message="Work 01. Best Rated Transport"
  >
    <template v-slot:article>
      <h1>Quote generating system</h1>
      <div class="flex-cols">
        <h2 class="lg-6 h3">A custom account based application that supports customer/company accounts, & a client admin.</h2>
      </div>
      <div class="flex-cols">
        <a href="#" class="lg-3 button">view project</a>
      </div>
    </template>
  </frame>
  <frame
    bg-class="bg-primary"
    bg-img-src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBwaWMlMjBjaXR5JTIwYml1bGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    intro-part-one="Australia Market Entry"
    intro-part-two="Laravel, Vue, SCSS"
    scroll-message="Work 02. Asia Market Entry"
  >
    <template v-slot:article>
      <h1>Business lead-building CMS</h1>
      <div class="flex-cols">
        <h2 class="lg-6 h3">A custom multi-site built to capture business leads & promote the client’s USP.</h2>
      </div>
      <div class="flex-cols">
        <a href="#" class="lg-3 button">view project</a>
      </div>
    </template>
  </frame>
</template>
<script>
import Frame from '../components/Frame.vue'
export default {
  components: { Frame }
}
</script>
// https://media.istockphoto.com/photos/white-truck-in-motion-uk-street-picture-id1284419710?b=1&k=20&m=1284419710&s=170667a&w=0&h=i8HrBjT5uYqG1tvQnAFENs__ZmGQl3eD_TZPPO-HulA=
