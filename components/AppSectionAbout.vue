<template>
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
                Creative new
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
                Brand's growths are inter connected with powerful and resonant
                concepts. Our experts enable brands to capture the attention of
                online audience effectively, by mixing extraordinary thoughts
                and innovation. That results successful stories and infinite
                experiences.
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
    <!-- End Philosophy -->
  </section>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: [String, Boolean],
      required: true,
    },
  },
  computed: {
    aboutAnimation() {
      return this.isMobile ? 'fade-right' : 'fade-up'
    },

    philosophyAnimation() {
      return this.isMobile ? 'fade-left' : 'fade-up'
    },
  },
}
</script>

<style scoped>
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
</style>
