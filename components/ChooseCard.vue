<template>
  <div class="choose-card__container">
    <div class="choose-card__content">
      <h3 class="heading__main text-center text-uppercase flex-center">
        {{ card.title }}
      </h3>
      <p class="text-center flex-center mb-0">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.choose-card__container {
  width: var(--size);
  height: var(--size);
  background: var(--secondary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% 50% 50% 0;
  padding: 8px;

  --size: 250px;
}

.choose-card__content {
  background: white;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0;
}

.choose-card__container h3 {
  max-width: 200px;
  line-height: 1;
  align-items: flex-end;
  flex: 4;
  padding-bottom: 15px;
  font-family: museo_sans500 !important;
  font-size: clamp(18px, 3vw, 20px);
}

.choose-card__container p {
  font-size: clamp(16px, 2vw, 16px);
  max-width: 200px;
  line-height: clamp(18px, 2vw, 20px);
  align-items: flex-start;
  color: var(--text);
  flex: 8;
}
</style>
