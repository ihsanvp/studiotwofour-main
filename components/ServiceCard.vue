<template>
  <div class="card__service">
    <div class="card__img">
      <img :src="service.icon" alt />
    </div>
    <div class="card__content">
      <h2 class="card__title text-center mb-5 font-500">
        {{ service.title }}
      </h2>
      <p class="text-center mb-0">{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card__service {
  width: 100%;
  /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.05); */
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  transition: all ease 0.1s;
}

.card__img {
  flex: 5;
  display: flex;
  align-items: center;
  transition: all ease 0.1s;
  justify-content: center;
}

.card__img img {
  width: 80px;
  height: 80px;
  transition: all ease 0.3s;
  object-fit: contain;
}

.card__content {
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 15px;
}
.card__title {
  color: var(--text);
  font-size: 22px;
}

@media screen and (min-width: 1904px) {
  .card__service {
    height: 500px;
  }
  .card__img {
    flex: 7;
  }
}

@media screen and (min-width: 960px) {
  .card__service:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  }
  .card__service:hover .card__img img {
    transform: translateY(-10px);
  }
}
</style>
