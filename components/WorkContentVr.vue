<template>
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
        everything before it comes in real life. An industry-trusted studio with
        the skills and experience you can afford.
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
</template>

<style scoped>
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
</style>
