<template>
  <v-dialog v-model="open" width="1000">
    <div class="wrapper">
      <video id="teaser">
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div class="play" v-show="!start">
        <v-btn width="150" height="150" id="play" icon>
          <v-icon size="150" color="white">mdi-play</v-icon>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      start: false,
      videoSrc: require('~/assets/videos/teaser.mp4'),
      videoElem: null,
    }
  },
  mounted() {
    if (process.browser) {
      const self = this

      function initialiseTeaser() {
        setTimeout(() => {
          self.open = true

          setTimeout(() => {
            const video = document.querySelector('#teaser')
            self.videoElem = video

            document.querySelector('#play').addEventListener('click', () => {
              video.play()
              self.start = true
            })

            video.addEventListener('ended', function () {
              this.currentTime = 0
              this.play()
            })
          }, 500)
        }, 3000)
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiseTeaser)
      } else {
        initialiseTeaser()
      }
    }
  },

  watch: {
    open: function (val) {
      if (!val) {
        this.videoElem.pause()
        this.videoElem.currentTime = 0
        this.start = false
      }
    },
  },
}
</script>

<style scoped>
video {
  width: 100%;
  object-fit: cover;
}
.wrapper {
  position: relative;
}
.play {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
}
</style>
