<template>
  <frame-panel
    :bg-img-src="require('@/images/photos/abstract-networks.png')"
    intro-part-one="Hi, I'm Mark Condello"
    intro-part-two="open to work opportunities"
    scroll-message="scroll down"
  >
    <template v-slot:article>
      <span id="intro"></span>
      <h1>A Melbourne based FE Developer,</h1>
      <div class="flex-cols">
        <h2 class="lg-6 h3">Specialising in interface development & design, with a focus on intuitive user experiences.</h2>
      </div>
      <div class="flex-cols">
        <router-link class="lg-3 button" :to="{ name: 'Home', hash: '#projects'}">view my work</router-link>
      </div>
    </template>
    <template v-slot:plug>I set the gears in motion...</template>
  </frame-panel>
  <frame-panel v-for="(project, id) in projects"
    bg-class="bg-primary"
    :intro-part-one="project.client"
    :intro-part-two="project.stack"
    :scroll-message="`Work 0${id +1}.  ${project.client}`"
    :key="project.title"
    :bg-img-src='project.featuredImage ? project.featuredImage.url : ""'
    :project-link='{ link: project.domain, imgAlt: project.title, imgAlt: project.clientLogo.description, imgSrc: project.clientLogo.url }'
  >
    <template v-slot:article>
      <span v-if="id === 0" id="projects"></span>
      <h2 v-html="project.title"></h2>
      <div class="flex-cols">
        <h3 class="lg-6" v-html="project.abstract"></h3>
      </div>
      <div class="flex-cols">
        <router-link class="lg-3 button" :to="{ name: 'project-show', params: { slug: project.slug, contentTypeId: project.sys.id } }">
          view project
        </router-link>
      </div>
    </template>
  </frame-panel>
   <frame-panel
    :bg-img-src="require('@/images/photos/me-holding-baby.png')"
    intro-part-one="About Me"
    intro-part-two="WIP"
    scroll-message="About"
  >
    <template v-slot:article>
      <span id="about"></span>
      <h2>Who am I?</h2>
      <div class="flex-cols">
        <h3 class="lg-6">I enjoy creating interfaces with web technologies and displaying data in visually appealing ways.<br>
        When I am not building UI’s, I father my young family, enjoy exercising, learning new things & finding inspiration.<br>
        To read more about my professional history please download my resume <a href="#">here</a>.
      </h3>
      </div>
    </template>
    <template v-slot:plug>Blog coming soon...</template>
  </frame-panel>
  <frame-panel
    intro-part-one="Contact Me"
    intro-part-two="open to work opportunities"
    scroll-message="Contact"
    bg-class="bg-primary"
  >
    <template v-slot:article>
      <span id="contact"></span>
      <h2 v-if="sent">Thanks for the message {{form.from_name}}.<br> I will get back to you soon.</h2>
      <h2 v-else>Please send your enquiries here.</h2>
      <!-- https://stackoverflow.com/questions/49149550/how-to-send-an-email-with-vuejs/49150298 -->
      <div v-if="!sent">
        <form class="contact" @submit="onSubmit">
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols">
                <div class="lg-4">
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
                <div class="lg-8 -message">
                  <label>message</label>
                  <textarea v-model="form.message"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols justify-end">
                <button type="submit" class="lg-4 button flex align-center justify-center">
                  <template v-if="loading">
                    <cog class="spin" :styles="{height: '24px', fill: 'transparent',stroke: '#404040', width: '24px'}" />
                    <span class="ml-0-half">sending now</span>
                  </template>
                  <span v-else>send message</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </template>
  </frame-panel>
  <bottom-line /><!-- Contact links -->
</template>
<script>
import FramePanel from '../components/FramePanel.vue'
import bottomLine from '../sections/bottomLine.vue'
import { mapState } from 'vuex'
import emailjs from 'emailjs-com'
import cog from '../components/svgs/cogHollow.vue'
export default {
  components: { FramePanel, bottomLine, cog },
  data () {
    return {
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
    projects: state => state.projects.sort((first, second) => new Date(first.sys.firstPublishedAt) - new Date(second.sys.firstPublishedAt))
  }),
  created () {
    emailjs.init('user_J6qTVcfRCwXF74Vnqs6JE')
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.loading = true
      emailjs.send('service_4c6e8rb', 'template_65qcolf', {
        from_name: this.form.from_name,
        reply_to: this.form.reply_to,
        subject: this.form.subject,
        message: this.form.message
      })
        .then(resp => {
          this.sent = true
          this.loading = false
          console.log('Success: ', resp)
        })
        .catch(err => {
          console.log(err)
          this.sent = false
          this.loading = false
        })
      // const inputs = queryString.stringify(this.form)
      // console.log({ inputs })
      // axios // toDo: need to check this on a server with php
      //   .post(
      //     process.env.BASE_URL + 'mail.php', // this was leading to a 404
      //     inputs
      //   )
      //   .then(res => {
      //     console.log(res)
      //     this.sent = true
      //     this.loading = false
      //   })
    }
  }
}
</script>
