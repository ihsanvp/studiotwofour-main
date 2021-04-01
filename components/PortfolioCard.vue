<template>
  <div
    class="item"
    :class="item.class"
    data-aos="fade-up"
    data-aos-duration="1000"
    :data-aos-delay="item.animationDelay"
    @click="handleClick(item)"
  >
    <img :src="item.image" alt />
    <div class="overlay">
      <div class="item__title">
        <span class="flex-center">
          {{ item.title }}
          <i class="fas fa-angle-double-right d-md-none"></i>
        </span>
      </div>
      <div class="line"></div>
      <div class="line line__bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(item) {
      this.$emit('click:item', item)
    },
  },
}
</script>

<style scoped>
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

@media screen and (min-width: 1904px) {
  .item--3 {
    height: calc(1000px + 1.5rem);
  }
}

@media screen and (min-width: 960px) {
  .item:hover .overlay .item__title span {
    transform: translateY(0);
  }

  .item:hover .overlay .line::after,
  .item:hover .overlay .line::before {
    transform: scale(1);
  }

  .item:hover img {
    transform: scale(1.1);
  }

  .item:hover .overlay {
    opacity: 1;
  }
}

@media screen and (max-width: 960px) {
  .item:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .item .overlay {
    top: auto;
    height: 60px;
    opacity: 1;
    background: var(--primary-1);
  }
  .item .overlay .item__title span {
    transform: translateY(0);
  }
  .item {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 600px) {
  .item--3 {
    height: 300px;
  }
}
</style>
