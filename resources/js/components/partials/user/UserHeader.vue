<template>
  <div class="flex items-center gap-4">
    <div class="text-blue-400 py-2 px-3 rounded-full hover:bg-blue-400 hover:bg-opacity-10 cursor-pointer" @click="home">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" /> </svg>
    </div>
    <div class="leading-5">
      <span class="block text-gray-200 text-lg">Liam Ashdown</span>
      <small class="text-gray-400 text-sm font-normal">Tweets 0</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>
