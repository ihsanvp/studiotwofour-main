<template>
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
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
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
</style>
