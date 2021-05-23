<template>
  <div>
    <the-title class="p-2">
      <template v-slot:header>
        <div class="flex items-center gap-4">
          <div class="text-blue-400 py-2 px-3 rounded-full hover:bg-blue-400 hover:bg-opacity-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" /> </svg>
          </div>
          <div class="leading-5">
            <span class="block text-gray-200 text-lg">Liam Ashdown</span>
            <small class="text-gray-400 text-sm font-normal">Tweets 0</small>
          </div>
        </div>
      </template>
    </the-title>
    <div>
      <div class="bg-gray-700 h-52"></div>
      <div class="p-3">
        <img alt="Liam Ashdown" class="rounded-full h-20 lg:h-40 relative -mt-20 inline-block" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
        <base-button class="float-right" size="md" outline>Set up profile</base-button>
        <div class="block text-left leading-3">
          <span class="text-gray-300 font-bold text-xl block">Liam Ashdown</span>
          <small class="text-gray-500">@LiamAshdown</small>
        </div>
        <div class="text-gray-500 mt-3">
          <div class="flex gap-2 items-center mb-3">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 text-gray-400 fill-current"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
            <span class="font-light">Joined since 1st March</span>
          </div>
          <p class="inline-block font-light mr-3"><span class="text-black dark:text-white">1</span> Following</p>
          <p class="inline-block font-light"><span class="text-black dark:text-white">1</span> Followers</p>
        </div>
      </div>
    </div>
    <div>
      <tweet-tabs>
        <tweet-tab title="Tweets"><profile-tweets></profile-tweets></tweet-tab>
        <tweet-tab title="Tweets & replies"><p class="text-white">ffdffff</p></tweet-tab>
        <tweet-tab title="Media"><p class="text-white">ffdffff</p></tweet-tab>
        <tweet-tab title="Likes"><p class="text-white">ffdffff</p></tweet-tab>
      </tweet-tabs>
    </div>
  </div>
</template>

<script>
import TheTitle from '../components/TheTitle'
import ProfileTweets from '../components/partials/profile/ProfileTweets'

export default {
  name: 'Profile',
  components: {
    TheTitle,
    ProfileTweets
  }
}
</script>
