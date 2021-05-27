<template>
  <div>
    <div class="bg-gray-700 h-32 md:h-52"></div>
    <div class="p-3">
      <img alt="Liam Ashdown" class="rounded-full h-20 lg:h-40 relative -mt-20 inline-block" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
      <base-button class="float-right" size="md" outline>Set up profile</base-button>
      <div class="block text-left leading-3">
        <template v-if="user">
          <span class="text-gray-300 font-bold text-xl block">Liam Ashdown</span>
          <small class="text-gray-500 text-lg">@{{ user.username }}</small>
        </template>
        <template v-else>
          <span class="text-gray-300 font-bold text-xl block">@{{ $route.params.username }}</span>
        </template>
      </div>
      <div class="text-gray-500 mt-3" v-if="user">
        <div class="flex gap-2 items-center mb-3">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 text-gray-400 fill-current"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
          <span class="font-light">Joined 1st March</span>
        </div>
        <p class="inline-block font-light mr-3"><span class="text-black dark:text-white">1</span> Following</p>
        <p class="inline-block font-light"><span class="text-black dark:text-white">1</span> Followers</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileBanner',
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  }
}
</script>
