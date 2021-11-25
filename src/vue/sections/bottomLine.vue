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
        <a v-if="projectLink && !agencyAndRelease" :href="projectLink.link" class="project-link">
          <web-link/>
          <span>{{ projectLink.linkName }}</span>
          <img src="../../images/logos/ame.svg" :alt="projectLink.imgAlt" width="40" />
        </a>
        <p v-if="agencyAndRelease && !projectLink" class="intro">Agency: <a href="#" target="_blank">{{agencyAndRelease.agency}}</a><span></span>Release: {{ agencyAndRelease.releaseDate }}</p>
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
        // return {
        //   link: 'https://www.australiamarketnetry.com.au',
        //   linkName: 'australiamarketnetry.com.au',
        //   imgPath: '../../images/logos/ame.svg', // will be a path to the logo served from contentful
        //   imgAlt: 'Asia Market Entry logo.'
        // }
      }
    },
    agencyAndRelease: {
      type: Object,
      default: () => {
        return {
          agency: 'DcodeGroup',
          releaseDate: 'August 2021'
        }
      }
    },
    hideChevBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>
