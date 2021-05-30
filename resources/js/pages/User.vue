<template>
  <div class="flex justify-center items-center mt-20" v-if="loading">
    <loading-icon class="text-center" :loading="loading"></loading-icon>
  </div>
  <div v-else>
    <the-title class="p-2">
      <template v-slot:header>
        <user-header></user-header>
      </template>
    </the-title>
    <div class="overflow-y-auto max-h-header-bottom md:h-full">
      <user-banner></user-banner>
      <user-tabs></user-tabs>
    </div>
  </div>
</template>

<script>
// import { computed } from 'vue'
// import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'

import TheTitle from '../components/TheTitle'
import UserBanner from '../components/partials/user/UserBanner'
import UserTabs from '../components/partials/user/UserTabs'
import UserHeader from '../components/partials/user/UserHeader'

import { waitFor } from '../utils/utils'

export default {
  name: 'User',
  components: {
    TheTitle,
    UserBanner,
    UserTabs,
    UserHeader
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    async getUser () {
      await waitFor(1000)

      this.$store.dispatch('user/user', {
        username: this.$route.params.username
      }).then(() => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getUser()
  }
  // async setup () {
  //   const store = useStore()
  //   const route = useRoute()

  //   store.dispatch('user/user', {
  //     username: route.params.username
  //   })

  //   const user = computed(() => store.getters['user/user'])

  //   return {
  //     user
  //   }
  // }
}
</script>
