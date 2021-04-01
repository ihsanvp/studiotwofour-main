<template>
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
        Our creative services are flexible to choose. Feel free to reach out to
        us to get the job done at the right time.
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
          <service-card :service="service"></service-card>
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
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
}
</script>

<style scoped>
#services {
  padding: 150px 0;
}
@media screen and (max-width: 600px) {
  #services {
    padding: 60px 0;
  }
}
</style>
