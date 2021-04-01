<template>
  <div id="home-page">
    <!-- Teaser Video -->
    <teaser-video></teaser-video>
    <!-- End Teaser Video -->
    <!-- Header -->
    <header class="header__main" :class="{ header__hidden: !header }">
      <v-container class="nav__align full">
        <div class="header__brand">
          <button
            @click="
              $vuetify.goTo('#home-page', {
                duration: scrollDuration,
                offset: 0,
                easing: 'easeInOutCubic',
              })
            "
          >
            <v-avatar :tile="true">
              <img src="../assets/logo.png" alt />
            </v-avatar>
          </button>
        </div>
        <ul class="header__links d-none d-md-flex">
          <li
            v-for="link in links"
            :key="link.title"
            :class="{ 'ml-8': link != links[0] }"
          >
            <button
              class="header__link font-500 py-1"
              :class="{ active: link.active }"
              @click="$vuetify.goTo(link.target, link.scrollOptions)"
            >
              {{ link.title }}
            </button>
          </li>
        </ul>
        <v-btn class="d-md-none" icon color="var(--primary-1)" @click="openNav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </header>
    <!-- End Header -->

    <!-- Mobile Nav -->
    <transition name="drawer">
      <nav class="nav__drawer" v-if="drawer">
        <v-btn
          icon
          color="var(--secondary)"
          class="close-btn"
          @click="closeNav"
        >
          <v-icon size="30">mdi-close</v-icon>
        </v-btn>
        <ul class="nav__links">
          <li
            v-for="link in links"
            :key="link.title"
            :class="{ active: link.mobileActive }"
          >
            <button class="link font-500" @click="mobileNavigate(link)">
              {{ link.title }}
            </button>
          </li>
        </ul>
      </nav>
    </transition>
    <!-- End Mobile Nav -->

    <!-- Page -->
    <div id="page">
      <!-- Slider -->
      <section id="slider">
        <v-carousel
          height="100%"
          hide-delimiter-background
          :show-arrows="false"
          cycle
          continuous
          interval="4000"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            transition="slide-right"
            reverse-transition="slide-right"
            class="carousel__item"
            :src="slide.img"
          >
            <v-container class="full rel">
              <div class="carousel__content">
                <h4 class="mb-3">
                  <em>Hello.</em> We are
                  <span>Studiotwofour</span>
                </h4>
                <h1 class="mb-5 font-700">
                  We'are all about
                  <br />
                  {{ slide.text }}
                </h1>
                <button
                  class="btn__main btn__carousel"
                  @click="
                    $vuetify.goTo('#contact', {
                      duration: scrollDuration + 1000,
                      offset: 0,
                      easing: 'easeInOutCubic',
                    })
                  "
                >
                  Let's talk
                </button>
              </div>
            </v-container>
          </v-carousel-item>
        </v-carousel>
        <nav class="nav__psuedo d-none d-md-block">
          <v-container class="full rel nav__align">
            <div class="nav__brand">
              <img src="~/assets/logo.png" alt />
            </div>
            <ul class="nav__links">
              <li
                v-for="link in links"
                :key="link.title"
                :class="{ 'ml-8': link != links[0] }"
                v-show="link.title != 'Home'"
              >
                <button
                  class="nav__link font-500"
                  @click="$vuetify.goTo(link.target, link.scrollOptions)"
                >
                  {{ link.title }}
                </button>
              </li>
            </ul>
          </v-container>
        </nav>
      </section>
      <!-- End Slider -->

      <!-- About -->
      <section id="about">
        <!-- Technolab -->
        <section id="technolab">
          <v-container>
            <v-row>
              <v-col cols="12" md="7" class="pr-lg-15 pr-md-5">
                <div class="about__content">
                  <h1
                    class="heading__main mb-10"
                    :data-aos="aboutAnimation"
                    data-aos-duration="1000"
                  >
                    Creative
                    <br />Technolab
                  </h1>
                  <h3
                    class="heading__main mb-5"
                    :data-aos="aboutAnimation"
                    data-aos-duration="1000"
                  >
                    Why we a Lab? Because this is a process of inventing
                    possibilities for brand's growth and success.
                  </h3>
                  <p
                    class="mb-10"
                    :data-aos="aboutAnimation"
                    data-aos-duration="1000"
                  >
                    We build brands with technological approach and creative fun
                    ways. We help clients improve the results and outcome from
                    meaningful ideas. Because meaningful brands create better
                    audience better for the world we live in.
                  </p>
                  <button
                    :data-aos="aboutAnimation"
                    data-aos-duration="1000"
                    class="btn__main btn__secondary"
                    @click="
                      $vuetify.goTo('#services', {
                        duration: scrollDuration,
                        offset: 0,
                        easing: 'easeInOutCubic',
                      })
                    "
                  >
                    Our Services
                  </button>
                </div>
              </v-col>
              <v-col cols="12" md="5" class="d-none d-md-flex">
                <div class="img__box right">
                  <div class="img__inner">
                    <img
                      src="~assets/img/about/Lab_rect.png"
                      alt
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    />
                    <img
                      src="~assets/img/about/Lab2.png"
                      alt
                      data-aos-duration="1000"
                      data-aos="fade-left"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
        <!-- End Technolab -->

        <!-- Philosophy -->
        <section id="philosophy">
          <v-container>
            <v-row>
              <v-col cols="12" md="5" class="d-none d-md-flex">
                <div class="img__box left">
                  <div class="img__inner">
                    <img
                      src="~assets/img/about/Philotr.png"
                      alt
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    />
                    <img
                      src="~assets/img/about/Philo2.png"
                      alt
                      data-aos-duration="1000"
                      data-aos="fade-right"
                    />
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="7">
                <div class="philosophy__content">
                  <h1
                    class="heading__main mb-10"
                    :data-aos="philosophyAnimation"
                    data-aos-duration="1000"
                  >
                    Our
                    <br />Philosophy
                  </h1>
                  <h3
                    :data-aos="philosophyAnimation"
                    data-aos-duration="1000"
                    class="heading__main mb-5"
                  >
                    We are techno based creative studio. We believe brands are
                    connected with people when it technologically created.
                  </h3>
                  <p
                    :data-aos="philosophyAnimation"
                    data-aos-duration="1000"
                    class="mb-10"
                  >
                    Brand's growths are inter connected with powerful and
                    resonant concepts. Our experts enable brands to capture the
                    attention of online audience effectively, by mixing
                    extraordinary thoughts and innovation. That results
                    successful stories and infinite experiences.
                  </p>
                  <button
                    :data-aos="philosophyAnimation"
                    data-aos-duration="1000"
                    class="btn__main btn__secondary"
                    @click="
                      $vuetify.goTo('#why-choose-us', {
                        duration: scrollDuration,
                        offset: 0,
                        easing: 'easeInOutCubic',
                      })
                    "
                  >
                    Why Choose Us
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </section>
      <!-- End Philosophy -->

      <!-- Sevices -->
      <section id="services">
        <v-container>
          <h1
            class="heading__main text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Services
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            class="heading__main text-center mb-15"
          >
            Our creative services are flexible to choose. Feel free to reach out
            to us to get the job done at the right time.
          </h3>
          <v-row>
            <v-col
              data-aos="fade-up"
              data-aos-duration="1000"
              :data-aos-delay="service.animationDelay"
              cols="12"
              sm="6"
              md="4"
              class="pa-5 pa-md-3"
              v-for="service in services"
              :key="service.title"
            >
              <div class="card__service">
                <div class="card__img">
                  <img :src="service.icon" alt />
                </div>
                <div class="card__content">
                  <h2 class="card__title text-center mb-5 font-500">
                    {{ service.title }}
                  </h2>
                  <p class="text-center mb-0">{{ service.description }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" class="flex-center mt-10">
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                class="btn__main btn__secondary"
                @click="
                  $vuetify.goTo('#vr', {
                    duration: scrollDuration,
                    offset: 40,
                    easing: 'easeInOutCubic',
                  })
                "
              >
                AR & VR
              </button>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <!-- End Services -->

      <!-- Work -->
      <section id="work">
        <!-- Portfolio -->
        <section id="portfolio">
          <v-container>
            <h1
              class="heading__main text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Creative Portfolio
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              class="heading__main text-center mb-15"
            >
              We collaborate with ambitious brands and spaces, love to feature
              them here.
            </h3>
            <div class="portfolio__container">
              <div
                class="item"
                v-for="item in portfolioItems"
                :key="item.title"
                :class="item.class"
                data-aos="fade-up"
                data-aos-duration="1000"
                :data-aos-delay="item.animationDelay"
                @click="triggerToast('Coming soon')"
              >
                <img :src="item.image" alt />
                <div class="overlay">
                  <div class="item__title">
                    <span class="flex-center">
                      {{ item.title }}
                      <i class="fas fa-angle-double-right d-md-none"></i>
                    </span>
                  </div>
                  <div class="line"></div>
                  <div class="line line__bottom"></div>
                </div>
              </div>
            </div>
          </v-container>
        </section>
        <!-- End Portfolio -->

        <!-- AR & VR -->
        <section id="vr">
          <v-container class="px-5 px-sm-3">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              class="heading__main heading__vr mb-10"
            >
              Virtual Reality & Augmented Reality Architectural Visualization
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              class="heading__main heading__vr mb-10"
            >
              Immerse with a realistic world of experiences, feel and analyze
              everything before it comes in real life. An industry-trusted
              studio with the skills and experience you can afford.
            </h3>
            <div class="icons__vr mb-10">
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
                class="mr-3 mr-sm-5"
                src="~/assets/img/work/VR_360.png"
                alt
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                class="mr-3 mr-sm-5"
                src="~/assets/img/work/VR_3D.png"
                alt
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                src="~/assets/img/work/VR_3.png"
                alt
              />
            </div>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              class="btn__main btn__secondary"
              @click="
                $vuetify.goTo('#contact', {
                  duration: scrollDuration,
                  offset: 0,
                  easing: 'easeInOutCubic',
                })
              "
            >
              Get a Quote
            </button>
          </v-container>
        </section>
        <!-- End AR & VR -->

        <!-- Why Choose Us -->
        <section id="why-choose-us">
          <v-container>
            <h1
              class="heading__main text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Why Choose Us
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              class="heading__main text-center mb-15"
            >
              The reason why? Because we want to take your brand to the global.
              We help to improve your business through visible and recognizable
              concepts that bring ideas into life. The client's needs are
              important to us, thus we place your brand into the most potential
              audiences.
            </h3>
            <v-row class="justify-center">
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="flex-center mb-10 mb-lg-0"
                v-for="(card, i) in chooseCards"
                data-aos="fade-up"
                data-aos-duration="1000"
                :data-aos-delay="(i * 100).toString()"
                :key="card.title"
              >
                <div class="choose-card__container">
                  <div class="choose-card__content">
                    <h3
                      class="heading__main text-center text-uppercase flex-center"
                    >
                      {{ card.title }}
                    </h3>
                    <p class="text-center flex-center mb-0">
                      {{ card.description }}
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
        <!-- End Why Choose Us -->
      </section>
      <!-- End Work -->

      <!-- Contact -->
      <section id="contact">
        <!-- Animation -->
        <section id="animation">
          <v-container class="rel full">
            <div class="anim-group">
              <h2 class="one-main">
                Got a cool idea or insight that you need help developing?
              </h2>
              <h3 class="one-sub">We'd love to hear from you.</h3>
            </div>

            <div class="anim-group">
              <h2 class="two-main">
                Looking for a creative team for branding?
              </h2>
              <h3 class="two-sub">We’re here to help you better.</h3>
            </div>

            <div class="anim-group">
              <h2 class="three-main">
                Thinking for a strategic partner for advertising?
              </h2>
              <h3 class="three-sub">We help to make your business success.</h3>
            </div>

            <div class="anim-group">
              <h2 class="four-main">
                Need a technologic partner to develope your digital requirments?
              </h2>
              <h3 class="four-sub">
                We will come up with our best digital solutions.
              </h3>
            </div>
          </v-container>
        </section>
        <!-- End Animation -->

        <!-- Footer -->
        <footer class="rel flex-center" id="footer">
          <v-container class="full">
            <h2 class="mb-3">We want to hear from you!</h2>
            <v-row>
              <v-col cols="12" md="8">
                <form class="form__contact" @submit.prevent="sendMail">
                  <v-row>
                    <v-col cols="8" class="pr-1 pb-1">
                      <fieldset :disabled="isSending">
                        <input
                          tabindex="1"
                          type="text"
                          class="form__item form__field"
                          :class="{ disabled: isSending }"
                          placeholder="Name"
                          required
                          v-model="name"
                        />
                      </fieldset>
                    </v-col>
                    <v-col cols="4" class="pl-1 pb-1">
                      <button
                        tabindex="4"
                        class="form__item"
                        :disabled="isSending"
                        :class="{ disabled: isSending }"
                      >
                        <v-progress-circular
                          :width="3"
                          color="var(--secondary)"
                          indeterminate
                          v-if="isSending"
                        ></v-progress-circular>
                        <span v-else>Submit</span>
                      </button>
                    </v-col>
                    <v-col cols="12" class="py-1">
                      <fieldset class="form__fieldset" :disabled="isSending">
                        <input
                          tabindex="2"
                          type="email"
                          class="form__item form__field"
                          :class="{ disabled: isSending }"
                          placeholder="Email"
                          required
                          v-model="email"
                        />
                      </fieldset>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                      <fieldset
                        class="form__fieldset fieldset__message"
                        :disabled="isSending"
                      >
                        <textarea
                          tabindex="3"
                          cols="30"
                          rows="10"
                          class="form__item form__field"
                          :class="{ disabled: isSending }"
                          placeholder="Message"
                          required
                          v-model="message"
                        ></textarea>
                      </fieldset>
                    </v-col>
                  </v-row>
                </form>
              </v-col>
              <v-col cols="12" md="4" class="align__contact">
                <div class="box__contacts mb-5">
                  <div class="box__icon">
                    <img src="~/assets/img/contact/Call.png" alt />
                  </div>
                  <div class="box__content">
                    <span class="box__text">+91 7306383231 (IND)</span>
                    <span class="box__text">+91 9526009812 (IND)</span>
                    <span class="box__text">+97150 4966854 (UAE)</span>
                    <span class="box__text">+974 55404913 (QATAR)</span>
                  </div>
                </div>
                <div class="box__contacts mb-10">
                  <div class="box__icon">
                    <img src="~/assets/img/contact/Mail.png" alt />
                  </div>
                  <div class="box__content">
                    <span class="box__text font-500"
                      >info@studiotwofour.com</span
                    >
                  </div>
                </div>
                <p class="locations text-center">
                  INDIA | UAE | QATAR | KSA | MALAYSIA
                </p>
                <ul class="box__social mb-10">
                  <li v-for="social in socialLinks" :key="social.icon">
                    <a href @click.prevent>
                      <i :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
          <div id="bottom">
            <span>© Studiotwofour | All rights reserved.</span>
          </div>
        </footer>
        <!-- End Footer -->
      </section>
      <!-- End Contact -->
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
import TeaserVideo from '@/components/TeaserVideo.vue'

export default {
  components: {
    TeaserVideo,
  },
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

      slides: [
        {
          img: require('~/assets/img/slides/1.jpg'),
          text: 'Moving forward brands',
        },
        {
          img: require('~/assets/img/slides/2.jpg'),
          text: 'Connecting user experiences',
        },
        {
          img: require('~/assets/img/slides/3.jpg'),
          text: 'Integrating digital solutions',
        },
      ],

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

      services: [
        {
          title: 'BRAND DEVELOPMENT',
          description:
            "Creating brand identity that matches the perception and insight of the client. A well-crafted identity stands up and moving ahead the brand's successfulness.",
          icon: require('~/assets/img/services/card-icon-1.png'),
          animationDelay: '0',
        },
        {
          title: 'CREATIVE DESIGN',
          description:
            'Creativity does not just happen. The skillfully executed design does not always have to be distinctive that screams quality and awesomeness.',
          icon: require('~/assets/img/services/card-icon-2.png'),
          animationDelay: '100',
        },
        {
          title: 'SOCIAL MEDIA + DIGITAL MARKETING',
          description:
            'We create and manage SM campaigns for businesses. Awesome digital content and media marketing makes effective business results.',
          icon: require('~/assets/img/services/card-icon-3.png'),
          animationDelay: '200',
        },
        {
          title: 'WEB AND APP DEVELOPMENT',
          description:
            'We understand your business, we create and develop cutting edge and tailored web solutions that generate qualified business leads.',
          icon: require('~/assets/img/services/card-icon-4.png'),
          animationDelay: '0',
        },
        {
          title: 'MOTION GRAPHICS',
          description:
            'Motion graphics are a proven way to breathe life in a marketing campaign. We specializes in the creation of fascinating promo and explainer videos for your product.',
          icon: require('~/assets/img/services/card-icon-5.png'),
          animationDelay: '100',
        },
        {
          title: 'STRATEGY CONSULTING',
          description:
            'Talented team of developing bespoke marketing strategies and resources that uniquely tailored to fit any business. And to reach the target audience in the most efficient way.',
          icon: require('~/assets/img/services/card-icon-6.png'),
          animationDelay: '200',
        },
      ],

      portfolioItems: [
        {
          title: 'Branding | Case Study',
          image: require('~/assets/img/portfolio/1.png'),
          class: 'item--1',
          animationDelay: '0',
        },
        {
          title: 'Brand Customization',
          image: require('~/assets/img/portfolio/2.png'),
          class: 'item--2',
          animationDelay: '100',
        },
        {
          title: 'Retail Marketing',
          image: require('~/assets/img/portfolio/3.png'),
          class: 'item--1',
          animationDelay: '0',
        },
        {
          title: 'Web + Apps Development',
          image: require('~/assets/img/portfolio/4.jpg'),
          class: 'item--1',
          animationDelay: '100',
        },
        {
          title: 'Outdoor Branding',
          image: require('~/assets/img/portfolio/5.jpg'),
          class: 'item--1',
          animationDelay: '200',
        },
        {
          title: 'Events | Branding',
          image: require('~/assets/img/portfolio/6.png'),
          class: 'item--2',
          animationDelay: '0',
        },
        {
          title: 'Design | Installation',
          image: require('~/assets/img/portfolio/7.png'),
          class: 'item--3',
          animationDelay: '100',
        },
        {
          title: 'Digital Content',
          image: require('~/assets/img/portfolio/8.png'),
          class: 'item--1',
          animationDelay: '0',
        },
        {
          title: 'Social Media Creative',
          image: require('~/assets/img/portfolio/9.jpg'),
          class: 'item--1',
          animationDelay: '100',
        },
      ],

      chooseCards: [
        {
          title: 'CREATIVELY AGILE',
          description:
            'We make ideas that turn into reality. Innovative and comprehensive suite of services tailored to make powerful brands.',
        },
        {
          title: 'WELL COLLABORATIVE',
          description:
            'Harmonizes innovative solutions to create valuable relationships. Connecting through clear and trustable communications.',
        },
        {
          title: 'CODE OF MAKING',
          description:
            'We understand the goals and challenges. We’re able to approach projects with strategic insights and delivering successful results.',
        },
        {
          title: 'MIX OF CULTURE',
          description:
            'We are a team of young talents who like to create innovations. Our expertise enables brands to capture the trend of audience effectively. ',
        },
      ],

      socialLinks: [
        {
          icon: 'fab fa-instagram',
          url: '',
        },
        {
          icon: 'fab fa-linkedin',
          url: '',
        },
        {
          icon: 'fab fa-twitter',
          url: '',
        },
        {
          icon: 'fab fa-behance',
          url: '',
        },
        {
          icon: 'fab fa-youtube',
          url: '',
        },
        {
          icon: 'fab fa-facebook',
          url: '',
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

    animateText() {
      if (process.browser) {
        // anim-one vars
        var oneMainWrapper = document.querySelector('.one-main')
        oneMainWrapper.innerHTML = oneMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-one-main'>$&</span>"
        )
        var oneSubWrapper = document.querySelector('.one-sub')
        oneSubWrapper.innerHTML = oneSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-one-sub'>$&</span>"
        )

        // anim-two vars
        var twoMainWrapper = document.querySelector('.two-main')
        twoMainWrapper.innerHTML = twoMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-two-main'>$&</span>"
        )
        var twoSubWrapper = document.querySelector('.two-sub')
        twoSubWrapper.innerHTML = twoSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-two-sub'>$&</span>"
        )

        // anim-three vars
        var threeMainWrapper = document.querySelector('.three-main')
        threeMainWrapper.innerHTML = threeMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-three-main'>$&</span>"
        )
        var threeSubWrapper = document.querySelector('.three-sub')
        threeSubWrapper.innerHTML = threeSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-three-sub'>$&</span>"
        )

        // anim-four vars
        var fourMainWrapper = document.querySelector('.four-main')
        fourMainWrapper.innerHTML = fourMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-four-main'>$&</span>"
        )
        var fourSubWrapper = document.querySelector('.four-sub')
        fourSubWrapper.innerHTML = fourSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-four-sub'>$&</span>"
        )

        anime
          .timeline({ loop: true })
          .add({
            targets: '.one-main .letter-one-main, .one-sub .letter-one-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.one-main .letter-one-main, .one-sub .letter-one-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets: '.two-main .letter-two-main, .two-sub .letter-two-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.two-main .letter-two-main, .two-sub .letter-two-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets:
              '.three-main .letter-three-main, .three-sub .letter-three-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets:
              '.three-main .letter-three-main, .three-sub .letter-three-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets: '.four-main .letter-four-main, .four-sub .letter-four-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.four-main .letter-four-main, .four-sub .letter-four-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
      }
    },

    sendMail() {
      if (this.name && this.email && this.message) {
        this.isSending = true

        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        this.$axios
          .$post('https://studiotwofour-backend.herokuapp.com/', data)
          .then(() => {
            this.name = null
            this.email = null
            this.message = null

            this.triggerToast('We will be in touch shortly')
          })
          .catch(() => this.triggerToast('Sorry, Please try again', 'error'))
          .finally(() => (this.isSending = false))
      }
    },

    triggerToast(msg, level = 'primary') {
      this.toastMessage = msg
      this.toastLevel = level
      this.toast = true
      setTimeout(() => {
        this.toast = false
      }, 5000)
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
  },

  computed: {
    aboutAnimation() {
      return this.isMobile ? 'fade-right' : 'fade-up'
    },

    philosophyAnimation() {
      return this.isMobile ? 'fade-left' : 'fade-up'
    },

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

      this.animateText()

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

/* ============ HEADER ================= */

.header__main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 50;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.header__hidden {
  opacity: 0;
  transform: translateY(-60px);
}

.header__links {
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
}

.header__link {
  color: var(--primary-1);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
}

.header__link::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--primary-1);
  transition: all 0.3s ease;
  transform: scaleX(0);
  transform-origin: left;
}

