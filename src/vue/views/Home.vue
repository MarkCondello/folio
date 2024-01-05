<template>
  <frame-panel
    v-if="projects.length"
    :bg-img-src="require('@/images/photos/abstract-network.png')"
    intro-part-one="Hi, I'm Mark Condello"
    intro-part-two="return true;"
    :scroll-message="projects[0].client"
    anchor-id="intro"
  >
    <template v-slot:article>
      <h1>A Melbourne based developer,</h1>
      <div class="flex-cols">
        <h2 class="sm-5 md-6 lg-6 h3">Specialising in interface development &amp; design, with a focus on intuitive user experiences.</h2>
      </div>
      <div class="flex-cols">
        <router-link class="lg-2 button" :to="{ name: 'Home', hash: '#projects'}">view my work</router-link>
      </div>
    </template>
    <template v-slot:plug>
      <h3 class="plug">I set the gears in motion.</h3>
    </template>
  </frame-panel>
  <frame-panel v-for="(project, id) in projects"
    bg-class="bg-primary"
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    :key="project.title"
    :scroll-message="id != projects.length - 1 ? projects[id + 1].client : 'About me'"
    :bg-img-src='project.featuredImage ? project.featuredImage.url : ""'
    :project-link='{ link: project.domain, imgAlt: project.title, imgAlt: project.clientLogo.description, imgSrc: project.clientLogo.url }'
    :anchor-id="id === 0 ? 'projects' : null"
  >
    <template v-slot:article>
      <h2 v-html="project.title"></h2>
      <div class="flex-cols">
        <h3 class="lg-6" v-html="project.abstract"></h3>
      </div>
      <div class="flex-cols">
        <router-link class="lg-2 button" :to="{ name: 'project-show', params: { projectSlug: project.slug } }">
          view project
        </router-link>
      </div>
    </template>
  </frame-panel>
   <frame-panel
    :bg-img-src="require('@/images/photos/me-holding-baby.png')"
    intro-part-one="About me"
    intro-part-two="WIP"
    scroll-message="Contact me"
    anchor-id="about"
  >
    <template v-slot:article>
      <h2>Who am I?</h2>
      <div class="flex-cols">
        <h3 class="lg-6">I enjoy creating interfaces with web technologies and displaying data in visually appealing ways.<br>
        When I am not building UI's, I father my family, enjoy exercising, learning new things &amp; finding inspiration.<br>
        To read more about my professional history please view my resume <a :href="resumeFile" target="_blank">here</a>.
      </h3>
      </div>
    </template>
    <template v-slot:plug>Blog coming soon...</template>
  </frame-panel>
  <frame-panel
    intro-part-one="Contact me"
    intro-part-two="let's chat"
    scroll-message="About me"
    rotate-aside="true"
    bg-class="bg-primary"
    anchor-id="contact"
  >
    <template v-slot:article>
      <h2 v-if="sent">Thanks for the message {{form.from_name}}.<br> I will get back to you soon.</h2>
      <template v-else>
      <h2>Please send your enquiries here.</h2>
      <div>
        <form class="contact" @submit="onSubmit">
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols">
                <div class="xs-2 lg-4">
                  <div class="label-placeholder">
                    <label for="email">Your email</label>
                    <input type="email" name="email" placeholder="Your email" required v-model="form.reply_to">
                    <p>Your email</p>
                  </div>
                  <div class="label-placeholder">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" placeholder="Subject" required v-model="form.subject">
                    <p>Subject</p>
                  </div>
                  <div class="label-placeholder">
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Name" required v-model="form.from_name">
                    <p>Name</p>
                  </div>
                </div>
                <div class="xs-2 lg-8 -message">
                  <label>Message</label>
                  <textarea v-model="form.message"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols justify-end">
                <button type="submit" class="lg-3 button flex align-center justify-center">
                  <template v-if="loading">
                    <span class="ml-0-half">sending now</span>
                    <cog class="spin" :styles="{
                      position: 'absolute',
                      right: '18px',
                      height: '24px',
                      fill: 'transparent',
                      stroke: '#fff',
                      width: '24px',}"
                    />
                  </template>
                  <span v-else>send message</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </template>
    </template>
  </frame-panel>
  <bottom-line /><!-- Contact links -->
</template>
<script>
import resume from '../../downloads/resume_mark_condello.pdf'
import FramePanel from '../components/FramePanel.vue'
import bottomLine from '../sections/bottomLine.vue'
import { mapState } from 'vuex'
import emailjs from 'emailjs-com'
import cog from '../components/svgs/cogHollow.vue'
export default {
  components: { FramePanel, bottomLine, cog },
  data () {
    return {
      resumeFile: resume,
      form: {
        reply_to: '',
        from_name: '',
        subject: '',
        message: ''
      },
      loading: false,
      sent: false
    }
  },
  computed: mapState({
    projects: state => state.projectStore.projects.sort((first, second) => new Date(second.sys.firstPublishedAt) - new Date(first.sys.firstPublishedAt))
  }),
  created () {
    // https://www.emailjs.com/docs/sdk/installation/
    emailjs.init('l-leT1C18Dkw5zcDP')
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.loading = true
      emailjs
        .send('service_q7zsc1g', 'template_xuyv00f', {
          from_name: this.form.from_name,
          reply_to: this.form.reply_to,
          subject: this.form.subject,
          message: this.form.message
        })
        .then(resp => {
          this.sent = true
          this.loading = false
          // console.log('Success: ', resp)
        })
        .catch(err => {
          console.log(err)
          this.sent = false
          this.loading = false
        })
    }
  }
}
</script>
