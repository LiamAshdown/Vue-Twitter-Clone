<template>
  <teleport to="body">
    <div class="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-gray-400 bg-opacity-25" v-if="active">
      <div class="w-full h-screen md:h-auto max-w-2xl bg-white dark:bg-black shadow-lg md:rounded-lg p-4" @click="close">
        <div class="hover:bg-blue-400 hover:bg-opacity-10 rounded-full w-10 p-2 cursor-pointer">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-full fill-current text-blue-400"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
        </div>
        <div class="flex justify-center mt-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-12 fill-current text-blue-400"><g><path d="M23.152 3.483h-2.675V.81c0-.415-.336-.75-.75-.75s-.75.335-.75.75v2.674H16.3c-.413 0-.75.336-.75.75s.337.75.75.75h2.677V7.66c0 .413.336.75.75.75s.75-.337.75-.75V4.982h2.675c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.646-4.513S4.15 3.342 3.77 6.168c-.27 2.025-.007 3.462.807 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"></path></g></svg>
        </div>
        <div class="text-center mx-auto w-8/12 mt-10">
          <div>
            <p class="text-gray-300 font-bold text-2xl">Follow John Shahidi to see what<br/> they share on Twitter.</p>
            <p class="text-gray-600 text-sm mt-4">Sign up so you never miss their Tweets.</p>
          </div>
          <div class="mt-12 mb-12">
            <base-button block class="mb-4" :to="{ name: 'Login' }">Log in</base-button>
            <base-button outline block @click="signUp">Sign Up</base-button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'FollowSignUpModal',
  data () {
    return {
      id: 'follow-sign-up-modal'
    }
  },
  computed: {
    active () {
      return this.$store.getters['modals/active'] === this.id
    }
  },
  methods: {
    close () {
      this.$modal.close('follow-sign-up-modal')
    },
    signUp () {
      // Close modal
      this.$modal.close('follow-sign-up-modal')

      // Show sign up modal
      this.$modal.show('sign-up-modal')
    }
  }
}
</script>