.header__link:hover::before,
.header__link.active::before {
  transform: scaleX(1);
}

/* ============== DRAWER - MOBILE =============== */

.nav__drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-1);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  --time: 0.5s;
}
.nav__drawer .nav__links {
  width: 80vw;
  height: 80vh;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.nav__drawer .nav__links li {
  transition: all ease 0.5s;
  opacity: 0;
  transform: translateY(30px);
}

.nav__drawer .nav__links li.active {
  opacity: 1;
  transform: translateY(0);
}

.nav__drawer .nav__links .link {
  color: var(--secondary);
  text-decoration: none;
  font-size: 22px;
  font-family: museo_sans500;
}
.nav__drawer .close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
}
.nav__drawer::-webkit-scrollbar {
  display: none;
}

/* =========== TRANSITION - MOBILE - DRAWER ========== */

.drawer-enter-active,
.drawer-leave-active {
  transition: all ease var(--time);
}

.drawer-enter,
.drawer-leave-to {
  clip-path: circle(0% at calc(100% - 38px) 30px);
}

.drawer-enter-to,
.drawer-leave {
  clip-path: circle(150% at calc(100% - 38px) 30px);
}

/* ============== SLIDER =============== */

#slider {
  height: 100vh;
}
.v-carousel .v-window-item {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel__content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}

