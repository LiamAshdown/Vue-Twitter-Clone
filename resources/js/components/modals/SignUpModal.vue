<template>
  <div class="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-gray-400 bg-opacity-25">
    <div class="w-full h-screen md:h-auto max-w-2xl bg-black shadow-lg md:rounded-lg p-4">
      <div class="relative">
        <img class="h-7 pr-5 relative inline-block left-2/4 transform -translate-x-2/4" src="img/logo_white.svg"/>
        <base-button class="absolute right-1" size="sm">Next</base-button>
      </div>
      <div class="px-4 md:px-8 mt-8">
        <p class="font-bold text-white text-2xl pb-6">Create your account</p>
        <base-input block maxlength="50"></base-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpModal'
}
</script>
