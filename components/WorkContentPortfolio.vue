<template>
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
        We collaborate with ambitious brands and spaces, love to feature them
        here.
      </h3>
      <div class="portfolio__container">
        <portfolio-card
          v-for="item in portfolioItems"
          :key="item.title"
          :item="item"
          @click:item="handlePortfolioCardClick"
        ></portfolio-card>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  methods: {
    handlePortfolioCardClick(item) {
      this.$emit('card:click', item)
    },
  },
}
</script>

<style scoped>
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

@media screen and (max-width: 960px) {
  .portfolio__container {
    grid-template-columns: 1fr 1fr;
    gap: 0;
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
}
</style>