.carousel__content h4 {
  animation-name: h4-anim;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
}

.carousel__content h4 em {
  font-style: normal;
  border-bottom: 2px solid var(--secondary);
}

.carousel__content h4 span {
  color: var(--secondary);
  font-size: 26px;
}

.carousel__content h1 {
  font-size: clamp(22px, 5vw, 60px);
  line-height: clamp(28px, 5vw, 60px);
  animation-name: h1-anim;
  animation-delay: 1.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.carousel__content button {
  animation-name: button-anim;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes h1-anim {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes h4-anim {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes button-anim {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* =============== PSUEDU - NAV =========== */

.nav__psuedo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #320037c9;
  height: 13vh;
  z-index: 10;
}

.nav__psuedo .nav__brand {
  width: 13vh;
  height: 13vh;
}

.nav__psuedo .nav__brand img {
  width: 150%;
  height: 150%;
  margin-top: -10vh;
  object-fit: contain;
}

.nav__psuedo .nav__links {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  color: white;
  height: 100%;
  width: fit-content;
}

.nav__psuedo .nav__link {
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
}

@media screen and (min-width: 960px) {
  .nav__psuedo .nav__link:hover {
    color: var(--secondary);
  }
}

/* ============ TRANSITION - SLIDER ============= */

.slide-right-enter-active {
  transition: all ease-in-out 1s;
  animation-timing-function: ease-in-out;
}

.slide-right-leave-active {
  transition: all ease-in-out 1s;
  animation-timing-function: ease-in-out;
}

.slide-right-enter {
  /* opacity: 0; */
  /* transform: translateX(100%); */
  /* clip-path: circle(0% at 100% 0); */
  /* transform: translateX(-100%); */
  clip-path: inset(0 100% 0 0);
}

.slide-right-leave-to {
  /* opacity: 0; */
  /* transform: translateX(-100%); */
  /* clip-path: circle(0% at 0% 100%); */
  /* transform: translateX(100%); */
  clip-path: inset(0 0 0 100%);
}

.slide-right-enter-to {
  /* opacity: 1; */
  /* transform: translateX(0); */
  /* clip-path: circle(200% at 100% 0); */
  /* transform: translateX(0); */
  clip-path: inset(0 0 0 0);
}

.slide-right-leave {
  /* clip-path: circle(200% at 0% 100%); */
  /* transform: translateX(0); */
  clip-path: inset(0 0 0 0);
}

/* ========================= */

.slide-left-enter-active {
  transition: all ease-in-out 1s;
  animation-timing-function: ease-in-out;
}

.slide-left-leave-active {
  transition: all ease-in-out 1s;
  animation-timing-function: ease-in-out;
}

.slide-left-enter {
  /* opacity: 0; */
  /* transform: translateX(100%); */
  /* clip-path: circle(0% at 100% 0); */
  /* transform: translateX(-100%); */
  clip-path: inset(0 0 0 100%);
}

.slide-left-leave-to {
  /* opacity: 0; */
  /* transform: translateX(-100%); */
  /* clip-path: circle(0% at 0% 100%); */
  /* transform: translateX(100%); */
  clip-path: inset(0 100% 0 0);
}

.slide-left-enter-to {
  /* opacity: 1; */
  /* transform: translateX(0); */
  /* clip-path: circle(200% at 100% 0); */
  /* transform: translateX(0); */
  clip-path: inset(0 0 0 0);
}

.slide-left-leave {
  /* clip-path: circle(200% at 0% 100%); */
  /* transform: translateX(0); */
  clip-path: inset(0 0 0 0);
}

/* ============ TECHNOLAB =========== */

#technolab {
  padding: 150px 0;
}

.img__box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.img__box.left {
  justify-content: flex-start;
}

.img__box.right {
  justify-content: flex-end;
}

.img__inner {
  width: 400px;
  height: 500px;
  position: relative;
}

.img__inner img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
}

@media screen and (max-width: 600px) {
  #technolab {
    padding: 60px 0;
  }
}

/* ========== PHILOSOPHY ========= */

#philosophy {
  padding: 150px 0;
  background: url('../assets/img/about/Philo_BG.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

@media screen and (max-width: 600px) {
  #philosophy {
    padding: 60px 0;
  }
}

/* ========= SERVICES ========== */

#services {
  padding: 150px 0;
}

