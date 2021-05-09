<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div class="bg-white col-span-6 h-72 md:h-screen bg-splash bg-cover bg-no-repeat bg-center relative flex justify-center items-center">
          <img class="h-52 lg:h-1/4 md:h-2/6 z-50" src="img/logo_white.svg"/>
        </div>
        <div class="bg-white dark:bg-black col-span-6 flex items-center">
          <div class="container mx-auto text-black dark:text-gray-300 py-10 px-10 md:py-28 md:px-10">
            <base-logo class="h-10"></base-logo>
            <div>
              <h1 class="font-bold text-5xl lg:text-7xl mt-10 md:mt-24">Happening now</h1>
              <h1 class="font-bold text-xl lg:text-3xl mt-12">Join Twitter today.</h1>
            </div>
            <div>
              <base-button class="mt-4 md:mt-10 w-full md:w-7/12 block" @click="show">Sign Up</base-button>
              <base-button class="mt-4 w-full md:w-7/12" :outline="true">Login</base-button>
            </div>
          </div>
        </div>
    </div>
    <sign-up-modal></sign-up-modal>
  </div>
</template>

<script>
import SignUpModal from '../components/modals/SignUpModal.vue'

export default {
  name: 'Home',
  components: {
    SignUpModal
  },
  methods: {
    show () {
      this.$modal.show('sign-up-modal')
    }
  }
}
</script>
