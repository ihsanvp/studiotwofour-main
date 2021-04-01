<template>
  <section id="animation">
    <v-container class="rel full">
      <div class="anim-group">
        <h2 class="one-main">
          Got a cool idea or insight that you need help developing?
        </h2>
        <h3 class="one-sub">We'd love to hear from you.</h3>
      </div>

      <div class="anim-group">
        <h2 class="two-main">Looking for a creative team for branding?</h2>
        <h3 class="two-sub">We’re here to help you better.</h3>
      </div>

      <div class="anim-group">
        <h2 class="three-main">
          Thinking for a strategic partner for advertising?
        </h2>
        <h3 class="three-sub">We help to make your business success.</h3>
      </div>

      <div class="anim-group">
        <h2 class="four-main">
          Need a technologic partner to develope your digital requirments?
        </h2>
        <h3 class="four-sub">
          We will come up with our best digital solutions.
        </h3>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  methods: {
    animateText() {
      if (process.browser) {
        // anim-one vars
        var oneMainWrapper = document.querySelector('.one-main')
        oneMainWrapper.innerHTML = oneMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-one-main'>$&</span>"
        )
        var oneSubWrapper = document.querySelector('.one-sub')
        oneSubWrapper.innerHTML = oneSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-one-sub'>$&</span>"
        )

        // anim-two vars
        var twoMainWrapper = document.querySelector('.two-main')
        twoMainWrapper.innerHTML = twoMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-two-main'>$&</span>"
        )
        var twoSubWrapper = document.querySelector('.two-sub')
        twoSubWrapper.innerHTML = twoSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-two-sub'>$&</span>"
        )

        // anim-three vars
        var threeMainWrapper = document.querySelector('.three-main')
        threeMainWrapper.innerHTML = threeMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-three-main'>$&</span>"
        )
        var threeSubWrapper = document.querySelector('.three-sub')
        threeSubWrapper.innerHTML = threeSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-three-sub'>$&</span>"
        )

        // anim-four vars
        var fourMainWrapper = document.querySelector('.four-main')
        fourMainWrapper.innerHTML = fourMainWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-four-main'>$&</span>"
        )
        var fourSubWrapper = document.querySelector('.four-sub')
        fourSubWrapper.innerHTML = fourSubWrapper.textContent.replace(
          /\S/g,
          "<span class='letter-four-sub'>$&</span>"
        )

        anime
          .timeline({ loop: true })
          .add({
            targets: '.one-main .letter-one-main, .one-sub .letter-one-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.one-main .letter-one-main, .one-sub .letter-one-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets: '.two-main .letter-two-main, .two-sub .letter-two-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.two-main .letter-two-main, .two-sub .letter-two-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets:
              '.three-main .letter-three-main, .three-sub .letter-three-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets:
              '.three-main .letter-three-main, .three-sub .letter-three-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
          .add({
            targets: '.four-main .letter-four-main, .four-sub .letter-four-sub',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 20 * i,
          })
          .add({
            targets: '.four-main .letter-four-main, .four-sub .letter-four-sub',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 1100,
            delay: (el, i) => 10 + 20 * i,
          })
      }
    },
  },
  mounted() {
    if (process.browser) {
      this.animateText()
    }
  },
}
</script>

<style scoped>
#animation {
  height: 25vh;
  background: url('../assets/img/contact/QA_slide.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.anim-group {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.anim-group h2 {
  color: white;
  font-family: museo_sans700 !important;
  font-size: clamp(15px, 5vw, 30px);
  text-align: center;
  text-transform: none;
}

.anim-group h3 {
  color: var(--secondary);
  text-align: center;
  font-family: museo_sans300 !important;
  font-size: clamp(20px, 5vw, 40px);
}
</style>
