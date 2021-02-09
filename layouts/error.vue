<template>
  <v-app>
    <div class="error__container">
      <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <!-- <NuxtLink to="/" class="btn__main btn__primary btn__primary-alt">Home page</NuxtLink> -->
      <a class="btn__main btn__primary btn__primary-alt" href="/">Home page</a>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 44px;
  color: var(--primary-1);
  font-weight: 100;
  margin-bottom: 30px;
}
.error__container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
