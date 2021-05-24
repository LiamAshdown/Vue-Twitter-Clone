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
import TheTitle from '../components/TheTitle'
import UserBanner from '../components/partials/user/UserBanner'
import UserTabs from '../components/partials/user/UserTabs'
import UserHeader from '../components/partials/user/UserHeader'

export default {
  name: 'Profile',
  components: {
    TheTitle,
    UserBanner,
    UserTabs,
    UserHeader
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
