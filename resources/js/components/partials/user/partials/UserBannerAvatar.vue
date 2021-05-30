<template>
  <div>
    <template v-if="user">
      <img alt="Liam Ashdown" class="rounded-full h-20 lg:h-40 relative -mt-20 inline-block" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
      <template v-if="isAuthUser">
        <base-button class="float-right" size="md" outline @click="onAction">Set Up Profile</base-button>
      </template>
      <template v-else>
        <base-button class="float-right w-24" size="md" outline @click="follow" v-if="!user.following">Follow</base-button>
        <base-button
        class="float-right btn-follow-hover w-24" size="md"
        @mouseover="unfollowHover('hover')" @mouseleave="unfollowHover('leave')" @click="unfollow" v-show="user.following">{{ followingText }}</base-button>
      </template>
    </template>
    <template v-else>
      <div alt="Unknown" class="rounded-full h-20 w-40 lg:h-40 relative -mt-20 border-4 border-black bg-gray-900"></div>
    </template>

    <follow-sign-up-modal></follow-sign-up-modal>
    <sign-up-modal></sign-up-modal>
    <unfollow-modal></unfollow-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FollowSignUpModal from '../../../modals/FollowSignUpModal'
import SignUpModal from '../../../modals/SignUpModal'
import UnfollowModal from '../../../modals/UnfollowModal'

export default {
  name: 'UserBannerAvatar',
  components: {
    FollowSignUpModal,
    SignUpModal,
    UnfollowModal
  },
  data () {
    return {
      followingText: 'Following'
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      authUser: 'auth/user',
      authenticated: 'auth/isAuthenticated'
    }),
    isAuthUser () {
      return this.authenticated && this.user.id === this.authUser.id
    }
  },
  methods: {
    follow () {
      if (this.authenticated) {
        this.$store.dispatch('user/follow')
      } else {
        this.$modal.show('follow-sign-up-modal')
      }
    },
    unfollow () {
      this.$modal.show('unfollow-modal')
    },
    unfollowHover (type) {
      if (type === 'hover') {
        this.followingText = 'Unfollow'
      } else {
        this.followingText = 'Following'
      }
    }
  }
}
</script>
