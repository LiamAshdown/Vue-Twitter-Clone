<template>
  <div class="h-full w-full flex justify-center dark:bg-black">
    <div class="w-full p-4 md:w-96 mt-8 md:p-0">
      <base-logo class="h-8 mb-8"></base-logo>
      <p class="text-black dark:text-gray-300 text-3xl font-bold mb-8">Log in to Twitter</p>
      <div class="w-full rounded-xl text-red-700 bg-red-100 p-4 mb-4" v-if="error">
          The username and password that you entered did not match our records. Please double-check and try again.
      </div>
      <form class="mb-8" @submit.prevent="handleSubmit">
        <base-input id="email" class="mb-4" autocomplete="on" autocorrect="off" placeholder="Email" v-model="form.email"></base-input>
        <base-input id="password" type="password" autocapitalize="none" autocomplete="on" autocorrect="off" placeholder="Password" v-model="form.password"></base-input>
        <base-button type="submit" class="mt-4" :disabled="isDisabled" block>Log In</base-button>
      </form>
      <div class="flex justify-evenly">
        <p class="text-blue-400 cursor-pointer hover:underline">Forgot Password?</p>
        <p class="text-blue-400 cursor-pointer hover:underline" @click="signUp">Sign up for Twitter</p>
      </div>
    </div>
    <sign-up-modal></sign-up-modal>
  </div>
</template>

<script>
import SignUpModal from '../components/modals/SignUpModal.vue'
export default {
  name: 'Login',
  components: {
    SignUpModal
  },
  data () {
    return {
      error: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isDisabled () {
      return !(this.form.email.trim() && this.form.password.trim())
    }
  },
  methods: {
    async handleSubmit () {
      try {
        await this.$store.dispatch('login', this.form)
        this.$router.push({ name: 'Home' })
      } catch {
        this.error = true
      }
    },
    signUp () {
      this.$modal.show('sign-up-modal')
    }
  }
}
</script>
