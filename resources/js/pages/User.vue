<template>
  <div>
    <the-title class="p-2">
      <template v-slot:header>
        <user-header></user-header>
      </template>
    </the-title>
    <user-banner></user-banner>
    <user-tabs></user-tabs>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

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
  async setup () {
    const store = useStore()
    const route = useRoute()

    await store.dispatch('user/user', {
      username: route.params.username
    })

    const user = computed(() => store.getters['user/user'])

    // Simuate longer loading time
    await waitFor(1000)

    return {
      user
    }
  }
}
</script>
