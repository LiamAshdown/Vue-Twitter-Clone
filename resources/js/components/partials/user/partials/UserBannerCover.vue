<template>
  <div>
    <template v-if="user">
      <div class="bg-gray-700 h-32 md:h-52"></div>
    </template>
    <template v-else>
      <div class="bg-gray-800 h-32 md:h-52"></div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserBannerCover',
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  }
}
</script>
