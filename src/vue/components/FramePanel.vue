<template>
  <section ref="frame"
    :class="bgClass"
    :style="`background-image: url(${ bgImgSrc });`">
    <div class="flex -column justify-between h-100">
      <p v-if="introPartOne && introPartTwo" class="intro">{{ introPartOne }}<span></span>{{ introPartTwo }}</p>
      <article>
        <slot name="article"></slot>
      </article>
      <h3 class="h4 plug">
        <slot name="plug"></slot>
      </h3>
      <footer v-if="projectLink || agencyAndRelease">
        <nav>
        <a v-if="projectLink && !agencyAndRelease" :href="projectLink.link" class="project-link">
          <web-link/>
          <span>{{ projectLink.linkName }}</span>
          <img src="../../images/logos/ame.svg" :alt="projectLink.imgAlt" width="40" />
        </a>
        <p v-if="agencyAndRelease && !projectLink" class="intro">Agency: <a href="#" target="_blank">{{agencyAndRelease.agency}}</a><span></span>Release: {{ agencyAndRelease.releaseDate }}</p>
      </nav>
      </footer>
    </div>
    <aside-line :scroll-message="scrollMessage" :show-aside="showAside"/>

  </section>
</template>
<script>
import AsideLine from '../sections/asideLine.vue'
import webLink from '../components/svgs/webLink.vue'

export default {
  components: { AsideLine, webLink },
  props: {
    bgClass: {
      type: String,
      default: 'bg-d-gray'
    },
    bgImgSrc: {
      type: String,
      default: null,
      required: false
    },
    introPartOne: {
      type: String
    },
    introPartTwo: {
      type: String
    },
    scrollMessage: {
      type: String
    },
    showAside: {
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
    }
  }
}
</script>
