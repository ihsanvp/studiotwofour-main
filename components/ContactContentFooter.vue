<template>
  <footer class="rel flex-center" id="footer">
    <v-container class="full">
      <h2 class="mb-3">We want to hear from you!</h2>
      <v-row>
        <contact-form
          @contact:success="$emit('sendmail:success')"
          @contact:error="$emit('sendmail:error')"
        ></contact-form>
        <contact-details></contact-details>
      </v-row>
    </v-container>
    <div id="bottom">
      <span>© Studiotwofour | All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  min-height: calc(75vh - 60px);
  background: var(--primary-1);
  width: 100%;
  padding-top: 30px;
  padding-bottom: 5vh;
}

#footer h2 {
  color: var(--secondary);
  font-family: museo_sans500 !important;
  font-size: clamp(23px, 5vw, 30px);
}

#bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: rgb(169, 149, 202);
}
</style>
