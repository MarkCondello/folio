<template>
  <footer>
    <section>
      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/markcondello/" target="_blank"><linkedIn/></a></li>
          <!-- <li><a href="#" target="_blank"><github/></a></li>
          Add this back in once I have tiddied up my account -->
          <li><a href="mailto:condellomark@gmail.com"><mail/></a></li>
          <li><a href="tel:0406046531"><phone/></a></li>
        </ul>
      </nav>
    </section>
  </footer>
</template>

<script>
import linkedIn from '../components/svgs/linkedIn.vue'
// import github from '../components/svgs/github.vue'
import mail from '../components/svgs/mail.vue'
import phone from '../components/svgs/phone.vue'

export default {
  name: 'Bottom Line',
  components: { linkedIn, mail, phone }
}
</script>
