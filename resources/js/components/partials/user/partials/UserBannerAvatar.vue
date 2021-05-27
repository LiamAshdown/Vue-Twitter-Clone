<template>
  <div>
    <img alt="Liam Ashdown" class="rounded-full h-20 lg:h-40 relative -mt-20 inline-block" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
    <base-button class="float-right" size="md" outline>Set up profile</base-button>
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
    })
  }
}
</script>
