<template>
  <frame-panel
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
    <!-- :agency-and-release='{ agency: project.agency, launchDate: project.launchDate, agencyLink: project.agencyLink }' -->
    <template v-slot:article>
      <h2 v-html="project.title"></h2>
      <div class="flex-cols">
        <h3 class="lg-6" v-html="project.abstract"></h3>
      </div>
      <div class="flex-cols">
        <a href="#" class="lg-3 button">view project</a>
      </div>
    </template>
  </frame-panel>
   <frame-panel
    bg-img-src="https://thumbs.dreamstime.com/b/caring-touch-1494614.jpg"
    intro-part-one="About Me"
    intro-part-two="WIP"
    scroll-message="About"
  >
    <template v-slot:article>
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
      <h2>Please send your enquiries here</h2>
      <div>
        <form class="contact">
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols">
                <div class="lg-4">
                  <div class="label-placeholder">
                    <label for="email">Your email</label>
                    <input type="email" name="email" placeholder="Your email"  required>
                    <p>Your email</p>
                  </div>
                  <div class="label-placeholder">
                    <label for="subject">Subject</label>
                    <input type="email" name="subject" placeholder="Subject" required>
                    <p>Subject</p>
                  </div>
                  <div class="label-placeholder">
                    <label for="name">Name</label>
                    <input type="email" name="name" placeholder="Name" required>
                    <p>Name</p>
                  </div>
                </div>
                <div class="lg-8 -message">
                  <label>message</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cols">
            <div class="lg-9">
              <div class="flex-cols justify-end">
                <button type="submit" class="lg-4 button">send message</button>
                </div>
            </div>
          </div>
        </form>
      </div>
    </template>
  </frame-panel>
  <bottom-line />
</template>
<script>
import FramePanel from '../components/FramePanel.vue'
import bottomLine from '../sections/bottomLine.vue'
import { mapState } from 'vuex'
export default {
  components: { FramePanel, bottomLine },
  computed: mapState({
    projects: state => state.projects.sort((first, second) => new Date(first.sys.firstPublishedAt) - new Date(second.sys.firstPublishedAt))
  })
}
</script>