.card__service {
  width: 100%;
  /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.05); */
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  transition: all ease 0.1s;
}

.card__img {
  flex: 5;
  display: flex;
  align-items: center;
  transition: all ease 0.1s;
  justify-content: center;
}

.card__img img {
  width: 80px;
  height: 80px;
  transition: all ease 0.3s;
  object-fit: contain;
}

.card__content {
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 15px;
}
.card__title {
  color: var(--text);
  font-size: 22px;
}

@media screen and (min-width: 1904px) {
  .card__service {
    height: 500px;
  }
  .card__img {
    flex: 7;
  }
}

@media screen and (min-width: 960px) {
  .card__service:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  }
  .card__service:hover .card__img img {
    transform: translateY(-10px);
  }
}

@media screen and (max-width: 600px) {
  #services {
    padding: 60px 0;
  }
}

/* ========== PORTFOLIO ============ */

#portfolio {
  padding: 150px 0;
  background: rgb(250, 250, 255);
}

.portfolio__container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all var(--timing) var(--time);

  --time: 0.5s;
  --timing: ease;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--timing) var(--time);
}

.item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #320037da;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--timing) var(--time);
  opacity: 0;
}

.item .overlay .item__title {
  color: var(--secondary);
  font-family: museo_sans500;
  transition: all var(--timing) var(--time);
  overflow: hidden;
}

