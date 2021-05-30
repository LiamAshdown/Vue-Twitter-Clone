<template>
  <div class="hidden h-auto w-full bg-blue-400 absolute bottom-0 left-0 md:block" v-if="!authenticated">
    <div class="container mx-auto flex p-4">
      <div class="lg:w-2/4 mx-auto">
        <div class="text-white">
          <p class="font-bold text-xl">Don’t miss what’s happening</p>
          <p class="font-light">People on Twitter are the first to know</p>
        </div>
      </div>
      <div>
        <base-button variant="white" class="mr-4" @click="signUp">Sign Up</base-button>
        <base-button variant="white" outline :to="{ name: 'Login' }">Log in</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheSignUpFooterBar',
  computed: {
    ...mapGetters({
      authenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    signUp () {
      this.$modal.show('sign-up-modal')
    }
  }
}
</script>
