<template>
  <transition name="drawer">
    <nav class="nav__drawer" v-if="active">
      <v-btn
        icon
        color="var(--secondary)"
        class="close-btn"
        @click="handleCloseClick"
      >
        <v-icon size="30">mdi-close</v-icon>
      </v-btn>
      <ul class="nav__links">
        <li
          v-for="link in links"
          :key="link.title"
          :class="{ active: link.mobileActive }"
        >
          <button class="link font-500" @click="handleNavigateClick(link)">
            {{ link.title }}
          </button>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleCloseClick: function () {
      this.$emit('drawer:close')
    },
    handleNavigateClick(link) {
      this.$emit('navigation:click', link)
    },
  },
}
</script>

<style scoped>
.nav__drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-1);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  --time: 0.5s;
}
.nav__drawer .nav__links {
  width: 80vw;
  height: 80vh;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.nav__drawer .nav__links li {
  transition: all ease 0.5s;
  opacity: 0;
  transform: translateY(30px);
}

.nav__drawer .nav__links li.active {
  opacity: 1;
  transform: translateY(0);
}

.nav__drawer .nav__links .link {
  color: var(--secondary);
  text-decoration: none;
  font-size: 22px;
  font-family: museo_sans500;
}
.nav__drawer .close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
}
.nav__drawer::-webkit-scrollbar {
  display: none;
}

/* =========== TRANSITION - MOBILE - DRAWER ========== */

.drawer-enter-active,
.drawer-leave-active {
  transition: all ease var(--time);
}

.drawer-enter,
.drawer-leave-to {
  clip-path: circle(0% at calc(100% - 38px) 30px);
}

.drawer-enter-to,
.drawer-leave {
  clip-path: circle(150% at calc(100% - 38px) 30px);
}
</style>