.item .overlay .item__title span {
  transition: all var(--timing) var(--time);
  transform: translateY(30px);
  display: block;
}

.item .overlay .line {
  position: absolute;
  top: 30px;
  left: 30px;
  width: calc(50% - 20px);
  height: calc(50% - 20px);
}

.item .overlay .line__bottom {
  top: auto;
  left: auto;
  right: 30px;
  bottom: 30px;
  transform: rotateZ(180deg);
}

.item .overlay .line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: white;
  transform: scale(0);
  transition: all var(--timing) var(--time);
  transform-origin: top;
}

.item .overlay .line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  transform: scale(0);
  transition: all var(--timing) var(--time);
  transform-origin: left;
}

@media screen and (min-width: 1904px) {
  .item {
    height: 500px;
  }
}

.item--1 {
  grid-column: span 1;
  grid-row: span 1;
}

.item--2 {
  grid-column: span 2;
  grid-row: span 1;
}

.item--3 {
  grid-column: span 1;
  grid-row: span 2;
  height: calc(600px + 1.5rem);
}

@media screen and (min-width: 1904px) {
  .item--3 {
    height: calc(1000px + 1.5rem);
  }
}

@media screen and (min-width: 960px) {
  .item:hover .overlay .item__title span {
    transform: translateY(0);
  }

  .item:hover .overlay .line::after,
  .item:hover .overlay .line::before {
    transform: scale(1);
  }

  .item:hover img {
    transform: scale(1.1);
  }

  .item:hover .overlay {
    opacity: 1;
  }
}

