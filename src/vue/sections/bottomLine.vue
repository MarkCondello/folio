<template>
  <footer>
    <section>
      <nav>
        <ul>
          <template v-if="showSocials">
            <li><a href="#" target="_blank"><linkedIn/></a></li>
            <li><a href="#" target="_blank"><github/></a></li>
            <li><a href="#" target="_blank"><mail/></a></li>
            <li><a href="#" target="_blank"><phone/></a></li>
          </template>
        </ul>
        <button v-show="!hideChevBtn"><!-- Needs to be hidden on last frame of page -->
          <chevs-down />
        </button>
        <a v-if="projectLink" :href="projectLink.link" class="project-link">
          <web-link/>
          <span>{{ projectLink.linkName }}</span>
          <img :src="projectLink.imgPath" :alt="projectLink.imgAlt" width="40" />
        </a>
        <p v-if="agencyAndRelease && !projectLink" class="intro">Agency: <a href="#" target="_blank">DcodeGroup</a> <span></span> Release: August 2021</p>
       </nav>
    </section>
  </footer>
</template>

<script>
import linkedIn from '../components/svgs/linkedIn.vue'
import github from '../components/svgs/github.vue'
import mail from '../components/svgs/mail.vue'
import phone from '../components/svgs/phone.vue'
import webLink from '../components/svgs/webLink.vue'
import chevsDown from '../components/svgs/chevsDown.vue'

export default {
  name: 'Bottom Line',
  components: { linkedIn, chevsDown, webLink, github, mail, phone },
  props: {
    showSocials: {
      type: Boolean,
      default: true
    },
    projectLink: {
      type: Object,
      default: () => {
        return {
          link: '#',
          linkName: 'australiamarketnetry.com.au',
          imgPath: '../../../images/logos/ame.svg',
          imgAlt: 'Asia Market Entry logo.'
        }
      }
    },
    agencyAndRelease: {
      type: Object,
      default: () => {}
    },
    hideChevBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>
