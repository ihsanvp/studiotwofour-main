<template>
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
    <hero-section-navbar :links="links"></hero-section-navbar>
  </section>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
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
    }
  },
}
</script>

<style scoped>
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
  clip-path: inset(0 0 0 100%);
}

.slide-left-leave-to {
  clip-path: inset(0 100% 0 0);
}

.slide-left-enter-to {
  clip-path: inset(0 0 0 0);
}

.slide-left-leave {
  clip-path: inset(0 0 0 0);
}
</style>