@media screen and (max-width: 960px) {
  .portfolio__container {
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .item:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .item .overlay {
    top: auto;
    height: 60px;
    opacity: 1;
    background: var(--primary-1);
  }
  .item .overlay .item__title span {
    transform: translateY(0);
  }
  .item {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 600px) {
  #portfolio {
    padding: 60px 0;
  }
  .portfolio__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .item--3 {
    height: 300px;
  }
}

/* ============ AR & VR ============== */

#vr {
  padding: 150px 0;
  background: url('../assets/img/work/VR_BG.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.heading__vr {
  color: white;
}
h1.heading__vr {
  max-width: 1000px;
}
h3.heading__vr {
  max-width: 600px;
}

.icons__vr {
  max-width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.icons__vr img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.icons__vr img:nth-child(3) {
  width: 60px;
  height: 60px;
}

@media screen and (max-width: 600px) {
  #vr {
    padding: 60px 0;
  }
  h1.heading__vr {
    font-size: 25px;
  }
  h3.heading__vr {
    font-size: 18px;
  }
  .icons__vr img {
    width: 70px;
    height: 70px;
  }
  .icons__vr img:nth-child(3) {
    height: 45px;
    width: 45px;
  }
}

/* ============ WHY CHOOSE US ================ */

#why-choose-us {
  padding: 150px 0;
}

