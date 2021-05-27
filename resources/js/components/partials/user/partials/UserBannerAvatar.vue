<template>
  <div>
    <template v-if="user">
      <img alt="Liam Ashdown" class="rounded-full h-20 lg:h-40 relative -mt-20 inline-block" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
      <base-button class="float-right" size="md" outline>{{ isAuthUser ? 'Set up profile' : 'Follow' }}</base-button>
    </template>
    <template v-else>
      <div alt="Unknown" class="rounded-full h-20 w-40 lg:h-40 relative -mt-20 border-4 border-black bg-gray-900"></div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserBannerAvatar',
  computed: {
    ...mapGetters({
      user: 'user/user',
      authUser: 'auth/user'
    }),
    isAuthUser () {
      return this.user.id === this.authUser.id
    }
  }
}
</script>
