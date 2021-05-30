<template>
  <teleport to="body">
    <div class="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-gray-400 bg-opacity-25" v-if="active">
      <div class="h-screen md:h-auto max-w-xs bg-white dark:bg-black shadow-lg md:rounded-lg p-8">
        <p class="text-gray-200 text-center text-2xl">Unfollow @{{ user.username }}?</p>
        <p class="text-gray-600 text-sm mt-4">Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected. </p>
        <div class="mt-4 flex justify-between">
          <base-button variant="dark" @click="cancel">Cancel</base-button>
          <base-button @click="unfollow">Unfollow</base-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UnfollowModal',
  data () {
    return {
      id: 'unfollow-modal'
    }
  },
  computed: {
    active () {
      return this.$store.getters['modals/active'] === this.id
    },
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    unfollow () {
      this.$store.dispatch('user/unfollow')

      this.cancel()
    },
    cancel () {
      this.$modal.close(this.id)
    }
  }
}
</script>
