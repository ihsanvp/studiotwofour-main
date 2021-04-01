<template>
  <div id="home-page">
    <teaser-video></teaser-video>

    <app-header
      :active="header"
      :links="links"
      :linkScrollDuration="scrollDuration"
      @menu:click="openNav"
    ></app-header>

    <app-drawer
      :active="drawer"
      :links="links"
      @drawer:close="closeNav"
      @navigation:click="mobileNavigate"
    ></app-drawer>

    <!-- Page -->
    <div id="page">
      <app-slider :links="links"></app-slider>
      <app-section-about :isMobile="isMobile"></app-section-about>
      <app-section-services></app-section-services>
      <app-section-work
        @portfolio:card:click="handlePortfolioItemClick"
      ></app-section-work>
      <app-section-contact
        @sendmail:success="triggerToast('We will be in touch shortly')"
        @sendmail:error="triggerToast('Sorry, Please try again', 'error')"
      ></app-section-contact>
    </div>
    <!-- End Page -->

    <!-- Toast -->
    <transition name="toast">
      <div class="toast" v-if="toast">
        <div class="toast__inner" :class="toastLevel" @click="toast = false">
          <div class="toast__text">{{ toastMessage }}</div>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <v-fab-transition>
      <v-btn
        v-show="whatsapp"
        color="#25D366"
        dark
        fixed
        bottom
        right
        fab
        @click="href('https://wa.me/+919526009812')"
      >
        <i class="fab fa-whatsapp fa-2x"></i>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import axios from 'axios'
import AOS from 'aos'

export default {
  layout: 'Main',
  head() {
    return {
      link: [
        {
          rel: 'preload',
          href: require('~/assets/img/slides/1.jpg'),
          as: 'image',
        },
        {
          rel: 'preload',
          href: require('~/assets/img/slides/2.jpg'),
          as: 'image',
        },
        {
          rel: 'preload',
          href: require('~/assets/img/slides/3.jpg'),
          as: 'image',
        },
        {
          rel: 'preload',
          href: require('~/assets/img/work/VR_BG.jpg'),
          as: 'image',
        },
      ],
    }
  },
  data() {
    return {
      drawer: false,
      header: false,
      scrollDuration: 2000,
      isSending: false,
      whatsapp: false,
      isMobile: '',

      toast: false,
      toastMessage: '',
      toastLevel: '',

      name: null,
      email: null,
      message: null,

      links: [
        {
          title: 'Home',
          target: '#slider',
          active: false,
          mobileActive: false,
          scrollOptions: {
            duration: 2000,
            offset: 0,
            easing: 'easeInOutCubic',
          },
        },
        {
          title: 'About',
          target: '#about',
          active: false,
          mobileActive: false,
          scrollOptions: {
            duration: 2000,
            offset: 60,
            easing: 'easeInOutCubic',
          },
        },
        {
          title: 'Services',
          target: '#services',
          active: false,
          mobileActive: false,
          scrollOptions: {
            duration: 2000,
            offset: 60,
            easing: 'easeInOutCubic',
          },
        },
        {
          title: 'Work',
          target: '#work',
          active: false,
          mobileActive: false,
          scrollOptions: {
            duration: 2000,
            offset: 60,
            easing: 'easeInOutCubic',
          },
        },
        {
          title: 'Contact',
          target: '#contact',
          active: false,
          mobileActive: false,
          scrollOptions: {
            duration: 2000,
            offset: 60,
            easing: 'easeInOutCubic',
          },
        },
      ],
    }
  },

  methods: {
    openNav() {
      this.drawer = true

      this.links.forEach((link, i) => {
        setTimeout(() => {
          link.mobileActive = true
        }, 200 * i)
      })
    },

    closeNav() {
      this.links.forEach((link, i) => {
        link.mobileActive = false
      })
      this.drawer = false
    },

    mobileNavigate(link) {
      this.closeNav()
      this.$vuetify.goTo(link.target, link.scrollOptions)
    },

    checkScroll() {
      if (process.browser) {
        var about = document.querySelector('#about').getBoundingClientRect()
        var services = document
          .querySelector('#services')
          .getBoundingClientRect()
        var work = document.querySelector('#work').getBoundingClientRect()
        var contact = document.querySelector('#contact').getBoundingClientRect()

        if (about.y <= 100 && about.y >= -(about.height - 400)) {
          this.links[1].active = true
        } else {
          this.links[1].active = false
        }

        if (services.y <= 400 && services.y >= -(services.height - 400)) {
          this.links[2].active = true
        } else {
          this.links[2].active = false
        }

        if (work.y <= 400 && work.y >= -(work.height - 100)) {
          this.links[3].active = true
        } else {
          this.links[3].active = false
        }

        // console.log(contact.y, contact.height)

        if (contact.y <= 100 && contact.y >= -contact.height) {
          this.links[4].active = true
          // this.whatsapp = true
        } else {
          this.links[4].active = false
          // this.whatsapp = false
        }

        if (contact.y <= contact.height) {
          this.whatsapp = true
        } else {
          this.whatsapp = false
        }

        if (document.documentElement.scrollTop > this.scrollThreshold - 80) {
          this.header = true
        } else {
          this.header = false
        }
      }
    },

    triggerToast(msg, level = 'primary') {
      this.toastMessage = msg
      this.toastLevel = level
      this.toast = true
      setTimeout(() => {
        this.toast = false
      }, 3000)
    },

    href(url) {
      if (process.browser) {
        window.open(url, '_blank')
      }
    },

    checkMobile() {
      if (process.browser) {
        if (window.innerWidth > 960) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    },

    handlePortfolioItemClick(item) {
      console.log(item)
      this.triggerToast('Coming soon')
    },
  },

  computed: {
    scrollThreshold() {
      if (process.browser) {
        return window.innerHeight - 10
      } else {
        return 0
      }
    },
  },

  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.checkScroll)
      window.addEventListener('resize', this.checkMobile)

      this.checkMobile()

      AOS.refresh()
    }
  },

  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('scroll', this.checkScroll)
      window.removeEventListener('resize', this.checkMobile)
    }
  },
}
</script>

<style scoped>
/* =========== PAGE ============== */

#home-page {
  width: 100vw;
  overflow-x: hidden;
}

/* ================= TOAST ================ */

.toast {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 60px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  --time: 0.3s;
}

.toast__inner {
  position: relative;
  z-index: 1;
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all ease var(--time);
  font-family: museo_sans500;
  color: var(--primary-1);
}

.toast__inner::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(10px);
  z-index: -2;
  transition: all ease var(--time);
}

.toast__inner::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  z-index: -2;
  transition: all ease var(--time);
}

.toast__inner.primary,
.toast__inner.primary::before,
.toast__inner.primary::after {
  color: var(--primary-1);
  background: var(--secondary);
}

.toast__inner.error,
.toast__inner.error::before,
.toast__inner.error::after {
  color: white;
  background: crimson;
}

.toast__inner:hover::before {
  filter: blur(5px);
}

/* ============ TRANSITION - TOAST ================== */

.toast-enter-active,
.toast-leave-active {
  transition: all ease var(--time);
}

.toast-enter,
.toast-leave-to {
  transform: translateY(100px);
}

.toast-enter-to,
.toast-leave {
  transform: translateY(0);
}
</style>
