<template>
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
        The reason why? Because we want to take your brand to the global. We
        help to improve your business through visible and recognizable concepts
        that bring ideas into life. The client's needs are important to us, thus
        we place your brand into the most potential audiences.
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
          <choose-card :card="card"></choose-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
}
</script>

<style scoped>
#why-choose-us {
  padding: 150px 0;
}
@media screen and (max-width: 600px) {
  #why-choose-us {
    padding: 60px 0;
  }
}
</style>
