<template>
  <v-col cols="12" md="8">
    <form class="form__contact" @submit.prevent="sendMail">
      <v-row>
        <v-col cols="8" class="pr-1 pb-1">
          <fieldset :disabled="isSending">
            <input
              tabindex="1"
              type="text"
              class="form__item form__field"
              :class="{ disabled: isSending }"
              placeholder="Name"
              required
              v-model="name"
            />
          </fieldset>
        </v-col>
        <v-col cols="4" class="pl-1 pb-1">
          <button
            tabindex="4"
            class="form__item"
            :disabled="isSending"
            :class="{ disabled: isSending }"
          >
            <v-progress-circular
              :width="3"
              color="var(--secondary)"
              indeterminate
              v-if="isSending"
            ></v-progress-circular>
            <span v-else>Submit</span>
          </button>
        </v-col>
        <v-col cols="12" class="py-1">
          <fieldset class="form__fieldset" :disabled="isSending">
            <input
              tabindex="2"
              type="email"
              class="form__item form__field"
              :class="{ disabled: isSending }"
              placeholder="Email"
              required
              v-model="email"
            />
          </fieldset>
        </v-col>
        <v-col cols="12" class="pt-1">
          <fieldset
            class="form__fieldset fieldset__message"
            :disabled="isSending"
          >
            <textarea
              tabindex="3"
              cols="30"
              rows="10"
              class="form__item form__field"
              :class="{ disabled: isSending }"
              placeholder="Message"
              required
              v-model="message"
            ></textarea>
          </fieldset>
        </v-col>
      </v-row>
    </form>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,

      isSending: false,
    }
  },
  methods: {
    sendMail() {
      if (this.name && this.email && this.message) {
        this.isSending = true

        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        this.$axios
          .$post('https://studiotwofour-backend.herokuapp.com/', data)
          .then(() => {
            this.name = null
            this.email = null
            this.message = null

            this.$emit('contact:success')
          })
          .catch(() => this.$emit('contact:error'))
          .finally(() => (this.isSending = false))
      }
    },
  },
}
</script>
<style scoped>
.form__contact fieldset {
  border: none;
  outline: none;
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.form__item {
  background: var(--primary-3);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0 20px;
  font-family: museo_sans500;
  transition: all ease 0.3s;
}

button.form__item {
  color: var(--secondary);
  font-family: museo_sans700;
  transition: all ease 0.3s;
  padding: 0;
}

button.form__item:focus {
  background: var(--secondary);
  color: var(--primary-1);
}

.form__item::placeholder {
  color: var(--primary-1);
  font-family: museo_sans700;
}

textarea.form__item {
  padding-top: 15px;
}

fieldset.fieldset__message,
textarea.form__item {
  min-height: 25vh;
  height: 25vh;
  max-height: 25vh;
  overflow: visible;
}

.form__item:focus,
.form__item:active {
  border: none;
  outline: none;
}

.form__item:focus::placeholder {
  color: var(--secondary);
}

button.form__item:active {
  background: var(--secondary);
  color: var(--primary-1);
}

input.form__item.disabled,
textarea.form__item.disabled {
  opacity: 0.6;
  color: white;
}

input.form__item:disabled,
textarea.form__item:disabled {
  opacity: 0.6;
  color: white;
}

button.form__item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media screen and (min-width: 960px) {
  button.form__item:hover {
    background: var(--secondary);
    color: var(--primary-1);
  }
  button.form__item.disabled:hover {
    background: var(--primary-3);
  }
}
</style>
