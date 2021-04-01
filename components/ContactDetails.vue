<template>
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
        <span class="box__text font-500">info@studiotwofour.com</span>
      </div>
    </div>
    <p class="locations text-center">INDIA | UAE | QATAR | KSA | MALAYSIA</p>
    <ul class="box__social mb-10">
      <li v-for="social in socialLinks" :key="social.icon">
        <a href @click.prevent>
          <i :class="social.icon"></i>
        </a>
      </li>
    </ul>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>

<style scoped>
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
</style>
