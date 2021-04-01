<template>
  <header class="header__main" :class="{ header__hidden: !active }">
    <v-container class="nav__align full">
      <div class="header__brand">
        <button
          @click="
            $vuetify.goTo('#home-page', {
              duration: linkScrollDuration,
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
      <v-btn
        class="d-md-none"
        icon
        color="var(--primary-1)"
        @click="handleMenuClick"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    linkScrollDuration: {
      type: Number,
      default: 2000,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      header: false,
    }
  },
  methods: {
    handleMenuClick: function () {
      this.$emit('menu:click')
    },
  },
}
</script>

<style scoped>
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
</style>