.choose-card__container {
  width: var(--size);
  height: var(--size);
  background: var(--secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% 50% 50% 0;
  padding: 8px;

  --size: 250px;
}

.choose-card__content {
  background: white;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0;
}

.choose-card__container h3 {
  max-width: 200px;
  line-height: 1;
  align-items: flex-end;
  flex: 4;
  padding-bottom: 15px;
  font-family: museo_sans500 !important;
}

.choose-card__container p {
  max-width: 200px;
  line-height: clamp(18px, 2vw, 16px);
  align-items: flex-start;
  color: var(--text);
  flex: 8;
}

@media screen and (max-width: 600px) {
  #why-choose-us {
    padding: 60px 0;
  }
}

/* ============== CONTACT ============== */

#contact {
  min-height: calc(100vh - 60px);
}

/* ============ ANIMATION ================ */

#animation {
  height: 25vh;
  background: url('../assets/img/contact/QA_slide.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.anim-group {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.anim-group h2 {
  color: white;
  font-family: museo_sans700 !important;
  font-size: clamp(15px, 5vw, 30px);
  text-align: center;
  text-transform: none;
}

.anim-group h3 {
  color: var(--secondary);
  text-align: center;
  font-family: museo_sans300 !important;
  font-size: clamp(20px, 5vw, 40px);
}

