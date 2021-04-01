<template>
  <section id="work">
    <work-content-portfolio
      @card:click="handlePortfolioCardClick"
    ></work-content-portfolio>
    <work-content-vr></work-content-vr>
    <work-content-why-choose-us></work-content-why-choose-us>
  </section>
</template>

<script>
export default {
  methods: {
    handlePortfolioCardClick(item) {
      this.$emit('portfolio:card:click', item)
    },
  },
}
</script>