/* =========== FOOTER ================== */

#footer {
  min-height: calc(75vh - 60px);
  background: var(--primary-1);
  width: 100%;
  padding-top: 30px;
  padding-bottom: 5vh;
}

#footer h2 {
  color: var(--secondary);
  font-family: museo_sans500 !important;
  font-size: clamp(23px, 5vw, 30px);
}

.form__contact fieldset {
  border: none;
  outline: none;
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.form__item {
  background: var(--primary-3);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0 20px;
  font-family: museo_sans500;
  transition: all ease 0.3s;
}

button.form__item {
  color: var(--secondary);
  font-family: museo_sans700;
  transition: all ease 0.3s;
  padding: 0;
}

button.form__item:focus {
  background: var(--secondary);
  color: var(--primary-1);
}

.form__item::placeholder {
  color: var(--primary-1);
  font-family: museo_sans700;
}

textarea.form__item {
  padding-top: 15px;
}

fieldset.fieldset__message,
textarea.form__item {
  min-height: 25vh;
  height: 25vh;
  max-height: 25vh;
  overflow: visible;
}

.form__item:focus,
.form__item:active {
  border: none;
  outline: none;
}

.form__item:focus::placeholder {
  color: var(--secondary);
}

button.form__item:active {
  background: var(--secondary);
  color: var(--primary-1);
}

input.form__item.disabled,
textarea.form__item.disabled {
  opacity: 0.6;
  color: white;
}

input.form__item:disabled,
textarea.form__item:disabled {
  opacity: 0.6;
  color: white;
}

button.form__item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media screen and (min-width: 960px) {
  button.form__item:hover {
    background: var(--secondary);
    color: var(--primary-1);
  }
  button.form__item.disabled:hover {
    background: var(--primary-3);
  }
}

.box__contacts {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.box__icon {
  flex: 4;
  display: flex;
  justify-content: center;
}
.box__icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.box__content {
  flex: 8;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.box__text {
  padding: 5px 0;
}

p.locations {
  font-size: 15px;
  color: rgb(169, 149, 202);
  font-family: museo_sans300 !important;
  text-transform: uppercase;
}

.align__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box__social {
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.box__social li {
  margin: 0 12px;
}

.box__social li a:active i {
  color: var(--secondary);
}

.box__social li i {
  color: var(--primary-3);
  font-size: 30px;
  transition: all ease 0.2s;
}

@media screen and (min-width: 960px) {
  .box__social li a:hover i {
    color: var(--secondary);
  }
}

/* =============== BOTTOM =============== */

#bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: rgb(169, 149, 202);
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
